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
    pocket: `https://getpocket.com/edit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    hatena: `https://b.hatena.ne.jp/entry/s/${url.replace(/https?:\/\//, '')}`,
    reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
  }

  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-semibold text-junya-text mb-4">この記事をシェア</h3>
      
      <div className="flex flex-wrap gap-3">
        {/* Twitter */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShareClick('twitter', title)}
          className="flex items-center px-4 py-2 bg-[#1DA1F2] text-white rounded-junya hover:bg-opacity-90 transition-all duration-300 text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
          Twitter
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShareClick('facebook', title)}
          className="flex items-center px-4 py-2 bg-[#1877F2] text-white rounded-junya hover:bg-opacity-90 transition-all duration-300 text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </a>

        {/* LINE */}
        <a
          href={shareLinks.line}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShareClick('line', title)}
          className="flex items-center px-4 py-2 bg-[#00B900] text-white rounded-junya hover:bg-opacity-90 transition-all duration-300 text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          LINE
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShareClick('linkedin', title)}
          className="flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-junya hover:bg-opacity-90 transition-all duration-300 text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>

        {/* Pocket */}
        <a
          href={shareLinks.pocket}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShareClick('pocket', title)}
          className="flex items-center px-4 py-2 bg-[#EF3F56] text-white rounded-junya hover:bg-opacity-90 transition-all duration-300 text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.901 4.204C21.642 3.484 20.956 3 20.204 3h-16.4c-.753 0-1.439.484-1.698 1.204C1.886 4.924 2.011 5.706 2.554 6.246l8.9 8.946c.261.261.615.408.985.408s.724-.147.985-.408l8.9-8.946c.542-.54.668-1.322.448-2.042z"/>
          </svg>
          Pocket
        </a>

        {/* はてなブックマーク */}
        <a
          href={shareLinks.hatena}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackShareClick('hatena', title)}
          className="flex items-center px-4 py-2 bg-[#00A4DE] text-white rounded-junya hover:bg-opacity-90 transition-all duration-300 text-sm font-medium"
        >
          <span className="text-sm font-bold mr-1">B!</span>
          はてブ
        </a>

        {/* URLコピー */}
        <button
          onClick={() => {
            copyToClipboard()
            trackShareClick('copy_link', title)
          }}
          className={`flex items-center px-4 py-2 rounded-junya hover:bg-opacity-90 transition-all duration-300 text-sm font-medium ${
            copied 
              ? 'bg-green-500 text-white' 
              : 'bg-junya-gray text-white'
          }`}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {copied ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            )}
          </svg>
          {copied ? 'コピー完了!' : 'URLコピー'}
        </button>

        {/* ネイティブ共有（モバイル対応） */}
        {isClient && navigator.share && (
          <button
            onClick={handleNativeShare}
            className="flex items-center px-4 py-2 bg-junya-orange text-white rounded-junya hover:bg-opacity-90 transition-all duration-300 text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            シェア
          </button>
        )}
      </div>
    </div>
  )
}

export default ShareButtons