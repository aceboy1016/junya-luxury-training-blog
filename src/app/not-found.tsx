import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-xl w-full text-center">
        {/* 背景テクスチャとしての404 */}
        <div className="relative mb-12">
          <div className="text-[200px] font-black text-zinc-50 leading-none font-outfit tracking-tighter">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-navy-500 flex items-center justify-center text-white">
              <i className="ri-error-warning-line text-4xl" />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-black text-navy-500 tracking-tighter uppercase font-outfit leading-tight">
            Asset Not Found
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-md mx-auto">
            申し訳ございません。リクエストされたリソースは、別の場所へ移動されたか、既に存在しない可能性があります。
          </p>
          
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/" 
              className="px-12 py-5 bg-navy-500 text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-navy-600 transition-all duration-500 shadow-2xl"
            >
              Return Home
            </Link>
            <Link 
              href="/contact" 
              className="px-12 py-5 border border-zinc-100 text-navy-400 text-[10px] font-black tracking-[0.4em] uppercase hover:border-navy-500 hover:text-navy-500 transition-all duration-500"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}