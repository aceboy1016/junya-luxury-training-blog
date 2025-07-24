'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-junya-light">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-junya-text mb-4">
            エラーが発生しました
          </h1>
          <p className="text-junya-gray mb-8 leading-relaxed">
            申し訳ございません。予期しないエラーが発生しました。
            <br />
            しばらく時間をおいてから再度お試しください。
          </p>
          
          <div className="space-y-4">
            <button 
              onClick={reset}
              className="btn-primary block w-full"
            >
              再試行
            </button>
            <a href="/blog" className="btn-secondary block">
              ブログ一覧へ
            </a>
            <a href="/" className="btn-secondary block">
              ホームページへ
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-junya-border">
            <p className="text-sm text-junya-gray">
              問題が続く場合は、
              <a href="/contact" className="text-junya-orange hover:underline ml-1">
                お問い合わせ
              </a>
              ください。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}