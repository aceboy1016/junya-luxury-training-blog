import Link from 'next/link'
import type { Post } from '@/lib/sanity'
import ArticleCard from './ArticleCard'
import { SectionLabel } from './blog/ui'

interface RelatedPostsProps {
  posts: Post[]
  currentPostId: string
  className?: string
}

const RelatedPosts = ({ posts, currentPostId, className = '' }: RelatedPostsProps) => {
  const list = posts.filter((p) => p._id !== currentPostId).slice(0, 3)
  if (list.length === 0) return null

  return (
    <section className={`px-5 md:px-10 py-24 md:py-36 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <SectionLabel>Next Read</SectionLabel>
          <h2 data-split className="mt-8 font-bold tracking-[-0.03em] leading-[1.15] text-[clamp(2rem,4.5vw,3.75rem)] text-deep">
            あわせて読みたい
          </h2>
        </div>
        <Link href="/blog" className="link-underline self-start md:self-auto font-outfit text-[12px] font-semibold tracking-[0.2em] uppercase text-breeze-600">
          All Articles →
        </Link>
      </div>
      <div data-stagger className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
        {list.map((post) => (
          <ArticleCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default RelatedPosts
