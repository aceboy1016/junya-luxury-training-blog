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
    <div className="min-h-screen bg-junya-light py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-junya-xl shadow-junya-card p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-junya-text mb-2">
              🏷️ AIタグ生成ツール
            </h1>
            <p className="text-junya-gray">
              記事のタイトルと内容を入力して、関連するタグを自動生成します。
            </p>
          </div>

          <div className="space-y-6">
            {/* タイトル入力 */}
            <div>
              <label className="block text-sm font-medium text-junya-text mb-2">
                記事タイトル
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="例: 効果的なスクワットのやり方"
                className="w-full px-4 py-3 border border-junya-border rounded-junya focus:ring-2 focus:ring-junya-gold focus:border-transparent"
              />
            </div>

            {/* コンテンツ入力 */}
            <div>
              <label className="block text-sm font-medium text-junya-text mb-2">
                記事内容
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="記事の内容を入力してください..."
                rows={12}
                className="w-full px-4 py-3 border border-junya-border rounded-junya focus:ring-2 focus:ring-junya-gold focus:border-transparent"
              />
            </div>

            {/* タグ生成器 */}
            {(title || content) && (
              <AutoTagGenerator
                content={convertToPortableText(content)}
                title={title}
                onTagsGenerated={handleTagsGenerated}
              />
            )}

            {/* 結果表示 */}
            {generatedTags.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-junya-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">
                  ✅ 生成完了
                </h3>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-green-700 mb-2">
                    コピー用（カンマ区切り）:
                  </h4>
                  <div className="bg-white p-3 rounded border text-sm font-mono">
                    {generatedTags.join(', ')}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-green-700 mb-2">
                    JSON形式:
                  </h4>
                  <div className="bg-white p-3 rounded border text-sm font-mono">
                    {JSON.stringify(generatedTags, null, 2)}
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