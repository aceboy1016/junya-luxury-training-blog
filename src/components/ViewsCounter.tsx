'use client'

import { useEffect } from 'react'

interface ViewsCounterProps {
  postId: string
}

const ViewsCounter = ({ postId }: ViewsCounterProps) => {
  useEffect(() => {
    // アクセス数をインクリメントするAPI呼び出し
    const incrementViews = async () => {
      try {
        await fetch('/api/increment-views', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postId }),
        })
      } catch (error) {
        console.error('Failed to increment views:', error)
      }
    }

    // コンポーネントマウント時に一度だけ実行
    incrementViews()
  }, [postId])

  // このコンポーネントは見た目には何も表示しない
  return null
}

export default ViewsCounter