import { Suspense } from 'react'
import { getAllPosts } from '@/lib/sanity'
import ArticleCard from '@/components/ArticleCard'
import LoadingSpinner from '@/components/LoadingSpinner'

// WordPress埋め込み用のブログページ
export default async function EmbedBlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* ヘッダー（簡易版） */}
      <header className="bg-white shadow-sm border-b-2 border-junya-gold">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-junya-text mb-2">
              JUNYA{' '}
              <span className="text-junya-gold">LUXURY TRAINING</span>
            </h1>
            <p className="text-junya-gray">PROFESSIONAL BLOG</p>
          </div>
        </div>
      </header>

      {/* ブログコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Suspense fallback={<LoadingSpinner />}>
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-junya-text mb-4">
                最新のトレーニング情報
              </h2>
              <p className="text-junya-gray max-w-2xl mx-auto">
                プロフェッショナルトレーナーによる専門的な知識とテクニックをお届けします
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map((post) => (
                <ArticleCard 
                  key={post._id} 
                  post={post} 
                  variant="compact"
                />
              ))}
            </div>

            {/* もっと見るボタン */}
            <div className="text-center mt-12">
              <a
                href="/blog"
                target="_parent"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-junya-gold to-junya-amber text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                すべての記事を見る
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </section>
        </Suspense>
      </main>

      {/* フッター（簡易版） */}
      <footer className="bg-junya-text text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-2">
            JUNYA{' '}
            <span className="text-junya-gold">LUXURY TRAINING</span>
          </div>
          <p className="text-gray-300">
            © 2024 Junya Luxury Training. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}