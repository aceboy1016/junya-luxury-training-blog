import { Suspense } from 'react'
import { Metadata } from 'next'
import { getAllPosts, getFeaturedPosts, getAllCategories, getViewsRanking } from '@/lib/sanity'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import CategoryBadge from '@/components/CategoryBadge'
import SearchForm from '@/components/SearchForm'
import LoadingSpinner from '@/components/LoadingSpinner'
import PopularPostsRanking from '@/components/PopularPostsRanking'
import TagCloud from '@/components/TagCloud'

export const metadata: Metadata = {
  title: 'JUNYA\'S BLOG | JUNYA ISHIHARA PERSONAL TRAINING',
  description: 'プロトレーナーJUNYA ISHIHARAによるトレーニング、栄養、ライフスタイルに関する専門的なブログ記事をお届けします。',
  keywords: ['パーソナルトレーニング', 'トレーニング方法', '栄養', 'ダイエット', 'フィットネス', 'JUNYA ISHIHARA'],
  openGraph: {
    title: 'JUNYA\'S BLOG | JUNYA ISHIHARA PERSONAL TRAINING',
    description: 'プロトレーナーJUNYA ISHIHARAによるトレーニング、栄養、ライフスタイルに関する専門的なブログ記事をお届けします。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JUNYA\'S BLOG | JUNYA ISHIHARA PERSONAL TRAINING',
    description: 'プロトレーナーJUNYA ISHIHARAによるトレーニング、栄養、ライフスタイルに関する専門的なブログ記事をお届けします。',
  },
}

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-br from-junya-light to-white py-16">
      <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* シンプルなタイトル */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-junya-text mb-6">
            JUNYA'S{' '}
            <span className="bg-gradient-to-r from-junya-gold to-junya-orange bg-clip-text text-transparent">BLOG</span>
          </h1>
        </div>
        
        <p className="text-xl text-junya-gray max-w-3xl mx-auto mb-8 leading-relaxed">
          プロフェッショナルトレーナーとして培った知識と経験を基に、
          <br className="hidden sm:block" />
          トレーニング・栄養・ライフスタイルに関する有益な情報をお届けします。
        </p>
        <div className="max-w-md mx-auto">
          <SearchForm placeholder="記事を検索..." />
        </div>
      </div>
    </section>
  )
}

const CategoryFilter = ({ categories }: { categories: any[] }) => (
  <section className="bg-white border-b border-junya-border">
    <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-lg font-semibold text-junya-text mb-4">カテゴリー</h2>
      <div className="flex flex-wrap gap-3">
        <CategoryBadge 
          category={{
            _id: 'all',
            title: 'すべて',
            slug: { current: '' },
            description: '',
            color: '#666666',
            isActive: true
          }}
          clickable={false}
          variant="outline"
        />
        {categories.map((category) => (
          <CategoryBadge 
            key={category._id} 
            category={category} 
            variant="outline"
          />
        ))}
      </div>
    </div>
  </section>
)


const RankingSection = async () => {
  const rankingPosts = await getViewsRanking()
  return <PopularPostsRanking posts={rankingPosts} />
}

interface BlogPageProps {
  searchParams: { sort?: string }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  try {
    const params = await searchParams
    const sortOption = params.sort || 'latest'
    
    const [allPosts, featuredPosts, categories] = await Promise.all([
      getAllPosts(),
      getFeaturedPosts(),
      getAllCategories(),
    ])

    // ソート処理
    const sortedPosts = [...allPosts].sort((a, b) => {
      switch (sortOption) {
        case 'popular':
        case 'views':
          return (b.views || 0) - (a.views || 0)
        case 'random':
          return Math.random() - 0.5
        case 'latest':
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
    })

    return (
      <>
        <Header />
        <main className="min-h-screen">
          <BlogHero />
          <CategoryFilter categories={categories} />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* メインコンテンツ */}
              <div className="flex-1">
                <Suspense fallback={<LoadingSpinner size="lg" text="記事を読み込み中..." />}>
                  {/* 注目記事（最新順の場合のみ表示） */}
                  {sortOption === 'latest' && featuredPosts.length > 0 && (
                    <section className="mb-12">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h2 className="text-2xl font-bold text-junya-text mb-2">
                            注目の記事
                          </h2>
                          <div className="w-16 h-1 bg-junya-orange rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredPosts.slice(0, 2).map((post, index) => (
                          <ArticleCard 
                            key={post._id} 
                            post={post} 
                            variant={index === 0 ? "featured" : "default"}
                            priority={index === 0}
                          />
                        ))}
                      </div>
                    </section>
                  )}

                  {/* 記事一覧 */}
                  <section>
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="text-2xl font-bold text-junya-text mb-2">
                          すべての記事
                        </h2>
                        <div className="w-16 h-1 bg-junya-orange rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {sortedPosts.map((post, index) => (
                        <ArticleCard 
                          key={post._id} 
                          post={post} 
                          variant="default"
                          priority={index < 6}
                        />
                      ))}
                    </div>
                    
                    {sortedPosts.length === 0 && (
                      <div className="text-center py-16">
                        <div className="text-6xl mb-4">📝</div>
                        <h3 className="text-xl font-semibold text-junya-text mb-2">
                          記事がありません
                        </h3>
                        <p className="text-junya-gray">
                          現在公開されている記事がありません。
                        </p>
                      </div>
                    )}
                  </section>
                </Suspense>
              </div>
              
              {/* サイドバー */}
              <aside className="lg:w-80 space-y-8">
                <Suspense fallback={<LoadingSpinner size="md" text="ランキング読み込み中..." />}>
                  <RankingSection />
                </Suspense>
              </aside>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  } catch (error) {
    console.error('Error loading blog page:', error)
    
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-junya-text mb-2">
              エラーが発生しました
            </h1>
            <p className="text-junya-gray mb-6">
              記事の読み込み中にエラーが発生しました。しばらく時間をおいてから再度お試しください。
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              再読み込み
            </button>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}