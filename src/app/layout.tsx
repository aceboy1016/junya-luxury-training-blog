import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'JUNYA ISHIHARA PERSONAL TRAINING',
    template: '%s | JUNYA ISHIHARA PERSONAL TRAINING'
  },
  description: 'プロフェッショナルパーソナルトレーナーJUNYA ISHIHARAによる科学的根拠に基づいたトレーニング指導。あなたの理想の身体づくりをサポートします。',
  keywords: ['パーソナルトレーニング', 'フィットネス', 'ダイエット', 'ボディメイク', 'トレーニング', '筋トレ', '栄養指導', 'JUNYA ISHIHARA'],
  authors: [{ name: 'JUNYA ISHIHARA' }],
  creator: 'JUNYA ISHIHARA',
  publisher: 'JUNYA ISHIHARA PERSONAL TRAINING',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://junya-personal-training.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: 'JUNYA ISHIHARA PERSONAL TRAINING',
    title: 'JUNYA ISHIHARA PERSONAL TRAINING',
    description: 'プロフェッショナルパーソナルトレーナーJUNYA ISHIHARAによる科学的根拠に基づいたトレーニング指導。あなたの理想の身体づくりをサポートします。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JUNYA ISHIHARA PERSONAL TRAINING',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JUNYA ISHIHARA PERSONAL TRAINING',
    description: 'プロフェッショナルパーソナルトレーナーJUNYA ISHIHARAによる科学的根拠に基づいたトレーニング指導。',
    images: ['/twitter-image.jpg'],
    creator: '@junya_pt',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#E49B3F',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#E49B3F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//cdn.sanity.io" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#E49B3F" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JUNYA ISHIHARA PT" />

        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JUNYA ISHIHARA PERSONAL TRAINING",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "logo": {
                "@type": "ImageObject",
                "url": `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`
              },
              "description": "プロフェッショナルパーソナルトレーナーJUNYA ISHIHARAによる科学的根拠に基づいたトレーニング指導。",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "JP",
                "addressRegion": "東京都"
              },
              "founder": {
                "@type": "Person",
                "name": "JUNYA ISHIHARA",
                "jobTitle": "パーソナルトレーナー"
              },
              "sameAs": [
                "https://instagram.com/junya_pt",
                "https://youtube.com/@junya_pt"
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/search?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_ID} />
        )}

        <div id="__next">
          {children}
        </div>

        {/* Cookie同意バナー */}
        {/* <CookieConsent /> */}
      </body>
    </html>
  )
}
