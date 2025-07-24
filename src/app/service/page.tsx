import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Service | JUNYA ISHIHARA PERSONAL TRAINING',
  description: 'パーソナルトレーニングサービスの詳細、料金、初回サービスの流れ、活動場所をご紹介します。',
  keywords: ['パーソナルトレーニング', 'サービス', '料金', 'HALLEL', '半蔵門', '恵比寿', 'コンディショニング'],
  openGraph: {
    title: 'Service | JUNYA ISHIHARA PERSONAL TRAINING',
    description: 'パーソナルトレーニングサービスの詳細、料金、初回サービスの流れ、活動場所をご紹介します。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function ServicePage() {
  const locations = [
    {
      name: 'HALLEL半蔵門店',
      address: '〒102-0082 東京都千代田区一番町10-8 一番町ウエストビルB1',
      access: '東京メトロ半蔵門線「半蔵門駅」4番出口から徒歩2分',
      image: '/hallel-hanzomon.jpg'
    },
    {
      name: 'HALLEL恵比寿店',
      address: '〒150-0022 東京都渋谷区恵比寿南2-3-11 グレース青山2F',
      access: 'JR・東京メトロ日比谷線「恵比寿駅」西口から徒歩3分',
      image: '/hallel-ebisu.jpg'
    }
  ]

  const serviceFlow = [
    {
      step: '01',
      title: 'お申し込み',
      description: 'トレーニング目標の調整を行います',
      icon: '📋'
    },
    {
      step: '02',
      title: 'ご来店',
      description: 'ご案内した施設にお越しください',
      icon: '🏢'
    },
    {
      step: '03',
      title: 'カウンセリング',
      description: '入念なカウンセリング・世界基準のフィジカルテストを行い、お客様のお悩みやカラダの現状を把握、見つかった問題を解決するための方法などをお伝えします',
      icon: '📊'
    },
    {
      step: '04',
      title: 'コンディショニング',
      description: 'お客様のお悩みやカラダの問題を解決するため、コンディショニングトレーニングを行います',
      icon: '💪'
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
                OUR{' '}
                <span className="bg-gradient-to-r from-junya-gold to-junya-amber bg-clip-text text-transparent">
                  SERVICE
                </span>
              </h1>
              <p className="text-xl text-junya-gray max-w-3xl mx-auto leading-relaxed">
                お客様一人ひとりの身体と目標に合わせた『ちょうどいい』トレーニングで、<br />
                健康で充実した毎日をサポートします
              </p>
            </div>
          </div>
        </section>

        {/* Main Service Description */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-8">
                『しなきゃ』を『したい！』に変える<br />
                パーソナルトレーニング
              </h2>
              <p className="text-lg text-junya-gray max-w-4xl mx-auto leading-relaxed">
                従来の筋力トレーニングだけでなく、コンディショニングという視点を組み合わせることで、
                お客様の身体の根本的な問題を解決し、機能的で健康的な身体づくりをサポートします。
              </p>
            </div>

            {/* サービス特徴 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="card p-8 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-junya-text mb-4">個別カスタマイズ</h3>
                <p className="text-junya-gray">
                  一人ひとりの身体の状態と目標に合わせて、最適なトレーニングプログラムをご提案します。
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-junya-text mb-4">コンディショニング重視</h3>
                <p className="text-junya-gray">
                  疼痛改善・姿勢改善を重視し、身体の機能的な問題を根本から解決します。
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-junya-text mb-4">科学的アプローチ</h3>
                <p className="text-junya-gray">
                  世界基準のフィジカルテストを実施し、データに基づいた効果的な指導を行います。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Flow */}
        <section className="py-20 bg-junya-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-4">
                初回サービスの流れ
              </h2>
              <p className="text-lg text-junya-gray">
                パーソナルトレーニングの4つのステップ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFlow.map((step, index) => (
                <div key={index} className="relative">
                  <div className="card p-6 text-center h-full">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div className="text-2xl font-bold text-junya-gold mb-2">
                      STEP {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-junya-text mb-4">
                      {step.title}
                    </h3>
                    <p className="text-junya-gray text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  {index < serviceFlow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-junya-gold text-2xl z-10">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-4">
                料金表
              </h2>
              <p className="text-lg text-junya-gray">
                明確で分かりやすい料金体系
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 通常セッション */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-junya-text mb-6 text-center border-b border-junya-border pb-4">
                  通常セッション
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-junya-text font-semibold">60分コース</span>
                    <span className="text-2xl font-bold text-junya-gold">¥13,200</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-junya-text font-semibold">90分コース</span>
                    <span className="text-2xl font-bold text-junya-gold">¥19,050</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-junya-text font-semibold">120分コース</span>
                    <span className="text-2xl font-bold text-junya-gold">¥24,400</span>
                  </div>
                </div>
              </div>

              {/* 出張セッション */}
              <div className="card p-8 border-2 border-junya-gold">
                <h3 className="text-2xl font-bold text-junya-text mb-6 text-center border-b border-junya-border pb-4">
                  出張セッション
                  <span className="block text-sm font-normal text-junya-gold mt-1">
                    Premium Service
                  </span>
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-junya-text font-semibold">60分コース</span>
                    <span className="text-2xl font-bold text-junya-gold">¥18,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-junya-text font-semibold">90分コース</span>
                    <span className="text-2xl font-bold text-junya-gold">¥26,250</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-junya-text font-semibold">120分コース</span>
                    <span className="text-2xl font-bold text-junya-gold">¥34,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-junya-light rounded-lg">
              <h4 className="text-lg font-semibold text-junya-text mb-2">料金に含まれるもの</h4>
              <ul className="space-y-2 text-junya-gray">
                <li className="flex items-start space-x-2">
                  <span className="text-junya-gold">✓</span>
                  <span>世界基準のフィジカルテスト</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-junya-gold">✓</span>
                  <span>個別カウンセリング</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-junya-gold">✓</span>
                  <span>パーソナライズされたトレーニングプログラム</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-junya-gold">✓</span>
                  <span>コンディショニング指導</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-junya-gold">✓</span>
                  <span>セッション後のフォローアップ</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 bg-junya-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-4">
                活動場所・アクセス
              </h2>
              <p className="text-lg text-junya-gray">
                2つの便利な立地でトレーニング可能
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {locations.map((location, index) => (
                <div key={index} className="card overflow-hidden">
                  <div className="aspect-video relative bg-gray-100">
                    {/* 実際の画像がある場合は以下のコメントアウトを外す */}
                    {/* <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    /> */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-junya-gold/20 to-junya-amber/20">
                      <div className="text-6xl">🏢</div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-junya-text mb-4">
                      {location.name}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-junya-gold mt-1">📍</div>
                        <div>
                          <p className="text-sm text-junya-gray font-semibold mb-1">住所</p>
                          <p className="text-junya-text">{location.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="text-junya-gold mt-1">🚶‍♂️</div>
                        <div>
                          <p className="text-sm text-junya-gray font-semibold mb-1">アクセス</p>
                          <p className="text-junya-text">{location.access}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-6">
              まずは体験セッションから
            </h2>
            <p className="text-xl text-junya-gray mb-12 leading-relaxed">
              あなたの身体の状態を詳しく分析し、<br className="hidden md:block" />
              最適なトレーニングプランをご提案いたします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg py-4 px-8"
              >
                体験セッションを予約する
              </Link>
              <Link
                href="/about"
                className="btn-secondary text-lg py-4 px-8"
              >
                トレーナーについて詳しく
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}