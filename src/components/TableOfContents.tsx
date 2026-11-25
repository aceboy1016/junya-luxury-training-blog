'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

/** 記事本文（data-article-body）の見出しだけを拾う目次。PCでは追従、スマホでは折りたたみ。 */
const TableOfContents = ({ className = '' }: { className?: string }) => {
  const [items, setItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const body = document.querySelector('[data-article-body]')
    if (!body) return
    const found: TOCItem[] = []
    body.querySelectorAll('h2, h3').forEach((h, i) => {
      if (!h.id) h.id = `section-${i + 1}`
      found.push({ id: h.id, text: h.textContent || '', level: Number(h.tagName[1]) })
    })
    setItems(found)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id))
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    body.querySelectorAll('h2, h3').forEach((h) => io.observe(h))
    return () => io.disconnect()
  }, [])

  const go = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const lenis = (window as Window & { __lenis?: { scrollTo: (el: HTMLElement, o: { offset: number; duration: number }) => void } }).__lenis
    if (lenis) lenis.scrollTo(el, { offset: -110, duration: 1.4 })
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' })
  }

  if (items.length === 0) return null

  const list = (
    <ol className="space-y-1 border-l border-deep/10">
      {items.map((item) => {
        const active = activeId === item.id
        return (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => go(item.id)}
              className={`relative block w-full text-left py-2 text-[13px] leading-relaxed transition-colors duration-500 ${item.level === 3 ? 'pl-8 text-[12px]' : 'pl-5'} ${
                active ? 'text-breeze-600 font-bold' : 'text-zinc-500 hover:text-deep'
              }`}
            >
              <span className={`absolute left-[-1px] top-2 bottom-2 w-[2px] bg-breeze-500 transition-transform duration-500 origin-top ${active ? 'scale-y-100' : 'scale-y-0'}`} aria-hidden />
              {item.text}
            </button>
          </li>
        )
      })}
    </ol>
  )

  return (
    <nav aria-label="目次" className={className}>
      <details className="lg:hidden rounded-md bg-breeze-50 px-5 py-4 group">
        <summary className="flex items-center justify-between cursor-pointer list-none font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-deep">
          Contents
          <span aria-hidden className="text-lg transition-transform duration-500 group-open:rotate-45">+</span>
        </summary>
        <div className="mt-4">{list}</div>
      </details>
      <div className="hidden lg:block">
        <p className="font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-zinc-500 mb-5">Contents</p>
        {list}
      </div>
    </nav>
  )
}

export default TableOfContents
