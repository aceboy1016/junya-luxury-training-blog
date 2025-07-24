// SEO最適化ユーティリティ関数

export interface SEOAnalysis {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  structuredData: any
  readingTime: number
  seoScore: number
  suggestions: string[]
  internalLinks: string[]
}

// SEOキーワード辞書（検索ボリューム重視）
export const SEO_KEYWORDS = {
  // 高検索ボリューム（月1000+）
  high: [
    'パーソナルトレーニング', 'ダイエット方法', '筋トレ', 'プロテイン', 
    '筋肉', '体重減少', 'ワークアウト', 'フィットネス', '減量',
    'スクワット やり方', 'ベンチプレス', 'デッドリフト'
  ],
  // 中検索ボリューム（月500-1000）
  medium: [
    'ホームトレーニング', '筋トレ初心者', '体幹トレーニング', '姿勢改善',
    'プロテイン 効果', '有酸素運動', 'ストレッチ', '筋力アップ',
    'ダイエット 運動', 'トレーニングメニュー'
  ],
  // ロングテール（月100-500）
  long: [
    'スクワット 正しいフォーム', 'ベンチプレス 初心者', 'デッドリフト やり方',
    '姿勢改善 トレーニング', 'ホームトレーニング 器具なし', '筋トレ 毎日',
    'プロテイン 飲み方', 'ダイエット 筋トレ', '体幹 鍛え方'
  ]
}

// 読了時間を計算（日本語対応）
export function calculateReadingTime(content: string): number {
  // 日本語は約400文字/分、英語は約200語/分
  const japaneseChars = (content.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g) || []).length
  const englishWords = content.replace(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g, '').split(/\s+/).filter(word => word.length > 0).length
  
  const japaneseTime = japaneseChars / 400
  const englishTime = englishWords / 200
  
  return Math.ceil(japaneseTime + englishTime)
}

// SEOメタタイトル生成
export function generateSEOTitle(title: string, tags: string[]): string {
  // 既存タイトルが最適な場合はそのまま
  if (title.length >= 25 && title.length <= 35) {
    return title
  }

  // 高検索ボリュームキーワードを含める
  const highVolumeKeywords = SEO_KEYWORDS.high.filter(keyword => 
    tags.some(tag => tag.includes(keyword) || keyword.includes(tag))
  )

  if (highVolumeKeywords.length > 0) {
    const keyword = highVolumeKeywords[0]
    if (!title.includes(keyword)) {
      // 32文字以内に収まるように調整
      const baseTitle = title.slice(0, 32 - keyword.length - 3)
      return `${baseTitle} | ${keyword}`
    }
  }

  return title.slice(0, 32) // 32文字制限
}

// SEOメタディスクリプション生成
export function generateSEODescription(content: string, title: string, tags: string[]): string {
  // コンテンツから最初の段落を抽出
  const firstParagraph = content.split('\n').find(p => p.trim().length > 50) || ''
  
  // キーワードを含む文章を構築
  const relevantKeywords = [
    ...SEO_KEYWORDS.high,
    ...SEO_KEYWORDS.medium
  ].filter(keyword => 
    content.toLowerCase().includes(keyword.toLowerCase()) ||
    tags.some(tag => tag.includes(keyword))
  ).slice(0, 3)

  let description = firstParagraph.slice(0, 120)
  
  // キーワードが含まれていない場合は追加
  if (relevantKeywords.length > 0 && !relevantKeywords.some(kw => description.includes(kw))) {
    const keyword = relevantKeywords[0]
    description = `${keyword}について解説。${description}`
  }

  // 160文字以内に調整
  if (description.length > 157) {
    description = description.slice(0, 154) + '...'
  }

  return description
}

// 構造化データ生成（Article Schema）
export function generateStructuredData(
  title: string,
  description: string,
  content: string,
  author: string,
  publishedAt: string,
  imageUrl?: string,
  tags?: string[]
): any {
  const readingTime = calculateReadingTime(content)
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author,
      "jobTitle": "パーソナルトレーナー",
      "worksFor": {
        "@type": "Organization",
        "name": "JUNYA ISHIHARA PERSONAL TRAINING"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "JUNYA ISHIHARA PERSONAL TRAINING",
      "logo": {
        "@type": "ImageObject",
        "url": "https://junya-personal-training.com/logo.png"
      }
    },
    "datePublished": publishedAt,
    "dateModified": publishedAt,
    "image": imageUrl,
    "keywords": tags?.join(', '),
    "articleSection": "フィットネス・トレーニング",
    "wordCount": content.length,
    "timeRequired": `PT${readingTime}M`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://junya-personal-training.com/blog/${title}`
    }
  }
}

// SEOスコア計算
export function calculateSEOScore(
  title: string,
  description: string,
  content: string,
  tags: string[]
): { score: number, suggestions: string[] } {
  let score = 0
  const suggestions: string[] = []

  // タイトル評価（25点）
  if (title.length >= 25 && title.length <= 35) {
    score += 15
  } else {
    suggestions.push(`タイトルは25-35文字が最適です（現在: ${title.length}文字）`)
  }

  if (SEO_KEYWORDS.high.some(kw => title.toLowerCase().includes(kw.toLowerCase()))) {
    score += 10
  } else {
    suggestions.push('タイトルに高検索ボリュームキーワードを含めましょう')
  }

  // メタディスクリプション評価（20点）
  if (description.length >= 120 && description.length <= 160) {
    score += 15
  } else {
    suggestions.push(`メタディスクリプションは120-160文字が最適です（現在: ${description.length}文字）`)
  }

  if (SEO_KEYWORDS.medium.some(kw => description.toLowerCase().includes(kw.toLowerCase()))) {
    score += 5
  }

  // コンテンツ評価（30点）
  if (content.length >= 1000) {
    score += 15
  } else if (content.length >= 500) {
    score += 10
  } else {
    suggestions.push('コンテンツは1000文字以上が検索エンジンに評価されやすいです')
  }

  // キーワード密度チェック
  const keywordDensity = calculateKeywordDensity(content, tags)
  if (keywordDensity >= 1 && keywordDensity <= 3) {
    score += 10
  } else {
    suggestions.push('キーワード密度は1-3%が最適です')
  }

  // 構造評価（15点）
  if (content.includes('##') || content.includes('#')) {
    score += 8
  } else {
    suggestions.push('見出し（H2、H3）を使用して構造化しましょう')
  }

  if (tags.length >= 3 && tags.length <= 8) {
    score += 7
  } else {
    suggestions.push('タグは3-8個が最適です')
  }

  // 読みやすさ評価（10点）
  const readingTime = calculateReadingTime(content)
  if (readingTime >= 3 && readingTime <= 15) {
    score += 10
  } else if (readingTime > 15) {
    suggestions.push('記事が長すぎる可能性があります（目安: 3-15分）')
  } else {
    suggestions.push('記事が短すぎる可能性があります（目安: 3-15分）')
  }

  return { score: Math.min(score, 100), suggestions }
}

// キーワード密度計算
function calculateKeywordDensity(content: string, keywords: string[]): number {
  const totalWords = content.split(/\s+/).length
  let keywordCount = 0

  keywords.forEach(keyword => {
    const regex = new RegExp(keyword.toLowerCase(), 'gi')
    keywordCount += (content.toLowerCase().match(regex) || []).length
  })

  return (keywordCount / totalWords) * 100
}

// 内部リンク提案生成
export function generateInternalLinkSuggestions(
  content: string,
  tags: string[],
  existingPosts: { title: string, slug: string, tags: string[] }[]
): string[] {
  const suggestions: string[] = []

  // 関連記事を見つける
  const relatedPosts = existingPosts.filter(post => {
    const commonTags = post.tags.filter(tag => tags.includes(tag))
    return commonTags.length >= 1
  }).slice(0, 3)

  relatedPosts.forEach(post => {
    suggestions.push(`関連記事「${post.title}」へのリンクを追加することを検討してください`)
  })

  // 特定のキーワードに対する内部リンク提案
  const linkKeywords = {
    'スクワット': '/blog/squat-guide',
    'ベンチプレス': '/blog/bench-press-guide', 
    'デッドリフト': '/blog/deadlift-guide',
    '姿勢改善': '/blog/posture-improvement',
    'プロテイン': '/blog/protein-guide'
  }

  Object.entries(linkKeywords).forEach(([keyword, url]) => {
    if (content.includes(keyword)) {
      suggestions.push(`「${keyword}」に関する詳細ガイド（${url}）へのリンクを追加できます`)
    }
  })

  return suggestions
}

// 完全なSEO解析実行
export function performSEOAnalysis(
  title: string,
  content: string,
  tags: string[],
  author: string = 'JUNYA ISHIHARA',
  publishedAt: string = new Date().toISOString(),
  imageUrl?: string,
  existingPosts: { title: string, slug: string, tags: string[] }[] = []
): SEOAnalysis {
  const seoTitle = generateSEOTitle(title, tags)
  const seoDescription = generateSEODescription(content, title, tags)
  const structuredData = generateStructuredData(title, seoDescription, content, author, publishedAt, imageUrl, tags)
  const readingTime = calculateReadingTime(content)
  const { score, suggestions } = calculateSEOScore(seoTitle, seoDescription, content, tags)
  const internalLinks = generateInternalLinkSuggestions(content, tags, existingPosts)

  // SEOキーワード抽出
  const keywords = [
    ...SEO_KEYWORDS.high.filter(kw => content.toLowerCase().includes(kw.toLowerCase())),
    ...SEO_KEYWORDS.medium.filter(kw => content.toLowerCase().includes(kw.toLowerCase())),
    ...tags
  ].slice(0, 10)

  return {
    metaTitle: seoTitle,
    metaDescription: seoDescription,
    keywords,
    structuredData,
    readingTime,
    seoScore: score,
    suggestions: [...suggestions, ...internalLinks],
    internalLinks
  }
}