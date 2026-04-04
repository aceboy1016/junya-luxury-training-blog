'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#profile' },
    { name: 'SERVICE', href: '#service-flow' },
    { name: 'PRICE', href: '#pricing' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
          : 'bg-white/90 backdrop-blur-md py-5'
        }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo flex items-center">
            <Link href="/" className="no-underline">
              <h1 className="text-3xl font-black text-black tracking-wider leading-none">
                JUNYA <span className="text-gradient">ISHIHARA</span>
              </h1>
              <p className="text-xs text-gray-600 tracking-widest uppercase font-medium mt-1">
                Personal Training
              </p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black font-bold tracking-wide hover:text-gold-500 transition-all duration-300 relative group uppercase text-sm px-4 py-2 hover:bg-gold-500/10 rounded-lg"
              >
                {item.name}
                <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gold-gradient group-hover:w-8 transition-all duration-500"></span>
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="#contact"
              className="bg-gold-gradient text-white px-8 py-3 font-bold tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase text-sm border-2 border-transparent hover:border-white/20"
            >
              <i className="ri-calendar-line mr-2"></i>体験予約
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden bg-gold-gradient text-white p-3 hover:shadow-lg transition-all duration-300 border-2 border-gold-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-6 border-t border-gold-500/20 bg-white/98 backdrop-blur-xl rounded-lg">
            <ul className="flex flex-col space-y-6 px-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-black font-bold uppercase text-lg hover:text-gold-500 transition-colors duration-300 block py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-6 pt-6 border-t border-gold-500/20">
              <Link
                href="#contact"
                className="block bg-gold-gradient text-white px-6 py-4 font-bold tracking-wide text-center uppercase transition-all duration-300 hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="ri-calendar-line mr-2"></i>体験予約
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header