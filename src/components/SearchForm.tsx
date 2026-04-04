'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface SearchFormProps {
  placeholder?: string
  initialValue?: string
  className?: string
}

const SearchForm = ({ 
  placeholder = "SEARCH ARTICLES...", 
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
      <div className="relative group">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full px-6 py-4 pl-14 pr-24 text-navy-500 bg-white border border-zinc-100 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500/10 transition-all duration-500 text-[10px] font-black tracking-widest uppercase"
        />
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-navy-200 group-focus-within:text-navy-500 transition-colors">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-navy-500 text-white px-6 py-2.5 text-[10px] font-black tracking-widest uppercase hover:bg-navy-600 transition-all duration-300"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForm