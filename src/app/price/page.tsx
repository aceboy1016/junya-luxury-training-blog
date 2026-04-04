import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Price | J. ISHIHARA PERSONAL TRAINING',
  description: 'パーソナルトレーニングの料金表。通常セッション、出張セッションの詳細な料金体系をご紹介します。',
}

export default function PricePage() {
  const plans = [
    {
      type: 'Usually Session',
      subtitle: 'HALLEL半蔵門店・恵比寿店',
      popular: false,
      courses: [
        { duration: '60分', price: 13200, description: 'カウンセリング + トレーニング' },
        { duration: '90分', price: 19050, description: 'カウンセリング + トレーニング + ケア', recommended: true },
        { duration: '120分', price: 24400, description: 'フルセッション + アフターケア' }
      ]
    },
    {
      type: 'Visiting Session',
      subtitle: 'ご自宅・オフィス・ジム等',
      popular: true,
      courses: [
        { duration: '60分', price: 18000, description: 'プライベート空間でのトレーニング' },
        { duration: '90分', price: 26250, description: 'プライベート空間でのフルセッション', recommended: true },
        { duration: '120分', price: 34000, description: '完全個室でのプレミアムケア' }
      ]
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
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-zinc-950 py-32 text-center text-white">
          <div className="inline-block px-8 py-2 bg-navy-500 text-white text-[10px] font-black tracking-[0.5em] uppercase mb-8">
            Pricing
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-outfit mb-6">
            Price List
          </h1>
          <div className="w-12 h-1 bg-navy-500 mx-auto" />
        </section>

        {/* Pricing Plans */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {plans.map((plan, planIndex) => (
                <div key={planIndex} className={`relative flex flex-col ${plan.popular ? 'lg:translate-y-[-20px]' : ''}`}>
                  <div className={`flex-1 p-12 border ${plan.popular ? 'border-navy-500 shadow-2xl' : 'border-zinc-100'} transition-all duration-700`}>
                    <div className="text-center mb-16">
                      <span className="text-[10px] font-black text-zinc-400 tracking-[0.3em] uppercase block mb-4">{plan.subtitle}</span>
                      <h2 className="text-3xl font-black text-navy-500 tracking-tighter uppercase font-outfit">
                        {plan.type}
                      </h2>
                    </div>

                    <div className="space-y-10">
                      {plan.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="relative group border-b border-zinc-50 pb-8">
                          {course.recommended && (
                            <div className="absolute -top-6 left-0">
                              <span className="text-[8px] font-black text-navy-300 tracking-[0.4em] uppercase">Recommended</span>
                            </div>
                          )}
                          <div className="flex items-end justify-between">
                            <div>
                              <h3 className="text-xl font-black text-navy-500 uppercase tracking-tighter font-outfit mb-1">{course.duration}コース</h3>
                              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-relaxed">{course.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-black text-navy-500 font-outfit tracking-tighter">
                                ¥{course.price.toLocaleString()}
                              </div>
                              <span className="text-[8px] font-black text-zinc-300 uppercase tracking-widest">In Tax</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-block w-full mt-12 py-5 text-[10px] font-black tracking-[0.4em] uppercase text-center transition-all duration-500 bg-navy-500 text-white hover:bg-navy-600 shadow-xl"
                    >
                      Book This Plan
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inclusions */}
        <section className="py-32 bg-zinc-50 text-navy-500">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-xs font-black tracking-[0.4em] uppercase mb-12 text-center border-b border-zinc-200 pb-8">料金に含まれるサービス</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                '世界基準のフィジカルテスト',
                '個別カウンセリング',
                'パーソナライズされたプログラム',
                'コンディショニング指導',
                'セッション後のフォローアップ',
                '継続的な成果測定と改善提案'
              ].map(item => (
                <li key={item} className="flex items-center space-x-6 group">
                  <span className="w-1.5 h-1.5 bg-navy-500 flex-shrink-0" />
                  <span className="text-sm font-bold tracking-widest uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xs font-black text-navy-500 tracking-[0.5em] uppercase mb-20 text-center">FAQ</h2>
            <div className="space-y-12">
              {faqs.map((faq, index) => (
                <div key={index} className="group border-l-2 border-zinc-100 pl-10 hover:border-navy-500 transition-colors">
                  <h3 className="text-xl font-black text-navy-500 uppercase tracking-tighter font-outfit mb-4">{faq.question}</h3>
                  <p className="text-zinc-500 text-lg leading-loose font-medium leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}