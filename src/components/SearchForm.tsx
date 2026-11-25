'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface SearchFormProps {
  placeholder?: string
  initialValue?: string
  className?: string
}

/** 下線だけの静かな検索欄。 */
const SearchForm = ({ placeholder = '記事を検索', initialValue = '', className = '' }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState(initialValue)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchTerm.trim()
    if (q) router.push(`/blog/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <form onSubmit={handleSubmit} role="search" className={`group relative ${className}`}>
      <label className="sr-only" htmlFor="blog-search">記事を検索</label>
      <input
        id="blog-search"
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-full h-14 bg-transparent border-0 border-b border-deep/20 pr-14 text-base text-deep placeholder:text-zinc-400 focus:outline-none focus:border-breeze-500 transition-colors duration-500"
      />
      <span className="absolute left-0 bottom-0 h-px w-full bg-breeze-500 origin-left scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700" aria-hidden />
      <button
        type="submit"
        aria-label="検索する"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-deep hover:bg-breeze-500 hover:text-white transition-colors duration-500"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  )
}

export default SearchForm
