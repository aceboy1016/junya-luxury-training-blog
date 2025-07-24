'use client'

import { useState } from 'react'
import { PortableText } from '@portabletext/react'

interface AutoTagGeneratorProps {
  content: any // Portable Text content
  title: string
  onTagsGenerated: (tags: string[]) => void
  className?: string
}

const AutoTagGenerator = ({ content, title, onTagsGenerated, className = '' }: AutoTagGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedTags, setGeneratedTags] = useState<string[]>([])

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

  const generateTags = async () => {
    setIsGenerating(true)
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

      if (!response.ok) {
        throw new Error('Failed to generate tags')
      }

      const { tags } = await response.json()
      setGeneratedTags(tags)
      onTagsGenerated(tags)
    } catch (error) {
      console.error('Error generating tags:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className={`border border-junya-border rounded-junya-lg p-6 bg-junya-light ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-junya-text">🏷️ 自動タグ生成</h3>
        <button
          onClick={generateTags}
          disabled={isGenerating}
          className={`px-4 py-2 rounded-junya font-medium transition-all duration-300 ${
            isGenerating
              ? 'bg-junya-gray text-white cursor-not-allowed'
              : 'bg-junya-gold text-white hover:bg-junya-gold-dark'
          }`}
        >
          {isGenerating ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>生成中...</span>
            </div>
          ) : (
            'タグを生成'
          )}
        </button>
      </div>

      <p className="text-sm text-junya-gray mb-4">
        記事の内容を分析して、関連するタグを自動生成します。
      </p>

      {generatedTags.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-junya-text mb-3">生成されたタグ:</h4>
          <div className="flex flex-wrap gap-2">
            {generatedTags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-junya-gold text-white shadow-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AutoTagGenerator