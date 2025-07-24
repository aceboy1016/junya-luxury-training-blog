interface AnimatedLogoProps {
  className?: string
}

const AnimatedLogo = ({ className = '' }: AnimatedLogoProps) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* 回転するダンベルアイコン */}
      <div className="relative w-8 h-8 bg-gradient-to-br from-junya-gold to-junya-orange rounded-lg flex items-center justify-center shadow-lg">
        <div className="animate-spin-slow">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white"
          >
            <path
              d="M6 12h2m8 0h2M9 7v10m6-10v10M7 9h2v6H7V9zm8 0h2v6h-2V9z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        {/* 輝きエフェクト */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-lg animate-pulse" />
      </div>
      
      {/* ブランドテキスト */}
      <span className="text-xl font-black text-junya-text tracking-wide relative">
        JUNYA ISHIHARA
        
        {/* テキストグロー効果 */}
        <span className="absolute inset-0 text-xl font-black text-junya-orange/20 tracking-wide animate-pulse blur-sm">
          JUNYA ISHIHARA
        </span>
      </span>
    </div>
  )
}

export default AnimatedLogo