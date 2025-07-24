import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPostBySlug, getRelatedPosts, getAllPostSlugs, urlFor } from '@/lib/sanity'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import CategoryBadge from '@/components/CategoryBadge'
import Breadcrumb from '@/components/Breadcrumb'
import TableOfContents from '@/components/TableOfContents'
import PortableText from '@/components/PortableText'
import ShareButtons from '@/components/ShareButtons'
import ViewsCounter from '@/components/ViewsCounter'
import BlogAnalytics from '@/components/BlogAnalytics'
import TagsList from '@/components/TagsList'
import RelatedPosts from '@/components/RelatedPosts'
import ArticleTags from '@/components/ArticleTags'
import StructuredData from '@/components/StructuredData'
import SEOAnalysis from '@/components/SEOAnalysis'

interface Props {
  params: { slug: string }
}

// メタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: '記事が見つかりません | JUNYA ISHIHARA PERSONAL TRAINING',
    }
  }

  const { title, excerpt, seo, mainImage } = post
  const metaTitle = seo?.metaTitle || title
  const metaDescription = seo?.metaDescription || excerpt || ''
  const ogImageUrl = seo?.ogImage 
    ? urlFor(seo.ogImage).width(1200).height(630).url()
    : mainImage 
    ? urlFor(mainImage).width(1200).height(630).url()
    : '/og-default.jpg'

  return {
    title: `${metaTitle} | JUNYA ISHIHARA PERSONAL TRAINING`,
    description: metaDescription,
    keywords: seo?.keywords || [],
    robots: seo?.noIndex ? 'noindex, nofollow' : 'index, follow',
    canonical: seo?.canonicalUrl,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      locale: 'ja_JP',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: mainImage?.alt || title,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: [post.author.name],
      tags: post.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: seo?.canonicalUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
    },
  }
}

// 静的パス生成
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

// 記事ヘッダー
const ArticleHeader = ({ post }: { post: any }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="mb-8">
      {/* カテゴリーバッジ */}
      {post.categories && post.categories.length > 0 && (
        <div className="mb-4">
          <CategoryBadge category={post.categories[0]} size="lg" />
        </div>
      )}

      {/* タイトル */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-junya-text mb-6 leading-tight">
        {post.title}
      </h1>

      {/* 記事情報 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center space-x-4">
          {/* 著者情報 */}
          <div className="flex items-center space-x-3">
            {post.author.image && (
              <div className="w-12 h-12 relative rounded-full overflow-hidden">
                <Image
                  src={urlFor(post.author.image).width(48).height(48).url()}
                  alt={post.author.image.alt || post.author.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            )}
            <div>
              <p className="font-semibold text-junya-text">{post.author.name}</p>
              <time className="text-sm text-junya-gray">{formattedDate}</time>
            </div>
          </div>
        </div>

        {/* タグ */}
        {post.tags && post.tags.length > 0 && (
          <TagsList tags={post.tags} variant="outlined" />
        )}
      </div>

      {/* 抜粋 */}
      {post.excerpt && (
        <p className="text-xl text-junya-gray leading-relaxed mb-8 font-light">
          {post.excerpt}
        </p>
      )}

      {/* アイキャッチ画像 */}
      {post.mainImage && (
        <div className="aspect-video relative rounded-junya-lg overflow-hidden shadow-junya-card mb-8">
          <Image
            src={urlFor(post.mainImage).width(1200).height(675).quality(90).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      )}
    </header>
  )
}

// 著者情報
const AuthorInfo = ({ author }: { author: any }) => (
  <div className="card p-6 mb-8">
    <h3 className="text-lg font-semibold text-junya-text mb-4">著者について</h3>
    <div className="flex flex-col sm:flex-row gap-4">
      {author.image && (
        <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={urlFor(author.image).width(64).height(64).url()}
            alt={author.image.alt || author.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
      )}
      <div className="flex-1">
        <h4 className="font-semibold text-junya-text mb-2">{author.name}</h4>
        {author.bio && (
          <p className="text-junya-gray text-sm leading-relaxed mb-3">
            {author.bio}
          </p>
        )}
        {author.qualification && author.qualification.length > 0 && (
          <div className="mb-3">
            <h5 className="text-sm font-semibold text-junya-text mb-2">保有資格・経歴</h5>
            <ul className="text-sm text-junya-gray space-y-1">
              {author.qualification.map((qual: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-junya-orange mr-2">•</span>
                  {qual}
                </li>
              ))}
            </ul>
          </div>
        )}
        {author.socialLinks && (
          <div className="flex space-x-3">
            {author.socialLinks.instagram && (
              <a
                href={author.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-junya-gray hover:text-junya-orange transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
            )}
            {author.socialLinks.website && (
              <a
                href={author.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-junya-gray hover:text-junya-orange transition-colors duration-300"
                aria-label="Website"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
)

// 関連記事セクション
const RelatedPosts = ({ posts }: { posts: any[] }) => {
  if (posts.length === 0) return null

  return (
    <section className="bg-junya-light py-12">
      <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-junya-text">
            関連記事
          </h2>
          <div className="w-20 h-1 bg-junya-orange rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <ArticleCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default async function BlogPostPage({ params }: Props) {
  try {
    const { slug } = await params
    const [post, relatedPosts] = await Promise.all([
      getPostBySlug(slug),
      getPostBySlug(slug).then(async (post) => {
        if (post) {
          return await getRelatedPosts(post._id)
        }
        return []
      }),
    ])

    if (!post) {
      notFound()
    }

    const breadcrumbItems = [
      { label: 'ブログ', href: '/blog' },
      ...(post.categories && post.categories.length > 0 
        ? [{ label: post.categories[0].title, href: `/blog/category/${post.categories[0].slug.current}` }]
        : []
      ),
      { label: post.title }
    ]

    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`

    return (
      <>
        <Header />
        
        {/* 構造化データ（SEO用） */}
        <StructuredData
          title={post.title}
          description={post.excerpt || ''}
          content={JSON.stringify(post.body)}
          author={post.author.name}
          publishedAt={post.publishedAt}
          imageUrl={post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined}
          tags={post.tags || []}
          slug={slug}
        />
        
        <main className="min-h-screen">
          {/* アクセス数カウンター（非表示） */}
          <ViewsCounter postId={post._id} />
          
          {/* Google Analytics トラッキング（非表示） */}
          {/* <BlogAnalytics 
            postTitle={post.title} 
            category={post.categories?.[0]?.title} 
          /> */}
          
          <article className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Breadcrumb items={breadcrumbItems} />
              <ArticleHeader post={post} />
              
              <div className="flex flex-col lg:flex-row gap-12">
                {/* メインコンテンツ */}
                <div className="flex-1">
                  <div className="prose prose-lg max-w-none">
                    <PortableText value={post.body} />
                  </div>

                  {/* シェアボタン */}
                  <div className="mt-12 pt-8 border-t border-junya-border">
                    <ShareButtons url={currentUrl} title={post.title} />
                  </div>

                  {/* 著者情報 */}
                  <AuthorInfo author={post.author} />

                  {/* 自動生成タグ */}
                  <ArticleTags 
                    content={post.body}
                    title={post.title}
                    existingTags={post.tags || []}
                    className="mt-8"
                  />

                  {/* SEO分析 */}
                  <SEOAnalysis
                    content={post.body}
                    title={post.title}
                    existingTags={post.tags || []}
                    className="mt-8"
                  />
                </div>

                {/* サイドバー */}
                <aside className="lg:w-80">
                  <TableOfContents />
                </aside>
              </div>
            </div>
          </article>

          {/* 関連記事 */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <RelatedPosts 
                posts={relatedPosts} 
                currentPostId={post._id}
              />
            </div>
          </section>

          {/* ナビゲーション */}
          <section className="bg-white py-8 border-t border-junya-border">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <Link 
                  href="/blog"
                  className="btn-secondary"
                >
                  ← ブログ一覧に戻る
                </Link>
                <Link 
                  href="/"
                  className="btn-primary"
                >
                  ホームページへ
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  } catch (error) {
    console.error('Error loading blog post:', error)
    notFound()
  }
}