import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'J. ISHIHARA | Premium Personal Training & Conditioning',
  description: '変化を実感するから自然と続けたくなる。根本から改善するアプローチで、見た目も体調も確実に変化を実感。半蔵門・恵比寿のプレミアムパーソナルトレーニング。',
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* ─── 01 Hero Section (Restored from 0c4779c) ─── */}
        <section id="home" className="relative h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
          <div className="absolute inset-0 opacity-30 grayscale mix-blend-overlay">
            <Image
              src="/hero-bg.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-6xl">
            <div className="inline-block px-8 py-2 bg-navy-500 text-white text-[10px] font-black tracking-[0.6em] uppercase mb-12 animate-fade-in-down">
              Premium Personal Training
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-12 font-outfit uppercase">
              <span className="text-navy-300">変化</span>を実感するから<br />
              <span className="italic font-light opacity-60 lowercase">自然と</span>続けたくなる
            </h1>
            <p className="text-white text-lg md:text-2xl font-medium tracking-[0.1em] mb-20 max-w-3xl mx-auto leading-relaxed">
              根本から改善するアプローチで、<br className="md:hidden" />
              見た目も体調も確実に変化を実感。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
              <Link
                href="#contact"
                className="w-full sm:w-auto px-16 py-6 bg-navy-500 text-white text-[10px] font-black tracking-[0.5em] uppercase hover:bg-white hover:text-navy-500 transition-all duration-700 shadow-2xl"
              >
                Book Session
              </Link>
              <Link
                href="#service-flow"
                className="w-full sm:w-auto px-16 py-6 border border-white/20 text-white text-[10px] font-black tracking-[0.5em] uppercase hover:bg-white hover:text-navy-500 transition-all duration-700"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-white/10 pt-16">
              {[
                { n: '3000+', l: '指導実績', s: 'Proven Track Record' },
                { n: '10+', l: '年の経験', s: 'Years of Excellence' },
                { n: '100%', l: '満足度', s: 'Customer Satisfaction' }
              ].map(stat => (
                <div key={stat.l} className="text-center group">
                  <div className="text-4xl font-black text-navy-400 font-outfit mb-2 group-hover:scale-110 transition-transform duration-700">{stat.n}</div>
                  <div className="text-[10px] font-black text-white tracking-widest uppercase mb-1">{stat.l}</div>
                  <div className="text-[8px] text-zinc-500 font-bold tracking-[0.2em] uppercase">{stat.s}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
            <i className="ri-arrow-down-line text-2xl" />
          </div>
        </section>

        {/* ─── 02 Methodology Section (Restored from 0c4779c) ─── */}
        <section id="methodology" className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Elite Methodology</span>
              <h2 className="text-4xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit leading-none mb-8">
                The Science of <br /><span className="text-zinc-300">Conditioning</span>
              </h2>
              <p className="text-lg text-zinc-500 max-w-3xl mx-auto font-medium leading-loose">
                科学的根拠と豊富な経験に基づいた独自のメソッドで、<br className="hidden md:block" />
                確実な結果と最高級の体験をお約束します。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { n: '01', t: 'ASSESSMENT', s: '詳細分析', d: 'お客様の体組成、姿勢、動作パターン、ライフスタイルを徹底的に分析。最新の測定機器を使用した科学的アプローチで現状を正確に把握します。' },
                { n: '02', t: 'DESIGN', s: '完全オーダーメイド', d: '分析結果をもとに、お客様だけの専用プログラムを設計。目標達成への最短ルートを科学的根拠に基づいて構築いたします。' },
                { n: '03', t: 'EXECUTION', s: '精密実行', d: '洗練されたテクニックと最新理論を駆使したトレーニング指導。一つ一つの動作を丁寧に指導し、効果を最大化します。' },
                { n: '04', t: 'EVOLUTION', s: '継続進化', d: '定期的な評価と調整により、常にプログラムを最適化。お客様の進歩に合わせて継続的にアップデートし続けます。' },
              ].map(item => (
                <div key={item.n} className="p-10 bg-zinc-50 border border-zinc-100 hover:border-navy-500 transition-all duration-700 shadow-sm group">
                  <div className="w-16 h-16 bg-navy-500 text-white flex items-center justify-center text-xl font-black font-outfit mb-8 group-hover:bg-zinc-950 transition-colors">
                    {item.n}
                  </div>
                  <h3 className="text-xl font-black text-navy-500 uppercase font-outfit tracking-tighter mb-2">{item.t}</h3>
                  <div className="text-[10px] font-black text-navy-300 tracking-[0.3em] uppercase mb-6">{item.s}</div>
                  <p className="text-sm text-zinc-500 leading-offset-loose font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 03 Why Me Section (Restored from 0c4779c) ─── */}
        <section id="why-me" className="py-40 bg-zinc-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Why Choose Me</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-outfit mb-8">選ばれる<span className="text-navy-400">理由</span></h2>
              <div className="w-16 h-1 bg-navy-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {[
                { n: '01', t: '多角的なアプローチ', d: '単なる筋トレだけではありません。身体の機能を高めるための要素（筋力・柔軟性・持久力・栄養）をバランスよく組み合わせます。' },
                { n: '02', t: '確実なステップアップ', d: 'いきなりハードな運動は行いません。評価・改善・強化・定着のサイクルを回し、身体の状態に合わせて段階的に負荷を上げます。' },
                { n: '03', t: 'コンディショニング重視', d: '「鍛える」前に「整える」。マイナスをゼロにし、そこから機能的なプラスを作り出すアプローチで不調を根本改善します。' }
              ].map(reason => (
                <div key={reason.n} className="p-12 border border-white/5 hover:bg-white/5 transition-all duration-1000 group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-10 h-10 bg-navy-500 text-white flex items-center justify-center text-sm font-black font-outfit">
                      {reason.n}
                    </div>
                    <h3 className="text-2xl font-black tracking-tighter uppercase font-outfit">{reason.t}</h3>
                  </div>
                  <p className="text-zinc-400 leading-offset-loose text-lg font-medium">{reason.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 04 Concept Section (Restored from 0c4779c) ─── */}
        <section className="py-40 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black text-zinc-50 font-outfit select-none whitespace-nowrap">
            SYNERGY
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-navy-500 mb-12 tracking-tighter uppercase font-outfit leading-none">
              科学的メソッド <span className="italic font-light opacity-30 lowercase">×</span> 最高級サービス
            </h2>
            <p className="text-lg text-zinc-500 font-bold tracking-[0.4em] uppercase mb-24">
              Science / Personalized / Holistic / Luxury
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'ri-flask-line', t: 'SCIENCE-BASED', s: '科学的根拠', d: '最新のスポーツ科学と栄養学に基づいた\n効果実証済みのメソッド' },
                { icon: 'ri-user-settings-line', t: 'PERSONALIZED', s: '完全個別対応', d: '一人ひとりの体質・目標・ライフスタイルに\n完全カスタマイズ' },
                { icon: 'ri-focus-3-line', t: 'HOLISTIC', s: '統合的アプローチ', d: '運動・栄養・回復・メンタルケアを統合した\n全体的なサポート' },
                { icon: 'ri-vip-crown-line', t: 'LUXURY', s: '最高級体験', d: '上質な環境とプレミアムサービスで\n最高のフィットネス体験を提供' },
              ].map(item => (
                <div key={item.t} className="p-12 border border-zinc-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-700 group">
                  <div className="text-4xl text-navy-300 group-hover:text-navy-500 transition-colors mb-8 flex justify-center">
                    <i className={item.icon} />
                  </div>
                  <h3 className="text-lg font-black text-navy-500 uppercase font-outfit tracking-tighter mb-2">{item.t}</h3>
                  <div className="text-[10px] font-black text-navy-300 tracking-[0.4em] uppercase mb-6">{item.s}</div>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed whitespace-pre-line">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 05 Service Flow Section (Restored from 0c4779c) ─── */}
        <section id="service-flow" className="py-40 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Process</span>
              <h2 className="text-4xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit leading-none mb-8">
                初回サービスの<span className="text-zinc-300">流れ</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { n: '01', t: 'お申し込み', d: 'トレーニング目標の調整を行います。' },
                { n: '02', t: 'ご来店', d: 'ご案内した施設（半蔵門・恵比寿）にお越しください。' },
                { n: '03', t: 'カウンセリング', d: '入念なカウンセリング・世界基準のフィジカルテストを行い、カラダの現状を的確に把握します。' },
                { n: '04', t: 'コンディション', d: 'お悩みやカラダの問題を解決するための、具体的なアプローチを開始します。' },
              ].map(step => (
                <div key={step.n} className="p-12 bg-white border border-zinc-50 transition-all duration-700 group">
                  <div className="text-6xl font-black text-zinc-50 font-outfit mb-8 group-hover:text-navy-500 transition-colors">
                    {step.n}
                  </div>
                  <h3 className="text-xl font-black text-navy-500 uppercase font-outfit tracking-tighter mb-4">{step.t}</h3>
                  <p className="text-sm text-zinc-500 leading-loose font-medium">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 06 Locations Section (Restored from 0c4779c) ─── */}
        <section id="locations" className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
              <div>
                <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Destinations</span>
                <h2 className="text-4xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit leading-none">
                  Exclusive <br /><span className="text-zinc-300">Studios</span>
                </h2>
              </div>
              <p className="text-lg text-zinc-500 font-medium tracking-widest max-w-sm lg:text-right border-l-4 lg:border-l-0 lg:border-r-4 border-navy-500 pl-8 lg:pl-0 lg:pr-8">
                2つの便利な立地で、<br />最高水準のトレーニング体験を提供いたします。
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {[
                { name: 'HALLEL 半蔵門店', addr: '〒102-0082 東京都千代田区一番町10-8 一番町ウエストビルB1', access: '半蔵門駅 徒歩2分', img: '/hallel-hanzomon.jpg' },
                { name: 'HALLEL 恵比寿店', addr: '〒150-0022 東京都渋谷区恵比寿南2-3-11 グレース青山2F', access: '恵比寿駅 徒歩3分', img: '/hallel-ebisu.jpg' },
              ].map(loc => (
                <div key={loc.name} className="group">
                  <div className="aspect-video relative overflow-hidden bg-zinc-200 grayscale group-hover:grayscale-0 transition-all duration-1000 mb-8 border border-zinc-100">
                    <Image src={loc.img} alt={loc.name} fill className="object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <h3 className="text-2xl font-black text-navy-500 uppercase tracking-tighter font-outfit mb-4">{loc.name}</h3>
                  <div className="flex items-start gap-4">
                    <i className="ri-map-pin-2-line text-xl text-navy-300" />
                    <div className="text-sm text-zinc-500 font-medium leading-relaxed">
                      <p>{loc.addr}</p>
                      <p className="text-navy-500 font-bold tracking-widest mt-2">{loc.access}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 07 Pricing Section (Restored from 0c4779c) ─── */}
        <section id="pricing" className="py-40 bg-zinc-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Investment</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-outfit mb-8">Choose Your <span className="text-navy-400">Luxury</span></h2>
              <div className="w-16 h-1 bg-navy-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter font-outfit mb-12 flex items-center">
                  <span className="w-8 h-0.5 bg-navy-500 mr-6" />通常セッション
                </h3>
                <div className="space-y-12">
                  {[
                    { t: '60分', p: '¥13,200', d: '基本的なトレーニングを集中して行いたい方向け。' },
                    { t: '90分', p: '¥19,050', d: 'トレーニングとコンディショニングを組み合わせた総合ケア。' },
                    { t: '120分', p: '¥24,400', d: 'より深く、時間をかけて身体と向き合いたい方に最適。' }
                  ].map(p => (
                    <div key={p.t} className="flex justify-between items-end border-b border-white/5 pb-8 group">
                      <div className="max-w-md">
                        <h4 className="text-xl font-black font-outfit mb-2 uppercase">{p.t}コース</h4>
                        <p className="text-xs text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">{p.d}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black font-outfit tracking-tighter group-hover:text-navy-400 transition-colors">{p.p}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter font-outfit mb-12 flex items-center">
                  <span className="w-8 h-0.5 bg-navy-500 mr-6" />出張セッション
                </h3>
                <div className="space-y-12">
                  {[
                    { t: '60分', p: '¥18,000', d: 'ご指定の場所で質の高いトレーニングを手軽に。' },
                    { t: '90分', p: '¥26,250', d: '店舗と変わらないプレミアムなトレーニングをご自宅で。' }
                  ].map(p => (
                    <div key={p.t} className="flex justify-between items-end border-b border-white/5 pb-8 group">
                      <div className="max-w-md">
                        <h4 className="text-xl font-black font-outfit mb-2 uppercase">{p.t}コース</h4>
                        <p className="text-xs text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">{p.d}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black font-outfit tracking-tighter group-hover:text-navy-400 transition-colors">{p.p}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-16 p-8 bg-white/5 border border-white/5 text-center">
                  <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">
                    ※すべて税込価格です。場所や頻度につきましては、お気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 08 Testimonials Section (Restored from 0c4779c) ─── */}
        <section id="testimonials" className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Proven Success</span>
              <h2 className="text-4xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit leading-none mb-8">
                Voice of <span className="text-zinc-300">Peak</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
              {[
                { name: 'A.K様', info: '20代女性・会社員', text: 'トレーニング初心者の私でも、石原さんの丁寧で分かりやすい指導のおかげで、3ヶ月で理想の体型に近づくことができました。科学的なアプローチで効率的に結果が出て驚いています。' },
                { name: 'M.T様', info: '40代男性・経営者', text: '長年の腰痛に悩んでいましたが、石原さんのコンディショニング指導により大幅に改善されました。プロフェッショナルな知識と技術、そして親身なサポートに本当に感謝しています。' },
                { name: 'R.S様', info: '30代男性・アスリート', text: '競技パフォーマンス向上のためのトレーニングを依頼しました。最新の科学的知識に基づいた指導で、明確な改善が実感できています。プロとしての経験と知識の深さが違います。' },
              ].map(testi => (
                <div key={testi.name} className="p-12 border border-zinc-100 hover:shadow-2xl transition-all duration-1000 group">
                  <i className="ri-double-quotes-l text-4xl text-navy-100 block mb-8" />
                  <p className="text-lg text-navy-500 font-medium leading-loose mb-10 italic">「{testi.text}」</p>
                  <div>
                    <div className="text-xs font-black text-navy-500 uppercase tracking-widest">{testi.name}</div>
                    <div className="text-[10px] font-bold text-zinc-400 mt-1 uppercase tracking-widest">{testi.info}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20 border-t border-b border-zinc-100">
              {[{ n: '98%', l: '満足度' }, { n: '3000+', l: '指導実績' }, { n: '95%', l: '継続率' }, { n: '10+', l: '年の経験' }].map(s => (
                <div key={s.l} className="text-center group">
                  <div className="text-4xl font-black text-navy-500 font-outfit tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-700">{s.n}</div>
                  <div className="text-[10px] font-black text-zinc-400 tracking-[0.3em] uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 09 Profile Section (Restored from 0c4779c) ─── */}
        <section id="profile" className="py-40 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center mb-40">
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] relative grayscale border border-zinc-200 shadow-2xl">
                  <Image src="/profile-junya.jpg" alt="石原淳哉" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 border-navy-500 border-b-8 border-r-8 -z-10" />
              </div>
              <div className="lg:col-span-7">
                <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">The Professional</span>
                <h2 className="text-5xl md:text-7xl font-black text-navy-500 tracking-tighter uppercase font-outfit mb-8 leading-none">
                  石原 淳哉
                </h2>
                <p className="text-[10px] font-black text-zinc-400 tracking-[0.4em] uppercase flex items-center mb-12">
                  <span className="w-12 h-[1px] bg-navy-500 mr-4"></span>
                  JUNYA ISHIHARA
                </p>
                <div className="space-y-8 prose prose-zinc prose-lg lg:prose-xl">
                  <p className="text-xl text-navy-500 font-bold italic border-l-4 border-navy-500 pl-8 leading-relaxed mb-10">
                    「ホネカワスネオ」と呼ばれた過去から、トレーニングを通じて人生を変えた経験を持つパーソナルトレーナー。
                  </p>
                  <p className="text-lg text-zinc-600 leading-offset-loose font-medium mb-8">
                    単なるボディメイクにとどまらず、機能解剖学に基づいた「動ける身体づくり」と「痛みのない生活」を提供することを信条としています。
                  </p>
                  <p className="text-lg text-zinc-600 leading-offset-loose font-medium mb-12">
                    大手フィットネスクラブでの指導経験、スポーツ現場での帯同経験を経て、現在は「HALLEL」にて、一般の方からアスリートまで幅広いクライアントの目標達成をサポートしています。
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-zinc-200">
                  {[{ i: 'ri-user-star-line', n: '指名No.1', s: 'エリア実績' }, { i: 'ri-medal-line', n: '10年+', s: '指導歴' }, { i: 'ri-group-line', n: '3000+', s: 'セッション数' }, { i: 'ri-book-open-line', n: 'NASM', s: '国際資格' }].map(q => (
                    <div key={q.n} className="text-center group">
                      <div className="text-2xl text-navy-300 group-hover:text-navy-500 transition-colors mb-4"><i className={q.i} /></div>
                      <div className="text-xs font-black text-navy-500 uppercase tracking-tighter">{q.n}</div>
                      <div className="text-[8px] text-zinc-400 font-bold uppercase tracking-widest mt-1">{q.s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h3 className="text-2xl font-black text-navy-500 uppercase tracking-tighter font-outfit mb-16 flex items-center">
                  <span className="w-10 h-0.5 bg-navy-500 mr-8" />経歴・実績
                </h3>
                <div className="space-y-16 border-l border-zinc-100 ml-4">
                  {[
                    { y: '2014 - 2018', t: '都内フィットネスクラブ勤務', d: '月間150本以上のセッションを担当し、エリア指名数No.1を獲得。' },
                    { y: '2018', t: 'フリーランスとして独立', d: 'パーソナルトレーナーとして独立。より一人ひとりに寄り添った指導を開始。' },
                    { y: '2019 - Present', t: 'TOPFORM / HALLEL 参画', d: 'コンディショニングジム「HALLEL」の立ち上げに参画。' },
                    { y: 'Current', t: '湘南学院高等学校 男子バレーボール部', d: 'ストレングストレーナーとしてチームに帯同。' },
                  ].map(tl => (
                    <div key={tl.y} className="relative pl-12 group">
                      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-navy-500 rounded-full group-hover:scale-150 transition-transform duration-500" />
                      <div className="text-[10px] font-black text-navy-300 font-outfit tracking-widest title mb-3 uppercase">{tl.y}</div>
                      <h4 className="text-xl font-black text-navy-500 uppercase tracking-tighter font-outfit mb-2">{tl.t}</h4>
                      <p className="text-sm font-medium text-zinc-500 leading-loose">{tl.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-navy-500 uppercase tracking-tighter font-outfit mb-16 flex items-center">
                  <span className="w-10 h-0.5 bg-navy-500 mr-8" />専門分野 / 資格
                </h3>
                <div className="space-y-12">
                  {[
                    { s: '姿勢改善・機能改善', v: 100 },
                    { s: '疼痛改善（腰痛・肩こり等）', v: 95 },
                    { s: 'スポーツパフォーマンス向上', v: 90 }
                  ].map(sk => (
                    <div key={sk.s}>
                      <div className="flex justify-between items-end mb-4">
                        <span className="text-[10px] font-black text-navy-500 uppercase tracking-[0.3em]">{sk.s}</span>
                        <span className="text-[10px] font-black text-zinc-300 font-outfit">{sk.v}%</span>
                      </div>
                      <div className="h-0.5 bg-zinc-100 relative">
                        <div className="absolute inset-y-0 left-0 bg-navy-500 transition-all duration-1000" style={{ width: `${sk.v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-24">
                  {[
                    { i: 'ri-graduation-cap-line', t: 'Education', n: '日本大学文理学部\n体育学科 卒業' },
                    { i: 'ri-global-line', t: 'Certification', n: '全米スポーツ医学協会\nNASM-PES' }
                  ].map(q => (
                    <div key={q.n} className="p-8 bg-white border border-zinc-100 flex flex-col items-center text-center shadow-sm hover:shadow-2xl transition-all duration-700">
                      <div className="text-3xl text-navy-300 mb-6"><i className={q.i} /></div>
                      <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">{q.t}</div>
                      <div className="text-xs font-bold text-navy-500 tracking-widest uppercase whitespace-pre-line leading-relaxed">{q.n}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10 Contact Section (Restored from 0c4779c) ─── */}
        <section id="contact" className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit leading-none mb-8">
                CONTACT
              </h2>
              <div className="w-16 h-1 bg-navy-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-100">
              {[
                { i: 'ri-file-list-3-line', t: 'Googleフォーム', d: '体験のご予約やご質問など、お気軽にお問い合わせください。', btn: 'Open Form', href: '#' },
                { i: 'ri-line-fill', t: 'LINE公式', d: 'チャットで迅速に対応します。まずはお友だち追加から。', btn: 'Add Friend', href: '#' },
                { i: 'ri-mail-send-line', t: 'メール', d: '直接のメールでのご連絡はこちらのボタンからどうぞ。', btn: 'Send Email', href: 'mailto:junya1995@gmail.com' },
              ].map(c => (
                <div key={c.t} className="p-16 text-center border border-zinc-100 hover:bg-zinc-50 transition-colors group flex flex-col justify-between h-full">
                  <div>
                    <div className="text-5xl text-navy-300 mb-10 group-hover:text-navy-500 transition-colors inline-block">
                      <i className={c.i} />
                    </div>
                    <h3 className="text-xl font-black text-navy-500 uppercase tracking-tighter font-outfit mb-2">{c.t}</h3>
                    <div className="w-8 h-0.5 bg-navy-500 mx-auto mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="text-sm text-zinc-500 leading-loose font-medium mb-12">{c.d}</p>
                  </div>
                  <a href={c.href} className="inline-block px-8 py-4 bg-navy-500 text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-zinc-950 transition-all duration-700 shadow-xl">
                    {c.btn}
                  </a>
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