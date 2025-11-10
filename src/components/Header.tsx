'use client'

import { Phone, Mail } from 'lucide-react'

/**
 * Header component containing the WRH lab name and contact information
 * Features: Responsive design, accessible contact links, custom color scheme
 */
export default function Header() {
  return (
    <header className="bg-wrh-blue text-white py-3 px-4">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Lab name/logo - Always on the left */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            WRH
          </h1>
          <p className="text-sm text-blue-100 hidden sm:block">Water Resources & Hydrology Lab</p>
        </div>

        {/* Contact information - Hidden on mobile and small tablets */}
        <div className="hidden lg:flex gap-6 text-sm">
          <a
            href="tel:+91-755-6691-306"
            className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-200"
            aria-label="Call WRH Lab"
          >
            <Phone size={16} />
            <span>+91-755-6691-306</span>
          </a>

          <a
            href="mailto:sanjeevj@iiserb.ac.in"
            className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-200"
            aria-label="Email WRH Lab"
          >
            <Mail size={16} />
            <span>sanjeevj@iiserb.ac.in</span>
          </a>
        </div>
      </div>
    </header>
  )
}
