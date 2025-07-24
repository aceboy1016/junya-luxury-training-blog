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
      <div className={`py-8 border-t border-junya-border ${className}`}>
        <div className="flex items-center space-x-2 text-junya-gray">
          <div className="w-4 h-4 border-2 border-junya-gold border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm">関連タグを生成中...</span>
        </div>
      </div>
    )
  }

  if (allTags.length === 0) {
    return null
  }

  return (
    <div className={`py-8 border-t border-junya-border ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-2xl">🏷️</span>
        <h3 className="text-lg font-semibold text-junya-text">関連タグ</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {allTags.map((tag, index) => (
          <span
            key={index}
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
              existingTags.includes(tag)
                ? 'bg-junya-gold text-white shadow-lg'
                : 'bg-gradient-to-r from-orange-100 to-amber-100 text-junya-text border border-junya-border hover:shadow-md'
            }`}
          >
            <span className="mr-1">#</span>
            {tag}
            {!existingTags.includes(tag) && (
              <span className="ml-2 text-xs bg-white bg-opacity-30 px-1 rounded">
                AI
              </span>
            )}
          </span>
        ))}
      </div>
      
      {autoTags.length > 0 && (
        <p className="text-xs text-junya-gray mt-3 italic">
          ※ AIタグは記事内容を分析して自動生成されました
        </p>
      )}
    </div>
  )
}

export default ArticleTags