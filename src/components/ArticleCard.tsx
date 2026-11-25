import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Post } from '@/lib/sanity'
import { formatDate } from '@/components/blog/ui'

interface ArticleCardProps {
  post: Post
  variant?: 'default' | 'featured' | 'compact'
  priority?: boolean
}

/** 画像がない記事でも崩れないよう、空色のグラデーションに大きな頭文字を置く。 */
function Cover({ post, sizes, priority, w, h }: { post: Post; sizes: string; priority?: boolean; w: number; h: number }) {
  if (post.mainImage?.asset) {
    return (
      <Image
        src={urlFor(post.mainImage).width(w).height(h).quality(85).url()}
        alt={post.mainImage.alt || post.title}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
      />
    )
  }
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-white via-breeze-100 to-breeze-300 flex items-end p-6" aria-hidden>
      <span className="font-outfit font-bold text-[5rem] leading-none tracking-[-0.05em] text-white/80">
        {(post.categories?.[0]?.title || 'Journal').slice(0, 1)}
      </span>
    </div>
  )
}

function Meta({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-3 font-outfit text-[11px] font-semibold tracking-[0.18em] uppercase">
      {post.categories?.[0] && <span className="text-breeze-600">{post.categories[0].title}</span>}
      {post.categories?.[0] && <span className="h-px w-4 bg-zinc-300" aria-hidden />}
      <time dateTime={post.publishedAt} className="text-zinc-400 tabular-nums">
        {formatDate(post.publishedAt)}
      </time>
    </div>
  )
}

const ArticleCard = ({ post, variant = 'default', priority = false }: ArticleCardProps) => {
  const href = `/blog/${post.slug.current}`

  if (variant === 'compact') {
    return (
      <article className="group">
        <Link href={href} className="flex gap-4 items-center py-4">
          <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-md bg-breeze-100">
            <Cover post={post} sizes="80px" w={160} h={160} />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold leading-snug text-deep line-clamp-2 group-hover:text-breeze-600 transition-colors duration-500">{post.title}</h3>
            <time dateTime={post.publishedAt} className="mt-1 block font-outfit text-[11px] text-zinc-400 tabular-nums">
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </Link>
      </article>
    )
  }

  if (variant === 'featured') {
    return (
      <article className="group">
        <Link href={href} data-cursor="Read" className="grid grid-cols-12 gap-x-6 gap-y-8 items-center">
          <div className="col-span-12 lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-md bg-breeze-100">
            <Cover post={post} priority={priority} sizes="(min-width:1024px) 58vw, 100vw" w={1400} h={875} />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pl-6">
            <span className="inline-flex items-center gap-2 font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-breeze-600">
              <span className="w-1.5 h-1.5 rounded-full bg-breeze-500" aria-hidden />
              Featured
            </span>
            <h3 className="mt-6 font-bold tracking-[-0.02em] leading-[1.4] text-[clamp(1.5rem,2.6vw,2.25rem)] text-deep palt">
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-no-repeat bg-[position:0_100%] group-hover:bg-[length:100%_1px] transition-[background-size] duration-700">
                {post.title}
              </span>
            </h3>
            {post.excerpt && <p className="mt-6 text-base leading-relaxed text-zinc-600 line-clamp-3">{post.excerpt}</p>}
            <div className="mt-8">
              <Meta post={post} />
            </div>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="group h-full">
      <Link href={href} data-cursor="Read" className="flex flex-col h-full">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-breeze-100">
          <Cover post={post} priority={priority} sizes="(min-width:1024px) 31vw, (min-width:768px) 48vw, 100vw" w={900} h={675} />
        </div>
        <div className="pt-6 flex flex-col flex-1">
          <Meta post={post} />
          <h3 className="mt-4 text-lg md:text-xl font-bold leading-[1.55] tracking-[-0.01em] text-deep palt line-clamp-3 group-hover:text-breeze-600 transition-colors duration-500">
            {post.title}
          </h3>
          {post.excerpt && <p className="mt-3 text-sm leading-relaxed text-zinc-500 line-clamp-2">{post.excerpt}</p>}
          <span className="mt-auto pt-6 inline-flex items-center gap-2 font-outfit text-[11px] font-semibold tracking-[0.2em] uppercase text-deep/60 group-hover:text-breeze-600 transition-colors duration-500">
            Read
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </article>
  )
}

export default ArticleCard
