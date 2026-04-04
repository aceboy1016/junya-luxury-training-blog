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

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="flex items-center space-x-4 mb-12">
    <span className="w-12 h-12 bg-navy-500 flex items-center justify-center text-white text-[10px] font-black font-outfit uppercase tracking-tighter">{title.slice(0, 3)}</span>
    <div>
      <h2 className="text-2xl font-black text-navy-500 tracking-tighter uppercase font-outfit leading-none mb-2">
        {title}
      </h2>
      <p className="text-[10px] text-zinc-400 font-bold tracking-[0.3em] uppercase leading-none">{subtitle}</p>
    </div>
  </div>
)

const FeaturedSection = ({ featuredPosts }: { featuredPosts: Post[] }) => {
  if (!featuredPosts.length) return null

  return (
    <section className="mb-24">
      <SectionHeader title="Featured" subtitle="注目の記事" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
    <section className="mb-24">
      <SectionHeader title="Latest Assets" subtitle="すべての記事" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
        <div className="text-center py-24 bg-zinc-50 border border-zinc-100">
          <div className="w-20 h-20 bg-white flex items-center justify-center mx-auto mb-8 shadow-sm">
            <i className="ri-article-line text-zinc-200 text-4xl" />
          </div>
          <h3 className="text-lg font-black text-navy-500 mb-2 uppercase font-outfit tracking-widest">
            No Articles Found
          </h3>
          <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            現在公開されている記事がありません
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
      <div className="mb-16">
        <SortOptions />
      </div>
      
      <Suspense fallback={<LoadingSpinner size="lg" text="ASSETS LOADING..." />}>
        {sortOption === 'latest' && <FeaturedSection featuredPosts={featuredPosts} />}
        <BlogGrid posts={posts} />
      </Suspense>
    </div>
  )
}

export default BlogContent