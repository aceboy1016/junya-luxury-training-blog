import Link from 'next/link'
import TokyoClock from '@/components/motion/TokyoClock'

const sitemap = [
  { n: 'Home', h: '/' },
  { n: 'Methodology', h: '/#methodology' },
  { n: 'Service', h: '/#service-flow' },
  { n: 'Price', h: '/#pricing' },
  { n: 'Profile', h: '/#profile' },
  { n: 'Contact', h: '/#contact' },
]

const journal = [
  { n: 'Journal', h: '/blog' },
  { n: 'Training Method', h: '/blog/category/training' },
  { n: 'Performance Meal', h: '/blog/category/nutrition' },
  { n: 'Mind & Lifestyle', h: '/blog/category/lifestyle' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      <div className="px-5 md:px-10 pt-24 md:pt-32">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-14 gap-x-6 pb-20 md:pb-28 border-b border-white/10">
          <div className="col-span-2 md:col-span-5">
            <p className="font-outfit text-[10px] font-semibold tracking-[0.4em] uppercase text-white/40 mb-6">Philosophy</p>
            <p className="palt text-2xl md:text-3xl font-bold leading-snug tracking-tight">
              「しなきゃ」を
              <br />
              「したい！」に変える。
            </p>
          </div>

          <FooterList title="Index" items={sitemap} className="md:col-span-2 md:col-start-7" />
          <FooterList title="Journal" items={journal} className="md:col-span-2" />

          <div className="col-span-2 md:col-span-3 md:col-start-10 lg:col-span-2 lg:col-start-11 space-y-6 text-sm">
            <p className="font-outfit text-[10px] font-semibold tracking-[0.4em] uppercase text-white/40">Studios</p>
            <div>
              <p className="text-white">HALLEL 半蔵門</p>
              <p className="text-white/45 text-xs mt-1 leading-relaxed">東京都千代田区一番町10-8</p>
            </div>
            <div>
              <p className="text-white">HALLEL 恵比寿</p>
              <p className="text-white/45 text-xs mt-1 leading-relaxed">東京都渋谷区恵比寿南2-3-11</p>
            </div>
            <a href="mailto:junya1995@gmail.com" className="link-underline inline-block font-outfit text-white">
              junya1995@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 py-8 font-outfit text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40">
          <p>© {year} Junya Ishihara Personal Training</p>
          <p>
            Tokyo <TokyoClock /> JST
          </p>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="select-none pointer-events-none px-3 md:px-6 -mb-[2.2vw]" aria-hidden="true">
        <p className="footer-wordmark font-outfit font-black uppercase leading-[0.8] tracking-[-0.06em] whitespace-nowrap text-center">
          Junya Ishihara
        </p>
      </div>
    </footer>
  )
}

function FooterList({ title, items, className = '' }: { title: string; items: { n: string; h: string }[]; className?: string }) {
  return (
    <div className={className}>
      <p className="font-outfit text-[10px] font-semibold tracking-[0.4em] uppercase text-white/40 mb-6">{title}</p>
      <ul className="space-y-3">
        {items.map((l) => (
          <li key={l.h}>
            <Link href={l.h} className="link-underline font-outfit text-sm text-white/80 hover:text-white transition-colors">
              {l.n}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
