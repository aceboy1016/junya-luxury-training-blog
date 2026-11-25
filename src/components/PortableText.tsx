import { PortableText as SanityPortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

/* 記事本文の組版。読みやすさ最優先で、行間と余白を広めに取り、装飾は空色の線と点だけ。 */

const YouTubeEmbed = ({ url, title }: { url: string; title: string }) => {
  const id = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1]
  if (!id) return null
  return (
    <figure className="my-14">
      <div className="aspect-video relative overflow-hidden rounded-md bg-breeze-50">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title || 'YouTube'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {title && <figcaption className="mt-4 text-center text-xs text-zinc-500">{title}</figcaption>}
    </figure>
  )
}

const calloutTone: Record<string, { label: string; box: string; dot: string }> = {
  tip: { label: 'Point', box: 'bg-breeze-50', dot: 'bg-breeze-500' },
  info: { label: 'Info', box: 'bg-breeze-50', dot: 'bg-breeze-400' },
  success: { label: 'Good', box: 'bg-breeze-50', dot: 'bg-emerald-500' },
  warning: { label: 'Caution', box: 'bg-amber-50/70', dot: 'bg-amber-500' },
  danger: { label: 'Warning', box: 'bg-rose-50/70', dot: 'bg-rose-500' },
}

const Callout = ({ type, title, content }: { type: string; title?: string; content: string }) => {
  const tone = calloutTone[type] || calloutTone.info
  return (
    <aside className={`my-12 rounded-md p-7 md:p-9 ${tone.box}`}>
      <p className="flex items-center gap-2 font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-deep/70">
        <span className={`w-1.5 h-1.5 rounded-full ${tone.dot}`} aria-hidden />
        {title || tone.label}
      </p>
      <p className="mt-4 text-[16px] leading-[1.95] text-deep">{content}</p>
    </aside>
  )
}

const linkClass = 'text-breeze-600 underline decoration-breeze-300 underline-offset-[6px] decoration-1 hover:decoration-breeze-600 transition-colors duration-300'

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null
      return (
        <figure className="my-14">
          <div className="overflow-hidden rounded-md bg-breeze-50">
            <Image
              src={urlFor(value).width(1600).quality(85).url()}
              alt={value.alt || ''}
              width={1600}
              height={1000}
              className="w-full h-auto"
              sizes="(min-width: 1024px) 760px, 100vw"
            />
          </div>
          {value.caption && <figcaption className="mt-4 text-center text-xs text-zinc-500 leading-relaxed">{value.caption}</figcaption>}
        </figure>
      )
    },
    youtube: ({ value }: any) => <YouTubeEmbed url={value.url} title={value.title} />,
    callout: ({ value }: any) => <Callout type={value.type} title={value.title} content={value.content} />,
  },
  marks: {
    link: ({ children, value }: any) => {
      const external = value?.blank
      return (
        <a href={value?.href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={linkClass}>
          {children}
        </a>
      )
    },
    internalLink: ({ children, value }: any) => {
      const slug = value?.reference?.slug?.current
      if (!slug) return <span>{children}</span>
      return (
        <Link href={`/blog/${slug}`} className={linkClass}>
          {children}
        </Link>
      )
    },
    highlight: ({ children }: any) => <mark className="bg-[linear-gradient(transparent_60%,#D2E6F4_60%)] text-inherit px-0.5">{children}</mark>,
    strong: ({ children }: any) => <strong className="font-bold text-deep">{children}</strong>,
  },
  block: {
    // 記事タイトルがH1なので、本文中のH1はH2として扱う
    h1: ({ children }: any) => <h2 className="article-h2">{children}</h2>,
    h2: ({ children }: any) => <h2 className="article-h2">{children}</h2>,
    h3: ({ children }: any) => <h3 className="article-h3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="mt-10 mb-4 text-lg font-bold text-deep">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="my-12 border-l-2 border-breeze-500 pl-6 md:pl-8 text-lg md:text-xl font-bold leading-[1.8] text-deep palt">{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className="mb-8 text-[16px] md:text-[17px] leading-[2.05] text-deep/85">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="mb-10 space-y-3">{children}</ul>,
    number: ({ children }: any) => <ol className="article-ol mb-10 space-y-3">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="relative pl-6 text-[16px] md:text-[17px] leading-[1.9] text-deep/85">
        <span className="absolute left-0 top-[0.8em] w-1.5 h-1.5 rounded-full bg-breeze-500" aria-hidden />
        {children}
      </li>
    ),
    number: ({ children }: any) => <li className="relative pl-10 text-[16px] md:text-[17px] leading-[1.9] text-deep/85">{children}</li>,
  },
}

const PortableText = ({ value, className = '' }: { value: any; className?: string }) => (
  <div className={className}>
    <SanityPortableText value={value} components={components} />
  </div>
)

export default PortableText
