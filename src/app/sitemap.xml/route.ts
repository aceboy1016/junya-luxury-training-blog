import { NextResponse } from 'next/server'
import { getAllPosts, getAllCategories } from '@/lib/sanity'
import { siteConfig } from '@/config/site'
const escapeXml = (value: string) => value.replace(/[<>&"']/g, (char) => ({'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;'}[char]!))
export async function GET() {
  const [posts, categories] = await Promise.all([getAllPosts(), getAllCategories()])
  const urls = [
    ...['', '/blog', '/privacy'].map((path) => ({url: `${siteConfig.url}${path}`, updated: ''})),
    ...posts.filter((post) => !post.seo?.noIndex && (!post.seo?.canonicalUrl || post.seo.canonicalUrl === `${siteConfig.url}/blog/${post.slug.current}`)).map((post) => ({url: `${siteConfig.url}/blog/${post.slug.current}`, updated: post._updatedAt || post.publishedAt})),
    ...categories.map((category) => ({url: `${siteConfig.url}/blog/category/${category.slug.current}`, updated: ''})),
  ]
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(({url, updated}) => `<url><loc>${escapeXml(url)}</loc>${updated && !Number.isNaN(Date.parse(updated)) ? `<lastmod>${new Date(updated).toISOString()}</lastmod>` : ''}</url>`).join('')}</urlset>`
  return new NextResponse(xml, {headers: {'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'no-cache'}})
}
export const revalidate = 60
