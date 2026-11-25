import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav aria-label="パンくずリスト" className="font-outfit text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-400">
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <li>
        <Link href="/" className="hover:text-breeze-600 transition-colors duration-300">Home</Link>
      </li>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 min-w-0">
          <span aria-hidden className="text-zinc-300">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-breeze-600 transition-colors duration-300">{item.label}</Link>
          ) : (
            <span aria-current="page" className="text-deep/70 normal-case tracking-normal truncate max-w-[16rem] md:max-w-md">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
)

export default Breadcrumb
