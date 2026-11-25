import { siteConfig } from '@/config/site'
interface StructuredDataProps {
  title: string; description: string; author: string; publishedAt: string; modifiedAt?: string; canonicalUrl?: string; imageUrl?: string; tags?: string[]; slug: string
}
export default function StructuredData({title, description, author, publishedAt, modifiedAt, canonicalUrl, imageUrl, tags, slug}: StructuredDataProps) {
  const url = canonicalUrl || `${siteConfig.url}/blog/${slug}`
  const data = [
    {'@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
      author: {'@type': 'Person', name: author},
      publisher: {'@type': 'Organization', name: 'J. ISHIHARA Premium Personal Training', url: siteConfig.url},
      datePublished: publishedAt, dateModified: modifiedAt || publishedAt,
      image: imageUrl || `${siteConfig.url}/junya-portrait.jpg`, keywords: tags?.join(', '), url,
      mainEntityOfPage: {'@type': 'WebPage', '@id': url}},
    {'@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      {'@type': 'ListItem', position: 1, name: 'ホーム', item: siteConfig.url},
      {'@type': 'ListItem', position: 2, name: 'ブログ', item: `${siteConfig.url}/blog`},
      {'@type': 'ListItem', position: 3, name: title, item: url},
    ]},
  ]
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, '\\u003c')}} />
}
