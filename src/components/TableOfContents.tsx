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
        if (heading && heading.offsetTop <= window.scrollY + 120) {
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
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (tocItems.length === 0) return null

  return (
    <nav className={`bg-white border border-zinc-100 p-8 sticky top-24 ${className}`}>
      <div className="flex items-center space-x-3 mb-8">
        <span className="w-8 h-8 bg-navy-500 flex items-center justify-center text-white text-[10px] font-black font-outfit uppercase tracking-tighter">TOC</span>
        <h3 className="text-sm font-black text-navy-500 tracking-[0.2em] uppercase font-outfit">Contents</h3>
      </div>
      <ul className="space-y-4">
        {tocItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToHeading(item.id)}
              className={`
                block w-full text-left text-[11px] leading-relaxed transition-all duration-300 uppercase tracking-widest
                ${item.level === 2 ? 'font-black' : 'font-medium'}
                ${item.level === 3 ? 'pl-4' : ''}
                ${item.level === 4 ? 'pl-8' : ''}
                ${activeId === item.id 
                  ? 'text-navy-500 border-l-2 border-navy-500 pl-3' 
                  : 'text-zinc-400 hover:text-navy-300 hover:translate-x-1'
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