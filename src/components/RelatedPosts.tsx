import { Post } from '@/lib/sanity'
import ArticleCard from './ArticleCard'

interface RelatedPostsProps {
  posts: Post[]
  currentPostId: string
  className?: string
}

const RelatedPosts = ({ posts, currentPostId, className = '' }: RelatedPostsProps) => {
  // 現在の記事を除外
  const filteredPosts = posts.filter(post => post._id !== currentPostId)
  
  if (filteredPosts.length === 0) {
    return null
  }

  return (
    <section className={`py-24 border-t border-zinc-100 ${className}`}>
      <div className="mb-16">
        <div className="flex items-center space-x-3 mb-6">
          <span className="w-10 h-10 bg-navy-500 flex items-center justify-center text-white text-[10px] font-black font-outfit uppercase tracking-tighter">REL</span>
          <h2 className="text-2xl font-black text-navy-500 tracking-tighter uppercase font-outfit">Related Assets</h2>
        </div>
        <p className="text-zinc-500 text-[10px] font-black tracking-[0.3em] uppercase">
          こちらの記事もあなたの目的達成に役立つかもしれません
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredPosts.slice(0, 3).map((post, index) => (
          <ArticleCard 
            key={post._id} 
            post={post} 
            variant="default"
            priority={index === 0}
          />
        ))}
      </div>

      {filteredPosts.length > 3 && (
        <div className="text-center mt-20">
          <div className="w-1 h-20 bg-zinc-100 mx-auto mb-10"></div>
          <a 
            href="/blog" 
            className="inline-flex items-center px-12 py-5 bg-navy-500 text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-navy-600 transition-all duration-500"
          >
            Explore More
            <i className="ri-arrow-right-line ml-4" />
          </a>
        </div>
      )}
    </section>
  )
}

export default RelatedPosts