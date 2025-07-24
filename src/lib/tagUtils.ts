// タグ関連のユーティリティ関数

export interface TagAnalysis {
  tag: string
  confidence: number
  source: 'keyword' | 'pattern' | 'length' | 'structure'
}

// フィットネス・トレーニング関連のキーワード辞書（詳細版）
export const FITNESS_KEYWORDS = {
  'トレーニング': {
    keywords: ['トレーニング', '筋トレ', 'ワークアウト', '運動', 'エクササイズ', '鍛える', 'training', 'workout'],
    weight: 1.0
  },
  'ダイエット': {
    keywords: ['ダイエット', '減量', '痩せる', '体重減少', 'ボディメイク', '脂肪燃焼', 'diet', 'weight loss'],
    weight: 1.0
  },
  '筋肉': {
    keywords: ['筋肉', '筋力', 'マッスル', '筋肥大', '筋繊維', '筋力アップ', 'muscle', 'strength'],
    weight: 0.9
  },
  '栄養': {
    keywords: ['栄養', 'タンパク質', '炭水化物', '脂質', 'プロテイン', 'サプリメント', '食事', 'nutrition', 'protein'],
    weight: 0.9
  },
  'スクワット': {
    keywords: ['スクワット', 'squat', 'しゃがみ込み', '太もも', '下半身'],
    weight: 1.2
  },
  'デッドリフト': {
    keywords: ['デッドリフト', 'deadlift', '引き上げ', '背中', '全身'],
    weight: 1.2
  },
  'ベンチプレス': {
    keywords: ['ベンチプレス', 'bench press', '胸筋', 'チェストプレス'],
    weight: 1.2
  },
  '姿勢改善': {
    keywords: ['姿勢', 'posture', '猫背', '背筋', '肩こり', '姿勢改善'],
    weight: 1.1
  },
  'ストレッチ': {
    keywords: ['ストレッチ', 'stretch', '柔軟', '可動域', 'flexibility'],
    weight: 0.8
  },
  '体幹トレーニング': {
    keywords: ['コア', 'core', '体幹', '腹筋', 'インナーマッスル'],
    weight: 1.0
  },
  '有酸素運動': {
    keywords: ['カーディオ', '有酸素', 'cardio', 'ランニング', 'ジョギング', '持久力'],
    weight: 0.9
  },
  'フォーム指導': {
    keywords: ['フォーム', 'form', '正しいフォーム', 'テクニック', '動作'],
    weight: 1.1
  },
  '初心者向け': {
    keywords: ['初心者', 'beginner', 'ビギナー', '入門', '基礎'],
    weight: 0.7
  },
  '上級者向け': {
    keywords: ['上級者', 'advanced', 'プロ', '経験者', '応用'],
    weight: 0.7
  },
  'ホームトレーニング': {
    keywords: ['ホームトレーニング', '自宅', 'home workout', '家トレ', '器具なし'],
    weight: 1.0
  },
  'ジムトレーニング': {
    keywords: ['ジム', 'gym', 'フィットネスクラブ', 'マシン', 'バーベル'],
    weight: 1.0
  },
  '怪我予防': {
    keywords: ['怪我予防', 'injury prevention', '安全', 'ケガ', 'セーフティ'],
    weight: 1.1
  },
  '回復・休息': {
    keywords: ['リカバリー', '回復', 'recovery', '休息', '睡眠', 'rest'],
    weight: 0.8
  },
  'モチベーション': {
    keywords: ['モチベーション', 'motivation', 'やる気', '継続', '習慣'],
    weight: 0.7
  }
}

// タグの信頼度を計算
export function calculateTagConfidence(
  tag: string,
  content: string,
  title: string = ''
): number {
  const fullText = `${title} ${content}`.toLowerCase()
  const tagData = FITNESS_KEYWORDS[tag as keyof typeof FITNESS_KEYWORDS]
  
  if (!tagData) return 0

  let confidence = 0
  let matches = 0

  for (const keyword of tagData.keywords) {
    const keywordLower = keyword.toLowerCase()
    const occurrences = (fullText.match(new RegExp(keywordLower, 'g')) || []).length
    
    if (occurrences > 0) {
      matches++
      confidence += Math.min(occurrences * 0.1, 0.5) // 最大0.5まで
    }
  }

  // 基本信頼度にタグの重みを適用
  confidence = confidence * tagData.weight

  // タイトルに含まれる場合はボーナス
  if (tagData.keywords.some(keyword => title.toLowerCase().includes(keyword.toLowerCase()))) {
    confidence += 0.3
  }

  return Math.min(confidence, 1.0)
}

// 高度なタグ生成（信頼度付き）
export function generateAdvancedTags(
  content: string,
  title: string = '',
  minConfidence: number = 0.2
): TagAnalysis[] {
  const tags: TagAnalysis[] = []

  // キーワードベースのタグ生成
  for (const tag of Object.keys(FITNESS_KEYWORDS)) {
    const confidence = calculateTagConfidence(tag, content, title)
    if (confidence >= minConfidence) {
      tags.push({
        tag,
        confidence,
        source: 'keyword'
      })
    }
  }

  // パターンベースのタグ生成
  const text = content.toLowerCase()
  const patterns = [
    { pattern: /\d+\s*(分|分間|秒|回|セット)/g, tag: '時間・回数', confidence: 0.4 },
    { pattern: /\d+\s*(kg|キロ|ポンド)/g, tag: '重量設定', confidence: 0.5 },
    { pattern: /(週\d+回|毎日|月\d+回)/g, tag: '頻度', confidence: 0.4 },
    { pattern: /(注意|危険|禁止|避ける)/g, tag: '注意事項', confidence: 0.3 },
    { pattern: /(効果|結果|メリット|利点)/g, tag: '効果・メリット', confidence: 0.3 },
    { pattern: /(ステップ|手順|\d+\.|方法)/g, tag: 'ステップガイド', confidence: 0.3 }
  ]

  for (const { pattern, tag, confidence } of patterns) {
    if (pattern.test(text)) {
      tags.push({ tag, confidence, source: 'pattern' })
    }
  }

  // 文章の長さに基づくタグ
  if (content.length > 3000) {
    tags.push({ tag: '詳細解説', confidence: 0.6, source: 'length' })
  } else if (content.length > 1500) {
    tags.push({ tag: '基礎知識', confidence: 0.5, source: 'length' })
  } else if (content.length > 500) {
    tags.push({ tag: 'クイックガイド', confidence: 0.4, source: 'length' })
  }

  // 重複除去と信頼度でソート
  const uniqueTags = tags.reduce((acc, current) => {
    const existing = acc.find(item => item.tag === current.tag)
    if (existing) {
      existing.confidence = Math.max(existing.confidence, current.confidence)
    } else {
      acc.push(current)
    }
    return acc
  }, [] as TagAnalysis[])

  return uniqueTags
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 10) // 最大10個
}

// タグをカテゴリーに分類
export function categorizeTag(tag: string): string {
  const categories = {
    'exercise': ['スクワット', 'デッドリフト', 'ベンチプレス', 'ストレッチ', '有酸素運動', '体幹トレーニング'],
    'nutrition': ['栄養', 'ダイエット', 'プロテイン'],
    'level': ['初心者向け', '上級者向け'],
    'location': ['ホームトレーニング', 'ジムトレーニング'],
    'wellness': ['姿勢改善', '怪我予防', '回復・休息', 'モチベーション'],
    'format': ['詳細解説', '基礎知識', 'クイックガイド', 'ステップガイド', 'Q&A']
  }

  for (const [category, tags] of Object.entries(categories)) {
    if (tags.includes(tag)) {
      return category
    }
  }

  return 'general'
}