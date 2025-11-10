'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Simplified navigation component with horizontal scrollable design
 * Features: Scrollable navigation, active link highlighting, responsive design
 */
export default function Navigation() {
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Members', href: '/members' },
    { name: 'Publications', href: '/publications' },
    { name: 'Projects', href: '/projects' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Updates', href: '/updates' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActiveLink = (href: string) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href))
  }

  return (
    <nav className="bg-wrh-nav border-b border-gray-200 sticky top-0 z-40">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Unified scrollable navigation for all screen sizes */}
          <div className="flex-1 relative overflow-x-scroll">
            <div className="flex items-center w-full space-x-2 lg:space-x-8 px-2 lg:px-0 scroll-smooth">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link px-3 lg:px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                    isActiveLink(item.href) ? 'nav-link-active' : ''
                  } ${index === 0 ? 'ml-0' : ''} ${index === navigation.length - 1 ? 'mr-4 lg:mr-0' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Gradient fade indicators for mobile */}
            {/* <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-wrh-nav to-transparent pointer-events-none lg:hidden"></div>
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-wrh-nav to-transparent pointer-events-none lg:hidden"></div> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
