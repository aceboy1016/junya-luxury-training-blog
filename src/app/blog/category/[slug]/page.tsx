import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getPostsByCategory, getAllCategorySlugs, getAllCategories } from '@/lib/sanity'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import SearchForm from '@/components/SearchForm'
import MotionProvider from '@/components/motion/MotionProvider'
import { BookingCTA, CategoryPills, EmptyState, JournalHero } from '@/components/blog/ui'

interface Props {
  params: Promise<{ slug: string }>
}

// メタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)
  
  if (!category) {
    return {
      title: 'カテゴリーが見つかりません',
      robots: {index: false, follow: false, googleBot: {index: false, follow: false}},
      alternates: {canonical: null},
    }
  }

  const { title, description } = category

  return {
    title: `${title}の記事一覧`,
    alternates: { canonical: `/blog/category/${slug}` },
    description: description || `${title}に関する記事一覧です。プロトレーナーJUNYA ISHIHARAによる専門的な情報をお届けします。`,
    openGraph: {
      title: `${title}の記事一覧`,
      description: description || `${title}に関する記事一覧です。`,
      type: 'website',
      locale: 'ja_JP',
    },
  }
}

// 静的パス生成
export async function generateStaticParams() {
  const slugs = await getAllCategorySlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function CategoryPage({ params }: Props) {
  try {
    const { slug } = await params
    const [category, posts, allCategories] = await Promise.all([
      getCategoryBySlug(slug),
      getCategoryBySlug(slug).then(async (cat) => {
        if (cat) {
          return await getPostsByCategory(cat._id)
        }
        return []
      }),
      getAllCategories(),
    ])

    if (!category) {
      notFound()
    }

    return (
      <>
        <Header />
        <main className="bg-white text-deep">
          <JournalHero
            label={`Journal — ${posts.length} posts`}
            title={category.title}
            lead={category.description || `${category.title}に関する記事の一覧です。`}
          >
            <SearchForm placeholder={`${category.title}の記事を検索`} />
          </JournalHero>

          <CategoryPills categories={allCategories} current={category.slug.current} />

          <section className="px-5 md:px-10 py-16 md:py-24">
            {posts.length === 0 ? (
              <EmptyState
                title="このカテゴリーの記事は準備中です"
                body="ほかのカテゴリーもぜひご覧ください。"
                action={{ href: '/blog', label: 'All Articles' }}
              />
            ) : (
              <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {posts.map((post, index) => (
                  <ArticleCard key={post._id} post={post} priority={index < 3} />
                ))}
              </div>
            )}
          </section>

          <BookingCTA />
        </main>
        <Footer />
        <MotionProvider />
      </>
    )
  } catch (error) {
    if ((error as any)?.digest?.startsWith?.('NEXT_')) throw error
    console.error('Error loading category page:', error)
    notFound()
  }
}
// Sanityの更新を60秒ごとに反映
export const revalidate = 60
