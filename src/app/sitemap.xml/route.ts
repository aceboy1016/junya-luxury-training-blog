import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/sanity'

export async function GET() {
  try {
    const posts = await getAllPosts()
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://junya-personal-training.com'

    // 静的ページのURL
    const staticPages = [
      '',
      '/about',
      '/service', 
      '/price',
      '/contact',
      '/blog'
    ]

    // XMLサイトマップ生成
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : page === '/blog' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page === '/blog' ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
${posts.map(post => `  <url>
    <loc>${baseUrl}/blog/${post.slug.current}</loc>
    <lastmod>${new Date(post._updatedAt || post.publishedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <news:news>
      <news:publication>
        <news:name>JUNYA ISHIHARA PERSONAL TRAINING Blog</news:name>
        <news:language>ja</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.publishedAt).toISOString()}</news:publication_date>
      <news:title>${post.title}</news:title>
      <news:keywords>${(post.tags || []).join(', ')}</news:keywords>
    </news:news>
  </url>`).join('\n')}
</urlset>`

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
      }
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}