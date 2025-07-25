import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact | JUNYA ISHIHARA PERSONAL TRAINING',
  description: 'パーソナルトレーニングのお問い合わせ・体験予約はこちら。無料カウンセリングも実施しています。',
  keywords: ['お問い合わせ', '体験予約', 'パーソナルトレーニング', '無料カウンセリング', 'JUNYA ISHIHARA'],
  openGraph: {
    title: 'Contact | JUNYA ISHIHARA PERSONAL TRAINING',
    description: 'パーソナルトレーニングのお問い合わせ・体験予約はこちら。無料カウンセリングも実施しています。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-junya-light to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-junya-text mb-6">
                CONTACT{' '}
                <span className="bg-gradient-to-r from-junya-gold to-junya-amber bg-clip-text text-transparent">
                  US
                </span>
              </h1>
              <p className="text-xl text-junya-gray max-w-3xl mx-auto leading-relaxed">
                理想の体づくりを始めませんか？<br />
                無料カウンセリングで、あなたの目標に合わせた最適なプランをご提案します
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-junya-text mb-8">
                  お問い合わせ方法
                </h2>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-junya-gold text-white rounded-full p-3 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-junya-text mb-2">電話でのお問い合わせ</h3>
                      <p className="text-junya-gray mb-1">営業時間: 平日 9:00-21:00 / 土日 9:00-18:00</p>
                      <p className="text-2xl font-bold text-junya-gold">03-0000-0000</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-junya-gold text-white rounded-full p-3 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-junya-text mb-2">メールでのお問い合わせ</h3>
                      <p className="text-junya-gray mb-1">24時間受付（返信は営業時間内）</p>
                      <p className="text-lg text-junya-gold">contact@junya-training.com</p>
                    </div>
                  </div>

                  {/* LINE */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-junya-gold text-white rounded-full p-3 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-junya-text mb-2">LINEでのお問い合わせ</h3>
                      <p className="text-junya-gray mb-1">お気軽にメッセージをお送りください</p>
                      <a href="#" className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        LINE友達追加
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-junya-text mb-8">
                  お問い合わせフォーム
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-junya-text mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-junya-gold focus:border-transparent transition-colors"
                      placeholder="山田太郎"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-junya-text mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-junya-gold focus:border-transparent transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-junya-text mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-junya-gold focus:border-transparent transition-colors"
                      placeholder="090-0000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-junya-text mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-junya-gold focus:border-transparent transition-colors"
                    >
                      <option value="">選択してください</option>
                      <option value="trial">体験トレーニングについて</option>
                      <option value="pricing">料金について</option>
                      <option value="schedule">スケジュールについて</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-junya-text mb-2">
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-junya-gold focus:border-transparent transition-colors resize-vertical"
                      placeholder="お問い合わせ内容をご記入ください"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 font-semibold"
                  >
                    送信する
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 bg-junya-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-4">
                アクセス・店舗情報
              </h2>
              <p className="text-lg text-junya-gray">
                2つの便利な立地でお待ちしています
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* HALLEL半蔵門店 */}
              <div className="card overflow-hidden">
                <div className="aspect-video relative bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-junya-gold/20 to-junya-amber/20">
                    <div className="text-6xl">🏢</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-junya-text mb-4">
                    HALLEL半蔵門店
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-junya-gold mt-1">📍</div>
                      <div>
                        <p className="text-sm text-junya-gray font-semibold mb-1">住所</p>
                        <p className="text-junya-text">〒102-0082 東京都千代田区一番町10-8 一番町ウエストビルB1</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="text-junya-gold mt-1">🚶‍♂️</div>
                      <div>
                        <p className="text-sm text-junya-gray font-semibold mb-1">アクセス</p>
                        <p className="text-junya-text">東京メトロ半蔵門線「半蔵門駅」4番出口から徒歩2分</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-junya-gold mt-1">🕐</div>
                      <div>
                        <p className="text-sm text-junya-gray font-semibold mb-1">営業時間</p>
                        <p className="text-junya-text">平日 9:00-21:00<br />土日祝 9:00-18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* HALLEL恵比寿店 */}
              <div className="card overflow-hidden">
                <div className="aspect-video relative bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-junya-gold/20 to-junya-amber/20">
                    <div className="text-6xl">🏢</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-junya-text mb-4">
                    HALLEL恵比寿店
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-junya-gold mt-1">📍</div>
                      <div>
                        <p className="text-sm text-junya-gray font-semibold mb-1">住所</p>
                        <p className="text-junya-text">〒150-0022 東京都渋谷区恵比寿南2-3-11 グレース青山2F</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="text-junya-gold mt-1">🚶‍♂️</div>
                      <div>
                        <p className="text-sm text-junya-gray font-semibold mb-1">アクセス</p>
                        <p className="text-junya-text">JR・東京メトロ日比谷線「恵比寿駅」西口から徒歩3分</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="text-junya-gold mt-1">🕐</div>
                      <div>
                        <p className="text-sm text-junya-gray font-semibold mb-1">営業時間</p>
                        <p className="text-junya-text">平日 9:00-21:00<br />土日祝 9:00-18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-junya-text mb-6">
              無料体験トレーニング実施中
            </h2>
            <p className="text-xl text-junya-gray mb-12 leading-relaxed">
              まずは体験セッションで、JUNYAメソッドを実際にお試しください。<br className="hidden md:block" />
              お客様の目標と身体の状態を詳しく分析し、最適なプランをご提案いたします。
            </p>
            
            <div className="bg-junya-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-junya-text mb-4">
                体験セッション内容
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-semibold text-junya-text mb-2">フィジカルテスト</h4>
                  <p className="text-sm text-junya-gray">世界基準の測定で現状を正確に把握</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💬</div>
                  <h4 className="font-semibold text-junya-text mb-2">カウンセリング</h4>
                  <p className="text-sm text-junya-gray">目標設定とライフスタイルの詳細ヒアリング</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💪</div>
                  <h4 className="font-semibold text-junya-text mb-2">体験トレーニング</h4>
                  <p className="text-sm text-junya-gray">あなた専用プログラムの実践と効果実感</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}