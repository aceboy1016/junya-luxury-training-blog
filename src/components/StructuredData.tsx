interface StructuredDataProps {
  title: string
  description: string
  content: string
  author: string
  publishedAt: string
  imageUrl?: string
  tags?: string[]
  slug: string
}

const StructuredData = ({
  title,
  description,
  content,
  author,
  publishedAt,
  imageUrl,
  tags,
  slug
}: StructuredDataProps) => {
  // 構造化データを生成
  const structuredData = {
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
    "url": `https://junya-personal-training.com/blog/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://junya-personal-training.com/blog/${slug}`
    }
  }

  // パンくずリスト構造化データ
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://junya-personal-training.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "ブログ",
        "item": "https://junya-personal-training.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://junya-personal-training.com/blog/${slug}`
      }
    ]
  }

  // 組織情報の構造化データ
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JUNYA ISHIHARA PERSONAL TRAINING",
    "description": "プロフェッショナルパーソナルトレーナーによる専門的なトレーニング指導",
    "url": "https://junya-personal-training.com",
    "logo": "https://junya-personal-training.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-3-1234-5678",
      "contactType": "customer service",
      "availableLanguage": "Japanese"
    },
    "sameAs": [
      "https://instagram.com/junya_personal_training",
      "https://twitter.com/junya_pt"
    ],
    "founder": {
      "@type": "Person",
      "name": "JUNYA ISHIHARA",
      "jobTitle": "パーソナルトレーナー",
      "description": "認定パーソナルトレーナーとして10年以上の経験を持つ"
    }
  }

  // FAQデータを抽出
  const faqData = extractFAQData(content)

  // すべての構造化データを統合
  const allStructuredData = [
    structuredData,
    breadcrumbData,
    organizationData
  ]

  // FAQデータがある場合は追加
  if (faqData.mainEntity.length > 0) {
    allStructuredData.push(faqData)
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(allStructuredData)
      }}
    />
  )
}

// コンテンツからFAQデータを抽出
function extractFAQData(content: string): any {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": []
  }

  // Q&Aパターンを検索
  const qaPatterns = [
    /Q[：:]?\s*(.+?)\s*A[：:]?\s*(.+?)(?=Q[：:]|$)/gs,
    /質問[：:]?\s*(.+?)\s*回答[：:]?\s*(.+?)(?=質問[：:]|$)/gs,
    /問[：:]?\s*(.+?)\s*答[：:]?\s*(.+?)(?=問[：:]|$)/gs
  ]

  qaPatterns.forEach(pattern => {
    const matches = content.matchAll(pattern)
    for (const match of matches) {
      const question = match[1]?.trim()
      const answer = match[2]?.trim()
      
      if (question && answer && question.length > 10 && answer.length > 10) {
        faqData.mainEntity.push({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answer
          }
        })
      }
    }
  })

  return faqData
}

export default StructuredData