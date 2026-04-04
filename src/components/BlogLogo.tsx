'use client'

import DumbbellIcon from './DumbbellIcon'

const BlogLogo = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* 回転するダンベルアイコン - Navy Style */}
      <div className="relative w-10 h-10 bg-navy-500 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-500 hover:rotate-12">
        <DumbbellIcon size={20} animated={true} />
        <div className="absolute inset-0 bg-white/5 rounded-lg" />
      </div>
      
      {/* ブランドテキスト */}
      <div className="flex flex-col">
        <span className="text-xl font-black text-navy-500 tracking-tighter leading-none font-outfit uppercase">
          J. ISHIHARA
        </span>
        <span className="text-[8px] text-zinc-400 font-black tracking-[0.4em] uppercase leading-none mt-1">
          PERSONAL TRAINING
        </span>
      </div>
    </div>
  )
}

export default BlogLogo