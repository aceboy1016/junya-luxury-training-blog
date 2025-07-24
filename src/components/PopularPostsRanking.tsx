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
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-4xl mb-4">📊</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          ランキングデータなし
        </h3>
        <p className="text-gray-600">
          アクセス数のデータがまだありません
        </p>
      </div>
    )
  }

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="text-4xl">🏆</div>
          <h2 className="text-3xl font-black text-gray-900">
            人気記事ランキング
          </h2>
        </div>
        <p className="text-gray-600 text-lg">
          アクセス数の多い記事をランキング形式でご紹介
        </p>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => {
          const rank = index + 1
          const imageUrl = post.mainImage
            ? urlFor(post.mainImage).width(80).height(80).quality(90).url()
            : '/placeholder-image.jpg'

          // ランキング1-3位は特別なスタイル
          const getRankBadge = (rank: number) => {
            const baseClasses = "w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm"
            if (rank === 1) return `${baseClasses} bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg`
            if (rank === 2) return `${baseClasses} bg-gradient-to-r from-gray-300 to-gray-500 shadow-lg`
            if (rank === 3) return `${baseClasses} bg-gradient-to-r from-amber-600 to-amber-800 shadow-lg`
            return `${baseClasses} bg-gradient-to-r from-junya-gold to-junya-gold-dark`
          }

          const getRankIcon = (rank: number) => {
            if (rank === 1) return '👑'
            if (rank === 2) return '🥈'
            if (rank === 3) return '🥉'
            return rank.toString()
          }

          return (
            <article
              key={post._id}
              className={`group relative p-4 rounded-xl transition-all duration-300 hover:shadow-lg ${
                rank <= 3 
                  ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-yellow-200' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <Link href={`/blog/${post.slug.current}`} className="block">
                <div className="flex items-center gap-4">
                  {/* ランキング番号 */}
                  <div className="flex-shrink-0">
                    <div className={getRankBadge(rank)}>
                      {rank <= 3 ? getRankIcon(rank) : rank}
                    </div>
                  </div>

                  {/* サムネイル画像 */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={post.mainImage?.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="64px"
                      />
                    </div>
                  </div>

                  {/* 記事情報 */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-junya-gold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        {post.categories && post.categories.length > 0 && (
                          <span 
                            className="px-2 py-1 rounded-full text-xs font-medium text-white"
                            style={{ backgroundColor: post.categories[0].color }}
                          >
                            {post.categories[0].title}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-junya-gold">
                          👁️ {(post.views || 0).toLocaleString()}
                        </span>
                        <time className="text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                  </div>

                  {/* トップ3の装飾 */}
                  {rank <= 3 && (
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                      <div className="text-2xl">
                        {rank === 1 && '🏆'}
                        {rank === 2 && '🥈'}
                        {rank === 3 && '🥉'}
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </article>
          )
        })}
      </div>

      {/* ランキング全体を見るリンク */}
      <div className="text-center mt-8">
        <Link 
          href="/blog?sort=popular" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-junya-gold to-junya-gold-dark text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <span>📈</span>
          すべてのランキングを見る
        </Link>
      </div>
    </section>
  )
}

export default PopularPostsRanking