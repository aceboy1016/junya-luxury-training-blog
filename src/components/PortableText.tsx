import { PortableText as SanityPortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

// YouTube埋め込みコンポーネント
const YouTubeEmbed = ({ url, title }: { url: string; title: string }) => {
  const getYouTubeId = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const videoId = getYouTubeId(url)
  if (!videoId) return null

  return (
    <div className="my-16">
      <div className="aspect-video relative overflow-hidden shadow-2xl border border-zinc-100">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {title && (
        <p className="text-[10px] font-black text-zinc-400 text-center mt-4 uppercase tracking-[0.3em]">
          {title}
        </p>
      )}
    </div>
  )
}

// コールアウトコンポーネント - Professional Navy Style
const Callout = ({ type, title, content }: { type: string; title?: string; content: string }) => {
  const typeStyles = {
    tip: {
      icon: 'ri-lightbulb-line',
      bgColor: 'bg-zinc-50',
      borderColor: 'border-navy-500',
      textColor: 'text-navy-500',
      iconColor: 'text-navy-500'
    },
    warning: {
      icon: 'ri-error-warning-line',
      bgColor: 'bg-zinc-50',
      borderColor: 'border-zinc-300', 
      textColor: 'text-zinc-600',
      iconColor: 'text-zinc-400'
    },
    danger: {
      icon: 'ri-close-circle-line',
      bgColor: 'bg-zinc-900',
      borderColor: 'border-white/10',
      textColor: 'text-white/80',
      iconColor: 'text-white'
    },
    info: {
      icon: 'ri-information-line',
      bgColor: 'bg-zinc-100',
      borderColor: 'border-zinc-200',
      textColor: 'text-navy-400',
      iconColor: 'text-navy-300'
    },
    success: {
      icon: 'ri-checkbox-circle-line',
      bgColor: 'bg-zinc-50',
      borderColor: 'border-green-500',
      textColor: 'text-green-800',
      iconColor: 'text-green-500'
    }
  }

  const style = typeStyles[type as keyof typeof typeStyles] || typeStyles.info

  return (
    <div className={`my-12 p-10 border-l-4 ${style.bgColor} ${style.borderColor}`}>
      <div className="flex items-start space-x-6">
        <div className={`flex-shrink-0 text-2xl ${style.iconColor}`}>
          <i className={style.icon} />
        </div>
        <div className="flex-1">
          {title && (
            <h4 className={`text-sm font-black uppercase tracking-widest ${style.textColor} mb-4 font-outfit`}>
              {title}
            </h4>
          )}
          <p className={`text-sm leading-loose ${style.textColor} font-medium`}>
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

// Portable Text コンポーネント定義
const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null

      return (
        <div className="my-16">
          <div className="relative overflow-hidden shadow-2xl grayscale group hover:grayscale-0 transition-all duration-1000 border border-zinc-100">
            <Image
              src={urlFor(value).width(1200).quality(100).url()}
              alt={value.alt || ''}
              width={1200}
              height={675}
              className="w-full h-auto transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
          {value.caption && (
            <p className="text-[10px] font-black text-zinc-400 text-center mt-6 uppercase tracking-[0.4em] italic prose-none">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
    youtube: ({ value }: any) => (
      <YouTubeEmbed url={value.url} title={value.title} />
    ),
    callout: ({ value }: any) => (
      <Callout 
        type={value.type} 
        title={value.title} 
        content={value.content} 
      />
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const target = value?.blank ? '_blank' : '_self'
      const rel = value?.blank ? 'noopener noreferrer' : undefined

      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-navy-500 hover:text-navy-300 underline underline-offset-8 decoration-1 transition-all duration-500 font-bold"
        >
          {children}
        </a>
      )
    },
    internalLink: ({ children, value }: any) => {
      const slug = value?.reference?.slug?.current
      if (!slug) return <span>{children}</span>

      return (
        <Link 
          href={`/blog/${slug}`}
          className="text-navy-500 hover:text-navy-300 underline underline-offset-8 decoration-1 transition-all duration-500 font-bold"
        >
          {children}
        </Link>
      )
    },
    highlight: ({ children }: any) => (
      <mark className="bg-navy-500 text-white px-2 py-0.5 uppercase font-black tracking-widest text-[0.8em]">
        {children}
      </mark>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-black text-navy-500 mt-24 mb-10 leading-none tracking-tighter uppercase font-outfit">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-black text-navy-500 mt-24 mb-8 pb-6 border-b border-zinc-100 leading-none tracking-tighter uppercase font-outfit">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-black text-navy-500 mt-16 mb-6 leading-none tracking-tighter uppercase font-outfit">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-black text-navy-500 mt-12 mb-4 leading-none tracking-tighter uppercase font-outfit">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-navy-500 bg-zinc-50 p-10 my-16 italic text-navy-500 text-xl font-medium leading-relaxed font-outfit">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-zinc-600 leading-loose mb-10 text-lg font-medium">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-none space-y-6 mb-12 text-zinc-600">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-6 mb-12 text-zinc-600 font-outfit">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start space-x-4">
        <span className="w-1.5 h-1.5 bg-navy-500 mt-3 flex-shrink-0" />
        <span className="flex-1 text-lg leading-relaxed">{children}</span>
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
  },
}

interface PortableTextProps {
  value: any
  className?: string
}

const PortableText = ({ value, className = '' }: PortableTextProps) => {
  return (
    <div className={`prose prose-zinc prose-lg max-w-none ${className}`}>
      <SanityPortableText value={value} components={components} />
    </div>
  )
}

export default PortableText