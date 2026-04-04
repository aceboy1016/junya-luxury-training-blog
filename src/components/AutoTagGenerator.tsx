'use client'

import { useState } from 'react'

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
    <div className={`bg-white border border-zinc-100 p-10 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-8 h-8 bg-navy-500 flex items-center justify-center text-white text-[10px] font-black font-outfit uppercase tracking-tighter">AI</span>
            <h3 className="text-xl font-black text-navy-500 tracking-tighter uppercase font-outfit">Tag Engine</h3>
          </div>
          <p className="text-[10px] text-zinc-400 font-bold tracking-[0.2em] uppercase">
            記事の内容を分析して、最適なタグを自動生成します。
          </p>
        </div>
        <button
          onClick={generateTags}
          disabled={isGenerating}
          className={`flex items-center px-8 py-4 text-[10px] font-black tracking-widest uppercase transition-all duration-500 ${
            isGenerating
              ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
              : 'bg-navy-500 text-white hover:bg-navy-600 shadow-xl'
          }`}
        >
          {isGenerating ? (
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin"></div>
              <span>Generating...</span>
            </div>
          ) : (
            <>
              <i className="ri-magic-line mr-3 text-lg" />
              Generate Assets
            </>
          )}
        </button>
      </div>

      {generatedTags.length > 0 && (
        <div className="pt-8 border-t border-zinc-50">
          <h4 className="text-[10px] font-black text-zinc-400 tracking-[0.3em] uppercase mb-6">Generated Assets:</h4>
          <div className="flex flex-wrap gap-3">
            {generatedTags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-6 py-2 text-[10px] font-black tracking-widest uppercase bg-zinc-50 text-navy-400 border border-zinc-100"
              >
                <span className="mr-1 opacity-50">#</span>
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AutoTagGenerator