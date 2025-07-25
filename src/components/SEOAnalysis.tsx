'use client'

import { useState } from 'react'

interface SEOAnalysisProps {
  content: any // Portable Text content
  title: string
  existingTags?: string[]
  className?: string
}

interface SEOResult {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  seoScore: number
  suggestions: string[]
  readingTime: number
  autoGeneratedTags: string[]
  analysis: any
}

const SEOAnalysis = ({ content, title, existingTags = [], className = '' }: SEOAnalysisProps) => {
  const [seoResult, setSeoResult] = useState<SEOResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'keywords' | 'suggestions' | 'technical'>('overview')

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

  const performSEOAnalysis = async () => {
    setIsAnalyzing(true)
    try {
      const textContent = convertPortableTextToString(content)
      
      const response = await fetch('/api/seo-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content: textContent,
          existingTags
        })
      })

      if (!response.ok) {
        throw new Error('Failed to perform SEO analysis')
      }

      const result = await response.json()
      setSeoResult(result)
    } catch (error) {
      console.error('Error performing SEO analysis:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return '優秀'
    if (score >= 60) return '良好'
    if (score >= 40) return '要改善'
    return '要大幅改善'
  }

  return (
    <div className={`border border-junya-border rounded-junya-xl bg-white shadow-junya-card ${className}`}>
      <div className="p-6 border-b border-junya-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-junya-text mb-2">
              🔍 SEO分析・最適化
            </h3>
            <p className="text-junya-gray text-sm">
              記事のSEOパフォーマンスを分析し、改善提案を提供します
            </p>
          </div>
          <button
            onClick={performSEOAnalysis}
            disabled={isAnalyzing}
            className={`px-6 py-3 rounded-junya font-medium transition-all duration-300 ${
              isAnalyzing
                ? 'bg-junya-gray text-white cursor-not-allowed'
                : 'bg-junya-gold text-white hover:bg-junya-gold-dark shadow-lg hover:shadow-xl'
            }`}
          >
            {isAnalyzing ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>分析中...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>🚀</span>
                <span>SEO分析実行</span>
              </div>
            )}
          </button>
        </div>
      </div>

      {seoResult && (
        <div>
          {/* タブナビゲーション */}
          <div className="flex border-b border-junya-border">
            {[
              { key: 'overview', label: '📊 概要', icon: '📊' },
              { key: 'keywords', label: '🏷️ キーワード', icon: '🏷️' },
              { key: 'suggestions', label: '💡 提案', icon: '💡' },
              { key: 'technical', label: '⚙️ 技術的', icon: '⚙️' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-junya-gold text-white border-b-2 border-junya-gold'
                    : 'text-junya-gray hover:text-junya-text hover:bg-junya-light'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* 概要タブ */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* SEOスコア */}
                <div className="text-center">
                  <div className={`inline-flex items-center px-6 py-3 rounded-full text-2xl font-bold ${getScoreColor(seoResult.seoScore)}`}>
                    <span className="mr-2">🎯</span>
                    {seoResult.seoScore}/100
                    <span className="ml-2 text-sm font-normal">({getScoreLabel(seoResult.seoScore)})</span>
                  </div>
                </div>

                {/* 基本情報 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-junya p-4 text-center">
                    <div className="text-2xl mb-2">⏱️</div>
                    <div className="text-sm text-junya-gray">読了時間</div>
                    <div className="text-lg font-bold text-junya-text">{seoResult.readingTime}分</div>
                  </div>
                  <div className="bg-green-50 rounded-junya p-4 text-center">
                    <div className="text-2xl mb-2">🏷️</div>
                    <div className="text-sm text-junya-gray">生成タグ</div>
                    <div className="text-lg font-bold text-junya-text">{seoResult.autoGeneratedTags.length}個</div>
                  </div>
                  <div className="bg-purple-50 rounded-junya p-4 text-center">
                    <div className="text-2xl mb-2">🔤</div>
                    <div className="text-sm text-junya-gray">文字数</div>
                    <div className="text-lg font-bold text-junya-text">{seoResult.analysis.contentAnalysis.wordCount}</div>
                  </div>
                </div>

                {/* メタデータプレビュー */}
                <div className="bg-gray-50 rounded-junya p-4">
                  <h4 className="font-semibold text-junya-text mb-3">🔍 検索結果プレビュー</h4>
                  <div className="bg-white rounded border p-4 max-w-md">
                    <div className="text-blue-600 text-lg font-medium line-clamp-1">{seoResult.metaTitle}</div>
                    <div className="text-green-600 text-sm">junya-personal-training.com</div>
                    <div className="text-gray-600 text-sm mt-1 line-clamp-2">{seoResult.metaDescription}</div>
                  </div>
                </div>
              </div>
            )}

            {/* キーワードタブ */}
            {activeTab === 'keywords' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-junya-text mb-3">🎯 主要キーワード</h4>
                  <div className="flex flex-wrap gap-2">
                    {seoResult.analysis.keywordAnalysis.primaryKeywords.map((keyword: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        🔥 {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-junya-text mb-3">📈 関連キーワード</h4>
                  <div className="flex flex-wrap gap-2">
                    {seoResult.analysis.keywordAnalysis.secondaryKeywords.map((keyword: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        📊 {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-junya-text mb-3">🎯 ロングテールキーワード</h4>
                  <div className="flex flex-wrap gap-2">
                    {seoResult.analysis.keywordAnalysis.longTailKeywords.map((keyword: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        🌱 {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 提案タブ */}
            {activeTab === 'suggestions' && (
              <div className="space-y-4">
                <h4 className="font-semibold text-junya-text mb-3">💡 改善提案</h4>
                {seoResult.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-junya">
                    <span className="text-blue-600 mt-0.5">💡</span>
                    <span className="text-sm text-blue-800">{suggestion}</span>
                  </div>
                ))}
              </div>
            )}

            {/* 技術的タブ */}
            {activeTab === 'technical' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-junya-text mb-3">📊 コンテンツ構造</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <div className="text-sm text-junya-gray">段落数</div>
                      <div className="text-lg font-bold">{seoResult.analysis.contentAnalysis.paragraphCount}</div>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <div className="text-sm text-junya-gray">見出し数</div>
                      <div className="text-lg font-bold">{seoResult.analysis.contentAnalysis.headingCount}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-junya-text mb-3">🔍 メタデータ</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-junya-gray">タイトル ({seoResult.metaTitle.length}/60文字)</label>
                      <div className="bg-gray-50 rounded p-2 text-sm font-mono">{seoResult.metaTitle}</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-junya-gray">ディスクリプション ({seoResult.metaDescription.length}/160文字)</label>
                      <div className="bg-gray-50 rounded p-2 text-sm font-mono">{seoResult.metaDescription}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SEOAnalysis