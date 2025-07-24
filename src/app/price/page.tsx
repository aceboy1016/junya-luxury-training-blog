import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Price | JUNYA ISHIHARA PERSONAL TRAINING',
  description: 'パーソナルトレーニングの料金表。通常セッション、出張セッションの詳細な料金体系をご紹介します。',
  keywords: ['料金', 'パーソナルトレーニング', '価格', 'セッション', '出張', 'HALLEL'],
  openGraph: {
    title: 'Price | JUNYA ISHIHARA PERSONAL TRAINING',
    description: 'パーソナルトレーニングの料金表。通常セッション、出張セッションの詳細な料金体系をご紹介します。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function PricePage() {
  const plans = [
    {
      type: '通常セッション',
      subtitle: 'HALLEL半蔵門店・恵比寿店',
      popular: false,
      courses: [
        { duration: '60分', price: 13200, description: 'カウンセリング + トレーニング' },
        { duration: '90分', price: 19050, description: 'カウンセリング + トレーニング + ケア', recommended: true },
        { duration: '120分', price: 24400, description: 'フルセッション + アフターケア' }
      ]
    },
    {
      type: '出張セッション',
      subtitle: 'ご自宅・オフィス等',
      popular: true,
      courses: [
        { duration: '60分', price: 18000, description: 'プライベート空間でのトレーニング' },
        { duration: '90分', price: 26250, description: 'プライベート空間でのフルセッション', recommended: true },
        { duration: '120分', price: 34000, description: '完全個室でのプレミアムセッション' }
      ]
    }
  ]

  const includes = [
    {
      icon: '📊',
      title: '世界基準のフィジカルテスト',
      description: '国際的な基準に基づいた詳細な身体機能評価'
    },
    {
      icon: '💬',
      title: '個別カウンセリング',
      description: 'お客様の目標と身体の状態を詳しくヒアリング'
    },
    {
      icon: '🎯',
      title: 'パーソナライズプログラム',
      description: '一人ひとりに最適化されたトレーニングメニュー'
    },
    {
      icon: '🏥',
      title: 'コンディショニング指導',
      description: '疼痛改善・姿勢改善に特化したアプローチ'
    },
    {
      icon: '📞',
      title: 'セッション後フォロー',
      description: 'トレーニング後のアドバイスとサポート'
    },
    {
      icon: '📋',
      title: '進捗管理・記録',
      description: '継続的な成果測定と改善提案'
    }
  ]

  const faqs = [
    {
      question: '初回は何分のコースがおすすめですか？',
      answer: '初回は90分コースをおすすめしています。フィジカルテスト、カウンセリング、実際のトレーニング体験まで余裕を持って行うことができます。'
    },
    {
      question: '支払い方法は何がありますか？',
      answer: '現金、クレジットカード、電子マネー、銀行振込に対応しています。月額制プランもご相談可能です。'
    },
    {
      question: 'キャンセル料はかかりますか？',
      answer: '前日までのキャンセルは無料です。当日キャンセルの場合は料金の50%、無断キャンセルの場合は100%のキャンセル料が発生します。'
    },
    {
      question: '出張セッションの対応エリアは？',
      answer: '東京23区内が基本対応エリアです。その他のエリアについてはご相談ください。交通費は別途実費をいただきます。'
    },
    {
      question: '継続プランや回数券はありますか？',
      answer: '4回券、8回券などの回数券もご用意しています。詳細は体験セッション時にご相談ください。'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-junya-light to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-junya-text mb-6">
                PRICE{' '}
                <span className="bg-gradient-to-r from-junya-gold to-junya-amber bg-clip-text text-transparent">
                  PLAN
                </span>
              </h1>
              <p className="text-xl text-junya-gray max-w-3xl mx-auto leading-relaxed">
                明確で分かりやすい料金体系<br />
                あなたのライフスタイルに合わせて選べるプラン
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {plans.map((plan, planIndex) => (
                <div key={planIndex} className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-junya-gold to-junya-amber text-white px-6 py-2 rounded-full text-sm font-semibold">
                        PREMIUM
                      </span>
                    </div>
                  )}
                  
                  <div className={`card p-8 h-full ${plan.popular ? 'border-2 border-junya-gold shadow-junya-card-hover' : ''}`}>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-junya-text mb-2">
                        {plan.type}
                      </h2>
                      <p className="text-junya-gray">{plan.subtitle}</p>
                    </div>

                    <div className="space-y-6">
                      {plan.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className={`relative p-6 border-2 rounded-lg transition-all duration-300 ${course.recommended ? 'border-junya-gold bg-junya-gold/5' : 'border-gray-200 hover:border-junya-gold/50'}`}>
                          {course.recommended && (
                            <div className="absolute -top-3 left-4">
                              <span className="bg-junya-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                                おすすめ
                              </span>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-junya-text">
                                {course.duration}コース
                              </h3>
                              <p className="text-sm text-junya-gray">{course.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-junya-gold">
                                ¥{course.price.toLocaleString()}
                              </div>
                              <div className="text-sm text-junya-gray">税込</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                      <Link
                        href="/contact"
                        className={`inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-junya-gold to-junya-amber text-white hover:shadow-lg hover:scale-105' 
                            : 'border-2 border-junya-gold text-junya-gold hover:bg-junya-gold hover:text-white'
                        }`}
                      >
                        {plan.popular ? '体験予約する' : 'お問い合わせ'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-junya-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-4">
                料金に含まれるサービス
              </h2>
              <p className="text-lg text-junya-gray">
                すべてのセッションで提供される充実のサービス内容
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {includes.map((include, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="text-4xl mb-4">{include.icon}</div>
                  <h3 className="text-lg font-bold text-junya-text mb-3">
                    {include.title}
                  </h3>
                  <p className="text-junya-gray text-sm leading-relaxed">
                    {include.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-4">
                お支払い方法
              </h2>
              <p className="text-lg text-junya-gray">
                お客様のご都合に合わせて多様な決済方法をご用意
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card p-6 text-center">
                <div className="text-3xl mb-2">💵</div>
                <p className="text-junya-text font-semibold">現金</p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl mb-2">💳</div>
                <p className="text-junya-text font-semibold">クレジット<br />カード</p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl mb-2">📱</div>
                <p className="text-junya-text font-semibold">電子マネー</p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl mb-2">🏦</div>
                <p className="text-junya-text font-semibold">銀行振込</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-junya-light rounded-lg text-center">
              <h3 className="text-lg font-semibold text-junya-text mb-2">
                継続プランもご用意しています
              </h3>
              <p className="text-junya-gray">
                4回券・8回券などの回数券や月額制プランについては、<br />
                体験セッション時にご相談ください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-junya-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-4">
                よくあるご質問
              </h2>
              <p className="text-lg text-junya-gray">
                料金・お支払いに関するよくあるご質問
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-semibold text-junya-text mb-3 flex items-start">
                    <span className="bg-junya-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-junya-gray leading-relaxed ml-9">
                    <span className="bg-junya-blue text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm font-bold mr-3">
                      A
                    </span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-6">
              体験セッションでお試しください
            </h2>
            <p className="text-xl text-junya-gray mb-12 leading-relaxed">
              初回は特別価格でご提供いたします。<br className="hidden md:block" />
              まずはお気軽にお問い合わせください。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg py-4 px-8"
              >
                体験セッションを予約
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