import 'server-only'
import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual, createHash } from 'node:crypto'
const equal = (a: string, b: string) => timingSafeEqual(createHash('sha256').update(a).digest(), createHash('sha256').update(b).digest())
export function checkAdminAuth(request: Pick<NextRequest, 'headers'>) {
  const username = process.env.ADMIN_USERNAME
  const password = process.env.ADMIN_PASSWORD
  const headers = {'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store'}
  if (!username || !password) return new NextResponse('Admin is not configured', {status: 503, headers})
  const authorization = request.headers.get('authorization') || ''
  let credentials = ''
  if (authorization.startsWith('Basic ')) credentials = Buffer.from(authorization.slice(6), 'base64').toString('utf8')
  const separator = credentials.indexOf(':')
  if (separator < 0 || !equal(credentials.slice(0, separator), username) || !equal(credentials.slice(separator + 1), password)) {
    return new NextResponse('Authentication required', {status: 401, headers: {...headers, 'WWW-Authenticate': 'Basic realm="Editorial tools", charset="UTF-8"'}})
  }
  return null
}
