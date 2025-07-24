'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface SortOption {
  value: string
  label: string
  icon: string
}

const sortOptions: SortOption[] = [
  { value: 'latest', label: '最新順', icon: '📅' },
  { value: 'popular', label: '人気順', icon: '🔥' },
  { value: 'views', label: 'アクセス数順', icon: '👁️' },
  { value: 'random', label: 'おすすめ順', icon: '✨' },
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
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <span className="text-sm font-medium text-junya-gray mr-3 py-2">並び順:</span>
      {sortOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => handleSortChange(option.value)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${currentSort === option.value
              ? 'bg-junya-orange text-white shadow-md'
              : 'bg-gray-100 text-junya-gray hover:bg-gray-200 hover:text-junya-text'
            }
          `}
        >
          <span>{option.icon}</span>
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default SortOptions