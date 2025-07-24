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
                className="text-junya-gold hover:underline mx-1"
              >
                プライバシーポリシー
              </a>
              をご確認ください。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              必要最小限のみ
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm font-medium text-white bg-junya-gold hover:bg-junya-gold-dark rounded-lg transition-colors duration-200"
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