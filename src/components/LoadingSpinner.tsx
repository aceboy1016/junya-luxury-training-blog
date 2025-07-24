interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'orange' | 'gray' | 'white'
  text?: string
}

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'orange',
  text 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    orange: 'border-junya-orange',
    gray: 'border-junya-gray',
    white: 'border-white'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div 
        className={`
          ${sizeClasses[size]} 
          border-2 border-transparent 
          ${colorClasses[color]} 
          border-t-transparent 
          rounded-full 
          animate-spin
        `}
        style={{
          borderTopColor: 'transparent',
          borderRightColor: color === 'orange' ? '#E49B3F' : color === 'gray' ? '#666666' : '#ffffff',
          borderBottomColor: color === 'orange' ? '#E49B3F' : color === 'gray' ? '#666666' : '#ffffff',
          borderLeftColor: color === 'orange' ? '#E49B3F' : color === 'gray' ? '#666666' : '#ffffff',
        }}
      />
      {text && (
        <p className={`text-junya-gray ${textSizeClasses[size]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  )
}

export default LoadingSpinner