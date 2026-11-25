import Link from 'next/link'
import type { Post } from '@/lib/sanity'

/** よく読まれている記事。大きな番号と罫線だけで見せる。 */
const PopularPostsRanking = ({ posts }: { posts: Post[] }) => {
  if (!posts.length) return null

  return (
    <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 border-t border-deep/10">
      {posts.slice(0, 6).map((post, i) => (
        <li key={post._id} className="border-b border-deep/10">
          <Link href={`/blog/${post.slug.current}`} className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 py-6 md:py-7">
            <span className="font-outfit font-bold text-4xl md:text-5xl tracking-[-0.05em] leading-none tabular-nums text-breeze-300 group-hover:text-breeze-500 transition-colors duration-500">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="min-w-0">
              {post.categories?.[0] && (
                <span className="block font-outfit text-[10px] font-semibold tracking-[0.2em] uppercase text-breeze-600 mb-1">{post.categories[0].title}</span>
              )}
              <span className="block font-bold leading-snug text-deep line-clamp-2 palt">{post.title}</span>
            </span>
            <span aria-hidden className="text-xl text-deep/40 transition-all duration-500 group-hover:text-breeze-500 group-hover:translate-x-1">→</span>
          </Link>
        </li>
      ))}
    </ol>
  )
}

export default PopularPostsRanking
