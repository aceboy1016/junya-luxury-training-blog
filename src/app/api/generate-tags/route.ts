import { NextRequest, NextResponse } from 'next/server'
import { generateAdvancedTags, categorizeTag } from '@/lib/tagUtils'

export async function POST(request: NextRequest) {
  try {
    const { content, title, minConfidence = 0.2, maxTags = 8 } = await request.json()

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      )
    }

    // 高度なタグ生成を実行
    const tagAnalysis = generateAdvancedTags(content, title, minConfidence)
    
    // 最大タグ数で制限
    const limitedTags = tagAnalysis.slice(0, maxTags)
    
    // タグ名のみの配列（後方互換性のため）
    const tags = limitedTags.map(analysis => analysis.tag)
    
    // 詳細な解析結果も返す
    const analysis = limitedTags.map(item => ({
      ...item,
      category: categorizeTag(item.tag)
    }))

    return NextResponse.json({ 
      tags, 
      analysis,
      metadata: {
        totalAnalyzed: tagAnalysis.length,
        contentLength: content.length,
        titleProvided: !!title
      }
    })
  } catch (error) {
    console.error('Error generating tags:', error)
    return NextResponse.json(
      { error: 'Failed to generate tags' },
      { status: 500 }
    )
  }
}