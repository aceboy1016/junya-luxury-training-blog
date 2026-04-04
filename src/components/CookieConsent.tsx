'use client'

import { useState, useEffect } from 'react'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
    
    // Google Analyticsを有効化
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      })
    }
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
    
    // Google Analyticsを無効化
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      })
    }
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🍪 Cookieの使用について
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              当サイトでは、サイトの改善とユーザー体験の向上のために Google Analytics を使用しています。
              これにより、サイトの利用状況を分析し、より良いコンテンツを提供できます。
              詳しくは
              <a 
                href="/privacy" 
                className="text-navy-500 hover:text-navy-400 underline underline-offset-4 mx-1 transition-colors"
              >
                プライバシーポリシー
              </a>
              をご確認ください。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={declineCookies}
              className="px-6 py-3 text-[10px] font-black text-zinc-500 bg-zinc-100 hover:bg-zinc-200 transition-all duration-300 uppercase tracking-widest"
            >
              必要最小限のみ
            </button>
            <button
              onClick={acceptCookies}
              className="px-8 py-3 text-[10px] font-black text-white bg-navy-500 hover:bg-navy-600 transition-all duration-300 uppercase tracking-widest"
            >
              すべて同意する
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent