import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | JUNYA ISHIHARA PERSONAL TRAINING',
  description: '当サイトのプライバシーポリシー、個人情報の取り扱い、Cookie使用について',
  robots: 'index, follow',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              プライバシーポリシー
            </h1>
            
            <p className="text-gray-600 mb-8">
              JUNYA ISHIHARA PERSONAL TRAINING（以下「当サイト」）は、お客様の個人情報の保護を重要な責務と考え、
              個人情報保護法およびその他の関連法規を遵守し、適切な取り扱いを行います。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. 個人情報の収集について
              </h2>
              <p className="text-gray-700 mb-4">
                当サイトでは、以下の場合に個人情報を収集することがあります：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>お問い合わせフォームの送信時</li>
                <li>体験予約の申し込み時</li>
                <li>メルマガの登録時</li>
                <li>各種サービスへの申し込み時</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. 個人情報の利用目的
              </h2>
              <p className="text-gray-700 mb-4">
                収集した個人情報は、以下の目的で利用いたします：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>お客様からのお問い合わせへの回答</li>
                <li>体験レッスンやサービスの提供</li>
                <li>サービスに関するご案内やお知らせの送信</li>
                <li>統計データの作成（個人を特定できない形で）</li>
                <li>サービスの改善や新サービスの開発</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Google Analytics の使用について
              </h2>
              <p className="text-gray-700 mb-4">
                当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を利用しています。
                Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>収集される情報：</strong>
                      IPアドレス、ブラウザ情報、アクセス日時、閲覧ページ、滞在時間、
                      参照元サイトなど（個人を特定する情報は含まれません）
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                この機能はCookieを無効にすることで収集を停止することができます。
                また、Google Analyticsの利用規約およびプライバシーポリシーについては、
                以下をご確認ください：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <a 
                    href="https://marketingplatform.google.com/about/analytics/terms/jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Google Analytics利用規約
                  </a>
                </li>
                <li>
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Googleプライバシーポリシー
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Cookieについて
              </h2>
              <p className="text-gray-700 mb-4">
                当サイトでは、より良いサービス提供のためにCookieを使用しています。
                Cookieは以下の目的で使用されます：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>サイトの利用状況の分析</li>
                <li>ユーザーエクスペリエンスの向上</li>
                <li>サイトの機能改善</li>
              </ul>
              <p className="text-gray-700">
                ブラウザの設定によりCookieを無効にすることができますが、
                その場合サイトの一部機能が制限される可能性があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. 個人情報の第三者提供
              </h2>
              <p className="text-gray-700">
                当サイトでは、法令に基づく場合や、お客様の生命・身体・財産の保護のために
                必要な場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. 個人情報の開示・訂正・削除
              </h2>
              <p className="text-gray-700">
                お客様は、当サイトが保有する個人情報について、開示・訂正・削除を求めることができます。
                ご希望の場合は、下記の連絡先までお問い合わせください。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. セキュリティについて
              </h2>
              <p className="text-gray-700">
                当サイトでは、個人情報の漏洩、滅失、毀損の防止その他個人情報の適切な管理のために、
                セキュリティシステムの維持・管理体制の整備・従業員教育の徹底等、
                必要かつ適切な措置を講じます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. プライバシーポリシーの変更
              </h2>
              <p className="text-gray-700">
                当サイトは、必要に応じてプライバシーポリシーを変更する場合があります。
                変更した場合は、当サイト上で公表いたします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. お問い合わせ
              </h2>
              <p className="text-gray-700 mb-4">
                個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください：
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>JUNYA ISHIHARA PERSONAL TRAINING</strong><br />
                  メール: info@junya-personal-training.com<br />
                  電話: 03-1234-5678<br />
                  受付時間: 平日 9:00-18:00
                </p>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-500">
                制定日：2024年1月1日<br />
                最終更新日：2025年1月23日
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}