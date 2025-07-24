import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-junya-light">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="text-8xl font-bold text-junya-orange mb-4">404</div>
          <h1 className="text-3xl font-bold text-junya-text mb-4">
            ページが見つかりません
          </h1>
          <p className="text-junya-gray mb-8 leading-relaxed">
            お探しのページは移動または削除された可能性があります。
            <br />
            URLを確認していただくか、下記のリンクからお戻りください。
          </p>
          
          <div className="space-y-4">
            <Link href="/blog" className="btn-primary block">
              ブログ一覧へ
            </Link>
            <Link href="/" className="btn-secondary block">
              ホームページへ
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-junya-border">
            <p className="text-sm text-junya-gray">
              問題が解決しない場合は、
              <Link href="/contact" className="text-junya-orange hover:underline ml-1">
                お問い合わせ
              </Link>
              ください。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}