import Link from 'next/link'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

/**
 * Footer component with contact information, quick links, and IISER Bhopal branding
 * Features: Responsive layout, accessibility, social links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '/' },
    { name: 'Research', href: '/projects' },
    { name: 'Publications', href: '/journals' },
    { name: 'Opportunities', href: '/opportunities' },
  ]

  const resources = [
    { name: 'IISER Bhopal', href: 'https://www.iiserb.ac.in/', external: true },
    {
      name: 'Department of Earth and Environmental Sciences',
      href: 'https://www.iiserb.ac.in/department/decs',
      external: true,
    },
    { name: 'Research Portal', href: '/projects', external: false },
    { name: 'Contact', href: '/contact', external: false },
  ]

  return (
    <footer className="bg-wrh-dark text-white">
      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Lab Information */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Water Resources & Hydrology Lab
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Advancing research in hydrology, water resources management, and sustainable water
              solutions at IISER Bhopal. Our interdisciplinary approach addresses critical water
              challenges through innovative research and education.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-wrh-green flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  IISER Bhopal, Bhauri, Bhopal - 462066, Madhya Pradesh, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-wrh-green flex-shrink-0" />
                <a
                  href="tel:+91-755-6691-306"
                  className="text-sm text-gray-300 hover:text-wrh-green transition-colors"
                >
                  +91-755-6691-306
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-wrh-green flex-shrink-0" />
                <a
                  href="mailto:sanjeevj@iiserb.ac.in"
                  className="text-sm text-gray-300 hover:text-wrh-green transition-colors"
                >
                  sanjeevj@iiserb.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-wrh-green transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-wrh-green transition-colors duration-200 text-sm flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-wrh-green transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 sm:mb-0">
            © {currentYear} Water Resources & Hydrology Lab, IISER Bhopal. All rights reserved.
          </div>

          <div className="text-sm text-gray-400">Built with ♡ for advancing water science</div>
        </div>
      </div>
    </footer>
  )
}
