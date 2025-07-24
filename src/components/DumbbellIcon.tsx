interface DumbbellIconProps {
  className?: string
  size?: number
  animated?: boolean
}

const DumbbellIcon = ({ className = '', size = 24, animated = false }: DumbbellIconProps) => {
  return (
    <div className={`${animated ? 'animate-spin-slow' : ''} ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-white drop-shadow-sm"
      >
        {/* 左のウェイトプレート（外側） */}
        <circle cx="4" cy="12" r="3" fill="currentColor" />
        <circle cx="4" cy="12" r="2.2" fill="currentColor" opacity="0.8" />
        <circle cx="4" cy="12" r="1.5" fill="white" opacity="0.3" />
        
        {/* 左の内側プレート */}
        <circle cx="6.5" cy="12" r="2" fill="currentColor" />
        <circle cx="6.5" cy="12" r="1.4" fill="currentColor" opacity="0.8" />
        
        {/* バー（グリップ） */}
        <rect x="8.5" y="11" width="7" height="2" rx="1" fill="currentColor" />
        <rect x="9" y="11.2" width="6" height="0.6" rx="0.3" fill="white" opacity="0.4" />
        
        {/* 右の内側プレート */}
        <circle cx="17.5" cy="12" r="2" fill="currentColor" />
        <circle cx="17.5" cy="12" r="1.4" fill="currentColor" opacity="0.8" />
        
        {/* 右のウェイトプレート（外側） */}
        <circle cx="20" cy="12" r="3" fill="currentColor" />
        <circle cx="20" cy="12" r="2.2" fill="currentColor" opacity="0.8" />
        <circle cx="20" cy="12" r="1.5" fill="white" opacity="0.3" />
      </svg>
    </div>
  )
}

export default DumbbellIcon