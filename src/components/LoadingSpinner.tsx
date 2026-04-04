interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'navy' | 'gray' | 'white'
  text?: string
}

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'navy',
  text 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    navy: 'border-navy-500',
    gray: 'border-zinc-300',
    white: 'border-white'
  }

  const textSizeClasses = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-xs'
  }

  const colorHex = {
    navy: '#262636',
    gray: '#D4D4D8',
    white: '#ffffff'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
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
          borderRightColor: colorHex[color],
          borderBottomColor: colorHex[color],
          borderLeftColor: colorHex[color],
        }}
      />
      {text && (
        <p className={`text-navy-300 font-black tracking-[0.3em] uppercase ${textSizeClasses[size]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  )
}

export default LoadingSpinner