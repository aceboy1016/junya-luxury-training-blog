import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/motion/Preloader'
import MotionProvider from '@/components/motion/MotionProvider'
import TokyoClock from '@/components/motion/TokyoClock'

export const metadata: Metadata = {
  title: 'J. ISHIHARA | Premium Personal Training & Conditioning',
  description:
    '「しなきゃ」を「したい！」に変える。半蔵門・恵比寿のパーソナルトレーニング。コンディショニングを軸に、見た目も体調も根本から変える石原淳哉のセッション。',
}

/* ──────────────────────────────────────────
   Content
   ────────────────────────────────────────── */

const methodology = [
  { n: '01', t: 'Assessment', s: '詳細分析', d: 'お客様の体組成、姿勢、動作パターン、ライフスタイルを徹底的に分析。最新の測定機器を使用した科学的アプローチで現状を正確に把握します。' },
  { n: '02', t: 'Design', s: '完全オーダーメイド', d: '分析結果をもとに、お客様だけの専用プログラムを設計。目標達成への最短ルートを科学的根拠に基づいて構築いたします。' },
  { n: '03', t: 'Execution', s: '精密実行', d: '洗練されたテクニックと最新理論を駆使したトレーニング指導。一つ一つの動作を丁寧に指導し、効果を最大化します。' },
  { n: '04', t: 'Evolution', s: '継続進化', d: '定期的な評価と調整により、常にプログラムを最適化。お客様の進歩に合わせて継続的にアップデートし続けます。' },
]

const reasons = [
  { n: '01', t: '多角的なアプローチ', d: '単なる筋トレだけではありません。身体の機能を高めるための要素（筋力・柔軟性・持久力・栄養）をバランスよく組み合わせます。' },
  { n: '02', t: '確実なステップアップ', d: 'いきなりハードな運動は行いません。評価・改善・強化・定着のサイクルを回し、身体の状態に合わせて段階的に負荷を上げます。' },
  { n: '03', t: 'コンディショニング重視', d: '「鍛える」前に「整える」。マイナスをゼロにし、そこから機能的なプラスを作り出すアプローチで不調を根本改善します。' },
]

const concept = [
  { t: 'Science-Based', s: '科学的根拠', d: '最新のスポーツ科学と栄養学に基づいた、効果実証済みのメソッド。' },
  { t: 'Personalized', s: '完全個別対応', d: '一人ひとりの体質・目標・ライフスタイルに完全カスタマイズ。' },
  { t: 'Holistic', s: '統合的アプローチ', d: '運動・栄養・回復・メンタルケアを統合した全体的なサポート。' },
  { t: 'Luxury', s: '最高級体験', d: '上質な環境とプレミアムサービスで、最高のフィットネス体験を。' },
]

const flow = [
  { n: '01', t: 'お申し込み', e: 'Apply', d: 'トレーニング目標の調整を行います。' },
  { n: '02', t: 'ご来店', e: 'Visit', d: 'ご案内した施設（半蔵門・恵比寿）にお越しください。' },
  { n: '03', t: 'カウンセリング', e: 'Counsel', d: '入念なカウンセリング・世界基準のフィジカルテストを行い、カラダの現状を的確に把握します。' },
  { n: '04', t: 'コンディション', e: 'Condition', d: 'お悩みやカラダの問題を解決するための、具体的なアプローチを開始します。' },
]

const studios = [
  {
    key: 'Hanzomon',
    name: 'HALLEL 半蔵門店',
    addr: '〒102-0082 東京都千代田区一番町10-8 一番町ウエストビルB1',
    station: '半蔵門駅',
    min: '2',
    coord: '35.6852° N / 139.7413° E',
    map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('東京都千代田区一番町10-8 一番町ウエストビル'),
  },
  {
    key: 'Ebisu',
    name: 'HALLEL 恵比寿店',
    addr: '〒150-0022 東京都渋谷区恵比寿南2-3-11 グレース青山2F',
    station: '恵比寿駅',
    min: '3',
    coord: '35.6467° N / 139.7101° E',
    map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('東京都渋谷区恵比寿南2-3-11'),
  },
]

const pricing = {
  studio: [
    { t: '60', p: '13,200', d: '基本的なトレーニングを集中して行いたい方向け。' },
    { t: '90', p: '19,050', d: 'トレーニングとコンディショニングを組み合わせた総合ケア。' },
    { t: '120', p: '24,400', d: 'より深く、時間をかけて身体と向き合いたい方に最適。' },
  ],
  visit: [
    { t: '60', p: '18,000', d: 'ご指定の場所で質の高いトレーニングを手軽に。' },
    { t: '90', p: '26,250', d: '店舗と変わらないプレミアムなトレーニングをご自宅で。' },
  ],
}

const testimonials = [
  { name: 'A.K様', info: '20代女性・会社員', text: 'トレーニング初心者の私でも、石原さんの丁寧で分かりやすい指導のおかげで、3ヶ月で理想の体型に近づくことができました。科学的なアプローチで効率的に結果が出て驚いています。' },
  { name: 'M.T様', info: '40代男性・経営者', text: '長年の腰痛に悩んでいましたが、石原さんのコンディショニング指導により大幅に改善されました。プロフェッショナルな知識と技術、そして親身なサポートに本当に感謝しています。' },
  { name: 'R.S様', info: '30代男性・アスリート', text: '競技パフォーマンス向上のためのトレーニングを依頼しました。最新の科学的知識に基づいた指導で、明確な改善が実感できています。プロとしての経験と知識の深さが違います。' },
]

const stats = [
  { n: '98%', l: '満足度', e: 'Satisfaction' },
  { n: '3000+', l: '指導実績', e: 'Sessions' },
  { n: '95%', l: '継続率', e: 'Retention' },
  { n: '10+', l: '年の経験', e: 'Years' },
]

const timeline = [
  { y: '2014 — 2018', t: '都内フィットネスクラブ勤務', d: '月間150本以上のセッションを担当し、エリア指名数No.1を獲得。' },
  { y: '2018', t: 'フリーランスとして独立', d: 'パーソナルトレーナーとして独立。より一人ひとりに寄り添った指導を開始。' },
  { y: '2019 — Present', t: 'TOPFORM / HALLEL 参画', d: 'コンディショニングジム「HALLEL」の立ち上げに参画。' },
  { y: 'Current', t: '湘南学院高等学校 男子バレーボール部', d: 'ストレングストレーナーとしてチームに帯同。' },
]

const skills = [
  { s: '姿勢改善・機能改善', v: 100 },
  { s: '疼痛改善（腰痛・肩こり等）', v: 95 },
  { s: 'スポーツパフォーマンス向上', v: 90 },
]

const contacts = [
  { t: 'Googleフォーム', e: 'Form', d: '体験のご予約やご質問など、お気軽にお問い合わせください。', href: '#' },
  { t: 'LINE公式', e: 'LINE', d: 'チャットで迅速に対応します。まずはお友だち追加から。', href: '#' },
  { t: 'メール', e: 'Mail', d: 'junya1995@gmail.com', href: 'mailto:junya1995@gmail.com' },
]

/* ──────────────────────────────────────────
   Parts
   ────────────────────────────────────────── */

function Label({ index, children, light = false }: { index: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div data-reveal className={`flex items-center gap-4 font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase ${light ? 'text-white/50' : 'text-zinc-500'}`}>
      <span className="tabular-nums">({index})</span>
      <span className={`h-px w-10 ${light ? 'bg-white/30' : 'bg-zinc-300'}`} />
      <span>{children}</span>
    </div>
  )
}

/* ──────────────────────────────────────────
   Page
   ────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="bg-white text-navy-500">
        {/* ─── 01 Hero ─── */}
        <section id="home" className="relative min-h-[100svh] bg-breeze-50 text-navy-500 overflow-hidden flex flex-col">
          <div className="hero-glow" aria-hidden />
          <div className="relative flex-1 grid grid-cols-12 gap-x-6 px-5 md:px-10 pt-28 md:pt-36 pb-10">
            <div className="col-span-12 lg:col-span-8 flex flex-col justify-end order-2 lg:order-1 relative z-10">
              <p data-hero="fade" className="font-outfit text-[11px] font-semibold tracking-[0.35em] uppercase text-zinc-500 mb-8 md:mb-12">
                Conditioning &amp; Personal Training — Hanzomon / Ebisu
              </p>

              <h1 className="font-bold tracking-[-0.03em] leading-[1.08] text-[clamp(2.75rem,12.4vw,7.5rem)]">
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-hero="line" className="block">
                    「
                    <span className="relative inline-block">
                      <span data-hero="dim">しなきゃ</span>
                      <span data-hero="strike" className="absolute left-[-2%] right-[-2%] top-[54%] h-[0.07em] bg-breeze-500 origin-left scale-x-0" aria-hidden />
                    </span>
                    」を
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-hero="line" className="block">
                    「したい！」に
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-hero="line" className="block text-breeze-500">
                    変える<span className="font-outfit text-navy-500">.</span>
                  </span>
                </span>
              </h1>

              <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
                <p data-hero="fade" className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                  変化を実感するから、自然と続けたくなる。
                  <br />
                  根本から改善するアプローチで、見た目も体調も確実に。
                </p>
                <Link
                  data-hero="fade"
                  href="#contact"
                  data-cursor="Book"
                  className="btn-circle btn-circle--light group shrink-0"
                >
                  <span className="relative z-10 font-outfit text-[11px] font-semibold tracking-[0.25em] uppercase">Book a Session</span>
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 order-1 lg:order-2 flex lg:justify-end lg:items-start mb-10 lg:mb-0">
              <figure className="relative w-[46vw] max-w-[240px] lg:w-full lg:max-w-[360px] ml-auto lg:ml-0">
                <div data-hero="image" className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-gradient-to-b from-white via-breeze-50 to-breeze-200 ring-1 ring-breeze-200/70">
                  <Image
                    src="/junya-portrait-cut.webp"
                    alt="パーソナルトレーナー 石原淳哉"
                    fill
                    priority
                    sizes="(min-width:1024px) 340px, 46vw"
                    className="object-contain object-bottom portrait-tone"
                  />
                </div>
                <figcaption data-hero="fade" className="mt-3 flex justify-between gap-2 tracking-[0.15em] md:tracking-[0.25em]  font-outfit text-[10px] uppercase text-zinc-400">
                  <span>Junya Ishihara</span>
                  <span className="hidden sm:inline">NASM-PES</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div data-hero="fade" className="relative grid grid-cols-2 md:grid-cols-4 border-t border-navy-500/10 font-outfit text-[10px] tracking-[0.25em] uppercase text-zinc-500">
            {[
              { k: '3,000+', v: 'Sessions' },
              { k: '10+', v: 'Years' },
              { k: '100%', v: 'Satisfaction' },
            ].map((s) => (
              <div key={s.v} className="px-5 md:px-10 py-5 border-r border-navy-500/10 flex items-baseline gap-3">
                <span className="text-navy-500 text-base md:text-lg font-semibold tracking-tight tabular-nums">{s.k}</span>
                <span>{s.v}</span>
              </div>
            ))}
            <div className="px-5 md:px-10 py-5 flex items-center justify-between gap-3">
              <span>
                Tokyo <TokyoClock />
              </span>
              <span className="scroll-cue" aria-hidden />
            </div>
          </div>
        </section>

        {/* ─── 02 Methodology ─── */}
        <section id="methodology" className="relative px-5 md:px-10 py-28 md:py-44">
          <div className="grid grid-cols-12 gap-x-6 gap-y-16">
            <div className="col-span-12 lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Label index="02">Methodology</Label>
                <h2 data-split className="mt-8 font-outfit font-extrabold uppercase tracking-[-0.045em] leading-[0.9] text-[clamp(2.6rem,5.2vw,5.25rem)]">
                  The Science
                  <br />
                  of <span className="text-breeze-400">Conditioning</span>
                </h2>
                <p data-reveal className="mt-10 text-lg leading-relaxed font-medium text-zinc-500 max-w-md">
                  科学的根拠と豊富な経験に基づいた独自のメソッドで、確実な結果と最高級の体験をお約束します。
                </p>
              </div>
            </div>

            <ol className="col-span-12 lg:col-span-6 lg:col-start-7">
              {methodology.map((m) => (
                <li key={m.n} className="group relative py-10 md:py-14">
                  <span data-draw className="absolute top-0 left-0 right-0 h-px bg-zinc-200" aria-hidden />
                  <div data-reveal className="grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10">
                    <span className="font-outfit text-sm font-semibold text-zinc-400 tabular-nums pt-3">{m.n}</span>
                    <div>
                      <h3 className="font-outfit font-extrabold uppercase tracking-[-0.04em] text-4xl md:text-6xl leading-none transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-3">
                        {m.t}
                      </h3>
                      <p className="mt-3 text-xs font-bold tracking-[0.3em] text-zinc-400">{m.s}</p>
                      <p className="mt-6 text-base md:text-lg leading-relaxed font-medium text-zinc-600 max-w-xl">{m.d}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 03 Why Me ─── */}
        <section id="why-me" className="relative bg-breeze-100 text-navy-500 px-5 md:px-10 py-28 md:py-44 overflow-hidden">
          <Label index="03">
            Why Choose Me
          </Label>
          <h2 className="sr-only">選ばれる理由</h2>
          <p
            data-scrub-words
            className="mt-12 md:mt-16 font-bold tracking-[-0.02em] leading-[1.3] text-[clamp(2rem,6vw,5.5rem)] max-w-[16em]"
          >
            「鍛える」前に「整える」。マイナスをゼロにし、そこから機能的なプラスを作り出す。
          </p>

          <div className="mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-500/10 border-y border-navy-500/10">
            {reasons.map((r) => (
              <article key={r.n} className="reason-card group bg-breeze-100 p-8 md:p-10 lg:p-12 md:min-h-[22rem] flex flex-col justify-between gap-12">
                <span className="font-outfit text-[11px] tracking-[0.3em] text-zinc-400 tabular-nums">REASON — {r.n}</span>
                <div data-reveal>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-6">{r.t}</h3>
                  <p className="text-base leading-relaxed text-zinc-500 group-hover:text-navy-500 transition-colors duration-700">{r.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── 04 Concept ─── */}
        <section id="concept" className="relative py-28 md:py-44 overflow-hidden">
          <div className="whitespace-nowrap select-none pointer-events-none" aria-hidden>
            <div data-marquee="1" className="inline-block font-outfit font-extrabold uppercase tracking-[-0.05em] leading-none text-[clamp(5rem,16vw,15rem)] text-breeze-100">
              Science · Personalized · Holistic · Luxury · Science · Personalized ·
            </div>
          </div>

          <div className="px-5 md:px-10 mt-10 md:mt-6 relative">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 md:col-span-8 lg:col-span-6 lg:col-start-4">
                <Label index="04">Concept — Synergy</Label>
                <h2 data-split className="mt-8 font-bold tracking-[-0.03em] leading-[1.15] text-[clamp(2.25rem,5.5vw,4.75rem)]">
                  科学的メソッド
                  <span className="font-outfit font-extralight text-breeze-400 ml-2">×</span>
                  <br />
                  最高級サービス
                </h2>
              </div>
            </div>

            <div data-stagger className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-zinc-200">
              {concept.map((c, i) => (
                <div key={c.t} className="relative py-10 sm:pr-8 lg:pl-0 sm:[&:nth-child(even)]:pl-8 lg:[&:nth-child(even)]:pl-8 lg:[&:nth-child(n+2)]:pl-8 border-b border-zinc-200 sm:border-b-0 lg:border-l-0 lg:[&:nth-child(n+2)]:border-l sm:[&:nth-child(even)]:border-l border-zinc-200">
                  <span className="font-outfit text-[11px] tracking-[0.3em] text-zinc-400 tabular-nums">0{i + 1}</span>
                  <h3 className="mt-10 font-outfit font-extrabold uppercase tracking-[-0.03em] text-2xl lg:text-3xl leading-none">{c.t}</h3>
                  <p className="mt-2 text-xs font-bold tracking-[0.3em] text-zinc-400">{c.s}</p>
                  <p className="mt-6 text-base leading-relaxed font-medium text-zinc-600">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 05 Service Flow ─── */}
        <section id="service-flow" className="relative bg-breeze-50 px-5 md:px-10 py-28 md:py-44">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <Label index="05">Process</Label>
              <h2 data-split className="mt-8 font-bold tracking-[-0.03em] leading-[1.1] text-[clamp(2.5rem,6vw,5.5rem)]">
                初回サービスの流れ
              </h2>
            </div>
            <p data-reveal className="text-base md:text-lg font-medium text-zinc-500 leading-relaxed max-w-sm">
              お申し込みから最初のセッションまで。はじめての方も、迷わず進めるように。
            </p>
          </div>

          <div className="relative mt-20 md:mt-28">
            <div className="absolute left-0 right-0 top-[11px] h-px bg-zinc-200 hidden md:block" aria-hidden>
              <div data-draw data-draw-scrub className="absolute inset-0 bg-breeze-500" />
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-14">
              {flow.map((f) => (
                <li key={f.n} data-reveal className="relative md:pt-14">
                  <span className="hidden md:block absolute top-[6px] left-0 w-[11px] h-[11px] rounded-full bg-breeze-50 border border-breeze-500" aria-hidden />
                  <div className="flex items-baseline justify-between border-b md:border-0 border-zinc-200 pb-4 md:pb-0">
                    <span className="font-outfit font-black text-6xl md:text-7xl tracking-[-0.05em] leading-none tabular-nums">{f.n}</span>
                    <span className="font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-zinc-400">{f.e}</span>
                  </div>
                  <h3 className="mt-6 text-xl md:text-2xl font-black tracking-tight">{f.t}</h3>
                  <p className="mt-3 text-base leading-relaxed font-medium text-zinc-600">{f.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 06 Locations ─── */}
        <section id="locations" className="relative px-5 md:px-10 py-28 md:py-44">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Label index="06">Studios</Label>
              <h2 data-split className="mt-8 font-outfit font-extrabold uppercase tracking-[-0.045em] leading-[0.9] text-[clamp(2.75rem,7vw,6.5rem)]">
                Exclusive
                <br />
                <span className="text-breeze-400">Studios</span>
              </h2>
            </div>
            <p data-reveal className="col-span-12 lg:col-span-4 lg:col-start-9 self-end text-base md:text-lg font-medium text-zinc-500 leading-relaxed">
              都心の2拠点、コンディショニングジム「HALLEL」。最高水準のトレーニング体験を、通いやすい場所で。
            </p>
          </div>

          <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {studios.map((s) => (
              <a
                key={s.key}
                href={s.map}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Map"
                data-reveal
                className="studio-card group relative block bg-breeze-100 text-navy-500 hover:bg-navy-500 hover:text-white transition-colors duration-700 ease-[cubic-bezier(.16,1,.3,1)] overflow-hidden p-7 md:p-10 min-h-[22rem] md:min-h-[36rem]"
              >
                <div className="studio-grid" aria-hidden />
                <div className="relative h-full flex flex-col justify-between min-h-[inherit]">
                  <div className="flex justify-between font-outfit text-[10px] tracking-[0.3em] uppercase opacity-55">
                    <span>{s.coord}</span>
                    <span className="transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </div>

                  <div>
                    <p className="font-outfit font-extrabold uppercase tracking-[-0.06em] leading-[0.85] text-[clamp(3rem,6.8vw,7rem)] studio-word">
                      {s.key}
                    </p>
                    <div className="mt-8 md:mt-10 grid grid-cols-[1fr_auto] items-end gap-6 border-t border-navy-500/15 group-hover:border-white/20 transition-colors duration-700 pt-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-black tracking-tight">{s.name}</h3>
                        <p className="mt-2 text-sm opacity-60 leading-relaxed">{s.addr}</p>
                      </div>
                      <p className="text-right">
                        <span className="block font-outfit font-black text-5xl md:text-6xl tracking-[-0.05em] leading-none">
                          {s.min}
                          <span className="text-lg font-semibold tracking-normal ml-1">min</span>
                        </span>
                        <span className="text-xs opacity-60">{s.station} 徒歩</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ─── 07 Pricing ─── */}
        <section id="pricing" className="relative bg-breeze-50 text-navy-500 px-5 md:px-10 py-28 md:py-44">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-6">
              <Label index="07">
                Investment
              </Label>
              <h2 data-split className="mt-8 font-outfit font-extrabold uppercase tracking-[-0.045em] leading-[0.9] text-[clamp(2.75rem,7vw,6.5rem)]">
                Choose
                <br />
                Your <span className="text-breeze-400">Luxury</span>
              </h2>
            </div>
            <p data-reveal className="col-span-12 lg:col-span-4 lg:col-start-9 self-end text-sm text-zinc-500 leading-relaxed">
              ※すべて税込価格です。場所や頻度につきましては、お気軽にご相談ください。
            </p>
          </div>

          <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
            {[
              { title: '通常セッション', en: 'Studio Session', items: pricing.studio },
              { title: '出張セッション', en: 'Private Visit', items: pricing.visit },
            ].map((group) => (
              <div key={group.title}>
                <div className="flex items-baseline justify-between pb-6">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight">{group.title}</h3>
                  <span className="font-outfit text-[10px] tracking-[0.3em] uppercase text-zinc-400">{group.en}</span>
                </div>
                <ul className="border-t border-navy-500/10">
                  {group.items.map((p) => (
                    <li key={p.t} className="price-row group relative border-b border-navy-500/10">
                      <div className="relative z-10 grid grid-cols-[1fr_auto] md:grid-cols-[7rem_1fr_auto] items-center gap-x-6 gap-y-3 py-7 md:py-8">
                        <span className="font-outfit font-black text-4xl md:text-5xl tracking-[-0.05em] leading-none tabular-nums">
                          {p.t}
                          <span className="text-xs font-semibold tracking-[0.1em] ml-1 align-top">min</span>
                        </span>
                        <span className="col-span-2 md:col-span-1 order-last md:order-none text-sm text-zinc-500 leading-relaxed group-hover:text-navy-500 transition-colors duration-500">{p.d}</span>
                        <span className="font-outfit font-semibold text-xl md:text-3xl tracking-[-0.03em] tabular-nums whitespace-nowrap">
                          <span className="text-sm md:text-base mr-0.5 text-zinc-500">¥</span>
                          {p.p}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 08 Testimonials ─── */}
        <section id="testimonials" className="relative px-5 md:px-10 py-28 md:py-44">
          <Label index="08">Voices</Label>
          <h2 data-split className="mt-8 font-outfit font-extrabold uppercase tracking-[-0.045em] leading-[0.9] text-[clamp(2.75rem,7vw,6.5rem)]">
            Voice of <span className="text-breeze-400">Peak</span>
          </h2>

          <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-16">
            {testimonials.map((t, i) => (
              <figure key={t.name} data-reveal={String(i * 0.12)} className={`relative ${i === 1 ? 'lg:mt-24' : i === 2 ? 'lg:mt-48' : ''}`}>
                <span className="block font-serif italic text-[7rem] leading-[0.6] text-breeze-300 select-none" aria-hidden>
                  “
                </span>
                <blockquote className="mt-4 text-lg md:text-xl leading-[1.9] font-medium text-navy-500">{t.text}</blockquote>
                <figcaption className="mt-8 pt-6 border-t border-zinc-200 flex justify-between items-baseline">
                  <span className="font-black">{t.name}</span>
                  <span className="text-xs text-zinc-400 tracking-wider">{t.info}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <dl className="mt-28 md:mt-40 grid grid-cols-2 lg:grid-cols-4 border-t border-zinc-200">
            {stats.map((s, i) => (
              <div key={s.l} className={`py-10 md:py-14 ${i % 2 === 1 ? 'pl-6 md:pl-10 border-l border-zinc-200' : ''} ${i === 2 ? 'lg:pl-10 lg:border-l border-zinc-200' : ''} ${i >= 2 ? 'border-t lg:border-t-0 border-zinc-200' : ''}`}>
                <dt className="font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-zinc-400">
                  {s.e} <span className="tracking-normal">/ {s.l}</span>
                </dt>
                <dd data-count className="mt-4 font-outfit font-black text-[clamp(2.6rem,5.4vw,5.5rem)] tracking-[-0.05em] leading-none tabular-nums">
                  {s.n}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ─── 09 Profile ─── */}
        <section id="profile" className="relative bg-breeze-50 px-5 md:px-10 py-28 md:py-44 overflow-hidden">
          <Label index="09">The Professional</Label>

          <div className="mt-14 md:mt-20 grid grid-cols-12 gap-x-6 gap-y-16">
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <div data-clip style={{ maxWidth: 420 }} className="mx-auto md:mx-0 w-4/5 md:w-full relative aspect-[3/4] overflow-hidden rounded-t-full bg-gradient-to-b from-white via-breeze-50 to-breeze-200 ring-1 ring-breeze-200/70">
                <div data-parallax="0.15" className="absolute inset-[-8%_0]">
                  <Image src="/junya-portrait-cut.webp" alt="石原淳哉" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover object-[50%_15%] portrait-tone" />
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6">
              <h2 data-split className="font-bold tracking-[-0.03em] leading-none text-[clamp(3.5rem,9vw,8rem)]">
                石原 淳哉
              </h2>
              <p data-reveal className="mt-5 font-outfit text-sm font-semibold tracking-[0.4em] uppercase text-zinc-400">
                Junya Ishihara — Personal Trainer
              </p>

              <p data-reveal className="mt-12 md:mt-16 text-xl md:text-2xl font-bold leading-[1.7] tracking-tight max-w-2xl">
                「ホネカワスネオ」と呼ばれた過去から、トレーニングを通じて人生を変えた経験を持つパーソナルトレーナー。
              </p>
              <div data-reveal className="mt-8 space-y-6 text-lg leading-relaxed font-medium text-zinc-600 max-w-2xl">
                <p>単なるボディメイクにとどまらず、機能解剖学に基づいた「動ける身体づくり」と「痛みのない生活」を提供することを信条としています。</p>
                <p>大手フィットネスクラブでの指導経験、スポーツ現場での帯同経験を経て、現在は「HALLEL」にて、一般の方からアスリートまで幅広いクライアントの目標達成をサポートしています。</p>
              </div>

              <dl data-stagger className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-zinc-200">
                {[
                  { n: '指名No.1', s: 'エリア実績' },
                  { n: '10年+', s: '指導歴' },
                  { n: '3000+', s: 'セッション数' },
                  { n: 'NASM', s: '国際資格' },
                ].map((q) => (
                  <div key={q.n} className="pt-6 pb-2 pr-4">
                    <dd className="font-black text-xl md:text-2xl tracking-tight">{q.n}</dd>
                    <dt className="mt-1 text-xs text-zinc-400 tracking-wider">{q.s}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-28 md:mt-40 grid grid-cols-12 gap-x-6 gap-y-20">
            <div className="col-span-12 lg:col-span-6">
              <h3 className="font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-zinc-500 mb-12">経歴・実績 / Career</h3>
              <ol className="relative pl-8">
                <span className="absolute left-0 top-2 bottom-2 w-px bg-zinc-200" aria-hidden>
                  <span data-draw="y" data-draw-scrub className="absolute inset-0 bg-breeze-500" />
                </span>
                {timeline.map((tl) => (
                  <li key={tl.y} data-reveal className="relative pb-12 last:pb-0">
                    <span className="absolute -left-8 top-[0.55rem] -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-breeze-50 border border-breeze-500" aria-hidden />
                    <p className="font-outfit text-xs font-semibold tracking-[0.25em] uppercase text-zinc-400">{tl.y}</p>
                    <h4 className="mt-2 text-xl md:text-2xl font-black tracking-tight">{tl.t}</h4>
                    <p className="mt-2 text-base leading-relaxed font-medium text-zinc-600">{tl.d}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <h3 className="font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-zinc-500 mb-12">専門分野 / Expertise</h3>
              <div className="space-y-10">
                {skills.map((sk) => (
                  <div key={sk.s}>
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="text-base font-bold">{sk.s}</span>
                      <span data-count className="font-outfit text-sm font-semibold text-zinc-400 tabular-nums">
                        {sk.v}%
                      </span>
                    </div>
                    <div className="h-px bg-zinc-200 relative">
                      <div data-draw className="absolute inset-y-[-0.5px] left-0 bg-navy-500 h-[2px]" style={{ width: `${sk.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <dl className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
                {[
                  { t: 'Education', n: '日本大学文理学部\n体育学科 卒業' },
                  { t: 'Certification', n: '全米スポーツ医学協会\nNASM-PES' },
                ].map((q) => (
                  <div key={q.t} className="bg-breeze-50 p-7">
                    <dt className="font-outfit text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-400">{q.t}</dt>
                    <dd className="mt-4 text-base font-bold leading-relaxed whitespace-pre-line">{q.n}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ─── 10 Contact ─── */}
        <section id="contact" className="relative bg-breeze-200/60 text-navy-500 px-5 md:px-10 pt-28 md:pt-44 pb-24 md:pb-32 overflow-hidden">
          <div className="contact-sky" aria-hidden />
          <div className="relative">
            <Label index="10">
              Contact
            </Label>
            <h2 className="sr-only">CONTACT</h2>
            <p data-split className="mt-10 font-bold tracking-[-0.035em] leading-[1.08] text-[clamp(3rem,10vw,9rem)]">
              さあ、
              <br />
              「したい！」を
              <br />
              はじめよう。
            </p>

            <ul className="mt-20 md:mt-28 border-t border-navy-500/15">
              {contacts.map((c) => (
                <li key={c.t}>
                  <a href={c.href} data-cursor="Open" className="contact-row group relative grid grid-cols-[1fr_auto] md:grid-cols-[12rem_1fr_auto] items-center gap-x-6 gap-y-2 py-8 md:py-10 border-b border-navy-500/15 overflow-hidden">
                    <span className="relative z-10 font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-navy-400 group-hover:text-white/60 transition-colors duration-500 col-span-2 md:col-span-1">
                      {c.e}
                    </span>
                    <span className="relative z-10">
                      <span className="block text-2xl md:text-4xl font-bold tracking-tight group-hover:text-white transition-colors duration-500">{c.t}</span>
                      <span className="block mt-2 text-sm text-zinc-600 group-hover:text-white/70 transition-colors duration-500">{c.d}</span>
                    </span>
                    <span className="relative z-10 text-3xl md:text-5xl font-outfit font-light transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:text-white group-hover:-rotate-45">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      {/* ページ全体の描画準備が整ってから動きを付けるため、最後に置く */}
      <MotionProvider />
    </>
  )
}
