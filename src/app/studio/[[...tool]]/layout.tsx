import type { Metadata } from 'next'
export const metadata: Metadata = { title: '編集室', robots: { index: false, follow: false, googleBot: {index: false, follow: false} }, alternates: { canonical: null } }
export default function StudioLayout({children}: {children: React.ReactNode}) { return children }
