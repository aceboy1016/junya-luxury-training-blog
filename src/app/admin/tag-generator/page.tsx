'use client'

import { useState } from 'react'
import AutoTagGenerator from '@/components/AutoTagGenerator'

export default function TagGeneratorPage() {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [generatedTags, setGeneratedTags] = useState<string[]>([])

  const handleTagsGenerated = (tags: string[]) => {
    setGeneratedTags(tags)
  }

  // テキストコンテンツをPortable Text形式に変換（簡易版）
  const convertToPortableText = (text: string) => {
    return text.split('\n\n').map(paragraph => ({
      _type: 'block',
      children: [{ text: paragraph, _type: 'span' }]
    }))
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-zinc-100 shadow-2xl p-16">
          <div className="mb-16 border-b border-zinc-50 pb-10 flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="w-10 h-10 bg-navy-500 flex items-center justify-center text-white text-[10px] font-black font-outfit uppercase tracking-tighter">AI</span>
                <h1 className="text-4xl font-black text-navy-500 tracking-tighter uppercase font-outfit">
                  Asset Generator
                </h1>
              </div>
              <p className="text-[10px] text-zinc-400 font-bold tracking-[0.3em] uppercase">
                リサーチ分析に基づき、最適な記事アセットを自動生成
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {/* タイトル入力 */}
            <div>
              <label className="block text-[10px] font-black text-navy-500 tracking-[0.4em] uppercase mb-4">
                Asset Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title..."
                className="w-full px-8 py-5 bg-zinc-50 border border-zinc-100 focus:border-navy-500 focus:outline-none text-navy-500 font-medium transition-colors"
              />
            </div>

            {/* コンテンツ入力 */}
            <div>
              <label className="block text-[10px] font-black text-navy-500 tracking-[0.4em] uppercase mb-4">
                Core Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter content details..."
                rows={10}
                className="w-full px-8 py-6 bg-zinc-50 border border-zinc-100 focus:border-navy-500 focus:outline-none text-navy-500 leading-relaxed font-medium transition-colors resize-none"
              />
            </div>

            {/* タグ生成器 */}
            {(title || content) && (
              <div className="pt-8">
                <AutoTagGenerator
                  content={convertToPortableText(content)}
                  title={title}
                  onTagsGenerated={handleTagsGenerated}
                />
              </div>
            )}

            {/* 結果表示 */}
            {generatedTags.length > 0 && (
              <div className="bg-navy-500 p-12 text-white shadow-2xl">
                <div className="flex items-center space-x-4 mb-8">
                  <i className="ri-checkbox-circle-line text-2xl" />
                  <h3 className="text-sm font-black tracking-[0.4em] uppercase font-outfit">
                    Processing Complete
                  </h3>
                </div>
                
                <div className="space-y-10">
                  <div>
                    <h4 className="text-[8px] font-black text-white/40 tracking-[0.4em] uppercase mb-4">
                      Assets (Comma Separated)
                    </h4>
                    <div className="bg-black/20 p-6 text-sm font-mono tracking-wider break-all select-all">
                      {generatedTags.join(', ')}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[8px] font-black text-white/40 tracking-[0.4em] uppercase mb-4">
                      JSON Object
                    </h4>
                    <div className="bg-black/20 p-6 text-sm font-mono tracking-wider select-all overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{JSON.stringify(generatedTags, null, 2)}</pre>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}