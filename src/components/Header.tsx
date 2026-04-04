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
    { name: 'HOME', href: '/#home' },
    { name: 'ABOUT', href: '/#profile' },
    { name: 'SERVICE', href: '/#service-flow' },
    { name: 'PRICE', href: '/#pricing' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-4">
            <div className={`w-12 h-12 flex items-center justify-center text-xl font-black font-outfit tracking-tighter transition-all duration-700 ${
              isScrolled ? 'bg-navy-500 text-white' : 'bg-white text-navy-500 shadow-2xl'
            }`}>
              JI
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black font-outfit tracking-tighter uppercase transition-colors duration-700 ${
                isScrolled ? 'text-navy-500' : 'text-white'
              }`}>
                JUNYA ISHIHARA
              </span>
              <span className={`text-[8px] font-black tracking-[0.4em] uppercase transition-colors duration-700 ${
                isScrolled ? 'text-zinc-400' : 'text-white/50'
              }`}>
                Personal Training
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-700 hover:scale-110 relative group ${
                  isScrolled ? 'text-navy-500' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-navy-500 transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/#contact"
              className={`px-8 py-3 text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-700 shadow-2xl ${
                isScrolled 
                  ? 'bg-navy-500 text-white hover:bg-zinc-950' 
                  : 'bg-white text-navy-500 hover:bg-navy-500 hover:text-white'
              }`}
            >
              Experience Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden w-12 h-12 flex items-center justify-center text-2xl transition-all duration-700 ${
              isScrolled ? 'text-navy-500' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-zinc-950 z-[-1] flex flex-col items-center justify-center space-y-12 transition-all duration-1000 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-4xl font-black font-outfit tracking-tighter uppercase hover:text-navy-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="px-12 py-5 bg-navy-500 text-white text-[10px] font-black tracking-[0.4em] uppercase shadow-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience Session
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
