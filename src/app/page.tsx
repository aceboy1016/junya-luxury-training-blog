import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'JUNYA ISHIHARA PERSONAL TRAINING | 石原淳哉パーソナルトレーニング',
  description: '変化を実感するから自然と続けたくなる。根本から改善するアプローチで、見た目も体調も確実に変化を実感。半蔵門・恵比寿のプレミアムパーソナルトレーニング。',
}

/* ─── Hero ─── */
const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden text-white"
    style={{
      background: `linear-gradient(135deg,rgba(0,0,0,.9),rgba(20,20,20,.8)),radial-gradient(ellipse at center,rgba(245,158,11,.15) 0%,transparent 60%),url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'linear-gradient(135deg,#F59E0B,#D97706)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{ background: 'linear-gradient(135deg,#F59E0B,#D97706)', animationDelay: '2s' }} />
    </div>
    <div className="container mx-auto px-6 text-center relative z-10 max-w-7xl">
      <div className="mb-8">
        <p className="text-gold-400 text-xl tracking-widest uppercase font-bold mb-2 animate-fade-in-up">Premium Personal Training</p>
        <div className="w-20 h-1 bg-gold-gradient mx-auto" />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '.3s', lineHeight: 1.1 }}>
        <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">変化</span>を実感するから<br />
        <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">自然</span>と続けたくなる
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-16 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '.6s' }}>
        根本から改善するアプローチで、見た目も体調も確実に変化を実感
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: '.9s' }}>
        <Link href="#contact" className="bg-gold-gradient text-white px-12 py-5 font-black tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase text-lg relative group">
          <i className="ri-calendar-line mr-3" />体験トレーニング予約
        </Link>
        <Link href="#service-flow" className="border-2 border-white text-white px-12 py-5 font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 uppercase text-lg backdrop-blur-sm">
          <i className="ri-play-circle-line mr-3" />詳しく見る
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
        {[{ n: '3000+', l: '指導実績', e: 'Proven Track Record' }, { n: '10+', l: '年の経験', e: 'Years of Excellence' }, { n: '100%', l: '満足度', e: 'Customer Satisfaction' }].map(s => (
          <div key={s.l} className="bg-white/10 glass-effect border border-white/30 p-8 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl font-black text-gold-400 mb-3 group-hover:scale-110 transition-transform duration-300">{s.n}</div>
            <div className="text-white font-bold tracking-wide uppercase">{s.l}</div>
            <div className="text-gray-300 text-sm mt-1">{s.e}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <Link href="#methodology" className="text-white/70 hover:text-white transition-colors"><i className="ri-arrow-down-line text-2xl" /></Link>
    </div>
  </section>
)

/* ─── Methodology ─── */
const MethodologySection = () => (
  <section id="methodology" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <p className="text-gold-500 font-bold tracking-widest uppercase mb-2">OUR METHOD</p>
        <h2 className="text-5xl font-black text-black mb-4 tracking-wide">ELITE <span className="text-gradient">METHODOLOGY</span></h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto"><span className="text-gold-500 font-semibold">科学的根拠</span>と豊富な経験に基づいた独自のメソッドで、<span className="text-gold-500 font-semibold">確実な結果</span>と最高級の体験をお約束</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {[
          { n: '01', t: 'ASSESSMENT', s: '詳細分析', d: 'お客様の体組成、姿勢、動作パターン、ライフスタイルを徹底的に分析。最新の測定機器を使用した科学的アプローチで現状を正確に把握します。' },
          { n: '02', t: 'DESIGN', s: '完全オーダーメイド', d: '分析結果をもとに、お客様だけの専用プログラムを設計。目標達成への最短ルートを科学的根拠に基づいて構築いたします。' },
          { n: '03', t: 'EXECUTION', s: '精密実行', d: '洗練されたテクニックと最新理論を駆使したトレーニング指導。一つ一つの動作を丁寧に指導し、効果を最大化します。' },
          { n: '04', t: 'EVOLUTION', s: '継続進化', d: '定期的な評価と調整により、常にプログラムを最適化。お客様の進歩に合わせて継続的にアップデートし続けます。' },
        ].map(s => (
          <div key={s.n} className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-gold-500">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gold-gradient text-white flex-shrink-0 flex items-center justify-center text-2xl font-bold mr-4">{s.n}</div>
              <div><h3 className="text-xl font-bold text-black">{s.t}</h3><p className="text-gold-500 font-semibold">{s.s}</p></div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── Why Me ─── */
const WhyMeSection = () => (
  <section id="why-me" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <p className="text-gold-400 font-bold tracking-widest uppercase mb-4">WHY CHOOSE ME</p>
        <h2 className="text-5xl md:text-6xl font-black text-black mb-8">選ばれる<span className="bg-gradient-to-r from-gold-400 to-amber-600 bg-clip-text text-transparent">理由</span></h2>
        <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8" />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">科学的根拠と経験に基づいた、あなただけのオーダーメイドプログラム</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gold-gradient text-white flex items-center justify-center text-xl font-bold shadow-lg">01</div>
            <h3 className="text-2xl font-bold text-gray-900">多角的なアプローチ</h3>
          </div>
          <p className="text-gray-600 mb-8">単なる筋トレだけではありません。身体の機能を高めるための要素をバランスよく組み合わせます。</p>
          <div className="relative h-64 bg-white rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-48 h-48 border border-gray-300 rounded-full" /><div className="w-32 h-32 border border-gray-300 rounded-full absolute" /><div className="w-16 h-16 border border-gray-300 rounded-full absolute" />
            </div>
            <div className="relative w-40 h-40 bg-gold-500/10 border-2 border-gold-500 rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            <div className="absolute top-4 font-bold text-xs text-gray-500">筋力</div>
            <div className="absolute bottom-4 font-bold text-xs text-gray-500">持久力</div>
            <div className="absolute right-4 font-bold text-xs text-gray-500">柔軟性</div>
            <div className="absolute left-4 font-bold text-xs text-gray-500">栄養</div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gold-gradient text-white flex items-center justify-center text-xl font-bold shadow-lg">02</div>
            <h3 className="text-2xl font-bold text-gray-900">確実なステップアップ</h3>
          </div>
          <p className="text-gray-600 mb-8">いきなりハードな運動は行いません。身体の状態に合わせて段階的に負荷を上げていきます。</p>
          <div className="relative h-64 bg-white rounded-2xl border border-gray-100 p-6 flex items-end justify-between gap-2">
            {[{ h: '25%', l: '評価', c: 'bg-gold-200 group-hover:bg-gold-300' }, { h: '50%', l: '改善', c: 'bg-gold-300 group-hover:bg-gold-400' }, { h: '75%', l: '強化', c: 'bg-gold-400 group-hover:bg-gold-500' }, { h: '100%', l: '定着', c: 'bg-gold-500 group-hover:bg-gold-600' }].map(b => (
              <div key={b.l} className={`w-full ${b.c} rounded-t-lg relative transition-colors`} style={{ height: b.h }}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500">{b.l}</div>
              </div>
            ))}
            <div className="absolute top-4 right-4 text-gold-500 text-2xl animate-bounce"><i className="ri-arrow-right-up-line" /></div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gold-gradient text-white flex items-center justify-center text-xl font-bold shadow-lg">03</div>
            <h3 className="text-2xl font-bold text-gray-900">コンディショニング重視</h3>
          </div>
          <p className="text-gray-600 mb-8">「鍛える」前に「整える」。マイナスをゼロにし、そこからプラスを作るアプローチです。</p>
          <div className="relative h-64 bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-between">
            <div className="text-center flex-1 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="text-4xl text-red-400 mb-2"><i className="ri-close-circle-line" /></div>
              <div className="font-bold text-gray-400 text-sm mb-1">一般的なジム</div>
              <div className="text-xs text-gray-400">痛み・歪み<br />そのまま</div>
            </div>
            <div className="text-gold-300 text-2xl"><i className="ri-arrow-right-line" /></div>
            <div className="text-center flex-1 scale-110">
              <div className="text-5xl text-green-500 mb-2"><i className="ri-checkbox-circle-line" /></div>
              <div className="font-bold text-gray-800 text-sm mb-1">当ジム</div>
              <div className="text-xs text-gray-600 font-medium">不調改善<br />↓<br />機能向上</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ─── Concept Diagram ─── */
const ConceptSection = () => (
  <section className="py-24 bg-gray-900 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">科学的メソッド <span className="text-gold-500 mx-2">×</span> 最高級サービス</h2>
        <p className="text-xl text-gray-300 font-light tracking-widest">最新のスポーツ科学とプレミアムな体験を<span className="text-gold-400 font-bold">融合</span></p>
        <div className="w-24 h-1 bg-gold-gradient mx-auto mt-8" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 max-w-6xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <div className="w-40 h-40 rounded-full bg-gold-gradient p-1 shadow-[0_0_60px_rgba(245,158,11,0.4)] animate-pulse">
            <div className="w-full h-full bg-gray-900 rounded-full flex flex-col items-center justify-center border border-gold-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gold-500/10" />
              <span className="text-4xl mb-1">💎</span>
              <span className="text-gold-100 text-xs font-bold tracking-widest">SYNERGY</span>
            </div>
          </div>
        </div>
        {[
          { icon: 'ri-flask-line', t: 'SCIENCE-BASED', s: '科学的根拠', d: '最新のスポーツ科学と栄養学に基づいた\n効果実証済みのメソッド', align: 'text-right lg:pr-16' },
          { icon: 'ri-user-settings-line', t: 'PERSONALIZED', s: '完全個別対応', d: '一人ひとりの体質・目標・ライフスタイルに\n完全カスタマイズ', align: 'text-left lg:pl-16' },
          { icon: 'ri-focus-3-line', t: 'HOLISTIC', s: '統合的アプローチ', d: '運動・栄養・回復・メンタルケアを統合した\n全体的なサポート', align: 'text-right lg:pr-16' },
          { icon: 'ri-vip-crown-line', t: 'LUXURY', s: '最高級体験', d: '上質な環境とプレミアムサービスで\n最高のフィットネス体験を提供', align: 'text-left lg:pl-16' },
        ].map(c => (
          <div key={c.t} className={`bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-gold-500/50 transition-all duration-500 group ${c.align} relative overflow-hidden`}>
            <div className={`text-gold-500 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500 ${c.align.includes('right') ? 'flex justify-end' : ''}`}><i className={c.icon} /></div>
            <h3 className="text-2xl font-black text-white mb-2 tracking-wider">{c.t}</h3>
            <p className="text-gold-400 text-sm font-bold mb-4 tracking-widest uppercase">{c.s}</p>
            <p className="text-gray-400 text-sm leading-relaxed font-medium whitespace-pre-line">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── Service Flow ─── */
const ServiceFlowSection = () => (
  <section id="service-flow" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-black mb-4">初回サービスの<span className="text-gradient">流れ</span></h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">パーソナルトレーニングの4つのステップ</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          { n: '01', t: 'お申し込み', d: 'トレーニング目標の調整を行います' },
          { n: '02', t: 'ご来店', d: 'ご案内した施設にお越しください' },
          { n: '03', t: 'カウンセリング', d: '入念なカウンセリング・世界基準のフィジカルテストを行い、お客様のお悩みやカラダの現状を把握します' },
          { n: '04', t: 'コンディショニング', d: 'お客様のお悩みやカラダの問題を解決するため、コンディショニングトレーニングを行います' },
        ].map(s => (
          <div key={s.n} className="group">
            <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center hover:scale-105 border-t-4 border-gold-500">
              <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-6">{s.n}</div>
              <h3 className="text-xl font-bold text-black mb-4 tracking-wide">{s.t}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── Locations ─── */
const LocationsSection = () => (
  <section id="locations" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-black mb-4">活動場所・<span className="text-gradient">アクセス</span></h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">2つの便利な立地でトレーニング可能</p>
      </div>
      {[
        { name: 'HALLEL半蔵門店', addr: '〒102-0082 東京都千代田区一番町10-8 一番町ウエストビルB1', access: '東京メトロ半蔵門線「半蔵門駅」4番出口から徒歩2分', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.74!3d35.685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzA2LjAiTiAxMznCsDQ0JzI0LjAiRQ!5e0!3m2!1sja!2sjp!4v1' },
        { name: 'HALLEL恵比寿店', addr: '〒150-0022 東京都渋谷区恵比寿南2-3-11 グレース青山2F', access: 'JR・東京メトロ日比谷線「恵比寿駅」西口から徒歩3分', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', map: '' },
      ].map(loc => (
        <div key={loc.name} className="mb-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white shadow-xl p-8 border-t-8 border-gold-500 h-full flex flex-col">
              <div className="relative overflow-hidden mb-6">
                <img src={loc.img} alt={loc.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-gold-gradient text-white px-3 py-1 text-sm font-bold uppercase tracking-wide">Premium Location</div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{loc.name}</h3>
              <div className="space-y-3 text-gray-600 flex-grow">
                <div className="flex items-start"><i className="ri-map-pin-line text-gold-500 mr-3 mt-1" /><div><p className="font-medium">{loc.addr}</p><p className="text-sm text-gold-500 font-semibold mt-1">{loc.access}</p></div></div>
              </div>
            </div>
            <div className="bg-white shadow-xl p-4 border-t-8 border-gold-500 h-full min-h-80 flex items-center justify-center">
              <div className="w-full h-full min-h-72 bg-gray-100 flex items-center justify-center rounded">
                <p className="text-gray-400 text-sm"><i className="ri-map-2-line mr-2" />Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

/* ─── Pricing ─── */
const PricingSection = () => (
  <section id="pricing" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold-500 font-bold tracking-widest uppercase mb-2">PREMIUM PROGRAMS</p>
        <h2 className="text-6xl font-black text-black mb-4">CHOOSE YOUR <span className="text-gradient">LUXURY</span></h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">あなたのライフスタイルに合わせた最高級のプログラム</p>
      </div>
      <div className="mb-20">
        <h3 className="text-4xl font-bold text-center text-black mb-12">通常セッション</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[{ t: '60分', p: '¥13,200', d: '基本的なトレーニングを集中して行いたい方向け。', c: 'border-gold-400' }, { t: '90分', p: '¥19,050', d: 'トレーニングとコンディショニングを組み合わせた総合ケア。', c: 'border-gold-500' }, { t: '120分', p: '¥24,400', d: 'より深く、時間をかけて身体と向き合いたい方に最適。', c: 'border-gold-600' }].map(p => (
            <div key={p.t} className={`bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col border-t-4 ${p.c}`}>
              <div className="p-8 text-center flex-grow">
                <div className="mb-6"><i className="ri-time-line text-5xl text-gold-500" /></div>
                <h4 className="text-2xl font-black">{p.t}コース</h4>
                <div className="text-5xl font-black text-black my-6">{p.p}<span className="text-xl font-bold">/回</span></div>
                <p className="text-gray-600 leading-relaxed mb-8">{p.d}</p>
              </div>
              <div className="p-8 pt-0"><Link href="#contact" className="bg-gold-gradient text-white px-12 py-4 font-bold tracking-wide hover:shadow-2xl transition-all duration-300 uppercase text-lg w-full block text-center">このプランを選ぶ</Link></div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-center text-black mb-12">出張セッション</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[{ t: '60分', p: '¥18,000', d: 'ご指定の場所で質の高いトレーニングを手軽に。' }, { t: '90分', p: '¥26,250', d: '店舗と変わらないプレミアムなトレーニングをご自宅で。' }].map(p => (
            <div key={p.t} className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col border-t-4 border-gold-500">
              <div className="p-8 text-center flex-grow">
                <div className="mb-6"><i className="ri-roadster-line text-5xl text-gold-500" /></div>
                <h4 className="text-2xl font-black">{p.t}コース</h4>
                <div className="text-5xl font-black text-black my-6">{p.p}<span className="text-xl font-bold">/回</span></div>
                <p className="text-gray-600 leading-relaxed mb-8">{p.d}</p>
              </div>
              <div className="p-8 pt-0"><Link href="#contact" className="bg-gold-gradient text-white px-12 py-4 font-bold tracking-wide hover:shadow-2xl transition-all duration-300 uppercase text-lg w-full block text-center">このプランを選ぶ</Link></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

/* ─── Testimonials ─── */
const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 left-10 w-32 h-32 bg-gold-gradient rounded-full" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gold-gradient rounded-full" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <p className="text-gold-400 font-bold tracking-widest uppercase mb-4 text-sm">CLIENT TESTIMONIALS</p>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">お客様の<span className="bg-gradient-to-r from-gold-400 to-amber-600 bg-clip-text text-transparent">声</span></h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">実際にトレーニングを受けられたお客様からの声をご紹介します</p>
        <div className="w-24 h-1 bg-gold-gradient mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          { name: 'A.K様', info: '20代女性・会社員', text: 'トレーニング初心者の私でも、石原さんの丁寧で分かりやすい指導のおかげで、3ヶ月で理想の体型に近づくことができました。科学的なアプローチで効率的に結果が出て驚いています。' },
          { name: 'M.T様', info: '40代男性・経営者', text: '長年の腰痛に悩んでいましたが、石原さんのコンディショニング指導により大幅に改善されました。プロフェッショナルな知識と技術、そして親身なサポートに本当に感謝しています。' },
          { name: 'R.S様', info: '30代男性・アスリート', text: '競技パフォーマンス向上のためのトレーニングを依頼しました。最新の科学的知識に基づいた指導で、明確な改善が実感できています。プロとしての経験と知識の深さが違います。' },
        ].map(t => (
          <div key={t.name} className="group relative">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-gold-400 mb-6"><i className="ri-double-quotes-l text-4xl opacity-30" /></div>
              <p className="text-gray-200 text-lg leading-relaxed mb-8 italic">「{t.text}」</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">{t.name[0]}</div>
                <div><div className="text-white font-bold">{t.name}</div><div className="text-gold-400 text-sm">{t.info}</div></div>
              </div>
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 bg-white/5 backdrop-blur-lg border border-white/10 p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
          {[{ n: '98%', l: '満足度' }, { n: '3000+', l: '指導実績' }, { n: '95%', l: '継続率' }, { n: '10+', l: '年の経験' }].map(s => (
            <div key={s.l}><div className="text-4xl font-black text-gold-400 mb-2">{s.n}</div><div className="text-white text-sm tracking-wide">{s.l}</div></div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

/* ─── Profile ─── */
const ProfileSection = () => (
  <section id="profile" className="py-24 bg-gray-50 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-10 right-10 w-64 h-64 bg-gold-500 opacity-5 rounded-full blur-3xl" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" alt="石原淳哉" className="w-full h-[500px] object-cover" />
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border-l-4 border-gold-500 max-w-[200px]">
              <div className="text-gold-600 font-black text-lg leading-tight mb-1">NASM-PES</div>
              <div className="text-gray-600 text-xs font-medium">Certified Personal Trainer</div>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500/30 rounded-2xl -z-10" />
        </div>
        <div className="lg:col-span-7">
          <div className="mb-8">
            <span className="inline-block py-1 px-3 rounded-full bg-gold-100 text-gold-700 text-sm font-bold tracking-wider mb-4">PROFILE</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">石原 淳哉</h2>
            <p className="text-xl text-gold-600 font-medium tracking-widest">JUNYA ISHIHARA</p>
          </div>
          <div className="text-gray-600 mb-10 space-y-4">
            <p className="leading-relaxed">「ホネカワスネオ」と呼ばれた過去から、トレーニングを通じて人生を変えた経験を持つパーソナルトレーナー。単なるボディメイクにとどまらず、機能解剖学に基づいた「動ける身体づくり」と「痛みのない生活」を提供することを信条としています。</p>
            <p className="leading-relaxed">大手フィットネスクラブでの指導経験、スポーツ現場での帯同経験を経て、現在は「HALLEL」にて、一般の方からアスリートまで幅広いクライアントの目標達成をサポートしています。</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[{ i: 'ri-user-star-line', n: '指名No.1', s: 'エリア実績' }, { i: 'ri-medal-line', n: '10年+', s: '指導歴' }, { i: 'ri-group-line', n: '3000+', s: 'セッション数' }, { i: 'ri-book-open-line', n: 'NASM', s: '国際資格' }].map(q => (
              <div key={q.n} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-gold-500 text-2xl mb-1"><i className={q.i} /></div>
                <div className="font-bold text-gray-800">{q.n}</div>
                <div className="text-xs text-gray-500">{q.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Skills & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center text-white mr-3"><i className="ri-history-line" /></span>経歴・実績
          </h3>
          <div className="relative border-l-2 border-gray-200 ml-4 space-y-10 pb-4">
            {[
              { y: '2014 - 2018', t: '都内フィットネスクラブ勤務', d: '月間150本以上のセッションを担当し、エリア指名数No.1を獲得。' },
              { y: '2018', t: 'フリーランスとして独立', d: 'パーソナルトレーナーとして独立。より一人ひとりに寄り添った指導を開始。' },
              { y: '2019 - Present', t: 'TOPFORM / HALLEL 参画', d: 'コンディショニングジム「HALLEL」の立ち上げに参画。' },
              { y: 'Current', t: '湘南学院高等学校 男子バレーボール部', d: 'ストレングストレーナーとしてチームに帯同。' },
            ].map(tl => (
              <div key={tl.y} className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-5 h-5 rounded-full border-4 border-white bg-gold-500 shadow-sm" />
                <div className="text-sm text-gold-600 font-bold mb-1">{tl.y}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{tl.t}</h4>
                <p className="text-gray-600 text-sm">{tl.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center text-white mr-3"><i className="ri-bar-chart-box-line" /></span>専門分野
          </h3>
          <div className="space-y-6 mb-12">
            {[{ s: '姿勢改善・機能改善', v: 100 }, { s: '疼痛改善（腰痛・肩こり等）', v: 95 }, { s: 'ボディメイク', v: 90 }, { s: 'スポーツパフォーマンス向上', v: 90 }].map(sk => (
              <div key={sk.s}>
                <div className="flex justify-between mb-2"><span className="font-bold text-gray-700">{sk.s}</span><span className="text-gold-600 font-bold">{sk.v}%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-gradient-to-r from-gold-400 to-gold-600 h-2.5 rounded-full" style={{ width: `${sk.v}%` }} /></div>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center text-white mr-3"><i className="ri-award-line" /></span>保有資格
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[{ i: 'ri-graduation-cap-line', t: 'Education', n: '日本大学文理学部 体育学科 卒業' }, { i: 'ri-global-line', t: 'Certification', n: '全米スポーツ医学協会 NASM-PES' }].map(q => (
              <div key={q.n} className="bg-white p-4 rounded-xl border border-gold-200 shadow-sm flex items-center hover:shadow-md transition-shadow">
                <div className="text-3xl text-gold-500 mr-3"><i className={q.i} /></div>
                <div><div className="text-xs text-gray-500 uppercase tracking-wider">{q.t}</div><div className="font-bold text-gray-800 text-sm">{q.n}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ─── Contact ─── */
const ContactSection = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-black tracking-wider">CONTACT</h2>
        <p className="text-gold-500 font-semibold">お問い合わせ</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { i: 'ri-file-list-3-line', t: 'Googleフォーム', d: '体験のご予約やご質問など、お気軽にお問い合わせください。', btn: 'フォームを開く', href: '#' },
          { i: 'ri-line-fill', t: 'LINE公式', d: 'チャットで迅速に対応します。まずはお友だち追加から。', btn: '友だち追加', href: '#' },
          { i: 'ri-mail-send-line', t: 'メール', d: '直接のメールでのご連絡はこちらのボタンからどうぞ。', btn: 'メールを送信', href: 'mailto:junya1995@gmail.com' },
        ].map(c => (
          <div key={c.t} className="bg-white p-8 text-center rounded-lg shadow-xl hover:shadow-2xl border-t-4 border-gold-500 transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            <div>
              <i className={`${c.i} text-5xl text-gold-500 mb-4 inline-block`} />
              <h3 className="text-2xl font-bold text-black mb-2">{c.t}</h3>
              <p className="text-gray-600 mb-6">{c.d}</p>
            </div>
            <a href={c.href} className="mt-auto inline-block bg-gold-gradient text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">{c.btn}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MethodologySection />
        <WhyMeSection />
        <ConceptSection />
        <ServiceFlowSection />
        <LocationsSection />
        <PricingSection />
        <TestimonialsSection />
        <ProfileSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}