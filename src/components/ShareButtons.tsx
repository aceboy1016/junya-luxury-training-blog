'use client'

import { useState, useEffect } from 'react'
import { trackShareClick } from '@/lib/gtag'

interface ShareButtonsProps {
  url: string
  title: string
  className?: string
}

const ShareButtons = ({ url, title, className = '' }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const shareData = {
    title,
    url,
    text: title,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&hashtags=パーソナルトレーニング,筋トレ,JUNYA&via=junya_pt`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    line: `https://line.me/R/msg/text/?${encodeURIComponent(title + ' ' + url)}`,
  }

  return (
    <div className={`py-12 border-t border-zinc-100 ${className}`}>
      <div className="flex items-center space-x-4 mb-8">
        <span className="w-10 h-10 bg-navy-500 flex items-center justify-center text-white text-[10px] font-black font-outfit uppercase">SHR</span>
        <h3 className="text-xl font-black text-navy-500 tracking-tighter uppercase font-outfit">Share Assets</h3>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {/* Twitter/X */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShareClick('twitter', title)}
          className="flex items-center px-6 py-3 bg-zinc-950 text-white hover:bg-navy-500 transition-all duration-500 text-[10px] font-black tracking-widest uppercase"
        >
          <i className="ri-twitter-x-fill mr-3 text-lg" />
          Twitter / X
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShareClick('facebook', title)}
          className="flex items-center px-6 py-3 bg-zinc-900 text-white hover:bg-[#1877F2] transition-all duration-500 text-[10px] font-black tracking-widest uppercase"
        >
          <i className="ri-facebook-fill mr-3 text-lg" />
          Facebook
        </a>

        {/* LINE */}
        <a
          href={shareLinks.line}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShareClick('line', title)}
          className="flex items-center px-6 py-3 bg-zinc-800 text-white hover:bg-[#00B900] transition-all duration-500 text-[10px] font-black tracking-widest uppercase"
        >
          <i className="ri-line-fill mr-3 text-lg" />
          LINE
        </a>

        {/* URLコピー */}
        <button
          onClick={() => {
            copyToClipboard()
            trackShareClick('copy_link', title)
          }}
          className={`flex items-center px-6 py-3 transition-all duration-500 text-[10px] font-black tracking-widest uppercase ${
            copied 
              ? 'bg-navy-500 text-white' 
              : 'bg-zinc-100 text-navy-400 hover:bg-navy-100'
          }`}
        >
          <i className={`${copied ? 'ri-check-line' : 'ri-link'} mr-3 text-lg`} />
          {copied ? 'Copied' : 'Copy Link'}
        </button>

        {/* ネイティブ共有（モバイル対応） */}
        {isClient && navigator.share && (
          <button
            onClick={handleNativeShare}
            className="flex items-center px-6 py-3 bg-navy-500 text-white hover:bg-navy-600 transition-all duration-500 text-[10px] font-black tracking-widest uppercase"
          >
            <i className="ri-share-forward-line mr-3 text-lg" />
            System Share
          </button>
        )}
      </div>
    </div>
  )
}

export default ShareButtons