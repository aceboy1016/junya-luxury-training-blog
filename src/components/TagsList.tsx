import Link from 'next/link'
import { trackCategoryClick } from '@/lib/gtag'

interface TagsListProps {
  tags: string[]
  className?: string
  variant?: 'default' | 'compact' | 'outlined'
  clickable?: boolean
}

const TagsList = ({ 
  tags, 
  className = '', 
  variant = 'default',
  clickable = true 
}: TagsListProps) => {
  if (!tags || tags.length === 0) {
    return null
  }

  const handleTagClick = (tag: string) => {
    if (clickable) {
      trackCategoryClick(`tag:${tag}`)
    }
  }

  const getTagStyles = () => {
    switch (variant) {
      case 'compact':
        return 'px-3 py-1 text-[8px] bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
      case 'outlined':
        return 'px-4 py-1.5 text-[10px] border border-navy-100 text-navy-400 hover:border-navy-500 hover:text-navy-500'
      default:
        return 'px-5 py-2 text-[10px] bg-zinc-100 text-navy-400 hover:bg-navy-500 hover:text-white'
    }
  }

  const baseTagStyles = `
    inline-flex items-center font-black tracking-widest uppercase transition-all duration-500
    ${getTagStyles()}
  `

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {tags.map((tag, index) => (
        clickable ? (
          <Link
            key={index}
            href={`/blog/search?q=${encodeURIComponent(tag)}`}
            onClick={() => handleTagClick(tag)}
            className={`${baseTagStyles} hover:shadow-xl hover:-translate-y-0.5`}
          >
            <span className="mr-1 opacity-40">#</span>
            {tag}
          </Link>
        ) : (
          <span
            key={index}
            className={baseTagStyles}
          >
            <span className="mr-1 opacity-40">#</span>
            {tag}
          </span>
        )
      ))}
    </div>
  )
}

export default TagsList