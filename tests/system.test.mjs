import test from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
import vm from 'node:vm'
import {createRequire} from 'node:module'
import {createHmac} from 'node:crypto'
import ts from 'typescript'
import {NextRequest, NextResponse} from 'next/server.js'
import {parseBody} from 'next-sanity/webhook'

const load = createRequire(import.meta.url)
function route(path, mocks = {}, env = {}) {
  const source = ts.transpileModule(readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'), {
    compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020},
  }).outputText
  const exports = {}
  vm.runInNewContext(source, {
    exports, require: (name) => mocks[name] || (name === 'server-only' ? {} : name === '@/lib/admin-auth' ? route('src/lib/admin-auth.ts', mocks, env) : name === 'next/server' ? {NextRequest, NextResponse} : load(name)),
    process: {env}, Buffer, Date, Map, console,
  })
  return exports
}
function request(path, body, headers = {}) {
  return new NextRequest(`http://localhost:3100${path}`, {method: 'POST', headers: {'content-type': 'application/json', ...headers}, body: JSON.stringify(body)})
}
function signed(body, secret = 'test-only') {
  const timestamp = Date.now()
  return `t=${timestamp},v1=${createHmac('sha256', secret).update(`${timestamp}.${JSON.stringify(body)}`).digest('base64url')}`
}

test('Webhook fails closed without a secret or a valid signature', async () => {
  const paths = []
  const mocks = {'next/cache': {revalidatePath: (...args) => paths.push(args)}, 'next-sanity/webhook': {parseBody: (req, secret) => parseBody(req, secret, false)}}
  const body = {_type: 'post', slug: 'new-slug'}
  assert.equal((await route('src/app/api/revalidate/route.ts', mocks).POST(request('/api/revalidate', body))).status, 503)
  const handler = route('src/app/api/revalidate/route.ts', mocks, {SANITY_REVALIDATE_SECRET: 'test-only'}).POST
  assert.equal((await handler(request('/api/revalidate', body))).status, 401)
  assert.equal((await handler(request('/api/revalidate', {...body, slug: 'tampered'}, {'sanity-webhook-signature': signed(body)}))).status, 401)
  assert.equal(paths.length, 0)
})

test('Webhook handles publish, rename, deletion and author dependencies', async () => {
  const paths = []
  const handler = route('src/app/api/revalidate/route.ts', {
    'next/cache': {revalidatePath: (...args) => paths.push(args)},
    'next-sanity/webhook': {parseBody: (req, secret) => parseBody(req, secret, false)},
  }, {SANITY_REVALIDATE_SECRET: 'test-only'}).POST
  for (const body of [
    {_type: 'post', slug: 'new-slug', previousSlug: 'old-slug'},
    {_type: 'category', slug: 'training'},
    {_type: 'post', previousSlug: 'deleted-post'},
    {_type: 'author'},
  ]) assert.equal((await handler(request('/api/revalidate', body, {'sanity-webhook-signature': signed(body)}))).status, 200)
  for (const expected of ['/blog/new-slug', '/blog/old-slug', '/blog/deleted-post', '/blog/category/training', '/blog/[slug]', '/blog/category/[slug]', '/sitemap.xml']) assert.ok(paths.some(([path]) => path === expected))
  const bad = {_type: 'unrelated'}
  assert.equal((await handler(request('/api/revalidate', bad, {'sanity-webhook-signature': signed(bad)}))).status, 400)
})

test('View counting validates publication, ignores bots and suppresses duplicates', async () => {
  let writes = 0
  let fetches = 0
  let published = true
  const patch = {ifRevisionId() {return this}, setIfMissing() {return this}, inc() {return this}, async commit() {writes++}}
  const client = {async fetch(query) {fetches++; assert.match(query, /isPublished == true/); return published ? {_id: 'post-1', _rev: 'rev'} : null}, patch: () => patch}
  const handler = route('src/app/api/increment-views/route.ts', {'@/lib/sanity.server': {getWriteClient: () => client}}).POST
  assert.equal((await handler(request('/api/increment-views', {postId: 'drafts.post-1'}))).status, 400)
  await handler(request('/api/increment-views', {postId: 'post-1'}, {'user-agent': 'Googlebot'}))
  assert.equal(fetches, 0)
  assert.equal((await handler(request('/api/increment-views', {postId: 'post-1'}, {'origin': 'https://other.example'}))).status, 403)
  published = false
  assert.equal((await handler(request('/api/increment-views', {postId: 'post-1'}))).status, 404)
  published = true
  const first = await handler(request('/api/increment-views', {postId: 'post-1'}, {'x-forwarded-for': '192.0.2.1'}))
  assert.equal(first.status, 200)
  assert.match(first.headers.get('set-cookie'), /HttpOnly/i)
  await handler(request('/api/increment-views', {postId: 'post-1'}, {'x-forwarded-for': '192.0.2.1'}))
  await handler(request('/api/increment-views', {postId: 'post-1'}, {cookie: first.headers.get('set-cookie').split(';')[0], 'x-forwarded-for': '192.0.2.2'}))
  assert.equal(writes, 1)
})

test('View counting is optional and write failures are not reported as counted', async () => {
  const disabled = route('src/app/api/increment-views/route.ts', {'@/lib/sanity.server': {getWriteClient: () => null}}).POST
  assert.deepEqual(await (await disabled(request('/api/increment-views', {postId: 'post-1'}))).json(), {success: true, counted: false})
  const failing = route('src/app/api/increment-views/route.ts', {'@/lib/sanity.server': {getWriteClient: () => ({async fetch() {throw Error('unavailable')}})}}).POST
  assert.equal((await failing(request('/api/increment-views', {postId: 'post-1'}))).status, 503)
})

test('Admin tools fail closed and authenticate with Basic credentials', () => {
  const req = (authorization) => new NextRequest('https://example.com/admin/tag-generator', {headers: authorization ? {authorization} : {}})
  assert.equal(route('src/proxy.ts').proxy(req()).status, 503)
  const {proxy} = route('src/proxy.ts', {}, {ADMIN_USERNAME: 'editor', ADMIN_PASSWORD: 'test-password'})
  assert.equal(proxy(req()).status, 401)
  const good = proxy(req(`Basic ${Buffer.from('editor:test-password').toString('base64')}`))
  assert.equal(good.status, 200)
  assert.equal(good.headers.get('x-robots-tag'), 'noindex, nofollow')
})
