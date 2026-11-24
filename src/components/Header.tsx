'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

const navigation = [
  { name: 'Methodology', jp: 'メソッド', href: '/#methodology' },
  { name: 'Service', jp: 'サービスの流れ', href: '/#service-flow' },
  { name: 'Studios', jp: 'スタジオ', href: '/#locations' },
  { name: 'Price', jp: '料金', href: '/#pricing' },
  { name: 'Profile', jp: 'プロフィール', href: '/#profile' },
  { name: 'Journal', jp: 'ブログ', href: '/blog' },
  { name: 'Contact', jp: 'お問い合わせ', href: '/#contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const overlay = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // 下にスクロールしたら隠し、上に戻したら出す
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > 160 && y > last)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const el = overlay.current
    if (!el) return
    const lenis = (window as any).__lenis
    if (open) {
      lenis?.stop()
      gsap.set(el, { visibility: 'visible' })
      gsap.fromTo(el, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'expo.inOut' })
      gsap.fromTo(
        el.querySelectorAll('[data-menu-item]'),
        { yPercent: 110 },
        { yPercent: 0, duration: 1.2, ease: 'expo.out', stagger: 0.05, delay: 0.35 }
      )
      gsap.fromTo(el.querySelectorAll('[data-menu-fade]'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, delay: 0.7 })
    } else {
      lenis?.start()
      gsap.to(el, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.8,
        ease: 'expo.inOut',
        onComplete: () => {
          gsap.set(el, { visibility: 'hidden' })
        },
      })
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] text-deep transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <nav className="flex items-center justify-between px-5 md:px-10 h-20 md:h-24">
          <Link href="/" className="font-outfit font-black text-[15px] md:text-base tracking-[-0.02em] uppercase leading-none" aria-label="JUNYA ISHIHARA ホーム">
            Junya Ishihara
          </Link>

          <ul className="hidden lg:flex items-center gap-9">
            {navigation.slice(0, 6).map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="nav-link inline-flex font-outfit text-[11px] font-semibold tracking-[0.22em] uppercase">
                  <span data-text={item.name}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <Link href="/#contact" className="hidden md:inline-flex nav-link font-outfit text-[11px] font-semibold tracking-[0.22em] uppercase">
              <span data-text="Book a Session">Book a Session</span>
              <span className="ml-2" aria-hidden>↗</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex items-center gap-3 font-outfit text-[11px] font-semibold tracking-[0.22em] uppercase h-10"
              aria-expanded={open}
              aria-controls="site-menu"
            >
              {open ? 'Close' : 'Menu'}
              <span className="relative block w-6 h-[7px]" aria-hidden>
                <span className={`absolute left-0 right-0 h-px bg-current transition-transform duration-500 ${open ? 'top-[3px] rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 right-0 h-px bg-current transition-transform duration-500 ${open ? 'top-[3px] -rotate-45' : 'top-[6px]'}`} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <div
        ref={overlay}
        id="site-menu"
        className="fixed inset-0 z-[90] bg-breeze-50 text-deep invisible flex flex-col justify-between pt-28 pb-10 px-5 md:px-10"
        style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        aria-hidden={!open}
      >
        <ul className="space-y-1">
          {navigation.map((item, i) => (
            <li key={item.name} className="overflow-hidden">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                data-menu-item
                className="group flex items-baseline gap-4 py-1"
                tabIndex={open ? 0 : -1}
              >
                <span className="font-outfit text-[10px] text-breeze-500 tabular-nums w-6">0{i + 1}</span>
                <span className="font-outfit font-black uppercase tracking-[-0.04em] text-[clamp(2rem,9.5vw,6rem)] leading-[0.95] transition-colors duration-500 group-hover:text-breeze-500">
                  {item.name}
                </span>
                <span className="text-xs text-zinc-400 hidden sm:inline">{item.jp}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div data-menu-fade className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-xs text-zinc-500 border-t border-deep/10 pt-6">
          <p className="leading-relaxed">
            HALLEL 半蔵門 / 恵比寿
            <br />
            「しなきゃ」を「したい！」に変える。
          </p>
          <a href="mailto:junya1995@gmail.com" className="font-outfit text-breeze-600 text-base tracking-tight">
            junya1995@gmail.com ↗
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
