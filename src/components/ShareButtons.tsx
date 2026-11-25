'use client'

import { useState } from 'react'
import { trackShareClick } from '@/lib/gtag'

interface ShareButtonsProps {
  url: string
  title: string
  className?: string
}

const Icon = {
  x: <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z" fill="currentColor" />,
  fb: <path d="M14 8V6.5c0-.7.5-1 1-1h2V2h-3c-3 0-4 2-4 4.5V8H8v3.5h2V22h4V11.5h2.6L17 8h-3Z" fill="currentColor" />,
  line: <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5 1.1-.5 6-3.5 8.2-6.1C21.6 14 22 12.5 22 11c0-4.4-4.5-8-10-8Zm-3.6 10.5H6.4c-.3 0-.5-.2-.5-.5V9c0-.3.2-.5.5-.5s.5.2.5.5v3.5h1.5c.3 0 .5.2.5.5s-.2.5-.5.5Zm2.1-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9c0-.3.2-.5.5-.5s.5.2.5.5v4Zm4.8 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-2-2.8V13c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9c0-.2.1-.4.3-.5h.2c.2 0 .3.1.4.2l2 2.8V9c0-.3.2-.5.5-.5s.5.2.5.5v4Zm3.2-2.5c.3 0 .5.2.5.5s-.2.5-.5.5h-1.5v1h1.5c.3 0 .5.2.5.5s-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5V9c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5h-1.5v1h1.5Z" fill="currentColor" />,
  link: <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
}

const btn = 'w-11 h-11 rounded-full flex items-center justify-center ring-1 ring-deep/15 text-deep hover:bg-breeze-500 hover:text-white hover:ring-breeze-500 transition-colors duration-500'

const ShareButtons = ({ url, title, className = '' }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false)

  const links = [
    { key: 'twitter', label: 'Xでシェア', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, icon: Icon.x },
    { key: 'facebook', label: 'Facebookでシェア', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, icon: Icon.fb },
    { key: 'line', label: 'LINEで送る', href: `https://line.me/R/msg/text/?${encodeURIComponent(`${title} ${url}`)}`, icon: Icon.line },
  ]

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      trackShareClick('copy_link', title)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <span className="font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-zinc-500 mr-2">Share</span>
      {links.map((l) => (
        <a key={l.key} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} onClick={() => trackShareClick(l.key, title)} className={btn}>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>{l.icon}</svg>
        </a>
      ))}
      <button type="button" onClick={copy} aria-label="リンクをコピー" className={`${btn} ${copied ? '!bg-breeze-500 !text-white !ring-breeze-500' : ''}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>{copied ? Icon.check : Icon.link}</svg>
      </button>
      <span role="status" className={`font-outfit text-[11px] tracking-[0.15em] uppercase text-breeze-600 transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
        Copied
      </span>
    </div>
  )
}

export default ShareButtons
