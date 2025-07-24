'use client'

import DumbbellIcon from './DumbbellIcon'

const BlogLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* 回転するダンベルアイコン */}
      <div className="relative w-10 h-10 bg-gradient-to-br from-junya-gold via-amber-500 to-junya-orange rounded-xl flex items-center justify-center shadow-lg">
        <DumbbellIcon size={20} animated={true} />
        
        {/* 輝きエフェクト */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-xl animate-pulse opacity-70" />
        
        {/* 外側のグロー */}
        <div className="absolute -inset-1 bg-gradient-to-br from-junya-gold/20 to-junya-orange/20 rounded-xl blur-sm animate-pulse" />
      </div>
      
      {/* ブランドテキスト */}
      <div className="flex flex-col">
        <span className="text-xl font-black text-junya-text tracking-wide leading-none">
          JUNYA ISHIHARA
        </span>
        <span className="text-xs text-junya-gray uppercase tracking-wider leading-none mt-0.5">
          PERSONAL TRAINING
        </span>
      </div>
    </div>
  )
}

export default BlogLogo