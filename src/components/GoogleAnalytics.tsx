'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  ga_id: string
}

const GoogleAnalytics = ({ ga_id }: GoogleAnalyticsProps) => {
  // プレースホルダーIDの場合は何も表示しない
  if (!ga_id || ga_id === 'G-XXXXXXXXXX') {
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 Google Analytics: プレースホルダーIDが設定されています。実際の測定IDを設定してください。')
    }
    return null
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga_id}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics