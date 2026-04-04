import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | J. ISHIHARA Premium Personal Training',
  description: 'プロフェッショナルパーソナルトレーナー石原淳哉のプロフィール、経歴、資格、そしてトレーニングに込めた「魂のミッション」をご紹介します。',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* Profile Hero */}
        <section className="bg-zinc-950 py-40 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black text-white/5 font-outfit select-none pointer-events-none">
            ISHIHARA
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-8 block">The Professional</span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase font-outfit mb-12 leading-none">
                石原 淳哉
              </h1>
              <div className="flex items-center gap-8 mb-16">
                <span className="w-16 h-[1px] bg-navy-500"></span>
                <span className="text-[10px] font-black text-zinc-400 tracking-[0.4em] uppercase">JUNYA ISHIHARA</span>
              </div>
              <p className="text-xl md:text-2xl text-white font-medium italic border-l-8 border-navy-500 pl-12 max-w-xl leading-relaxed mb-12">
                「ホネカワスネオ」と呼ばれた過去から、トレーニングを通じて人生を変えた経験を持つ。
              </p>
              <div className="grid grid-cols-3 gap-12 border-t border-white/10 pt-12">
                {[{ n: '3000+', l: 'Sessions' }, { n: '10+', l: 'Years' }, { n: 'NASM', l: 'PES' }].map(s => (
                  <div key={s.l}>
                    <div className="text-3xl font-black text-navy-400 font-outfit">{s.n}</div>
                    <div className="text-[8px] font-bold text-zinc-500 tracking-widest uppercase mt-2">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] relative grayscale shadow-2xl border border-white/10">
                <Image src="/profile-junya.jpg" alt="石原淳哉" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy-500 -z-10" />
            </div>
          </div>
        </section>

        {/* Mission Section (Restored from 0c4779c) */}
        <section className="py-40 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-navy-300 text-[10px] font-black tracking-[0.5em] uppercase mb-12 block">Our Mission</span>
            <blockquote className="text-3xl md:text-5xl font-black text-navy-500 tracking-tighter mb-20 leading-tight">
              「自分に関わる人たちすべてが、<br />毎朝を笑顔で過ごし、人生を心から楽しめる健康な状態になってほしい」
            </blockquote>
            <div className="space-y-12 text-lg text-zinc-600 font-medium leading-offset-loose text-left max-w-2xl mx-auto">
              <p>
                毎朝、目覚めが良く、家族との時間を楽しめ、仕事でも活き活きと過ごせる。そんな「当たり前の幸せ」を支えられることが、私のトレーナーとしての使命です。
              </p>
              <p>
                多くの方が思い浮かべるパーソナルトレーニングは、「重いウエイトを挙げること」かもしれません。私はそこにコンディショニングという視点を組み合わせ、身体の「機能」を整えることで、日常の質を劇的に変えるアプローチを提供します。
              </p>
              <p>
                一人ひとりの「できない」を「できた！」に変える喜びを共有し、人生に伴走できる、謙虚で真摯なトレーナーであり続けたいと考えています。
              </p>
            </div>
          </div>
        </section>

        {/* Career Timeline (Restored from 0c4779c) */}
        <section className="py-40 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-6xl font-black text-navy-500 tracking-tighter uppercase font-outfit mb-32 flex items-end gap-8">
              Career <span className="text-zinc-300 italic font-light lowercase">Journey</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 border-l border-zinc-200 pl-12 relative">
              {[
                { y: '2014-2018', t: '都内フィットネスクラブ勤務', d: '月間150本以上のセッションを担当。エリア指名数No.1を達成し、多くの運動初心者の方をサポート。' },
                { y: '2018-Present', t: 'フリーランス・HALLEL参画', d: 'より専門的なコンディショニングを追求。TOPFORMの前身から現在まで、一貫して「機能的な身体づくり」を指導。' },
                { y: 'Current', t: '湘南学院高等学校 男子バレー部', d: 'ストレングストレーナーとして、次世代のアスリートの身体能力向上と怪我予防に貢献。' },
              ].map(tl => (
                <div key={tl.y} className="relative group">
                  <div className="absolute -left-[54px] top-4 w-4 h-4 bg-navy-500 rounded-full group-hover:scale-150 transition-transform duration-500" />
                  <div className="text-[10px] font-black text-navy-300 font-outfit tracking-widest uppercase mb-4">{tl.y}</div>
                  <h3 className="text-2xl font-black text-navy-500 uppercase tracking-tighter mb-6">{tl.t}</h3>
                  <p className="text-sm font-medium text-zinc-500 leading-loose">{tl.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA (Restored from 0c4779c) */}
        <section className="py-40 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black text-navy-500 mb-12 tracking-tighter uppercase font-outfit leading-none">
              あなたの毎朝を、<br /><span className="text-zinc-300 lowercase italic font-light">笑顔に変える</span>お手伝いを。
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-16 py-6 bg-navy-500 text-white text-[10px] font-black tracking-[0.5em] uppercase hover:bg-zinc-950 transition-all duration-700 shadow-2xl"
              >
                Experience Session
              </Link>
              <Link
                href="/service"
                className="w-full sm:w-auto px-16 py-6 border border-zinc-100 text-navy-500 text-[10px] font-black tracking-[0.5em] uppercase hover:bg-zinc-50 transition-all duration-700"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}