'use client'

import { useState, useEffect } from 'react'

interface ArticleTagsProps {
  content: any // Portable Text content
  title: string
  existingTags?: string[]
  className?: string
}

const ArticleTags = ({ content, title, existingTags = [], className = '' }: ArticleTagsProps) => {
  const [autoTags, setAutoTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Portable Textコンテンツをプレーンテキストに変換
  const convertPortableTextToString = (content: any): string => {
    if (!content) return ''
    
    return content.map((block: any) => {
      if (block._type === 'block') {
        return block.children?.map((child: any) => child.text).join('') || ''
      }
      return ''
    }).join(' ')
  }

  useEffect(() => {
    const generateAutoTags = async () => {
      try {
        const textContent = convertPortableTextToString(content)
        
        const response = await fetch('/api/generate-tags', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: textContent,
            title: title
          })
        })

        if (response.ok) {
          const { tags } = await response.json()
          setAutoTags(tags)
        }
      } catch (error) {
        console.error('Error generating auto tags:', error)
      } finally {
        setIsLoading(false)
      }
    }

    generateAutoTags()
  }, [content, title])

  // 既存のタグと自動生成タグを組み合わせ（重複除去）
  const allTags = [...new Set([...existingTags, ...autoTags])]

  if (isLoading) {
    return (
      <div className={`py-12 border-t border-zinc-100 ${className}`}>
        <div className="flex items-center space-x-3 text-navy-300 mb-6">
          <div className="w-4 h-4 border-2 border-navy-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase">Analyzing Expertise...</span>
        </div>
      </div>
    )
  }

  if (allTags.length === 0) {
    return null
  }

  return (
    <div className={`py-16 border-t border-zinc-100 ${className}`}>
      <div className="flex items-center space-x-4 mb-10">
        <span className="w-10 h-10 bg-navy-500 flex items-center justify-center text-white text-sm font-outfit uppercase">TAG</span>
        <h3 className="text-xl font-black text-navy-500 tracking-tighter uppercase font-outfit">Related Assets</h3>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {allTags.map((tag, index) => (
          <span
            key={index}
            className={`inline-flex items-center px-6 py-2 text-[10px] font-black tracking-widest uppercase transition-all duration-500 ${
              existingTags.includes(tag)
                ? 'bg-navy-500 text-white shadow-xl scale-105'
                : 'bg-zinc-50 text-navy-400 border border-zinc-100 hover:border-navy-500'
            }`}
          >
            <span className="mr-1 opacity-40">#</span>
            {tag}
          </span>
        ))}
      </div>
      
      {autoTags.length > 0 && (
        <p className="text-[8px] text-zinc-400 font-bold tracking-widest uppercase mt-8 italic ml-1">
          ※ Smart Analysis generated professional tags based on article content
        </p>
      )}
    </div>
  )
}

export default ArticleTags