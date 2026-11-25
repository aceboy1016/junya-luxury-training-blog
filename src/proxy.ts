import { NextRequest, NextResponse } from 'next/server'
import { checkAdminAuth } from '@/lib/admin-auth'
export function proxy(request: NextRequest) {
  return checkAdminAuth(request) || NextResponse.next({headers: {'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store'}})
}
export const config = { matcher: ['/admin/:path*', '/api/generate-tags', '/api/seo-analysis'] }
