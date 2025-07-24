import { Metadata } from 'next'
import Link from 'next/link'
import { getFeaturedPosts } from '@/lib/sanity'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'JUNYA ISHIHARA PERSONAL TRAINING',
  description: 'プロフェッショナルパーソナルトレーナーJUNYA ISHIHARAによる、あなた専用のトレーニングプログラム。理想の体づくりを実現します。',
  keywords: ['パーソナルトレーニング', 'JUNYA ISHIHARA', 'フィットネス', 'ダイエット', 'ボディメイク'],
  openGraph: {
    title: 'JUNYA ISHIHARA PERSONAL TRAINING',
    description: 'プロフェッショナルパーソナルトレーナーJUNYA ISHIHARAによる、あなた専用のトレーニングプログラム。理想の体づくりを実現します。',
    type: 'website',
    locale: 'ja_JP',
  },
}

const HeroSection = () => (
  <section 
    id="home" 
    className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden text-white"
    style={{
      background: `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), 
                   radial-gradient(ellipse at center, rgba(245, 158, 11, 0.1) 0%, transparent 70%), 
                   url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
    {/* Animated background elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl animate-pulse"
           style={{background: 'linear-gradient(135deg, #F59E0B, #D97706)'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full filter blur-3xl animate-pulse"
           style={{
             background: 'linear-gradient(135deg, #F59E0B, #D97706)',
             animationDelay: '2s'
           }}></div>
    </div>
    
    <div className="container mx-auto px-6 text-center relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced subtitle */}
        <div className="mb-8">
          <p className="text-junya-amber text-xl tracking-widest uppercase font-bold mb-2 animate-fade-in">
            Premium Personal Training
          </p>
          <div className="w-20 h-1 mx-auto" style={{background: 'linear-gradient(135deg, #F59E0B, #D97706)'}}></div>
        </div>
        
        {/* Enhanced main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight mb-12 animate-fade-in" 
            style={{animationDelay: '0.3s'}}>
          『しなきゃ』を<br />
          <span className="bg-gradient-to-r from-yellow-400 via-junya-gold to-amber-600 bg-clip-text text-transparent">
            『したい！』
          </span><br />
          に変える
        </h1>
        
        {/* Enhanced description */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-16 leading-relaxed font-light animate-fade-in" 
           style={{animationDelay: '0.6s'}}>
          お客様一人ひとりの身体と目標に合わせた『ちょうどいい』トレーニングで、健康で充実した毎日をサポートします
        </p>
        
        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in" 
             style={{animationDelay: '0.9s'}}>
          <Link 
            href="#contact" 
            className="bg-gradient-to-r from-junya-gold to-junya-gold-dark text-white px-12 py-5 font-black tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase text-lg border-2 border-transparent hover:border-white/20 relative group"
          >
            <span className="mr-3">📅</span>体験トレーニング予約
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link 
            href="#service-flow" 
            className="border-2 border-white text-white px-12 py-5 font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 uppercase text-lg backdrop-blur-sm"
          >
            <span className="mr-3">▶</span>詳しく見る
          </Link>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in" 
             style={{animationDelay: '1.2s'}}>
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl font-black text-junya-amber mb-3 group-hover:scale-110 transition-transform duration-300">3000+</div>
            <div className="text-white font-bold tracking-wide uppercase">指導実績</div>
            <div className="text-gray-300 text-sm mt-1">Proven Track Record</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl font-black text-junya-amber mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
            <div className="text-white font-bold tracking-wide uppercase">年の経験</div>
            <div className="text-gray-300 text-sm mt-1">Years of Excellence</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl font-black text-junya-amber mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-white font-bold tracking-wide uppercase">満足度</div>
            <div className="text-gray-300 text-sm mt-1">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <Link href="#service-flow" className="text-white/70 hover:text-white transition-colors duration-300">
        <div className="text-2xl">↓</div>
      </Link>
    </div>
  </section>
)

const MethodologySection = () => (
  <section id="methodology" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-20">
        <p className="text-junya-gold font-bold tracking-widest uppercase mb-2">OUR METHOD</p>
        <h2 className="text-5xl font-black text-black mb-4 tracking-wide">
          ELITE <span className="bg-gradient-to-r from-junya-gold via-junya-gold-dark to-junya-gold-darker bg-clip-text text-transparent">METHODOLOGY</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">
          科学的根拠と豊富な経験に基づいた独自のメソッドで、確実な結果と最高級の体験をお約束いたします
        </p>
      </div>

      {/* Methodology Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative max-w-7xl mx-auto">
        {[
          {
            number: "01",
            title: "ASSESSMENT",
            subtitle: "詳細分析",
            description: "お客様の体組成、姿勢、動作パターン、ライフスタイルを徹底的に分析。最新の測定機器を使用した科学的アプローチで現状を正確に把握します。"
          },
          {
            number: "02", 
            title: "DESIGN",
            subtitle: "プログラム設計",
            description: "分析結果を基に、お客様専用のトレーニングプログラムを設計。目標達成のための最適なルートを科学的根拠と経験に基づき構築します。"
          },
          {
            number: "03",
            title: "EXECUTION",
            subtitle: "実践指導", 
            description: "マンツーマンでの完全個別指導。正しいフォーム、適切な負荷設定、効果的な動作パターンを丁寧に指導し、安全かつ効率的な結果を追求します。"
          },
          {
            number: "04",
            title: "EVOLUTION",
            subtitle: "継続進化",
            description: "定期的な測定と評価により、プログラムを継続的に最適化。お客様の進歩に合わせて、常に最高のパフォーマンスを引き出すアプローチを提供します。"
          }
        ].map((step, index) => (
          <div key={index} className="relative p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-junya-gold">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-junya-gold to-junya-gold-dark text-white flex-shrink-0 flex items-center justify-center text-2xl font-bold mr-4">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">{step.title}</h3>
                <p className="text-junya-gold font-semibold">{step.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const BlogSection = async () => {
  const featuredPosts = await getFeaturedPosts()
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-20">
          <p className="text-junya-gold font-bold tracking-widest uppercase mb-2">INSIGHTS</p>
          <h2 className="text-5xl font-black text-black mb-4 tracking-wide">
            JUNYA'S <span className="bg-gradient-to-r from-junya-gold via-junya-gold-dark to-junya-gold-darker bg-clip-text text-transparent">BLOG</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">
            プロフェッショナルの視点から、トレーニングや栄養に関する最新情報と専門知識をお届けします
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {featuredPosts.slice(0, 3).map((post) => (
            <ArticleCard key={post._id} post={post} />
          ))}
        </div>
        
        <Link
          href="/blog"
          className="btn-primary inline-block text-lg px-12 py-5"
        >
          ブログ一覧を見る
        </Link>
      </div>
    </section>
  )
}

const ContactSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
    <div className="container mx-auto px-6 text-center">
      <div className="mb-20">
        <p className="text-junya-amber font-bold tracking-widest uppercase mb-2">GET STARTED</p>
        <h2 className="text-5xl font-black mb-6 tracking-wide">
          CONTACT
        </h2>
        <p className="text-2xl mb-4 font-light">
          理想の体づくりを始めませんか？
        </p>
        <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
          無料カウンセリングで、あなたの目標に合わせた最適なプランをご提案します。<br />
          お気軽にお問い合わせください。
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-junya-gold to-junya-gold-dark text-white px-12 py-5 font-black tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase text-lg"
        >
          無料体験予約
        </Link>
        <Link
          href="/contact"
          className="border-2 border-white text-white px-12 py-5 font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 uppercase text-lg backdrop-blur-sm"
        >
          お問い合わせ
        </Link>
      </div>
    </div>
  </section>
)

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MethodologySection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}