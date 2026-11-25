import Link from 'next/link'
import type { Category } from '@/lib/sanity'

/* ブログ（Journal）共通の見た目。ホームと同じ白×空色のトーンで揃える。 */

export function SectionLabel({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 font-outfit text-[11px] font-semibold tracking-[0.3em] uppercase text-zinc-500">
      {index && <span className="tabular-nums">({index})</span>}
      <span className="h-px w-10 bg-zinc-300" />
      <span>{children}</span>
    </div>
  )
}

/** ブログ各ページの冒頭。淡い空色のグラデーションに大きな見出し。 */
export function JournalHero({
  label,
  title,
  titleEn,
  lead,
  children,
}: {
  label: string
  title: React.ReactNode
  titleEn?: string
  lead?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="relative bg-breeze-50 overflow-hidden px-5 md:px-10 pt-32 md:pt-44 pb-16 md:pb-24">
      <div className="hero-glow" aria-hidden />
      <div className="relative grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-8">
          <SectionLabel>{label}</SectionLabel>
          {titleEn && (
            <p aria-hidden className="mt-8 font-outfit font-bold uppercase tracking-[-0.045em] leading-[0.85] text-[clamp(3.5rem,11vw,9.5rem)] text-deep">
              {titleEn}
            </p>
          )}
          <h1
            data-split
            className={
              titleEn
                ? 'mt-5 font-bold tracking-[-0.02em] text-xl md:text-2xl text-breeze-600'
                : 'mt-8 font-bold tracking-[-0.03em] leading-[1.2] text-[clamp(2.25rem,5.5vw,4.5rem)] text-deep'
            }
          >
            {title}
          </h1>
        </div>
        {(lead || children) && (
          <div className="col-span-12 lg:col-span-4 lg:self-end space-y-8">
            {lead && <p data-reveal className="text-base md:text-lg leading-relaxed text-zinc-600">{lead}</p>}
            {children && <div data-reveal>{children}</div>}
          </div>
        )}
      </div>
    </section>
  )
}

/** カテゴリーの切り替え。現在地は空色で塗る。 */
export function CategoryPills({ categories, current }: { categories: Category[]; current?: string }) {
  const items = [{ title: 'All', href: '/blog', key: '' }, ...categories.map((c) => ({ title: c.title, href: `/blog/category/${c.slug.current}`, key: c.slug.current }))]
  return (
    <nav aria-label="カテゴリー" className="px-5 md:px-10 py-6 border-b border-deep/10 bg-white">
      <ul className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
        {items.map((c) => {
          const active = (current ?? '') === c.key
          return (
            <li key={c.href} className="shrink-0">
              <Link
                href={c.href}
                aria-current={active ? 'page' : undefined}
                className={`inline-flex items-center h-10 px-5 rounded-full font-outfit text-[12px] font-semibold tracking-[0.08em] transition-colors duration-500 ${
                  active ? 'bg-breeze-500 text-white' : 'bg-breeze-50 text-deep hover:bg-breeze-100'
                }`}
              >
                {c.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/** 記事がない・見つからないときの表示。絵文字は使わず、静かに。 */
export function EmptyState({ title, body, action }: { title: string; body?: React.ReactNode; action?: { href: string; label: string } }) {
  return (
    <div className="py-24 md:py-32 text-center">
      <p className="font-outfit font-bold uppercase tracking-[-0.04em] text-[clamp(3rem,8vw,6rem)] leading-none text-breeze-200" aria-hidden>
        Coming Soon
      </p>
      <h2 className="mt-8 text-xl md:text-2xl font-bold text-deep">{title}</h2>
      {body && <p className="mt-4 text-base text-zinc-500 leading-relaxed">{body}</p>}
      {action && (
        <Link href={action.href} className="mt-10 inline-flex items-center gap-3 font-outfit text-[12px] font-semibold tracking-[0.2em] uppercase text-breeze-600 link-underline">
          {action.label} <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  )
}

/** 記事を読み終えた人を体験予約へ。 */
export function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-breeze-200/60 px-5 md:px-10 py-24 md:py-36">
      <div className="contact-sky" aria-hidden />
      <div className="relative grid grid-cols-12 gap-x-6 gap-y-10 items-end">
        <div className="col-span-12 lg:col-span-8">
          <SectionLabel>Session</SectionLabel>
          <p data-split className="mt-8 font-bold tracking-[-0.035em] leading-[1.12] text-[clamp(2.25rem,6vw,5rem)] text-deep">
            読んだら、
            <br />
            「したい！」を体験へ。
          </p>
        </div>
        <div data-reveal className="col-span-12 lg:col-span-4 lg:justify-self-end">
          <Link href="/#contact" data-cursor="Book" className="btn-circle btn-circle--light">
            <span className="relative z-10 font-outfit text-[11px] font-semibold tracking-[0.25em] uppercase">Book a Session</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/** 本文の文字数から読了時間（分）を出す。日本語はおよそ1分500字。 */
export function readingMinutes(body: unknown): number {
  const texts = JSON.stringify(body ?? '').match(/"text":"((?:[^"\\]|\\.)*)"/g) || []
  const chars = texts.reduce((n, t) => n + t.length - 9, 0)
  return Math.max(1, Math.round(chars / 500))
}

export function formatDate(iso: string) {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}
