import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://junya-personal-training.com'
  
  const robots = `User-agent: *
Allow: /

# 主要なページ
Allow: /
Allow: /about
Allow: /service
Allow: /price
Allow: /contact
Allow: /blog
Allow: /blog/*

# 管理者ページは除外
Disallow: /admin/
Disallow: /api/

# 検索エンジン向け
Sitemap: ${baseUrl}/sitemap.xml

# クロール頻度の調整
Crawl-delay: 1

# 特定のボット向けの設定
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# SEO強化のための追加情報
# このサイトはフィットネス・パーソナルトレーニングに関する専門情報を提供します
# 主要コンテンツ: トレーニング方法、栄養指導、ダイエット、筋力トレーニング`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  })
}