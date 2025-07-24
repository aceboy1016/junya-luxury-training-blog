'use client'

import { Suspense } from 'react'
import ArticleCard from './ArticleCard'
import SortOptions from './SortOptions'
import LoadingSpinner from './LoadingSpinner'
import { Post } from '@/lib/sanity'

interface BlogContentProps {
  posts: Post[]
  featuredPosts: Post[]
  sortOption: string
}

const FeaturedSection = ({ featuredPosts }: { featuredPosts: Post[] }) => {
  if (!featuredPosts.length) return null

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-junya-text mb-2">
            注目の記事
          </h2>
          <div className="w-16 h-1 bg-junya-orange rounded-full"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredPosts.slice(0, 2).map((post, index) => (
          <ArticleCard 
            key={post._id} 
            post={post} 
            variant={index === 0 ? "featured" : "default"}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  )
}

const BlogGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-junya-text mb-2">
            すべての記事
          </h2>
          <div className="w-16 h-1 bg-junya-orange rounded-full"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <ArticleCard 
            key={post._id} 
            post={post} 
            variant="default"
            priority={index < 6}
          />
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-junya-text mb-2">
            記事がありません
          </h3>
          <p className="text-junya-gray">
            現在公開されている記事がありません。
          </p>
        </div>
      )}
    </section>
  )
}

const BlogContent = ({ posts, featuredPosts, sortOption }: BlogContentProps) => {
  return (
    <div className="flex-1">
      {/* ソートオプション */}
      <div className="mb-8">
        <SortOptions />
      </div>
      
      <Suspense fallback={<LoadingSpinner size="lg" text="記事を読み込み中..." />}>
        {sortOption === 'latest' && <FeaturedSection featuredPosts={featuredPosts} />}
        <BlogGrid posts={posts} />
      </Suspense>
    </div>
  )
}

export default BlogContent