import { getAllPosts } from '@/lib/sanity'
import ArticleCard from '@/components/ArticleCard'
import { EmptyState, SectionLabel } from '@/components/blog/ui'

// 外部サイトへの埋め込み用の、最新記事だけの簡易ページ（ヘッダー・フッターなし）
export default async function EmbedBlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-white text-deep px-5 md:px-10 py-14">
      <div className="flex items-end justify-between gap-6 border-b border-deep/10 pb-6">
        <div>
          <SectionLabel>Journal</SectionLabel>
          <p className="mt-5 font-bold tracking-[-0.02em] text-2xl md:text-3xl">最新の記事</p>
        </div>
        <a href="/blog" target="_parent" className="link-underline font-outfit text-[12px] font-semibold tracking-[0.2em] uppercase text-breeze-600">
          All Articles →
        </a>
      </div>
      {posts.length === 0 ? (
        <EmptyState title="記事を準備中です" />
      ) : (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {posts.slice(0, 6).map((post) => (
            <ArticleCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
// Sanityの更新を60秒ごとに反映
export const revalidate = 60
