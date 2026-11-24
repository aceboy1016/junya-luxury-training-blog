'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import SearchForm from '@/components/SearchForm'
import LoadingSpinner from '@/components/LoadingSpinner'
import Breadcrumb from '@/components/Breadcrumb'
import { searchPosts } from '@/lib/sanity'

const SearchResults = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const query = searchParams?.get('q') || ''

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setPosts([])
        return
      }

      setLoading(true)
      setError(null)

      try {
        const results = await searchPosts(query)
        setPosts(results)
      } catch (err) {
        console.error('Search error:', err)
        setError('検索中にエラーが発生しました。しばらく時間をおいてから再度お試しください。')
      } finally {
        setLoading(false)
      }
    }

    performSearch()
  }, [query])

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim()) {
      router.push(`/blog/search?q=${encodeURIComponent(searchTerm.trim())}`)
    } else {
      router.push('/blog/search')
    }
  }

  const breadcrumbItems = [
    { label: 'ブログ', href: '/blog' },
    { label: '検索結果' }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* 検索ヘッダー */}
        <section className="bg-gradient-to-br from-junya-light to-white py-16">
          <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-junya-text mb-6">
                記事検索
              </h1>
              <p className="text-xl text-junya-gray max-w-3xl mx-auto leading-relaxed">
                キーワードを入力して、お探しの記事を見つけましょう
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <SearchForm 
                placeholder="キーワードを入力してください..."
                initialValue={query}
              />
            </div>

            {query && (
              <div className="mt-8 text-center">
                <p className="text-junya-gray">
                  「<span className="font-semibold text-junya-orange">{query}</span>」の検索結果
                  {!loading && posts.length > 0 && (
                    <span className="ml-2">
                      (<span className="font-semibold text-junya-orange">{posts.length}</span>件)
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </section>

        <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* 検索結果 */}
          <section className="py-8">
            {loading ? (
              <div className="flex justify-center py-16">
                <LoadingSpinner size="lg" text="検索中..." />
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-xl font-semibold text-junya-text mb-2">
                  エラーが発生しました
                </h3>
                <p className="text-junya-gray mb-6">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="btn-primary"
                >
                  再試行
                </button>
              </div>
            ) : !query.trim() ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-junya-text mb-2">
                  キーワードを入力してください
                </h3>
                <p className="text-junya-gray">
                  上の検索ボックスにキーワードを入力して、記事を検索してください。
                </p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-junya-text mb-2">
                  検索結果が見つかりませんでした
                </h3>
                <p className="text-junya-gray mb-6">
                  「{query}」に関する記事は見つかりませんでした。
                  <br />
                  別のキーワードで検索してみてください。
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-junya-text mb-2">検索のヒント：</h4>
                    <ul className="text-sm text-junya-gray space-y-1">
                      <li>• 別のキーワードで検索してみてください</li>
                      <li>• より一般的なキーワードを使ってみてください</li>
                      <li>• スペルや漢字に間違いがないか確認してください</li>
                    </ul>
                  </div>
                  <a href="/blog" className="btn-primary inline-block">
                    全ての記事を見る
                  </a>
                </div>
              </div>
            ) : (
              <>
                {/* 検索結果ヘッダー */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-junya-text mb-4">
                    検索結果: {posts.length}件
                  </h2>
                  <div className="w-20 h-1 bg-junya-orange rounded-full"></div>
                </div>

                {/* 記事グリッド */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post, index) => (
                    <ArticleCard 
                      key={post._id} 
                      post={post}
                      priority={index < 3}
                    />
                  ))}
                </div>

                {/* 検索結果フッター */}
                {posts.length > 0 && (
                  <div className="mt-12 text-center">
                    <p className="text-junya-gray mb-4">
                      他にもお探しの記事が見つからない場合は、別のキーワードで検索してみてください。
                    </p>
                    <a href="/blog" className="btn-secondary">
                      全ての記事を見る
                    </a>
                  </div>
                )}
              </>
            )}
          </section>

          {/* ナビゲーション */}
          <section className="py-8 border-t border-junya-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <a 
                href="/blog"
                className="btn-secondary w-full sm:w-auto"
              >
                ← ブログ一覧に戻る
              </a>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="/"
                  className="btn-primary w-full sm:w-auto"
                >
                  ホームページへ
                </a>
                <a 
                  href="/contact"
                  className="btn-primary w-full sm:w-auto"
                >
                  体験予約
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="読み込み中..." />
      </div>
    }>
      <SearchResults />
    </Suspense>
  )
}