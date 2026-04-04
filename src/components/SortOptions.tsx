'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface SortOption {
  value: string
  label: string
  icon: string
}

const sortOptions: SortOption[] = [
  { value: 'latest', label: 'Latest', icon: 'ri-calendar-line' },
  { value: 'popular', label: 'Popular', icon: 'ri-fire-line' },
  { value: 'views', label: 'Views', icon: 'ri-eye-line' },
  { value: 'random', label: 'Curated', icon: 'ri-magic-line' },
]

interface SortOptionsProps {
  className?: string
}

const SortOptions = ({ className = '' }: SortOptionsProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentSort = searchParams?.get('sort') || 'latest'

  const handleSortChange = (sortValue: string) => {
    const params = new URLSearchParams(searchParams?.toString())
    
    if (sortValue === 'latest') {
      params.delete('sort')
    } else {
      params.set('sort', sortValue)
    }
    
    const queryString = params.toString()
    const url = queryString ? `/blog?${queryString}` : '/blog'
    
    router.push(url)
  }

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <span className="text-[10px] font-black text-zinc-400 tracking-[0.2em] uppercase py-2">Sort by:</span>
      <div className="flex flex-wrap gap-2">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSortChange(option.value)}
            className={`
              flex items-center gap-3 px-6 py-2.5 transition-all duration-500 text-[10px] font-black tracking-widest uppercase
              ${currentSort === option.value
                ? 'bg-navy-500 text-white shadow-xl'
                : 'bg-zinc-50 text-navy-400 hover:bg-zinc-100'
              }
            `}
          >
            <i className={`${option.icon} text-sm`} />
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SortOptions