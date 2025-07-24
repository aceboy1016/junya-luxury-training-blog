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
    <section className={`${className}`}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-junya-text mb-2">関連記事</h2>
        <div className="w-16 h-1 bg-junya-orange rounded-full"></div>
        <p className="text-junya-gray mt-3">
          こちらの記事もおすすめです
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="text-center mt-8">
          <p className="text-junya-gray text-sm mb-4">
            他にも{filteredPosts.length - 3}件の関連記事があります
          </p>
          <a 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-junya-orange text-white rounded-full hover:bg-junya-orange-dark transition-colors duration-200 font-medium"
          >
            もっと記事を見る
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </section>
  )
}

export default RelatedPosts