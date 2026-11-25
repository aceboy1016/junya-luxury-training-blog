import { Suspense } from 'react'
import { Metadata } from 'next'
import { getAllPosts, getFeaturedPosts, getAllCategories, getViewsRanking } from '@/lib/sanity'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import SearchForm from '@/components/SearchForm'
import PopularPostsRanking from '@/components/PopularPostsRanking'
import MotionProvider from '@/components/motion/MotionProvider'
import { BookingCTA, CategoryPills, EmptyState, JournalHero, SectionLabel } from '@/components/blog/ui'

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: 'ブログ（Journal）',
  description: 'プロトレーナーJUNYA ISHIHARAによるトレーニング、栄養、ライフスタイルに関する専門的なブログ記事をお届けします。',
  keywords: ['パーソナルトレーニング', 'トレーニング方法', '栄養', 'ダイエット', 'フィットネス', 'JUNYA ISHIHARA'],
  openGraph: {
    title: 'ブログ（Journal）',
    description: 'プロトレーナーJUNYA ISHIHARAによるトレーニング、栄養、ライフスタイルに関する専門的なブログ記事をお届けします。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ブログ（Journal）',
    description: 'プロトレーナーJUNYA ISHIHARAによるトレーニング、栄養、ライフスタイルに関する専門的なブログ記事をお届けします。',
  },
}

const RankingSection = async () => {
  const rankingPosts = await getViewsRanking()
  if (!rankingPosts.length) return null
  return (
    <section className="bg-breeze-50 px-5 md:px-10 py-24 md:py-32">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-4">
          <SectionLabel>Most Read</SectionLabel>
          <h2 className="mt-8 font-bold tracking-[-0.03em] leading-[1.15] text-[clamp(2rem,4vw,3.25rem)] text-deep">
            よく読まれている記事
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <PopularPostsRanking posts={rankingPosts} />
        </div>
      </div>
    </section>
  )
}

interface BlogPageProps {
  searchParams: Promise<{ sort?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  try {
    const params = await searchParams
    const sortOption = params.sort || 'latest'

    const [allPosts, featuredPosts, categories] = await Promise.all([getAllPosts(), getFeaturedPosts(), getAllCategories()])

    const sortedPosts = [...allPosts].sort((a, b) => {
      switch (sortOption) {
        case 'popular':
        case 'views':
          return (b.views || 0) - (a.views || 0)
        case 'latest':
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
    })

    // 一番上に大きく出す記事（おすすめ → なければ最新）。一覧では重複させない
    const lead = sortOption === 'latest' ? featuredPosts[0] || sortedPosts[0] : undefined
    const rest = lead ? sortedPosts.filter((p) => p._id !== lead._id) : sortedPosts

    return (
      <>
        <Header />
        <main className="bg-white text-deep">
          <JournalHero
            label="Journal"
            titleEn="Journal"
            title="ブログ｜トレーニング・栄養・ライフスタイル"
            lead="続けたくなる身体づくりのヒントを、トレーナーの現場から。読むだけで、少し「したい！」に近づく記事を届けます。"
          >
            <SearchForm />
          </JournalHero>

          <CategoryPills categories={categories} />

          {allPosts.length === 0 ? (
            <div className="px-5 md:px-10">
              <EmptyState title="記事を準備中です" body="公開までもう少しお待ちください。" action={{ href: '/', label: 'Back to Home' }} />
            </div>
          ) : (
            <>
              {lead && (
                <section className="px-5 md:px-10 pt-16 md:pt-24" data-reveal>
                  <ArticleCard post={lead} variant="featured" priority />
                </section>
              )}

              <section className="px-5 md:px-10 py-20 md:py-28">
                <div className="flex items-end justify-between gap-6 border-b border-deep/10 pb-6">
                  <h2 className="font-outfit font-bold uppercase tracking-[-0.03em] text-3xl md:text-4xl text-deep">
                    Latest<span className="text-breeze-400"> Articles</span>
                  </h2>
                  <span className="font-outfit text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400 tabular-nums">
                    {allPosts.length} posts
                  </span>
                </div>
                <div data-stagger className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {rest.map((post, index) => (
                    <ArticleCard key={post._id} post={post} priority={index < 3} />
                  ))}
                </div>
              </section>

              <Suspense fallback={null}>
                <RankingSection />
              </Suspense>
            </>
          )}

          <BookingCTA />
        </main>
        <Footer />
        <MotionProvider />
      </>
    )
  } catch (error) {
    console.error('Error loading blog page:', error)
    if ((error as any)?.digest === 'DYNAMIC_SERVER_USAGE') throw error

    return (
      <>
        <Header />
        <main className="bg-white text-deep px-5 md:px-10 pt-32">
          <EmptyState title="記事を読み込めませんでした" body="しばらく時間をおいてから、もう一度お試しください。" action={{ href: '/blog', label: 'Reload' }} />
        </main>
        <Footer />
      </>
    )
  }
}
