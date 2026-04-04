import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-3 text-[10px] font-black tracking-[0.2em] text-zinc-400 mb-10 uppercase font-outfit" aria-label=" Breadcrumb">
      <Link 
        href="/" 
        className="hover:text-navy-500 transition-colors duration-300"
      >
        HOME
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <span className="text-zinc-200">/</span>
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-navy-500 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-navy-500">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb