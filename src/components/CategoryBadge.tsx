import Link from 'next/link'
import { Category } from '@/lib/sanity'

interface CategoryBadgeProps {
  category: Category
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline'
  clickable?: boolean
}

const CategoryBadge = ({ 
  category, 
  size = 'md', 
  variant = 'solid',
  clickable = true 
}: CategoryBadgeProps) => {
  const { title, slug, color } = category

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  const getStyleClasses = () => {
    if (variant === 'outline') {
      return {
        backgroundColor: 'transparent',
        color: color,
        border: `2px solid ${color}`,
      }
    }
    
    return {
      backgroundColor: color,
      color: 'white',
    }
  }

  const baseClasses = `
    inline-flex items-center font-semibold rounded-full 
    transition-all duration-300 no-underline
    ${sizeClasses[size]}
    ${clickable ? 'hover:scale-105 hover:shadow-md cursor-pointer' : ''}
  `.trim()

  const badge = (
    <span 
      className={baseClasses}
      style={getStyleClasses()}
    >
      {title}
    </span>
  )

  if (clickable) {
    return (
      <Link href={`/blog/category/${slug.current}`} className="no-underline">
        {badge}
      </Link>
    )
  }

  return badge
}

export default CategoryBadge