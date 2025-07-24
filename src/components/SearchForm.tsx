'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface SearchFormProps {
  placeholder?: string
  initialValue?: string
  className?: string
}

const SearchForm = ({ 
  placeholder = "記事を検索...", 
  initialValue = "",
  className = ""
}: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState(initialValue)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/blog/search?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-12 pr-4 text-junya-text bg-white border border-junya-border rounded-junya focus:outline-none focus:ring-2 focus:ring-junya-orange focus:border-transparent transition-all duration-300"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg 
            className="w-5 h-5 text-junya-gray" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-junya-orange text-white px-4 py-2 rounded-junya hover:bg-opacity-90 transition-all duration-300 font-medium"
        >
          検索
        </button>
      </div>
    </form>
  )
}

export default SearchForm