import { siteConfig } from '@/config/site'
export default function HomeStructuredData() {
  const data = [
    {'@context': 'https://schema.org', '@type': 'Person', '@id': `${siteConfig.url}/#person`, name: '石原 淳哉', jobTitle: 'パーソナルトレーナー', url: siteConfig.url, image: `${siteConfig.url}/junya-portrait.jpg`},
    ...[
      {name: 'HALLEL 半蔵門店', postalCode: '102-0082', addressLocality: '千代田区', streetAddress: '一番町10-8 一番町ウエストビルB1'},
      {name: 'HALLEL 恵比寿店', postalCode: '150-0022', addressLocality: '渋谷区', streetAddress: '恵比寿南2-3-11 グレース青山2F'},
    ].map(({name, ...address}) => ({'@context': 'https://schema.org', '@type': 'LocalBusiness', name, url: `${siteConfig.url}/#locations`, address: {'@type': 'PostalAddress', addressCountry: 'JP', addressRegion: '東京都', ...address}})),
  ]
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, '\\u003c')}} />
}
