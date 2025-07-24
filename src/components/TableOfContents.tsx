'use client'

import { useState, useEffect } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

const TableOfContents = ({ className = '' }: TableOfContentsProps) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // ページ内の見出しを取得
    const headings = document.querySelectorAll('h2, h3, h4')
    const items: TOCItem[] = []

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`
      if (!heading.id) {
        heading.id = id
      }
      
      items.push({
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      })
    })

    setTocItems(items)
  }, [])

  useEffect(() => {
    // スクロール位置に応じてアクティブな見出しを更新
    const handleScroll = () => {
      const headings = tocItems.map(item => document.getElementById(item.id)).filter(Boolean)
      
      let current = ''
      for (const heading of headings) {
        if (heading && heading.offsetTop <= window.scrollY + 100) {
          current = heading.id
        }
      }
      
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期実行

    return () => window.removeEventListener('scroll', handleScroll)
  }, [tocItems])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  if (tocItems.length === 0) return null

  return (
    <nav className={`card p-6 sticky top-24 ${className}`}>
      <h3 className="text-lg font-semibold text-junya-text mb-4 flex items-center">
        <svg className="w-5 h-5 text-junya-orange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        目次
      </h3>
      <ul className="space-y-2">
        {tocItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToHeading(item.id)}
              className={`
                block w-full text-left text-sm transition-colors duration-200 hover:text-junya-orange
                ${item.level === 2 ? 'font-medium' : ''}
                ${item.level === 3 ? 'pl-4' : ''}
                ${item.level === 4 ? 'pl-8' : ''}
                ${activeId === item.id 
                  ? 'text-junya-orange font-medium border-l-2 border-junya-orange pl-3' 
                  : 'text-junya-gray'
                }
              `}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents