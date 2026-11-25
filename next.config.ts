import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  // Sanity CDN用の画像最適化設定
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },

  // ヘッダー設定（セキュリティとパフォーマンス最適化）
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // 実験的機能
  experimental: {
    optimizePackageImports: ['@sanity/client', '@sanity/image-url'],
  },

  async redirects() {
    return [
      { source: '/about', destination: '/#profile', statusCode: 301 },
      { source: '/service', destination: '/#service-flow', statusCode: 301 },
      { source: '/price', destination: '/#pricing', statusCode: 301 },
      { source: '/contact', destination: '/#contact', statusCode: 301 },
    ]
  },

  // コンパイラ最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // パフォーマンス最適化
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
