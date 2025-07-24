'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { client } from '@/lib/sanity'
import { trackCategoryClick } from '@/lib/gtag'

interface TagWithCount {
  tag: string
  count: number
}

interface TagCloudProps {
  className?: string
  maxTags?: number
  minFontSize?: number
  maxFontSize?: number
}

const TagCloud = ({ 
  className = '', 
  maxTags = 20, 
  minFontSize = 12, 
  maxFontSize = 24 
}: TagCloudProps) => {
  const [tags, setTags] = useState<TagWithCount[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTags = async () => {
      try {
        // 全ての公開記事からタグを取得し、使用回数をカウント
        const query = `
          *[_type == "post" && isPublished == true && defined(tags)] {
            tags
          }
        `
        
        const posts = await client.fetch(query)
        const tagCounts: { [key: string]: number } = {}
        
        // タグの使用回数をカウント
        posts.forEach((post: { tags: string[] }) => {
          if (post.tags) {
            post.tags.forEach((tag: string) => {
              tagCounts[tag] = (tagCounts[tag] || 0) + 1
            })
          }
        })

        // タグを使用回数でソートし、上位のタグを取得
        const sortedTags = Object.entries(tagCounts)
          .map(([tag, count]) => ({ tag, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, maxTags)

        setTags(sortedTags)
      } catch (error) {
        console.error('Error fetching tags:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTags()
  }, [maxTags])

  const getFontSize = (count: number, maxCount: number, minCount: number) => {
    if (maxCount === minCount) return minFontSize
    
    const ratio = (count - minCount) / (maxCount - minCount)
    return minFontSize + (maxFontSize - minFontSize) * ratio
  }

  const getOpacity = (count: number, maxCount: number, minCount: number) => {
    if (maxCount === minCount) return 0.8
    
    const ratio = (count - minCount) / (maxCount - minCount)
    return 0.5 + 0.5 * ratio
  }

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className="animate-pulse space-y-2">
          <div className="flex flex-wrap gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-6 bg-gray-200 rounded-full"
                style={{ width: `${Math.random() * 60 + 40}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (tags.length === 0) {
    return null
  }

  const maxCount = Math.max(...tags.map(t => t.count))
  const minCount = Math.min(...tags.map(t => t.count))

  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-bold text-junya-text mb-4">タグ</h3>
      <div className="flex flex-wrap gap-2 items-center">
        {tags.map(({ tag, count }) => {
          const fontSize = getFontSize(count, maxCount, minCount)
          const opacity = getOpacity(count, maxCount, minCount)
          
          return (
            <Link
              key={tag}
              href={`/blog/search?q=${encodeURIComponent(tag)}`}
              onClick={() => trackCategoryClick(`tag:${tag}`)}
              className="inline-block px-3 py-1 bg-junya-orange/10 text-junya-orange hover:bg-junya-orange hover:text-white rounded-full transition-all duration-200 hover:scale-105"
              style={{
                fontSize: `${fontSize}px`,
                opacity: opacity,
                fontWeight: count > maxCount * 0.7 ? 'bold' : 'medium'
              }}
              title={`${tag} (${count}記事)`}
            >
              #{tag}
              <span className="ml-1 text-xs opacity-75">({count})</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagCloud