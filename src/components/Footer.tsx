import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 text-white pt-40 pb-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
          
          {/* Brand & Socials (Restored from Footer.tsx.org) */}
          <div className="space-y-12">
            <Link href="/" className="space-y-4 block group">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-navy-500 text-white flex items-center justify-center text-sm font-black font-outfit tracking-tighter">
                  JI
                </div>
                <div className="text-3xl font-black font-outfit tracking-tighter uppercase group-hover:text-navy-400 transition-colors">
                  JUNYA <br />ISHIHARA
                </div>
              </div>
              <p className="text-[10px] font-black text-zinc-500 tracking-[0.4em] uppercase">
                Premium Personal Training
              </p>
            </Link>
            <p className="text-sm text-zinc-500 leading-loose font-medium max-w-sm">
              科学的根拠に基づいたプロフェッショナルなパーソナルトレーニングで、 あなたの理想の身体づくりをサポートします。
            </p>
            <div className="flex space-x-8 pt-4">
              {[
                { i: 'ri-instagram-line', h: '#' },
                { i: 'ri-youtube-line', h: '#' },
                { i: 'ri-line-line', h: '#' }
              ].map(social => (
                <a key={social.i} href={social.h} className="text-2xl text-zinc-600 hover:text-navy-400 transition-all duration-500">
                  <i className={social.i} />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap (Restored from Footer.tsx.org) */}
          <div>
            <h3 className="text-[10px] font-black text-white tracking-[0.5em] uppercase mb-12">Sitemap</h3>
            <ul className="space-y-6">
              {[
                { n: 'HOME', h: '/#home' },
                { n: 'ABOUT', h: '/#profile' },
                { n: 'SERVICE', h: '/#service-flow' },
                { n: 'PRICE', h: '/#pricing' },
                { n: 'CONTACT', h: '/#contact' }
              ].map(link => (
                <li key={link.h}>
                  <Link href={link.h} className="text-[10px] font-black text-zinc-500 tracking-[0.3em] uppercase hover:text-white transition-colors flex items-center group">
                    <span className="w-4 h-0.5 bg-navy-500 mr-4 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    {link.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories (Restored from Footer.tsx.org) */}
          <div>
            <h3 className="text-[10px] font-black text-white tracking-[0.5em] uppercase mb-12">Resources</h3>
            <ul className="space-y-6">
              {[
                { n: 'Journal List', h: '/blog' },
                { n: 'Training Method', h: '/blog/category/training' },
                { n: 'Performance Meal', h: '/blog/category/nutrition' },
                { n: 'Mind & Lifestyle', h: '/blog/category/lifestyle' }
              ].map(link => (
                <li key={link.h}>
                  <Link href={link.h} className="text-[10px] font-black text-zinc-500 tracking-[0.3em] uppercase hover:text-white transition-colors flex items-center group">
                    <span className="w-4 h-0.5 bg-navy-500 mr-4 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    {link.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations (Restored from Footer.tsx.org) */}
          <div>
            <h3 className="text-[10px] font-black text-white tracking-[0.5em] uppercase mb-12">Contact</h3>
            <div className="space-y-10">
              <div className="space-y-3">
                <p className="text-[10px] font-black text-navy-300 tracking-widest uppercase">HALLEL Hanzomon</p>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed">〒102-0082 東京都千代田区一番町10-8</p>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-black text-navy-300 tracking-widest uppercase">HALLEL Ebisu</p>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed">〒150-0022 東京都渋谷区恵比寿南2-3-11</p>
              </div>
              <div className="pt-4">
                <a href="mailto:junya1995@gmail.com" className="text-lg font-black text-white font-outfit hover:text-navy-400 transition-colors">
                  junya1995@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Restored from Footer.tsx.org + Added Privacy Policy) */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <p className="text-[10px] font-black text-zinc-700 tracking-[0.3em] uppercase">
            © {currentYear} JUNYA ISHIHARA PERSONAL TRAINING.
          </p>
          <div className="flex space-x-12">
            <Link href="/privacy" className="text-[10px] font-black text-zinc-700 tracking-[0.3em] uppercase hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer