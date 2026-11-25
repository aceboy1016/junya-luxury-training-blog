import Link from 'next/link'
import type { Category } from '@/lib/sanity'

interface CategoryBadgeProps {
  category: Category
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline'
  clickable?: boolean
}

/** カテゴリー名の小さなラベル。色はブランドの空色に統一し、Sanityの色は先頭の点にだけ使う。 */
const CategoryBadge = ({ category, size = 'md', variant = 'outline', clickable = true }: CategoryBadgeProps) => {
  const sizes = { sm: 'h-7 px-3 text-[10px]', md: 'h-8 px-4 text-[11px]', lg: 'h-9 px-5 text-[12px]' }
  const tone =
    variant === 'solid'
      ? 'bg-breeze-500 text-white'
      : 'bg-white/70 text-deep ring-1 ring-breeze-200 hover:ring-breeze-400'

  const badge = (
    <span className={`inline-flex items-center gap-2 rounded-full font-outfit font-semibold tracking-[0.12em] uppercase transition-all duration-500 ${sizes[size]} ${tone}`}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: variant === 'solid' ? '#fff' : category.color || '#4A98D0' }} aria-hidden />
      {category.title}
    </span>
  )

  if (!clickable) return badge
  return <Link href={`/blog/category/${category.slug.current}`}>{badge}</Link>
}

export default CategoryBadge
