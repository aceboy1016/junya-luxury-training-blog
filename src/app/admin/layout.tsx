import { headers } from 'next/headers'
import { checkAdminAuth } from '@/lib/admin-auth'
import type { Metadata } from 'next'
export const metadata: Metadata = {title: '管理画面', robots: {index: false, follow: false, googleBot: {index: false, follow: false}}, alternates: {canonical: null}}
export default async function AdminLayout({children}: {children: React.ReactNode}) {
  if (checkAdminAuth({headers: await headers()})) return <p>管理者認証が必要です。</p>
  return children
}
