import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/site'
import { getAllPosts, urlFor } from '@/lib/sanity'

// WordPress統合用のAPI
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const requestedLimit = Number(searchParams.get('limit') || 6)
    const limit = Number.isFinite(requestedLimit) ? Math.max(1, Math.min(100, Math.trunc(requestedLimit))) : 6
    const category = searchParams.get('category') || ''
    
    // すべての投稿を取得
    const allPosts = await getAllPosts()
    
    // カテゴリーフィルター
    let filteredPosts = allPosts
    if (category) {
      filteredPosts = allPosts.filter(post => 
        post.categories?.some(cat => 
          cat.slug.current === category || cat.title.toLowerCase().includes(category.toLowerCase())
        )
      )
    }
    
    // 制限数まで絞り込み
    const posts = filteredPosts.slice(0, limit)
    
    // WordPress用にデータを整形
    const formattedPosts = posts.map(post => ({
      id: post._id,
      title: post.title,
      slug: post.slug.current,
      excerpt: post.excerpt || '',
      content: post.body,
      author: post.author?.name || 'JUNYA ISHIHARA',
      publishedAt: post.publishedAt,
      mainImage: post.mainImage ? urlFor(post.mainImage).width(1200).url() : null,
      categories: post.categories?.map(cat => ({
        id: cat._id,
        name: cat.title,
        slug: cat.slug.current
      })) || [],
      tags: post.tags || [],
      url: `${siteConfig.url}/blog/${post.slug.current}`
    }))
    
    return NextResponse.json(formattedPosts, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'no-cache'
      }
    })
    
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }
    )
  }
}

// CORS対応
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}