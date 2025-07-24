import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getPostsByCategory, getAllCategorySlugs, getAllCategories } from '@/lib/sanity'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import CategoryBadge from '@/components/CategoryBadge'
import Breadcrumb from '@/components/Breadcrumb'
import SearchForm from '@/components/SearchForm'

interface Props {
  params: { slug: string }
}

// メタデータ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)
  
  if (!category) {
    return {
      title: 'カテゴリーが見つかりません | JUNYA ISHIHARA PERSONAL TRAINING',
    }
  }

  const { title, description } = category

  return {
    title: `${title}の記事一覧 | JUNYA ISHIHARA PERSONAL TRAINING`,
    description: description || `${title}に関する記事一覧です。プロトレーナーJUNYA ISHIHARAによる専門的な情報をお届けします。`,
    openGraph: {
      title: `${title}の記事一覧 | JUNYA ISHIHARA PERSONAL TRAINING`,
      description: description || `${title}に関する記事一覧です。`,
      type: 'website',
      locale: 'ja_JP',
    },
  }
}

// 静的パス生成
export async function generateStaticParams() {
  const slugs = await getAllCategorySlugs()
  return slugs.map((slug) => ({ slug }))
}

// カテゴリーヘッダー
const CategoryHeader = ({ category, postCount }: { category: any; postCount: number }) => (
  <section className="bg-gradient-to-br from-junya-light to-white py-16">
    <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-6">
        <CategoryBadge category={category} size="lg" clickable={false} />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-junya-text mb-6">
        {category.title}
      </h1>
      {category.description && (
        <p className="text-xl text-junya-gray max-w-3xl mx-auto mb-6 leading-relaxed">
          {category.description}
        </p>
      )}
      <p className="text-junya-gray mb-8">
        <span className="font-semibold text-junya-orange">{postCount}</span>件の記事があります
      </p>
      <div className="max-w-md mx-auto">
        <SearchForm placeholder={`${category.title}の記事を検索...`} />
      </div>
    </div>
  </section>
)

// カテゴリーフィルター
const CategoryFilter = ({ categories, currentCategory }: { categories: any[]; currentCategory: any }) => (
  <section className="bg-white border-b border-junya-border">
    <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-lg font-semibold text-junya-text mb-4">他のカテゴリー</h2>
      <div className="flex flex-wrap gap-3">
        {categories
          .filter(cat => cat._id !== currentCategory._id)
          .map((category) => (
            <CategoryBadge 
              key={category._id} 
              category={category} 
              variant="outline"
            />
          ))}
      </div>
    </div>
  </section>
)

// 記事グリッド
const PostsGrid = ({ posts, category }: { posts: any[]; category: any }) => (
  <section className="py-12">
    <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8">
      {posts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-junya-text mb-2">
            このカテゴリーにはまだ記事がありません
          </h3>
          <p className="text-junya-gray mb-6">
            {category.title}に関する記事は現在準備中です。他のカテゴリーもぜひご覧ください。
          </p>
          <a href="/blog" className="btn-primary">
            全ての記事を見る
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <ArticleCard 
              key={post._id} 
              post={post}
              variant={index === 0 && posts.length > 1 ? 'featured' : 'default'}
              priority={index === 0}
            />
          ))}
        </div>
      )}
    </div>
  </section>
)

export default async function CategoryPage({ params }: Props) {
  try {
    const { slug } = await params
    const [category, posts, allCategories] = await Promise.all([
      getCategoryBySlug(slug),
      getCategoryBySlug(slug).then(async (cat) => {
        if (cat) {
          return await getPostsByCategory(cat._id)
        }
        return []
      }),
      getAllCategories(),
    ])

    if (!category) {
      notFound()
    }

    const breadcrumbItems = [
      { label: 'ブログ', href: '/blog' },
      { label: category.title }
    ]

    return (
      <>
        <Header />
        <main className="min-h-screen">
          <CategoryHeader category={category} postCount={posts.length} />
          <CategoryFilter categories={allCategories} currentCategory={category} />
          <PostsGrid posts={posts} category={category} />
          
          {/* ナビゲーション */}
          <section className="bg-junya-light py-8">
            <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <a 
                  href="/blog"
                  className="btn-secondary w-full sm:w-auto"
                >
                  ← ブログ一覧に戻る
                </a>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a 
                    href="/"
                    className="btn-primary w-full sm:w-auto"
                  >
                    ホームページへ
                  </a>
                  <a 
                    href="/contact"
                    className="btn-primary w-full sm:w-auto"
                  >
                    体験予約
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  } catch (error) {
    console.error('Error loading category page:', error)
    notFound()
  }
}