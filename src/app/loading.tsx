import LoadingSpinner from '@/components/LoadingSpinner'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-junya-light">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-junya-gray text-lg">読み込み中...</p>
      </div>
    </div>
  )
}