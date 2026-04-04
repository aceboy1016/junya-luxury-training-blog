import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="no-underline group flex items-center gap-4 mb-8">
              {/* Geometric JI Icon - Navy Style */}
              <div className="w-10 h-10 bg-navy-500 flex items-center justify-center relative overflow-hidden group-hover:bg-navy-600 transition-colors duration-500">
                <div className="text-white font-black text-xl tracking-tighter font-outfit relative z-10">JI</div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white group-hover:h-full transition-all duration-500 opacity-10"></div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl font-black text-white tracking-[0.1em] leading-none font-outfit uppercase group-hover:text-zinc-300 transition-colors">
                  J. ISHIHARA
                </h1>
                <p className="text-[8px] text-zinc-500 tracking-[0.4em] uppercase font-black mt-1">
                  Conditioning
                </p>
              </div>
            </Link>
            <p className="text-zinc-400 text-xs leading-relaxed mb-8 font-medium">
              科学的根拠に基づいたプロフェッショナルなアプローチで、
              あなたのポテンシャルを最大限に引き出す洗練された環境を。
            </p>
            <div className="flex space-x-6">
              {[
                { i: 'ri-instagram-line', h: '#' },
                { i: 'ri-youtube-line', h: '#' },
                { i: 'ri-line-fill', h: '#' },
              ].map((social, idx) => (
                <a key={idx} href={social.h} className="text-zinc-500 hover:text-white transition-colors duration-500 text-xl">
                  <i className={social.i}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wider uppercase">サイトマップ</h3>
            <ul className="space-y-3">
              {[
                { name: 'HOME', href: '/' },
                { name: 'ABOUT', href: '#profile' },
                { name: 'SERVICE', href: '#service-flow' },
                { name: 'PRICE', href: '#pricing' },
                { name: 'CONTACT', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-navy-300 transition-colors duration-300 text-[10px] font-black tracking-widest flex items-center uppercase"
                  >
                    <i className="ri-arrow-right-s-line mr-2 text-navy-500/30"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wider uppercase">ブログ</h3>
            <ul className="space-y-3">
              {[
                { name: 'ブログ一覧', href: '/blog' },
                { name: 'トレーニング', href: '/blog/category/training' },
                { name: '栄養・食事', href: '/blog/category/nutrition' },
                { name: 'ライフスタイル', href: '/blog/category/lifestyle' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-navy-300 transition-colors duration-300 text-[10px] font-black tracking-widest flex items-center uppercase"
                  >
                    <i className="ri-arrow-right-s-line mr-2 text-navy-500/30"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wider uppercase">お問い合わせ</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="ri-map-pin-line text-navy-500 mr-3 text-lg"></i>
                <div>
                  <p className="text-zinc-400 text-xs font-black tracking-widest mb-1">HALLEL HANZOMON</p>
                  <p className="text-zinc-500 text-[10px]">東京都千代田区一番町7-1 一番町ビルヂング 3F</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line text-navy-500 mr-3 text-lg"></i>
                <div>
                  <p className="text-zinc-400 text-xs font-black tracking-widest mb-1">HALLEL EBISU</p>
                  <p className="text-zinc-500 text-[10px]">東京都渋谷区恵比寿西2-11-9 プラネックスボルタ1階</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-send-line text-navy-500 mr-3 text-lg"></i>
                <a
                  href="mailto:junya1995@gmail.com"
                  className="text-zinc-500 hover:text-navy-300 transition-colors duration-300 text-[10px] font-black"
                >
                  junya1995@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} JUNYA ISHIHARA PERSONAL TRAINING. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-zinc-500 hover:text-navy-300 transition-colors duration-300 text-[10px] font-black uppercase tracking-widest">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer