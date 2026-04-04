import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | J. ISHIHARA PERSONAL TRAINING',
  description: 'プロフェッショナルパーソナルトレーナー石原淳哉のプロフィール、経歴、資格、トレーニングへの想いをご紹介します。',
}

export default function AboutPage() {
  const career = [
    { y: '2014 - 2017', t: '都内フィットネスクラブ在籍', d: '月間150本以上のセッションを担当し、エリア指名数No.1を獲得。' },
    { y: '2017 - 2019', t: 'パーソナルトレーナーとして独立', d: 'より一人ひとりに寄り添った指導を開始。測定機器の営業経験も積む。' },
    { y: '2019 - Present', t: 'TOPFORM / HALLEL 参画', d: 'コンディショニングジム「HALLEL」の立ち上げに参画。' },
    { y: 'Current', t: '湘南学院高等学校 男子バレーボール部', d: 'ストレングストレーナーとしてチームに帯同。' }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-zinc-950 py-32 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 grayscale mix-blend-overlay">
            <Image src="/about-hero.jpg" alt="About" fill className="object-cover" />
          </div>
          <div className="relative z-10">
            <div className="inline-block px-8 py-2 bg-navy-500 text-white text-[10px] font-black tracking-[0.5em] uppercase mb-8">
              The Professional
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase font-outfit mb-6">
              Junya <span className="italic font-light opacity-50">Ishihara</span>
            </h1>
            <div className="w-12 h-1 bg-navy-500 mx-auto" />
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative group">
                <div className="aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                  <Image
                    src="/profile-junya.jpg"
                    alt="石原淳哉"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-navy-500 border-b-8 border-r-8 -z-10" />
              </div>

              <div className="space-y-12">
                <div>
                  <h2 className="text-5xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit mb-2">
                    石原 淳哉
                  </h2>
                  <p className="text-[10px] font-black text-zinc-400 tracking-[0.4em] uppercase flex items-center">
                    <span className="w-12 h-[1px] bg-navy-500 mr-4"></span>
                    JUNYA ISHIHARA
                  </p>
                </div>

                <div className="space-y-8">
                  <p className="text-xl text-navy-500 font-bold leading-relaxed italic border-l-4 border-navy-500 pl-8 mb-10">
                    「ホネカワスネオ」と呼ばれた過去から、トレーニングを通じて人生を変えた経験を持つパーソナルトレーナー。
                  </p>
                  <p className="text-lg text-zinc-600 leading-loose font-medium">
                    単なるボディメイクにとどまらず、機能解剖学に基づいた「動ける身体づくり」と「痛みのない生活」を提供することを信条としています。
                  </p>
                  <p className="text-lg text-zinc-600 leading-loose font-medium">
                    大手フィットネスクラブでの指導経験、スポーツ現場での帯同経験を経て、現在は「HALLEL」にて、一般の方からアスリートまで幅広いクライアントの目標達成をサポートしています。
                  </p>

                  <div className="grid grid-cols-3 gap-8 py-10 border-t border-b border-zinc-100">
                    {[
                      { l: 'CLIENTS', v: '3000+' },
                      { l: 'EXPERIENCE', v: '10+ YRS' },
                      { l: 'QUALITY', v: 'No.1' }
                    ].map(stat => (
                      <div key={stat.l} className="text-center">
                        <div className="text-[10px] font-black text-zinc-400 tracking-widest mb-2 font-outfit">{stat.l}</div>
                        <div className="text-2xl font-black text-navy-500 font-outfit tracking-tighter">{stat.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 bg-zinc-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xs font-black text-navy-500 tracking-[0.5em] uppercase mb-24 text-center">Career Journey</h2>
            <div className="space-y-16">
              {career.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-20 group">
                  <div className="md:w-32 text-left md:text-right">
                    <span className="text-[10px] font-black text-navy-300 font-outfit tracking-widest uppercase">{item.y}</span>
                  </div>
                  <div className="flex-1 border-l border-zinc-100 pl-10 relative group-hover:border-navy-500 transition-colors">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-navy-500 -translate-x-1.5" />
                    <h3 className="text-lg font-black text-navy-500 uppercase tracking-tighter font-outfit mb-3">{item.t}</h3>
                    <p className="text-sm font-bold text-zinc-500 leading-relaxed uppercase tracking-widest">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-40 bg-zinc-950 text-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black text-white/[0.02] font-outfit select-none whitespace-nowrap">
            VISION
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <blockquote className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tighter mb-16 font-outfit uppercase">
              「自分に関わる人たちすべてが、毎朝を笑顔で過ごし、人生を心から楽しめる健康な状態になってほしい」
            </blockquote>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              毎朝、目覚めが良く、家族との時間を楽しめ、仕事でも活き活きと過ごせる。
              そんな「当たり前の幸せ」を支えられることが、トレーナーとしての使命だと考えています。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}