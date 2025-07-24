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
        return 'px-2 py-1 text-xs bg-white bg-opacity-25 text-white backdrop-blur-sm hover:bg-white hover:bg-opacity-35'
      case 'outlined':
        return 'px-3 py-1 text-sm border border-junya-orange text-junya-orange hover:bg-junya-orange hover:text-white'
      default:
        return 'px-3 py-1.5 text-sm bg-junya-orange/15 text-junya-orange hover:bg-junya-orange/25'
    }
  }

  const baseTagStyles = `
    inline-flex items-center rounded-full font-medium transition-all duration-200
    ${getTagStyles()}
  `

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        clickable ? (
          <Link
            key={index}
            href={`/blog/search?q=${encodeURIComponent(tag)}`}
            onClick={() => handleTagClick(tag)}
            className={`${baseTagStyles} hover:scale-105`}
          >
            <span className="mr-1">#</span>
            {tag}
          </Link>
        ) : (
          <span
            key={index}
            className={baseTagStyles}
          >
            <span className="mr-1">#</span>
            {tag}
          </span>
        )
      ))}
    </div>
  )
}

export default TagsList