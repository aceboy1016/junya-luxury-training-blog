import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact | J. ISHIHARA PERSONAL TRAINING',
  description: 'パーソナルトレーニングのお問い合わせ・体験予約はこちら。無料カウンセリングも実施しています。',
  keywords: ['お問い合わせ', '体験予約', 'パーソナルトレーニング', '無料カウンセリング', 'JUNYA ISHIHARA'],
  openGraph: {
    title: 'Contact | J. ISHIHARA PERSONAL TRAINING',
    description: 'パーソナルトレーニングのお問い合わせ・体験予約はこちら。無料カウンセリングも実施しています。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function ContactPage() {
  const studios = [
    {
      name: 'HALLEL HANZOMON',
      address: '〒102-0082 東京都千代田区一番町10-8 一番町ウエストビルB1',
      access: '東京メトロ半蔵門線「半蔵門駅」4番出口から徒歩2分',
      image: '/hallel-hanzomon.jpg'
    },
    {
      name: 'HALLEL EBISU',
      address: '〒150-0022 東京都渋谷区恵比寿南2-3-11 グレース青山2F',
      access: 'JR・東京メトロ日比谷線「恵比寿駅」西口から徒歩3分',
      image: '/hallel-ebisu.jpg'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-zinc-950 py-32 text-center">
          <div className="inline-block px-6 py-2 bg-navy-500 text-white text-[10px] font-black tracking-[0.5em] uppercase mb-8">
            Inquiry
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase font-outfit mb-6">
            Get In Touch
          </h1>
          <div className="w-12 h-1 bg-navy-500 mx-auto" />
        </section>

        {/* Contact Form & Info */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              
              {/* Information */}
              <div className="space-y-16">
                <div>
                  <h2 className="text-3xl font-black text-navy-500 tracking-tighter uppercase font-outfit mb-8">
                    Contact <br />
                    Information
                  </h2>
                  <p className="text-zinc-500 text-lg leading-loose font-medium mb-12">
                    セッションの予約、プログラムへのご質問など、お気軽にお問い合わせください。
                    通常、24時間以内にプロフェッショナルな回答を差し上げます。
                  </p>

                  <div className="space-y-10">
                    <div className="flex items-start space-x-8 group">
                      <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center text-2xl text-navy-400 group-hover:bg-navy-500 group-hover:text-white transition-all duration-500">
                        <i className="ri-mail-line" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-zinc-400 tracking-widest uppercase block mb-1">Email</span>
                        <a href="mailto:contact@junya-training.com" className="text-lg font-black text-navy-500 font-outfit hover:text-navy-300 transition-colors">contact@junya-training.com</a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-8 group">
                      <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center text-2xl text-navy-400 group-hover:bg-navy-500 group-hover:text-white transition-all duration-500">
                        <i className="ri-customer-service-line" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-zinc-400 tracking-widest uppercase block mb-1">Inquiry</span>
                        <p className="text-lg font-black text-navy-500 font-outfit uppercase">Mon - Sun / 09:00 - 21:00</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-8 group">
                      <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center text-2xl text-navy-400 group-hover:bg-navy-500 group-hover:text-white transition-all duration-500">
                        <i className="ri-line-line" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-zinc-400 tracking-widest uppercase block mb-1">Official Line</span>
                        <a href="#" className="inline-block mt-2 px-8 py-3 bg-zinc-950 text-white text-[10px] font-black tracking-widest uppercase hover:bg-navy-500 transition-colors">Add Friend</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-zinc-50 p-12 border border-zinc-100 shadow-2xl">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[10px] font-black text-navy-500 tracking-widest uppercase mb-3 block">First Name</label>
                      <input type="text" className="w-full bg-white px-6 py-4 border border-zinc-100 focus:border-navy-500 focus:outline-none text-sm transition-colors" placeholder="JUNYA" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-navy-500 tracking-widest uppercase mb-3 block">Last Name</label>
                      <input type="text" className="w-full bg-white px-6 py-4 border border-zinc-100 focus:border-navy-500 focus:outline-none text-sm transition-colors" placeholder="ISHIHARA" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-navy-500 tracking-widest uppercase mb-3 block">Email Address</label>
                    <input type="email" className="w-full bg-white px-6 py-4 border border-zinc-100 focus:border-navy-500 focus:outline-none text-sm transition-colors" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-navy-500 tracking-widest uppercase mb-3 block">Service Interest</label>
                    <select className="w-full bg-white px-6 py-4 border border-zinc-100 focus:border-navy-500 focus:outline-none text-sm transition-colors appearance-none">
                      <option>Experience Session</option>
                      <option>In-Studio Program</option>
                      <option>Visiting Program</option>
                      <option>Other Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-navy-500 tracking-widest uppercase mb-3 block">Message</label>
                    <textarea rows={6} className="w-full bg-white px-6 py-4 border border-zinc-100 focus:border-navy-500 focus:outline-none text-sm transition-colors resize-none" placeholder="How can we help you reach your peak?"></textarea>
                  </div>

                  <button className="w-full bg-navy-500 text-white py-6 text-[10px] font-black tracking-[0.5em] uppercase hover:bg-navy-600 transition-all duration-500 shadow-2xl">
                    Send Inquiry
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* Studios */}
        <section className="py-32 bg-zinc-50 border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-[10px] font-black text-navy-300 tracking-[0.5em] uppercase block mb-4">Locations</span>
              <h2 className="text-4xl font-black text-navy-500 tracking-tighter uppercase font-outfit">Exclusive Studios</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {studios.map(studio => (
                <div key={studio.name} className="group">
                  <div className="aspect-video relative overflow-hidden bg-zinc-200 grayscale group-hover:grayscale-0 transition-all duration-1000 mb-8">
                    <Image src={studio.image} alt={studio.name} fill className="object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-navy-500 uppercase tracking-tighter font-outfit">{studio.name}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[10px] font-bold text-zinc-400 tracking-widest uppercase">
                      <div className="flex items-start space-x-3">
                        <i className="ri-map-pin-2-line text-lg text-navy-300" />
                        <div>
                          <p className="mb-2">Address</p>
                          <p className="text-navy-500 normal-case tracking-normal text-xs">{studio.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-walk-line text-lg text-navy-300" />
                        <div>
                          <p className="mb-2">Access</p>
                          <p className="text-navy-500 normal-case tracking-normal text-xs">{studio.access}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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