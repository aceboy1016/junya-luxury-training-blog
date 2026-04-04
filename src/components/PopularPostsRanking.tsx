import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Post } from '@/lib/sanity'

interface PopularPostsRankingProps {
  posts: Post[]
}

const PopularPostsRanking = ({ posts }: PopularPostsRankingProps) => {
  if (!posts.length) {
    return (
      <div className="bg-white border border-zinc-100 p-12 text-center">
        <div className="w-16 h-16 bg-zinc-50 flex items-center justify-center mx-auto mb-6">
          <i className="ri-bar-chart-line text-zinc-300 text-3xl" />
        </div>
        <h3 className="text-sm font-black text-navy-500 uppercase tracking-widest mb-2 font-outfit">
          No Data Available
        </h3>
        <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
          ランキングデータがまだありません
        </p>
      </div>
    )
  }

  return (
    <section className="bg-zinc-950 p-12 text-white">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-navy-500 text-white text-[8px] font-black tracking-[0.4em] uppercase mb-6">
          Popular
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter mb-4 font-outfit uppercase">
          Ranking
        </h2>
        <div className="w-12 h-0.5 bg-navy-500 mx-auto"></div>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => {
          const rank = index + 1
          const imageUrl = post.mainImage
            ? urlFor(post.mainImage).width(120).height(120).quality(100).url()
            : '/placeholder-image.jpg'

          // ランキング1-3位は特別なスタイル
          const getRankBadge = (rank: number) => {
            const baseClasses = "w-10 h-10 flex items-center justify-center font-black text-xs font-outfit"
            if (rank === 1) return `${baseClasses} bg-white text-navy-500`
            if (rank === 2) return `${baseClasses} bg-zinc-200 text-navy-500`
            if (rank === 3) return `${baseClasses} bg-zinc-400 text-white`
            return `${baseClasses} bg-navy-500/30 text-white`
          }

          return (
            <article
              key={post._id}
              className="group relative border-b border-white/5 pb-6 last:border-0 transition-all duration-500 hover:translate-x-2"
            >
              <Link href={`/blog/${post.slug.current}`} className="block">
                <div className="flex items-center gap-6">
                  {/* ランキング番号 */}
                  <div className="flex-shrink-0">
                    <div className={getRankBadge(rank)}>
                      {rank.toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* サムネイル画像 */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                      <Image
                        src={imageUrl}
                        alt={post.mainImage?.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="80px"
                      />
                    </div>
                  </div>

                  {/* 記事情報 */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-black text-white line-clamp-2 mb-3 group-hover:text-navy-300 transition-colors duration-300 uppercase tracking-wider font-outfit">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {post.categories && post.categories.length > 0 && (
                          <span className="text-[8px] font-black text-navy-300 tracking-[0.3em] uppercase">
                            {post.categories[0].title}
                          </span>
                        )}
                        <span className="text-[10px] font-black text-zinc-500 font-outfit">
                          👁️ {(post.views || 0).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )
        })}
      </div>

      {/* ランキング全体を見るリンク */}
      <div className="text-center mt-16 pt-12 border-t border-white/5">
        <Link 
          href="/blog?sort=popular" 
          className="inline-flex items-center gap-4 px-10 py-4 border border-white text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-navy-500 transition-all duration-500"
        >
          View All Ranking
          <i className="ri-arrow-right-line" />
        </Link>
      </div>
    </section>
  )
}

export default PopularPostsRanking