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
  minFontSize = 10, 
  maxFontSize = 18 
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

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className="animate-pulse flex flex-wrap gap-3">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-8 bg-zinc-50 border border-zinc-100"
              style={{ width: `${Math.random() * 80 + 60}px` }}
            />
          ))}
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
    <div className={`bg-white border border-zinc-100 p-10 ${className}`}>
      <div className="flex items-center space-x-3 mb-10">
        <span className="w-8 h-8 bg-navy-500 flex items-center justify-center text-white text-[10px] font-black font-outfit uppercase tracking-tighter">CLD</span>
        <h3 className="text-sm font-black text-navy-500 tracking-[0.2em] uppercase font-outfit">Cloud</h3>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        {tags.map(({ tag, count }) => {
          const ratio = (count - minCount) / (maxCount - minCount || 1)
          const fontSize = minFontSize + (maxFontSize - minFontSize) * ratio
          
          return (
            <Link
              key={tag}
              href={`/blog/search?q=${encodeURIComponent(tag)}`}
              onClick={() => trackCategoryClick(`tag:${tag}`)}
              className="inline-flex items-center px-4 py-2 border border-zinc-100 bg-zinc-50 text-navy-400 hover:border-navy-500 hover:text-navy-500 transition-all duration-500 font-bold uppercase tracking-widest shadow-sm hover:shadow-xl hover:-translate-y-1"
              style={{
                fontSize: `${fontSize}px`,
              }}
              title={`${tag} (${count} posts)`}
            >
              <span className="mr-1 opacity-30 text-[0.8em]">#</span>
              {tag}
              <span className="ml-2 text-[8px] opacity-40 font-outfit">[{count}]</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagCloud