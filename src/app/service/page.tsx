import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Service | J. ISHIHARA Premium Personal Training',
  description: 'パーソナルトレーニングサービスの詳細、料金、初回サービスの流れ、活動場所をご紹介します。個別カスタマイズとコンディショニング重視のアプローチ。',
}

export default function ServicePage() {
  const serviceFlow = [
    { step: '01', title: 'お申し込み', description: 'トレーニング目標の調整を行います。' },
    { step: '02', title: 'ご来店', description: 'ご案内した施設（半蔵門・恵比寿）にお越しください。' },
    { step: '03', title: 'カウンセリング', description: '入念なカウンセリング・世界基準のフィジカルテストを行い、お客様のお悩みやカラダの現状を把握、見つかった問題を解決するための方法などをお伝えします。' },
    { step: '04', title: 'コンディショニング', description: 'お客様のお悩みやカラダの問題を解決するため、コンディショニングトレーニングを行います。' }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-zinc-950 py-40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-8 block">Our Services</span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase font-outfit mb-12">
              The <span className="text-navy-400 italic font-light lowercase">premium</span> Solution
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed tracking-wider">
              お客様一人ひとりの身体と目標に合わせた『ちょうどいい』トレーニングで、<br />
              健康で充実した毎日をサポートします。
            </p>
          </div>
        </section>

        {/* Philosophy Section (Restored from 0c4779c) */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl font-black text-navy-500 tracking-tighter uppercase font-outfit mb-12 leading-tight">
                  『しなきゃ』を<br />『したい！』に変える<br /><span className="text-zinc-300">Personal Training</span>
                </h2>
                <div className="space-y-8 text-lg text-zinc-600 font-medium leading-offset-loose">
                  <p>
                    従来の筋力トレーニングだけでなく、コンディショニングという視点を組み合わせることで、お客様の身体の根本的な問題を解決し、機能的で健康的な身体づくりをサポートします。
                  </p>
                  <p>
                    我慢して続けるのではなく、身体が整う心地よさを実感していただくことで、運動が自然と習慣化するポジティブなサイクルを創り出します。
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {[
                  { n: '01', t: '個別カスタマイズ', d: '一人ひとりの身体の状態と目標に合わせて、最適なプログラムをご提案します。' },
                  { n: '02', t: 'コンディショニング重視', d: '疼痛改善・姿勢改善を重視し、身体の機能的な問題を根本から解決します。' },
                  { n: '03', t: '科学的アプローチ', d: '世界基準のフィジカルテストを実施し、データに基づいた効果的な指導を行います。' },
                ].map(item => (
                  <div key={item.n} className="p-10 bg-zinc-50 border border-zinc-100 hover:border-navy-500 transition-all duration-700">
                    <div className="text-[10px] font-black text-navy-300 tracking-widest uppercase mb-4">Core Feature {item.n}</div>
                    <h3 className="text-xl font-black text-navy-500 mb-4">{item.t}</h3>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Flow (Restored from 0c4779c) */}
        <section className="py-40 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Process</span>
              <h2 className="text-4xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit leading-none mb-8">
                初回サービスの<span className="text-zinc-300">流れ</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {serviceFlow.map((step, idx) => (
                <div key={step.step} className="p-12 bg-white border border-zinc-100 hover:shadow-2xl transition-all duration-1000 group h-full">
                  <div className="text-6xl font-black text-zinc-50 font-outfit mb-12 group-hover:text-navy-500 transition-colors">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-black text-navy-500 uppercase tracking-tighter font-outfit mb-6">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-loose font-medium">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Value (Restored from 0c4779c) */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-24">
              <div className="flex-1">
                <h2 className="text-4xl font-black text-navy-500 tracking-tighter uppercase font-outfit mb-16 leading-tight">
                  Pricing & <br /><span className="text-zinc-300">Value Details</span>
                </h2>
                <div className="p-12 bg-navy-500 text-white space-y-8">
                  <h3 className="text-xl font-black font-outfit tracking-widest uppercase border-b border-white/10 pb-6">料金に含まれるもの</h3>
                  <ul className="space-y-6">
                    {[
                      '世界基準のフィジカルテスト',
                      '個別プロフェッショナルカウンセリング',
                      'パーソナライズされたトレーニングプログラム設計',
                      'コンディショニング指導（姿勢・疼痛改善）',
                      'セッション後のLINE等によるフォローアップ'
                    ].map(item => (
                      <li key={item} className="flex items-center gap-6 group">
                        <span className="w-1.5 h-1.5 bg-white rotate-45 group-hover:scale-150 transition-transform" />
                        <span className="text-sm font-bold tracking-widest">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 space-y-16">
                <div>
                  <h3 className="text-[10px] font-black text-navy-300 tracking-[0.5em] uppercase mb-12">通常セッション</h3>
                  <div className="space-y-12">
                    {[
                      { t: '60分', p: '¥13,200' },
                      { t: '90分', p: '¥19,050' },
                      { t: '120分', p: '¥24,400' }
                    ].map(p => (
                      <div key={p.t} className="flex justify-between items-end border-b border-zinc-100 pb-8 hover:border-navy-500 transition-colors group">
                        <span className="text-xl font-black text-navy-500 font-outfit uppercase">{p.t}コース</span>
                        <span className="text-3xl font-black text-navy-500 font-outfit group-hover:scale-110 transition-transform">{p.p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-navy-300 tracking-[0.5em] uppercase mb-12">出張セッション (Premium)</h3>
                  <div className="space-y-12">
                    {[
                      { t: '60分', p: '¥18,000' },
                      { t: '90分', p: '¥26,250' },
                      { t: '120分', p: '¥34,000' }
                    ].map(p => (
                      <div key={p.t} className="flex justify-between items-end border-b border-zinc-100 pb-8 hover:border-navy-500 transition-colors group">
                        <span className="text-xl font-black text-navy-500 font-outfit uppercase">{p.t}コース</span>
                        <span className="text-3xl font-black text-zinc-300 font-outfit group-hover:text-navy-500 transition-all">{p.p}</span>
                      </div>
                    ))}
                  </div>
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