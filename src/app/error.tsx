'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-xl w-full text-center">
        <div className="relative mb-12">
          <div className="text-[180px] font-black text-zinc-50 leading-none font-outfit tracking-tighter">
            ERR
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-navy-500 flex items-center justify-center text-white">
              <i className="ri-refresh-line text-4xl animate-spin-slow" />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-black text-navy-500 tracking-tighter uppercase font-outfit leading-tight">
            System Error
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-sm mx-auto">
            リソースの読み込みに一時的な問題が発生しました。お手数ですが、再度お試しください。
          </p>
          
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => reset()}
              className="px-12 py-5 bg-navy-500 text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-navy-600 transition-all duration-500 shadow-2xl"
            >
              Try Again
            </button>
            <Link 
              href="/" 
              className="px-12 py-5 border border-zinc-100 text-navy-400 text-[10px] font-black tracking-[0.4em] uppercase hover:border-navy-500 hover:text-navy-500 transition-all duration-500"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}