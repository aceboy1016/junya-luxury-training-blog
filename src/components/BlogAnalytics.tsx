'use client'

import { useEffect } from 'react'
import { trackBlogView } from '@/lib/gtag'

interface BlogAnalyticsProps {
  postTitle: string
  category?: string
}

const BlogAnalytics = ({ postTitle, category }: BlogAnalyticsProps) => {
  useEffect(() => {
    // Google Analyticsでブログ閲覧をトラッキング
    trackBlogView(postTitle, category)
  }, [postTitle, category])

  // このコンポーネントは見た目には何も表示しない
  return null
}

export default BlogAnalytics