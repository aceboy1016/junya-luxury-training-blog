import test from 'node:test'
import assert from 'node:assert/strict'
import {createRequire} from 'node:module'
import {mkdtemp, writeFile, rm} from 'node:fs/promises'
import {tmpdir} from 'node:os'
import path from 'node:path'

const load = createRequire(import.meta.url)
const fromPackage = (name) => createRequire(load.resolve(name))

test('patched oclif minimatch keeps scoped plugin discovery compatible', () => {
  const {minimatch} = fromPackage('@oclif/core')('minimatch')
  const dependencies = ['@sanity/plugin-a', '@sanity/plugin-b', 'other-package']
  assert.deepEqual(dependencies.filter((name) => minimatch(name, '@sanity/*')), dependencies.slice(0, 2))
})

test('patched glob keeps the Sucrase async file collection contract', async () => {
  const {glob} = fromPackage('sucrase')('glob')
  const directory = await mkdtemp(path.join(tmpdir(), 'junya-glob-'))
  try {
    await writeFile(path.join(directory, 'example.ts'), 'export const value: number = 1')
    await writeFile(path.join(directory, 'ignored.txt'), '')
    assert.deepEqual(await glob(path.join(directory, '*.ts')), [path.join(directory, 'example.ts')])
  } finally {
    await rm(directory, {recursive: true, force: true})
  }
})

test('patched framework parsers retain YAML safeLoad and TOML parsing', () => {
  const frameworkLoad = fromPackage('@vercel/frameworks')
  assert.deepEqual(frameworkLoad('js-yaml').safeLoad('build:\n  command: npm run build'), {build: {command: 'npm run build'}})
  const parsed = frameworkLoad('smol-toml').parse('[build]\ncommand = "npm run build"')
  assert.equal(parsed.build.command, 'npm run build')
  assert.deepEqual(Object.keys(parsed), ['build'])
  assert.equal(Object.getPrototypeOf(parsed), null)
})

test('patched typography selector parser preserves nested prose selectors', () => {
  const selectorParser = fromPackage('@tailwindcss/typography')('postcss-selector-parser')
  const selector = '.prose :where(h2):not(:where([class~="not-prose"] *))'
  assert.equal(selectorParser().processSync(selector), selector)
})


test('Tailwind 3 compatibility drops only inert @theme inline blocks', async () => {
  const postcss = load('postcss')
  const plugin = load('../scripts/postcss-tailwind3-compat.cjs')
  const active = ':root {--background: white} .card {color: var(--background)} @media (width > 10px) {.card {display: block}}'
  const css = '@theme inline {--color-background: var(--background)} ' + active
  assert.equal((await postcss([plugin]).process(css, {from: undefined})).css.trim(), active)
})
