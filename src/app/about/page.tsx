import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | JUNYA ISHIHARA PERSONAL TRAINING',
  description: 'プロフェッショナルパーソナルトレーナー石原淳哉のプロフィール、経歴、資格、トレーニングへの想いをご紹介します。',
  keywords: ['石原淳哉', 'パーソナルトレーナー', 'NASM-PES', 'コンディショニング', 'TOPFORM', 'HALLEL'],
  openGraph: {
    title: 'About | JUNYA ISHIHARA PERSONAL TRAINING',
    description: 'プロフェッショナルパーソナルトレーナー石原淳哉のプロフィール、経歴、資格、トレーニングへの想いをご紹介します。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-junya-light to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-junya-text mb-6">
                ABOUT{' '}
                <span className="bg-gradient-to-r from-junya-gold to-junya-amber bg-clip-text text-transparent">
                  JUNYA
                </span>
              </h1>
              <p className="text-xl text-junya-gray max-w-3xl mx-auto leading-relaxed">
                コンディショニングを重視したパーソナルトレーニングで、<br />
                お客様の身体の問題解決と目標達成をサポートしています。
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* プロフィール画像 */}
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-junya-card">
                  <Image
                    src="/profile-junya.jpg"
                    alt="石原淳哉 プロフィール写真"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* プロフィール情報 */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-4">
                    石原 淳哉
                    <span className="block text-xl font-normal text-junya-gray mt-2">
                      Junya Ishihara
                    </span>
                  </h2>
                  <p className="text-lg text-junya-gold font-semibold">
                    パーソナルトレーナー
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-junya-gray leading-relaxed">
                    高校時代は「ホネカワスネオ」と呼ばれるほど痩せ型で運動に苦労した経験があります。その経験を活かし、運動初心者の方にも安心してトレーニングを受けていただけるよう心がけています。
                  </p>
                  
                  <p className="text-junya-gray leading-relaxed">
                    単なる筋力トレーニングではなく、身体の動きを改善し、機能的な状態に整えるコンディショニングアプローチで、日常生活の質向上を目指します。
                  </p>

                  {/* 実績 */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-junya-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-junya-gold mb-1">3000+</div>
                      <div className="text-sm text-junya-gray">指導実績</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-junya-gold mb-1">10+</div>
                      <div className="text-sm text-junya-gray">年の経験</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-junya-gold mb-1">100%</div>
                      <div className="text-sm text-junya-gray">満足度</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-junya-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-8">
              トレーナーとして目指したいこと
            </h2>
            
            <blockquote className="text-2xl md:text-3xl font-bold text-junya-text mb-12 leading-relaxed">
              「自分に関わる人たちすべてが、毎朝を笑顔で過ごし、<br className="hidden md:block" />
              人生を心から楽しめる健康な状態になってほしい」
            </blockquote>

            <div className="space-y-8 text-left">
              <p className="text-lg text-junya-gray leading-relaxed">
                毎朝、目覚めが良く、家族との時間を楽しめ、仕事でも活き活きと過ごせる。そんな「当たり前の幸せ」を支えられることが、トレーナーとしての使命だと考えています。
              </p>
              
              <p className="text-lg text-junya-gray leading-relaxed">
                多くの方が思い浮かべるパーソナルトレーナーの姿は、「重いウエイトを持ってスクワット」かもしれません。もちろん、それも効果的な方法の一つです。しかし私は、そこにコンディショニングという視点を組み合わせることで、お客様により良いサービスを提供できると考えています。
              </p>
              
              <p className="text-lg text-junya-gray leading-relaxed">
                私は一人一人の「できない」を「できた！」に変える喜びを共有しながら、皆様の人生に寄り添えるトレーナーでありたいと思っています。そして、多くの方に「石原さんに会えてよかった」と心から感じていただけるよう、これからも謙虚に、そして真摯に学びを重ねていきます。
              </p>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* 学歴・資格 */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-junya-text mb-6 border-l-4 border-junya-gold pl-4">
                  学歴・資格
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-junya-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-junya-text">日本大学文理学部体育学科</p>
                      <p className="text-sm text-junya-gray">卒業</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-junya-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-junya-text">NASM-PES</p>
                      <p className="text-sm text-junya-gray">全米スポーツ医学協会認定パフォーマンス向上専門資格</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 専門分野・強み */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-junya-text mb-6 border-l-4 border-junya-gold pl-4">
                  専門分野・強み
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-junya-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-junya-gray">世界基準のフィジカルテスト実施</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-junya-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-junya-gray">疼痛改善・姿勢改善指導</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-junya-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-junya-gray">ボディメイク・パフォーマンス向上指導</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career History */}
        <section className="py-20 bg-junya-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-12 text-center">
              職歴・経験
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-semibold text-junya-gold">2014-2017</span>
                </div>
                <div className="flex-1">
                  <p className="text-junya-text font-semibold">都内フィットネスクラブ在籍</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-semibold text-junya-gold">2017-2019</span>
                </div>
                <div className="flex-1">
                  <p className="text-junya-text font-semibold">都内パーソナルトレーニングジム在籍</p>
                  <p className="text-sm text-junya-gray">パーソナルトレーニング/測定機器の営業経験（スポルテック2018出展）</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-semibold text-junya-gold">2019-</span>
                </div>
                <div className="flex-1">
                  <p className="text-junya-text font-semibold">パーソナルトレーニングジム「ダ・ヴィンチ」勤務</p>
                  <p className="text-sm text-junya-gray">（TOPFORMの前身）</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-semibold text-junya-gold">2023-</span>
                </div>
                <div className="flex-1">
                  <p className="text-junya-text font-semibold">株式会社HALLEL 運営に携わる</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-semibold text-junya-gold">2025年1月-</span>
                </div>
                <div className="flex-1">
                  <p className="text-junya-text font-semibold">湘南学院高等学校男子バレーボール部</p>
                  <p className="text-sm text-junya-gray">ストレングストレーナー</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-semibold text-junya-gold">現在</span>
                </div>
                <div className="flex-1">
                  <p className="text-junya-text font-semibold">TOPFORM恵比寿店・半蔵門店で勤務</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-6">
              あなたの目標達成をサポートします
            </h2>
            <p className="text-xl text-junya-gray mb-12 leading-relaxed">
              『しなきゃ』を『したい！』に変えるパーソナルトレーニングで、<br className="hidden md:block" />
              健康で充実した毎日を始めませんか？
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg py-4 px-8"
              >
                お問い合わせ・体験予約
              </Link>
              <Link
                href="/service"
                className="btn-secondary text-lg py-4 px-8"
              >
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}