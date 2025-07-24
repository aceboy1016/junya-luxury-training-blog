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
    <nav className="flex items-center space-x-2 text-sm text-junya-gray mb-6" aria-label="パンくず">
      <Link 
        href="/" 
        className="hover:text-junya-orange transition-colors duration-300"
      >
        ホーム
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <svg 
            className="w-4 h-4 text-junya-border" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
          
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-junya-orange transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-junya-text font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb