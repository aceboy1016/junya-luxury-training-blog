'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

/**
 * 初回訪問時だけ表示するオープニング。
 * 「しなきゃ」が「したい！」に切り替わる、ブランドの原点を体験させる。
 */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const el = root.current
    const finish = () => {
      ;(window as any).__heroReady = true
      window.dispatchEvent(new CustomEvent('hero:play'))
    }
    let seen = document.documentElement.classList.contains('pl-seen')
    try {
      seen = seen || !!sessionStorage.getItem('pl-seen')
    } catch {}
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || seen || reduce) {
      setDone(true)
      finish()
      return
    }

    document.documentElement.classList.add('is-loading')
    const counter = el.querySelector<HTMLElement>('[data-pl="count"]')
    const obj = { v: 0 }

    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
      onComplete: () => {
        try {
          sessionStorage.setItem('pl-seen', '1')
        } catch {}
        document.documentElement.classList.remove('is-loading')
        setDone(true)
      },
    })

    tl.fromTo('[data-pl="must"]', { yPercent: 110 }, { yPercent: 0, duration: 1.1 }, 0.1)
      .to(obj, {
        v: 100,
        duration: 1.9,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counter) counter.textContent = String(Math.round(obj.v)).padStart(3, '0')
        },
      }, 0)
      .fromTo('[data-pl="bar"]', { scaleX: 0 }, { scaleX: 1, duration: 1.9, ease: 'power2.inOut' }, 0)
      .to('[data-pl="must"]', { yPercent: -110, duration: 0.8, ease: 'expo.in' }, 1.15)
      .fromTo('[data-pl="want"]', { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 1.0 }, 1.75)
      .to('[data-pl="inner"]', { autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, 2.55)
      .call(finish, [], 2.65)
      .to(el, { yPercent: -100, duration: 1.2, ease: 'expo.inOut' }, 2.6)

    return () => {
      tl.kill()
      document.documentElement.classList.remove('is-loading')
    }
  }, [])

  if (done) return null

  return (
    <div ref={root} className="preloader fixed inset-0 z-[200] bg-breeze-50 text-navy-500" aria-hidden="true">
      <div data-pl="inner" className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
        <div className="flex justify-between text-[10px] font-semibold tracking-[0.4em] uppercase text-zinc-400 font-outfit">
          <span>Junya Ishihara</span>
          <span>Personal Training — Tokyo</span>
        </div>

        <div className="relative mx-auto text-center">
          <div className="overflow-hidden">
            <p data-pl="must" className="font-bold tracking-tight text-[clamp(3rem,12vw,9rem)] leading-[1.05] text-navy-200">
              しなきゃ
            </p>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <p data-pl="want" className="font-bold tracking-tight text-[clamp(3rem,12vw,9rem)] leading-[1.05] translate-y-[110%]">
              したい！
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-8">
          <div className="flex-1 h-px bg-navy-500/10 relative overflow-hidden self-center">
            <div data-pl="bar" className="absolute inset-0 bg-breeze-500 origin-left scale-x-0" />
          </div>
          <span data-pl="count" className="font-outfit font-light text-5xl md:text-7xl tabular-nums leading-none">
            000
          </span>
        </div>
      </div>
    </div>
  )
}
