import { NextRequest, NextResponse } from 'next/server'
import { incrementPostViews } from '@/lib/sanity'

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json()

    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }

    // Sanityのアクセス数を増加
    await incrementPostViews(postId)

    return NextResponse.json(
      { success: true, message: 'Views incremented successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error incrementing views:', error)
    return NextResponse.json(
      { error: 'Failed to increment views' },
      { status: 500 }
    )
  }
}