'use client'

import Link from 'next/link'
import { trackCategoryClick } from '@/lib/gtag'

interface TagsListProps {
  tags: string[]
  className?: string
  variant?: 'default' | 'compact' | 'outlined'
  clickable?: boolean
}

const TagsList = ({ tags, className = '', clickable = true }: TagsListProps) => {
  if (!tags || tags.length === 0) return null
  const base = 'inline-flex items-center h-8 px-4 rounded-full bg-breeze-50 text-[13px] text-deep/80 transition-colors duration-500'

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li key={tag}>
          {clickable ? (
            <Link
              href={`/blog/search?q=${encodeURIComponent(tag)}`}
              onClick={() => trackCategoryClick(`tag:${tag}`)}
              className={`${base} hover:bg-breeze-500 hover:text-white`}
            >
              <span className="mr-1 text-breeze-500" aria-hidden>#</span>
              {tag}
            </Link>
          ) : (
            <span className={base}>
              <span className="mr-1 text-breeze-500" aria-hidden>#</span>
              {tag}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TagsList
