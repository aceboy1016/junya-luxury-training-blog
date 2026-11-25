import { siteConfig } from '@/config/site'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPostBySlug, getRelatedPosts, getAllPostSlugs, urlFor } from '@/lib/sanity'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CategoryBadge from '@/components/CategoryBadge'
import Breadcrumb from '@/components/Breadcrumb'
import TableOfContents from '@/components/TableOfContents'
import PortableText from '@/components/PortableText'
import ShareButtons from '@/components/ShareButtons'
import ViewsCounter from '@/components/ViewsCounter'
import TagsList from '@/components/TagsList'
import RelatedPosts from '@/components/RelatedPosts'
import StructuredData from '@/components/StructuredData'
import MotionProvider from '@/components/motion/MotionProvider'
import { BookingCTA, formatDate, readingMinutes } from '@/components/blog/ui'

interface Props {
  params: Promise<{ slug: string }>
}

// メタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: '記事が見つかりません',
      robots: {index: false, follow: false, googleBot: {index: false, follow: false}},
      alternates: {canonical: null},
    }
  }

  const { title, excerpt, seo, mainImage } = post
  const metaTitle = seo?.metaTitle || title
  const metaDescription = seo?.metaDescription || excerpt || ''
  const ogImageUrl = seo?.ogImage 
    ? urlFor(seo.ogImage).width(1200).height(630).url()
    : mainImage 
    ? urlFor(mainImage).width(1200).height(630).url()
    : '/junya-portrait.jpg'

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seo?.keywords || [],
    robots: seo?.noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      locale: 'ja_JP',
      url: `${siteConfig.url}/blog/${slug}`,
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
      canonical: seo?.canonicalUrl || `${siteConfig.url}/blog/${slug}`,
    },
  }
}

// 静的パス生成
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

// 記事ヘッダー：淡い空色の面に、タイトルと記事情報
const ArticleHeader = ({ post, breadcrumb }: { post: any; breadcrumb: { label: string; href?: string }[] }) => (
  <header className="relative bg-breeze-50 overflow-hidden px-5 md:px-10 pt-28 md:pt-36 pb-14 md:pb-20">
    <div className="hero-glow" aria-hidden />
    <div className="relative max-w-5xl">
      <Breadcrumb items={breadcrumb} />
      <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-x-5 gap-y-3">
        {post.categories?.[0] && <CategoryBadge category={post.categories[0]} size="md" />}
        <span className="font-outfit text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-500 tabular-nums">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span className="mx-3 text-zinc-300" aria-hidden>/</span>
          {readingMinutes(post.body)} min read
        </span>
      </div>
      <h1 data-split className="mt-8 font-bold tracking-[-0.02em] leading-[1.4] text-[clamp(1.9rem,4.4vw,3.6rem)] text-deep">
        {post.title}
      </h1>
      {post.excerpt && (
        <p data-reveal className="mt-8 max-w-3xl text-base md:text-lg leading-[1.9] text-zinc-600">
          {post.excerpt}
        </p>
      )}
      <div data-reveal className="mt-10 flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-b from-white to-breeze-200 ring-1 ring-breeze-200">
          <Image
            src={post.author?.image ? urlFor(post.author.image).width(96).height(96).url() : '/junya-portrait-cut.webp'}
            alt={post.author?.image?.alt || post.author?.name || '石原淳哉'}
            fill
            sizes="48px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <p className="text-sm font-bold text-deep">{post.author?.name}</p>
          <p className="font-outfit text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400">Personal Trainer</p>
        </div>
      </div>
    </div>
  </header>
)

// 著者紹介：ホームのプロフィールと同じアーチ型の写真
const AuthorInfo = ({ author }: { author: any }) => (
  <aside className="mt-20 rounded-md bg-breeze-50 p-7 md:p-10 grid grid-cols-[5.5rem_1fr] md:grid-cols-[7rem_1fr] gap-6 md:gap-8 items-start">
    <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-gradient-to-b from-white to-breeze-200">
      <Image
        src={author?.image ? urlFor(author.image).width(240).height(320).url() : '/junya-portrait-cut.webp'}
        alt={author?.image?.alt || author?.name || '石原淳哉'}
        fill
        sizes="112px"
        className="object-cover object-top"
      />
    </div>
    <div>
      <p className="font-outfit text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-500">Written by</p>
      <p className="mt-2 text-xl font-bold text-deep">{author?.name}</p>
      {author?.bio && <p className="mt-3 text-sm leading-[1.9] text-zinc-600">{author.bio}</p>}
      {author?.qualification?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {author.qualification.map((q: string) => (
            <li key={q} className="inline-flex items-center px-3 py-1 rounded bg-white text-[12px] leading-relaxed text-deep/80">{q}</li>
          ))}
        </ul>
      )}
      <Link href="/#profile" className="mt-5 inline-flex items-center gap-2 font-outfit text-[11px] font-semibold tracking-[0.2em] uppercase text-breeze-600 link-underline">
        Profile →
      </Link>
    </div>
  </aside>
)

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
      { label: 'Journal', href: '/blog' },
      ...(post.categories && post.categories.length > 0
        ? [{ label: post.categories[0].title, href: `/blog/category/${post.categories[0].slug.current}` }]
        : []),
      { label: post.title },
    ]

    const currentUrl = `${siteConfig.url}/blog/${slug}`

    return (
      <>
        <Header />

        {/* 構造化データ（SEO用） */}
        <StructuredData
          title={post.title}
          description={post.excerpt || ''}
          author={post.author.name}
          publishedAt={post.publishedAt}
          modifiedAt={post._updatedAt}
          canonicalUrl={post.seo?.canonicalUrl}
          imageUrl={post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined}
          tags={post.tags || []}
          slug={slug}
        />

        <main className="bg-white text-deep">
          {/* アクセス数カウンター（非表示） */}
          <ViewsCounter postId={post._id} />

          <article>
            <ArticleHeader post={post} breadcrumb={breadcrumbItems} />

            {post.mainImage?.asset && (
              <div className="px-5 md:px-10 -mt-px bg-[linear-gradient(to_bottom,#F5F9FC_50%,#fff_50%)]">
                <div data-clip className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-md bg-breeze-100">
                  <Image
                    src={urlFor(post.mainImage).width(2000).height(860).quality(85).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            <div className="px-5 md:px-10 pt-14 md:pt-24 pb-24 grid grid-cols-12 gap-x-6">
              <div className="col-span-12 lg:col-span-3">
                <div className="lg:sticky lg:top-28 mb-12 lg:mb-0">
                  <TableOfContents />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7 lg:col-start-5 max-w-[46rem]">
                <div data-article-body>
                  <PortableText value={post.body} />
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="mt-14">
                    <TagsList tags={post.tags} />
                  </div>
                )}

                <div className="mt-10 pt-10 border-t border-deep/10">
                  <ShareButtons url={currentUrl} title={post.title} />
                </div>

                <AuthorInfo author={post.author} />
              </div>
            </div>
          </article>

          <div className="border-t border-deep/10">
            <RelatedPosts posts={relatedPosts} currentPostId={post._id} />
          </div>

          <BookingCTA />
        </main>
        <Footer />
        <MotionProvider />
      </>
    )
  } catch (error) {
    if ((error as any)?.digest?.startsWith?.('NEXT_')) throw error
    console.error('Error loading blog post:', error)
    notFound()
  }
}
// Sanityの更新を60秒ごとに反映
export const revalidate = 60
