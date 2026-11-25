import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'node:crypto'
import { getWriteClient } from '@/lib/sanity.server'

// Best-effort, per-instance IP guard. The browser cookie survives instance changes.
const recentViews = new Map<string, number>()
const windowMs = 30 * 60 * 1000
export async function POST(request: NextRequest) {
  const headers = { 'Cache-Control': 'no-store' }
  const skipped = () => NextResponse.json({success: true, counted: false}, {headers})
  if (/bot|crawler|spider|preview|slurp|headless/i.test(request.headers.get('user-agent') || '')) return skipped()
  if (request.headers.get('sec-fetch-site') === 'cross-site') return NextResponse.json({error: 'Forbidden'}, {status: 403, headers})
  const origin = request.headers.get('origin')
  if (origin && origin !== request.nextUrl.origin) return NextResponse.json({error: 'Forbidden'}, {status: 403, headers})
  let postId: unknown
  try { ({postId} = await request.json()) } catch { return NextResponse.json({error: 'Invalid JSON'}, {status: 400, headers}) }
  if (typeof postId !== 'string' || !/^[a-zA-Z0-9_-]{1,128}$/.test(postId)) return NextResponse.json({error: 'Invalid post ID'}, {status: 400, headers})
  const client = getWriteClient()
  if (!client) return skipped()
  const cookieName = `view-${createHash('sha256').update(postId).digest('hex').slice(0, 24)}`
  if (request.cookies.has(cookieName)) return skipped()
  const ip = request.headers.get('x-vercel-forwarded-for') || request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  const key = createHash('sha256').update(`${ip}:${postId}`).digest('hex')
  const now = Date.now()
  for (const [entry, expiry] of recentViews) if (expiry <= now) recentViews.delete(entry)
  if (recentViews.has(key)) return skipped()
  if (recentViews.size >= 10000) return NextResponse.json({error: 'Try again later'}, {status: 429, headers})
  recentViews.set(key, now + windowMs)
  try {
    const post = await client.fetch<{_id: string; _rev: string} | null>(
      '*[_type == "post" && _id == $postId && isPublished == true && !(_id in path("drafts.**"))][0]{_id, _rev}', {postId})
    if (!post) { recentViews.delete(key); return NextResponse.json({error: 'Post not found'}, {status: 404, headers}) }
    await client.patch(post._id).ifRevisionId(post._rev).setIfMissing({views: 0}).inc({views: 1}).commit()
    const response = NextResponse.json({success: true, counted: true}, {headers})
    response.cookies.set(cookieName, '1', {httpOnly: true, sameSite: 'lax', secure: request.nextUrl.protocol === 'https:', maxAge: windowMs / 1000, path: '/api/increment-views'})
    return response
  } catch {
    recentViews.delete(key)
    return NextResponse.json({error: 'Unable to count view'}, {status: 503, headers})
  }
}
