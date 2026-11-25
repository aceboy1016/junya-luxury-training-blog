'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import SearchForm from '@/components/SearchForm'
import { EmptyState, SectionLabel } from '@/components/blog/ui'
import { searchPosts } from '@/lib/sanity'

/* 検索結果は読み込み後に描画されるため、アニメーション用の data 属性は付けない（付けると非表示のまま残る） */

const SearchResults = () => {
  const searchParams = useSearchParams()
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const query = searchParams?.get('q') || ''

  useEffect(() => {
    const run = async () => {
      if (!query.trim()) {
        setPosts([])
        return
      }
      setLoading(true)
      setError(null)
      try {
        setPosts(await searchPosts(query))
      } catch (err) {
        console.error('Search error:', err)
        setError('検索中にエラーが発生しました。しばらく時間をおいてから再度お試しください。')
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [query])

  return (
    <>
      <Header />
      <main className="bg-white text-deep">
        <section className="relative bg-breeze-50 overflow-hidden px-5 md:px-10 pt-32 md:pt-44 pb-16 md:pb-24">
          <div className="hero-glow" aria-hidden />
          <div className="relative grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <SectionLabel>Search</SectionLabel>
              <h1 className="mt-8 font-bold tracking-[-0.03em] leading-[1.2] text-[clamp(2.25rem,5.5vw,4.5rem)] text-deep palt">
                {query ? <>「{query}」の記事</> : '記事を探す'}
              </h1>
              {query && !loading && !error && (
                <p className="mt-5 font-outfit text-[12px] font-semibold tracking-[0.2em] uppercase text-breeze-600 tabular-nums">{posts.length} results</p>
              )}
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
              <SearchForm key={query} initialValue={query} placeholder="キーワードを入力" />
            </div>
          </div>
        </section>

        <section className="px-5 md:px-10 py-16 md:py-24 min-h-[40vh]">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" aria-label="読み込み中">
              {[0, 1, 2].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/3] rounded-md bg-breeze-50" />
                  <div className="mt-6 h-3 w-24 rounded bg-breeze-50" />
                  <div className="mt-4 h-5 w-full rounded bg-breeze-50" />
                  <div className="mt-2 h-5 w-2/3 rounded bg-breeze-50" />
                </div>
              ))}
            </div>
          ) : error ? (
            <EmptyState title="検索できませんでした" body={error} action={{ href: '/blog', label: 'All Articles' }} />
          ) : !query.trim() ? (
            <EmptyState title="キーワードを入力してください" body="トレーニング、食事、睡眠など、気になる言葉で探せます。" />
          ) : posts.length === 0 ? (
            <EmptyState
              title="該当する記事が見つかりませんでした"
              body={<>別のキーワードや、より短い言葉で探してみてください。</>}
              action={{ href: '/blog', label: 'All Articles' }}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {posts.map((post, index) => (
                <ArticleCard key={post._id} post={post} priority={index < 3} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-breeze-50" />}>
      <SearchResults />
    </Suspense>
  )
}
