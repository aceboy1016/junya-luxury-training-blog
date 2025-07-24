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
    <div className="my-8">
      <div className="aspect-video relative rounded-junya overflow-hidden shadow-junya-card">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {title && (
        <p className="text-sm text-junya-gray text-center mt-2 italic">
          {title}
        </p>
      )}
    </div>
  )
}

// コールアウトコンポーネント
const Callout = ({ type, title, content }: { type: string; title?: string; content: string }) => {
  const typeStyles = {
    tip: {
      icon: '💡',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      iconBg: 'bg-blue-100'
    },
    warning: {
      icon: '⚠️',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200', 
      textColor: 'text-yellow-800',
      iconBg: 'bg-yellow-100'
    },
    danger: {
      icon: '❌',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      iconBg: 'bg-red-100'
    },
    info: {
      icon: 'ℹ️',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      textColor: 'text-gray-800',
      iconBg: 'bg-gray-100'
    },
    success: {
      icon: '✅',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      iconBg: 'bg-green-100'
    }
  }

  const style = typeStyles[type as keyof typeof typeStyles] || typeStyles.info

  return (
    <div className={`my-6 p-4 rounded-junya border-l-4 ${style.bgColor} ${style.borderColor}`}>
      <div className="flex items-start space-x-3">
        <div className={`flex-shrink-0 w-8 h-8 rounded-full ${style.iconBg} flex items-center justify-center text-sm`}>
          {style.icon}
        </div>
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold ${style.textColor} mb-2`}>
              {title}
            </h4>
          )}
          <p className={`${style.textColor} leading-relaxed`}>
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
        <div className="my-8">
          <div className="relative rounded-junya overflow-hidden shadow-junya-card">
            <Image
              src={urlFor(value).width(800).quality(90).url()}
              alt={value.alt || ''}
              width={800}
              height={450}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <p className="text-sm text-junya-gray text-center mt-2 italic">
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
          className="text-junya-orange hover:text-junya-text underline transition-colors duration-300"
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
          className="text-junya-orange hover:text-junya-text underline transition-colors duration-300"
        >
          {children}
        </Link>
      )
    },
    highlight: ({ children }: any) => (
      <mark className="bg-junya-orange text-white px-1 py-0.5 rounded">
        {children}
      </mark>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold text-junya-text mt-8 mb-4 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-semibold text-junya-text mt-8 mb-4 pb-2 border-b-2 border-junya-orange">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-semibold text-junya-text mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl font-semibold text-junya-text mt-6 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-junya-orange bg-junya-light p-4 my-6 italic text-junya-text rounded-r-junya">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-junya-text leading-relaxed mb-4">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-junya-text">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-junya-text">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="ml-4">
        <span className="text-junya-orange font-bold mr-2">•</span>
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="ml-4">{children}</li>
    ),
  },
}

interface PortableTextProps {
  value: any
  className?: string
}

const PortableText = ({ value, className = '' }: PortableTextProps) => {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <SanityPortableText value={value} components={components} />
    </div>
  )
}

export default PortableText