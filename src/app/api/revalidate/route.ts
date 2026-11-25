import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'

type Payload = { _type?: string; slug?: string | {current?: string}; previousSlug?: string }
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) return NextResponse.json({error: 'Webhook is not configured'}, {status: 503})
  try {
    const {body, isValidSignature} = await parseBody<Payload>(request, secret)
    if (!isValidSignature) return NextResponse.json({error: 'Invalid signature'}, {status: 401})
    if (!body || !['post', 'category', 'author'].includes(body._type || '')) return NextResponse.json({error: 'Invalid document type'}, {status: 400})
    revalidatePath('/blog')
    revalidatePath('/blog', 'layout')
    revalidatePath('/blog/[slug]', 'page')
    revalidatePath('/blog/category/[slug]', 'page')
    for (const slug of [typeof body.slug === 'string' ? body.slug : body.slug?.current, body.previousSlug]) {
      if (slug && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        if (body._type === 'post') revalidatePath(`/blog/${slug}`)
        if (body._type === 'category') revalidatePath(`/blog/category/${slug}`)
      }
    }
    revalidatePath('/sitemap.xml')
    revalidatePath('/api/posts')
    return NextResponse.json({revalidated: true})
  } catch {
    return NextResponse.json({error: 'Invalid webhook payload'}, {status: 400})
  }
}
