import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICE', href: '/service' },
    { name: 'PRICE', href: '/price' },
  ]

  const blogLinks = [
    { name: 'ブログ一覧', href: '/blog' },
    { name: 'トレーニング方法', href: '/blog/category/training' },
    { name: '栄養・食事', href: '/blog/category/nutrition' },
    { name: 'ライフスタイル', href: '/blog/category/lifestyle' },
  ]

  const contactInfo = {
    phone: '03-1234-5678',
    email: 'info@junya-personal-training.com',
    address: '東京都千代田区丸の内1-1-1',
  }

  return (
    <footer className="bg-junya-text text-white">
      {/* メインフッターコンテンツ */}
      <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-tight mb-4">
              <div className="text-2xl font-bold text-white">
                JUNYA{' '}
                <span className="text-junya-orange">ISHIHARA</span>
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                PERSONAL TRAINING
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              プロフェッショナルなパーソナルトレーニングで、
              あなたの理想の身体づくりをサポートします。
              科学的根拠に基づいたトレーニングと栄養指導で、
              確実な結果をお届けします。
            </p>
            <div className="flex space-x-4">
              {/* SNSアイコン */}
              <a
                href="#"
                className="text-gray-300 hover:text-junya-orange transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-junya-orange transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* クイックリンク */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-junya-orange transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-junya-orange transition-colors duration-300 text-sm"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* ブログリンク */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ブログ</h3>
            <ul className="space-y-2">
              {blogLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-junya-orange transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* お問い合わせ情報 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">お問い合わせ</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="h-4 w-4 text-junya-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 text-junya-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-junya-orange transition-colors duration-300 text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start">
                <svg className="h-4 w-4 text-junya-orange mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ボトムバー */}
      <div className="border-t border-gray-700">
        <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} JUNYA ISHIHARA PERSONAL TRAINING. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-junya-orange transition-colors duration-300 text-sm"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-junya-orange transition-colors duration-300 text-sm"
              >
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer