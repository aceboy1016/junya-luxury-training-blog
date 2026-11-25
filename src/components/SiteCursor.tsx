'use client'
import { usePathname } from 'next/navigation'
import HomeStructuredData from '@/components/HomeStructuredData'
import Cursor from '@/components/motion/Cursor'
export default function SiteCursor() {
  const pathname = usePathname()
  return pathname === '/studio' || pathname.startsWith('/studio/') ? null : <>{pathname === '/' && <HomeStructuredData />}<Cursor /></>
}
