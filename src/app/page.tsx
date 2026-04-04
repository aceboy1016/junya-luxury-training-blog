import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PopularPostsRanking from '@/components/PopularPostsRanking'
import RelatedPosts from '@/components/RelatedPosts'

export const metadata: Metadata = {
  title: 'J. ISHIHARA | Premium Personal Training & Conditioning',
  description: '『しなきゃ』を『したい！』に変える。機能解剖学に基づいた世界基準のパーソナルトレーニング。',
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-inter">
        
        {/* ─── Hero Section ─── */}
        <section className="relative h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
          <div className="absolute inset-0 opacity-30 grayscale mix-blend-overlay">
            <Image
              src="/hero-bg.jpg" // 実際の画像パス
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl">
            <div className="inline-block px-8 py-2 bg-navy-500 text-white text-[10px] font-black tracking-[0.6em] uppercase mb-12 animate-fade-in-down">
              The Zenith of Conditioning
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-12 font-outfit uppercase">
              Transform <br />
              <span className="italic font-light opacity-60">Your Body & Mind</span>
            </h1>
            <p className="text-white text-lg md:text-2xl font-black tracking-[0.2em] mb-16 font-outfit leading-relaxed">
              『しなきゃ』を『したい！』に変える。<br className="hidden md:block" />
              人生を変えるパーソナルトレーニング。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-16 py-6 bg-navy-500 text-white text-[10px] font-black tracking-[0.5em] uppercase hover:bg-white hover:text-navy-500 transition-all duration-700 shadow-2xl"
              >
                Book Session
              </Link>
              <Link
                href="/service"
                className="w-full sm:w-auto px-16 py-6 border border-white/20 text-white text-[10px] font-black tracking-[0.5em] uppercase hover:bg-white hover:text-navy-500 transition-all duration-700"
              >
                Our Expertise
              </Link>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
            <i className="ri-arrow-down-line text-2xl" />
          </div>
        </section>

        {/* ─── Methodology Section ─── */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2">
                <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">3 Core Pillars</span>
                <h2 className="text-4xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit mb-12 leading-none">
                  Scientific <br />Methodology
                </h2>
                <div className="space-y-12">
                  {[
                    { t: 'Physiology', d: '解剖生理学・栄養学', c: '身体が変化する仕組みを科学的に理解し、ホルモンや代謝の反応を最適化します。' },
                    { t: 'Biomechanics', d: '運動力学・機能解剖学', c: '「効率的な動き」を物理学的に分析。関節や筋肉への負担を減らし、出力を最大化します。' },
                    { t: 'Psychology', d: 'コーチング心理学', c: 'マインドセットを整え、モチベーションに頼らず「自然と続く」状態を構築します。' }
                  ].map(item => (
                    <div key={item.t} className="group">
                      <div className="flex items-center gap-6 mb-4">
                        <div className="w-12 h-0.5 bg-navy-500 group-hover:w-24 transition-all duration-700" />
                        <h3 className="text-2xl font-black text-navy-500 uppercase tracking-tighter font-outfit">{item.t}</h3>
                        <span className="text-[10px] font-black text-zinc-400 tracking-widest uppercase">{item.d}</span>
                      </div>
                      <p className="text-zinc-500 text-sm leading-loose font-medium pl-18">{item.c}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="aspect-[4/5] bg-zinc-100 grayscale overflow-hidden">
                  <Image src="/method-image.jpg" alt="Methodology" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 border-navy-500 border-t-8 border-r-8 -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Why Choose Me ─── */}
        <section className="py-40 bg-zinc-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Unrivaled Expertise</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-outfit mb-12">Why Choose Me?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
              {[
                { v: '3000+', l: '指導実績', s: 'Clients Trained' },
                { v: '10+', l: '指導歴（年）', s: 'Years of Exp' },
                { v: '100%', l: '継続・満足度', s: 'Satisfaction' }
              ].map(stat => (
                <div key={stat.l} className="p-16 text-center border border-white/5 hover:bg-white/5 transition-colors group">
                  <div className="text-[10px] font-black text-navy-400 tracking-[0.4em] mb-4 uppercase">{stat.s}</div>
                  <div className="text-7xl font-black text-white font-outfit tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-700">{stat.v}</div>
                  <div className="text-xs font-bold text-zinc-500 tracking-[0.3em] uppercase">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Profile Section (The Story) ─── */}
        <section className="py-40 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-24 items-center">
              <div className="lg:w-1/2">
                <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">The Specialist</span>
                <h2 className="text-4xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit mb-8 leading-none">
                  Junya <br />Ishihara
                </h2>
                <div className="w-12 h-1 bg-navy-500 mb-12" />
                <div className="prose prose-zinc prose-lg">
                  <p className="text-xl text-navy-500 font-black leading-relaxed italic border-l-4 border-navy-500 pl-8 mb-10">
                    「ホネカワスネオ」と呼ばれた過去から、トレーニングを通じて人生を変えた経験を持つパーソナルトレーナー。
                  </p>
                  <p className="text-zinc-600 leading-offset-loose font-medium mb-8">
                    単なるボディメイクにとどまらず、機能解剖学に基づいた「動ける身体づくり」と「痛みのない生活」を提供することを信条としています。
                  </p>
                  <p className="text-zinc-600 leading-offset-loose font-medium mb-12">
                    大手フィットネスクラブでの指導経験、スポーツ現場での帯同経験を経て、現在は「HALLEL」にて、一般の方からアスリートまで幅広いクライアントの目標達成をサポートしています。
                  </p>
                </div>
                
                {/* Skills Radar-style visualization */}
                <div className="space-y-6 pt-10 border-t border-zinc-100">
                  {[
                    { s: '姿勢改善・機能改善', v: 100 },
                    { s: '疼痛改善（腰痛・肩こり等）', v: 95 },
                    { s: 'スポーツパフォーマンス向上', v: 90 }
                  ].map(skill => (
                    <div key={skill.s}>
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-[10px] font-black text-navy-500 tracking-widest uppercase">{skill.s}</span>
                        <span className="text-[10px] font-black text-zinc-400">{skill.v}%</span>
                      </div>
                      <div className="h-1 bg-zinc-100 relative">
                        <div className="absolute inset-y-0 left-0 bg-navy-500 transition-all duration-1000" style={{ width: `${skill.v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="aspect-[4/5] relative grayscale border border-zinc-100">
                  <Image src="/profile-junya.jpg" alt="石原淳哉" fill className="object-cover shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Testimonials ─── */}
        <section className="py-40 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Proven Success</span>
              <h2 className="text-4xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit">Voice of Peak</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { n: 'Athlete A', q: '長年悩んでいた腰痛が、わずか3ヶ月で消失。競技パフォーマンスも劇的に向上しました。' },
                { n: 'Executive B', q: '多忙な日々の中でも、機能的な身体を維持できるメソッド。自己管理の概念が変わりました。' },
                { n: 'Client C', q: '「動ける身体」を手に入れたことで、人生の質が変わりました。石原さんの指導は本物です。' }
              ].map(testi => (
                <div key={testi.n} className="bg-white p-12 shadow-sm border-t-2 border-navy-500 hover:shadow-2xl transition-all duration-700">
                  <i className="ri-double-quotes-l text-4xl text-navy-100 mb-8 block" />
                  <p className="text-lg text-navy-500 font-medium leading-loose mb-10">"{testi.q}"</p>
                  <div className="text-[10px] font-black text-zinc-400 tracking-widest uppercase">{testi.n}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Locations & Contact ─── */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-8xl font-black text-navy-500 mb-12 tracking-tighter uppercase font-outfit">Get Started</h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium leading-loose mb-20 tracking-widest max-w-2xl mx-auto">
              あなたの身体の現在地を知り、<br />
              理想のゴールへの最短ルートを描きます。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <Link href="/contact" className="w-full sm:w-auto px-16 py-6 bg-navy-500 text-white text-[10px] font-black tracking-[0.5em] uppercase hover:bg-navy-600 transition-all duration-500 shadow-2xl">
                Experience Session
              </Link>
              <div className="flex gap-12">
                <div className="text-left border-l border-zinc-100 pl-8">
                  <span className="text-[8px] font-black text-zinc-400 tracking-widest uppercase mb-1 block">Hanzo-mon</span>
                  <p className="text-xs font-black text-navy-500 tracking-widest uppercase">HALLEL Hanzomon</p>
                </div>
                <div className="text-left border-l border-zinc-100 pl-8">
                  <span className="text-[8px] font-black text-zinc-400 tracking-widest uppercase mb-1 block">Ebisu</span>
                  <p className="text-xs font-black text-navy-500 tracking-widest uppercase">HALLEL Ebisu</p>
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