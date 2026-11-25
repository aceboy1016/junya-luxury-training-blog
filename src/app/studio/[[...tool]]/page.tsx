import { isSanityConfigured } from '@/lib/sanity'
import Studio from './Studio'
export default function StudioPage() {
  if (!isSanityConfigured) return <main><h1>Sanity Studio の設定待ち</h1><p>NEXT_PUBLIC_SANITY_PROJECT_ID と NEXT_PUBLIC_SANITY_DATASET を設定して再デプロイしてください。設定手順は README を参照してください。</p></main>
  return <Studio />
}
