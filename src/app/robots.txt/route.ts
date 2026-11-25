import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site'
export async function GET() {
  return new NextResponse(`User-agent: *
Allow: /
Disallow: /studio
Disallow: /admin
Disallow: /api/

Sitemap: ${siteConfig.url}/sitemap.xml
`, {headers: {'Content-Type': 'text/plain; charset=utf-8'}})
}
