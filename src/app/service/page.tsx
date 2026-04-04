import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Service | J. ISHIHARA PERSONAL TRAINING',
  description: 'パーソナルトレーニングサービスの詳細、料金、初回サービスの流れ、活動場所をご紹介します。',
}

export default function ServicePage() {
  const serviceFlow = [
    {
      step: '01',
      title: 'Booking',
      subtitle: 'お申し込み',
      description: 'トレーニング目標の調整を行います。あなたのライフスタイルや理想の状態を、独自のヒアリングでお伺いします。',
      icon: 'ri-calendar-check-line'
    },
    {
      step: '02',
      title: 'Arrival',
      subtitle: 'ご来店',
      description: '都内の洗練されたプライベート空間（HALLEL半蔵門・恵比寿）にて、あなたをお迎えいたします。',
      icon: 'ri-building-line'
    },
    {
      step: '03',
      title: 'Analysis',
      subtitle: 'カウンセリング',
      description: '入念なカウンセリング・世界基準のフィジカルテストを行い、お客様のお悩みやカラダの現状を把握。見つかった問題を解決するための具体的な戦略をお伝えします。',
      icon: 'ri-bar-chart-2-line'
    },
    {
      step: '04',
      title: 'Conditioning',
      subtitle: 'トレーニング',
      description: 'お客様のお悩みやカラダの問題を根本から解決するため、最適なコンディショニングとトレーニングを組み合わせて実施します。',
      icon: 'ri-heart-pulse-line'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center bg-zinc-950 overflow-hidden text-center">
          <div className="absolute inset-0 opacity-20 grayscale">
            <Image src="/service-bg.jpg" alt="Service" fill className="object-cover" />
          </div>
          <div className="relative z-10 px-4">
            <div className="inline-block px-8 py-2 bg-navy-500 text-white text-[10px] font-black tracking-[0.5em] uppercase mb-12">
              Beyond The Limit
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-12 font-outfit uppercase">
              The <span className="italic font-light opacity-60">Service</span>
            </h1>
            <p className="text-white text-lg md:text-xl font-bold tracking-[0.2em] max-w-3xl mx-auto leading-loose">
              お客様一人ひとりの身体と目標に合わせた<br />
              『ちょうどいい』トレーニングで、健康で充実した毎日をサポートします。
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-navy-500 mb-12 leading-loose uppercase tracking-tighter font-outfit">
              『しなきゃ』を『したい！』に変える<br />
              パーソナルトレーニング
            </h2>
            <p className="text-lg text-zinc-500 leading-loose max-w-4xl mx-auto font-medium">
              従来の筋力トレーニングだけでなく、コンディショニングという視点を組み合わせることで、
              お客様の身体の根本的な問題を解決し、機能的で健康的な身体づくりをサポートします。
            </p>
          </div>
        </section>

        <section className="py-32 bg-zinc-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5">
              {serviceFlow.map((step, index) => (
                <div key={index} className="p-12 border border-white/5 hover:bg-white/5 transition-all duration-700 group">
                  <div className="text-6xl font-black text-white/5 font-outfit mb-8 group-hover:text-navy-400 transition-colors">
                    {step.step}
                  </div>
                  <div className="text-3xl text-navy-400 mb-6">
                    <i className={step.icon} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 uppercase font-outfit tracking-tighter">
                    {step.title}
                  </h3>
                  <p className="text-[10px] text-zinc-500 font-bold tracking-widest mb-6 uppercase">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-zinc-400 leading-loose font-medium">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-40 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-black text-navy-500 mb-12 tracking-tighter uppercase font-outfit">Experience Peak</h2>
            <p className="text-zinc-500 text-lg font-medium leading-loose mb-16 tracking-widest max-w-2xl mx-auto">
              まずは体験セッションから。<br />
              あなたの身体の現在地を見極めます。
            </p>
            <Link
              href="/contact"
              className="px-16 py-6 bg-navy-500 text-white text-[10px] font-black tracking-[0.5em] uppercase hover:bg-navy-600 transition-all duration-500 shadow-2xl"
            >
              Book First Session
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}