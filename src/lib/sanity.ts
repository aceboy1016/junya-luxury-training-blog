import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// 型定義
export interface Post {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  mainImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  body: any[]
  categories?: Category[]
  tags?: string[]
  author: Author
  publishedAt: string
  isPublished: boolean
  isFeatured?: boolean
  views?: number
  seo?: SEOSettings
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  color: string
  order?: number
  isActive: boolean
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  bio?: string
  qualification?: string[]
  socialLinks?: {
    instagram?: string
    twitter?: string
    facebook?: string
    youtube?: string
    website?: string
  }
  isActive: boolean
}

export interface SEOSettings {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  ogImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  noIndex?: boolean
  canonicalUrl?: string
}

// GROQ クエリ
export const queries = {
  // 公開済み記事一覧（ページネーション対応）
  allPosts: `*[_type == "post" && isPublished == true] | order(publishedAt desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset,
      alt
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    tags,
    author-> {
      _id,
      name,
      slug,
      image {
        asset,
        alt
      }
    },
    publishedAt,
    isFeatured,
    views
  }`,

  // 注目記事
  featuredPosts: `*[_type == "post" && isPublished == true && isFeatured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset,
      alt
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    author-> {
      _id,
      name,
      slug
    },
    publishedAt
  }`,

  // 最新記事
  latestPosts: `*[_type == "post" && isPublished == true] | order(publishedAt desc) [0...5] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset,
      alt
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    publishedAt
  }`,

  // 単一記事詳細
  postBySlug: `*[_type == "post" && slug.current == $slug && isPublished == true][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset,
      alt
    },
    body,
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    tags,
    author-> {
      _id,
      name,
      slug,
      image {
        asset,
        alt
      },
      bio,
      qualification,
      socialLinks
    },
    publishedAt,
    seo {
      metaTitle,
      metaDescription,
      keywords,
      ogImage {
        asset,
        alt
      },
      noIndex,
      canonicalUrl
    }
  }`,

  // カテゴリー別記事
  postsByCategory: `*[_type == "post" && isPublished == true && $categoryId in categories[]._ref] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset,
      alt
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    author-> {
      _id,
      name,
      slug
    },
    publishedAt
  }`,

  // 関連記事（同じカテゴリー）
  relatedPosts: `*[_type == "post" && isPublished == true && _id != $currentPostId && count(categories[]._ref[@ in *[_type == "post" && _id == $currentPostId][0].categories[]._ref]) > 0] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset,
      alt
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    publishedAt
  }`,

  // 全カテゴリー
  allCategories: `*[_type == "category" && isActive == true] | order(order asc, title asc) {
    _id,
    title,
    slug,
    description,
    color,
    order
  }`,

  // カテゴリー詳細
  categoryBySlug: `*[_type == "category" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
    description,
    color
  }`,

  // 検索（タイトル、抜粋、本文、タグから検索）
  searchPosts: `*[_type == "post" && isPublished == true && (
    title match $searchTerm + "*" || 
    excerpt match $searchTerm + "*" || 
    pt::text(body) match $searchTerm + "*" ||
    $searchTerm in tags ||
    categories[]->title match $searchTerm + "*"
  )] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset,
      alt
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    tags,
    publishedAt,
    views
  }`,

  // 全著者
  allAuthors: `*[_type == "author" && isActive == true] {
    _id,
    name,
    slug,
    image {
      asset,
      alt
    },
    bio
  }`,

  // 人気記事（アクセス数順）
  popularPosts: `*[_type == "post" && isPublished == true] | order(views desc) [0...5] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset,
      alt
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    author-> {
      _id,
      name,
      slug
    },
    publishedAt,
    views
  }`,

  // アクセス数ランキング（トップ10）
  viewsRanking: `*[_type == "post" && isPublished == true && views > 0] | order(views desc) [0...10] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset,
      alt
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    },
    author-> {
      _id,
      name,
      slug
    },
    publishedAt,
    views
  }`,

  // スラッグ一覧（静的生成用）
  allPostSlugs: `*[_type == "post" && isPublished == true].slug.current`,
  allCategorySlugs: `*[_type == "category" && isActive == true].slug.current`,
}

// APIヘルパー関数
export async function getAllPosts(): Promise<Post[]> {
  return await client.fetch(queries.allPosts)
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return await client.fetch(queries.featuredPosts)
}

export async function getLatestPosts(): Promise<Post[]> {
  return await client.fetch(queries.latestPosts)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return await client.fetch(queries.postBySlug, { slug })
}

export async function getPostsByCategory(categoryId: string): Promise<Post[]> {
  return await client.fetch(queries.postsByCategory, { categoryId })
}

export async function getRelatedPosts(currentPostId: string): Promise<Post[]> {
  return await client.fetch(queries.relatedPosts, { currentPostId })
}

export async function getAllCategories(): Promise<Category[]> {
  return await client.fetch(queries.allCategories)
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return await client.fetch(queries.categoryBySlug, { slug })
}

export async function searchPosts(searchTerm: string): Promise<Post[]> {
  return await client.fetch(queries.searchPosts, { searchTerm })
}

export async function getAllAuthors(): Promise<Author[]> {
  return await client.fetch(queries.allAuthors)
}

export async function getAllPostSlugs(): Promise<string[]> {
  return await client.fetch(queries.allPostSlugs)
}

export async function getAllCategorySlugs(): Promise<string[]> {
  return await client.fetch(queries.allCategorySlugs)
}

// 人気記事取得
export async function getPopularPosts(): Promise<Post[]> {
  return await client.fetch(queries.popularPosts)
}

// アクセス数ランキング取得
export async function getViewsRanking(): Promise<Post[]> {
  return await client.fetch(queries.viewsRanking)
}

// アクセス数を増加させる関数
export async function incrementPostViews(postId: string): Promise<void> {
  try {
    await client
      .patch(postId)
      .inc({ views: 1 })
      .commit()
  } catch (error) {
    console.error('Failed to increment post views:', error)
  }
}