import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-tight mb-6">
              <div className="text-3xl font-black text-white">
                JUNYA <span className="text-gradient">ISHIHARA</span>
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest mt-1">
                Personal Training
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              科学的根拠に基づいたプロフェッショナルなパーソナルトレーニングで、
              あなたの理想の身体づくりをサポートします。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-xl">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-xl">
                <i className="ri-youtube-line"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-xl">
                <i className="ri-line-fill"></i>
              </a>
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
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-sm flex items-center"
                  >
                    <i className="ri-arrow-right-s-line mr-2 text-gold-500/50"></i>
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
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-sm flex items-center"
                  >
                    <i className="ri-arrow-right-s-line mr-2 text-gold-500/50"></i>
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
                <i className="ri-map-pin-line text-gold-500 mr-3 text-lg"></i>
                <div>
                  <p className="text-gray-400 text-sm">HALLEL半蔵門店</p>
                  <p className="text-gray-500 text-xs">東京都千代田区一番町10-8</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line text-gold-500 mr-3 text-lg"></i>
                <div>
                  <p className="text-gray-400 text-sm">HALLEL恵比寿店</p>
                  <p className="text-gray-500 text-xs">東京都渋谷区恵比寿南2-3-11</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-send-line text-gold-500 mr-3 text-lg"></i>
                <a
                  href="mailto:junya1995@gmail.com"
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-sm"
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
              <Link href="/privacy" className="text-gray-500 hover:text-gold-500 transition-colors duration-300 text-sm">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer