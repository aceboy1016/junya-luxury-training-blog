import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative min-h-[100svh] bg-breeze-50 text-deep overflow-hidden flex items-center px-5 md:px-10 pt-28 pb-20">
        <div className="hero-glow" aria-hidden />
        <div className="relative w-full grid grid-cols-12 gap-x-6 gap-y-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="font-outfit font-bold tracking-[-0.06em] leading-[0.8] text-[clamp(7rem,26vw,22rem)] text-breeze-200" aria-hidden>
              404
            </p>
            <h1 className="mt-8 font-bold tracking-[-0.03em] leading-[1.25] text-[clamp(1.9rem,4.5vw,3.5rem)]">
              ページが見つかりませんでした
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-zinc-600">
              お探しのページは、移動したか削除された可能性があります。ホームかブログから、もう一度たどってみてください。
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
            <Link href="/" className="inline-flex items-center h-12 px-7 rounded-full bg-breeze-500 text-white font-outfit text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-breeze-600 transition-colors duration-500">
              Home
            </Link>
            <Link href="/blog" className="inline-flex items-center h-12 px-7 rounded-full ring-1 ring-deep/20 font-outfit text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-500">
              Journal
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
