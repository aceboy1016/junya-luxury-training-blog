import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Post } from '@/lib/sanity'
import CategoryBadge from './CategoryBadge'
import TagsList from './TagsList'

// 技術アイコンのマッピング
const getTechIcon = (title: string) => {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes('react') || lowerTitle.includes('next')) return '⚛️'
  if (lowerTitle.includes('typescript') || lowerTitle.includes('javascript')) return '📘'
  if (lowerTitle.includes('css') || lowerTitle.includes('tailwind')) return '🎨'
  if (lowerTitle.includes('training') || lowerTitle.includes('トレーニング')) return '💪'
  if (lowerTitle.includes('nutrition') || lowerTitle.includes('栄養')) return '🥗'
  if (lowerTitle.includes('diet') || lowerTitle.includes('ダイエット')) return '⚖️'
  if (lowerTitle.includes('web') || lowerTitle.includes('サイト')) return '🌐'
  if (lowerTitle.includes('デプロイ') || lowerTitle.includes('deploy')) return '🚀'
  return '📝'
}

interface ArticleCardProps {
  post: Post
  variant?: 'default' | 'featured' | 'compact'
  priority?: boolean
}

const ArticleCard = ({ post, variant = 'default', priority = false }: ArticleCardProps) => {
  const {
    title,
    slug,
    excerpt,
    mainImage,
    categories,
    author,
    publishedAt,
  } = post

  const formattedDate = new Date(publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const imageUrl = mainImage
    ? urlFor(mainImage)
        .width(variant === 'featured' ? 600 : variant === 'compact' ? 300 : 400)
        .height(variant === 'featured' ? 400 : variant === 'compact' ? 200 : 250)
        .quality(90)
        .url()
    : '/placeholder-image.jpg'

  if (variant === 'compact') {
    return (
      <article className="card hover:shadow-junya-card-hover transition-all duration-300">
        <Link href={`/blog/${slug.current}`} className="block">
          <div className="flex gap-4 p-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 relative rounded-junya overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={mainImage?.alt || title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-junya-text line-clamp-2 mb-1">
                {title}
              </h3>
              <p className="text-xs text-junya-gray mb-2 line-clamp-2">
                {excerpt}
              </p>
              <time className="text-xs text-junya-gray">
                {formattedDate}
              </time>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  if (variant === 'featured') {
    return (
      <article className="card hover:shadow-junya-card-hover transition-all duration-300 lg:col-span-2">
        <Link href={`/blog/${slug.current}`} className="block">
          <div className="aspect-video relative overflow-hidden rounded-t-junya-lg">
            <Image
              src={imageUrl}
              alt={mainImage?.alt || title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            {categories && categories.length > 0 && (
              <div className="absolute top-4 left-4">
                <CategoryBadge category={categories[0]} clickable={false} />
              </div>
            )}
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-junya-text mb-3 line-clamp-2">
              {title}
            </h2>
            {excerpt && (
              <p className="text-junya-gray mb-4 line-clamp-3 leading-relaxed">
                {excerpt}
              </p>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {author?.image && (
                  <div className="w-8 h-8 relative rounded-full overflow-hidden">
                    <Image
                      src={urlFor(author.image).width(32).height(32).url()}
                      alt={author.image.alt || author.name}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                )}
                <span className="text-sm text-junya-gray">{author?.name}</span>
              </div>
              <time className="text-sm text-junya-gray">
                {formattedDate}
              </time>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  const techIcon = getTechIcon(title)
  
  return (
    <article className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
      <Link href={`/blog/${slug.current}`} className="block">
        {/* サムネイル画像 */}
        {mainImage && (
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={imageUrl}
              alt={mainImage.alt || title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority={priority}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        )}
        
        {/* コンテンツ部分 */}
        <div className="p-6">
          {/* カテゴリーバッジ */}
          {categories && categories.length > 0 && (
            <div className="mb-3">
              <CategoryBadge category={categories[0]} size="sm" clickable={false} />
            </div>
          )}
          
          {/* タイトル */}
          <h3 className="text-xl font-bold text-junya-text mb-3 line-clamp-2 leading-tight">
            {title}
          </h3>
          
          {/* 抜粋 */}
          {excerpt && (
            <p className="text-junya-gray mb-4 line-clamp-3 text-sm leading-relaxed">
              {excerpt}
            </p>
          )}
          
          {/* メタ情報 */}
          <div className="flex items-center justify-between text-sm text-junya-gray">
            <div className="flex items-center space-x-2">
              {author?.image && (
                <div className="w-6 h-6 relative rounded-full overflow-hidden">
                  <Image
                    src={urlFor(author.image).width(24).height(24).url()}
                    alt={author.image.alt || author.name}
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </div>
              )}
              <span>{author?.name}</span>
            </div>
            <time>
              {formattedDate}
            </time>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ArticleCard