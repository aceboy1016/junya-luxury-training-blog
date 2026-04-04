'use client'

interface AnimatedLogoProps {
  className?: string
}

const AnimatedLogo = ({ className = '' }: AnimatedLogoProps) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* 回転するダンベルアイコン - Navy Style */}
      <div className="relative w-8 h-8 bg-navy-500 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-500 hover:rotate-12">
        <div className="animate-spin-slow">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white"
          >
            <path
              d="M6 12h2m8 0h2M9 7v10m6-10v10M7 9h2v6H7V9zm8 0h2v6h-2V9z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
      {/* ブランドテキスト */}
      <span className="text-xl font-black text-navy-500 tracking-tighter font-outfit uppercase">
        J. ISHIHARA
      </span>
    </div>
  )
}

export default AnimatedLogo