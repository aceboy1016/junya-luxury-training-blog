'use client'

import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICE', href: '/service' },
    { name: 'PRICE', href: '/price' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'BLOG', href: '/blog' },
  ]

  return (
    <header className="bg-white shadow-junya-header sticky top-0 z-50">
      <div className="max-w-junya-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* ロゴ */}
          <Link href="/" className="flex flex-col leading-tight">
            <div className="text-2xl font-bold text-junya-text">
              JUNYA{' '}
              <span className="text-junya-gold">ISHIHARA</span>
            </div>
            <div className="text-xs text-junya-gray uppercase tracking-wider">
              PERSONAL TRAINING
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-junya-text hover:text-junya-gold font-medium transition-colors duration-300 tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTAボタン */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn-primary"
            >
              体験予約
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2 rounded-md text-junya-text hover:text-junya-blue hover:bg-junya-light transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-junya-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-junya-text hover:text-junya-blue hover:bg-junya-light transition-colors duration-300 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  体験予約
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header