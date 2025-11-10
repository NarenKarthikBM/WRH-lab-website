import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'WRH Lab | Water Resources & Hydrology Research - IISER Bhopal',
    template: '%s | WRH Lab - IISER Bhopal',
  },
  description:
    'Water Resources and Hydrology Lab at IISER Bhopal led by Dr. Sanjeev K. Jha. Leading research in hydrological forecasting, climate data analysis, geostatistics, and sustainable water management.',
  keywords: [
    'Water Resources',
    'Hydrology',
    'IISER Bhopal',
    'Dr. Sanjeev K. Jha',
    'Hydrological Forecasting',
    'Climate Change',
    'Geostatistics',
    'Post-processing hydro-meteorological data',
    'PhD Hydrology',
    'Water Research India',
    'Environmental Sciences',
    'Monsoon Research',
    'Water Security',
  ],
  authors: [{ name: 'Dr. Sanjeev K. Jha', url: 'https://home.iiserb.ac.in/~sanjeevj/' }],
  creator: 'Water Resources and Hydrology Lab, IISER Bhopal',
  publisher: 'IISER Bhopal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'WRH Lab - Water Resources & Hydrology Research',
    description:
      'Leading research in hydrology, climate science, and water resources management at IISER Bhopal under Dr. Sanjeev K. Jha.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://wrh-lab.iiserb.ac.in',
    siteName: 'WRH Lab - IISER Bhopal',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WRH Lab - Water Resources and Hydrology Research at IISER Bhopal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WRH Lab - Water Resources & Hydrology Research',
    description: 'Leading hydrology and water resources research at IISER Bhopal',
    images: ['/twitter-image.png'],
  },
  verification: {
    google: 'google-site-verification-token',
  },
  category: 'Research & Education',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ResearchOrganization',
    name: 'Water Resources and Hydrology Lab',
    alternateName: 'WRH Lab',
    url: 'https://wrh-lab.iiserb.ac.in',
    logo: 'https://wrh-lab.iiserb.ac.in/logo.png',
    description:
      'Leading research laboratory in hydrology, water resources, and climate science at IISER Bhopal',
    foundingDate: '2017',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Academic Building 1, IISER Bhopal',
      addressLocality: 'Bhauri',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462066',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-755-6691-306',
      email: 'sanjeevj@iiserb.ac.in',
      contactType: 'Research Inquiry',
    },
    founder: {
      '@type': 'Person',
      '@id': '#sanjeev-jha',
      name: 'Dr. Sanjeev K. Jha',
      jobTitle: 'Associate Professor',
      affiliation: {
        '@type': 'Organization',
        name: 'IISER Bhopal',
      },
      expertise: [
        'Hydrological Forecasting',
        'Post-processing hydro-meteorological data',
        'Multiple point Geostatistics',
      ],
    },
    department: {
      '@type': 'Organization',
      name: 'Department of Earth and Environmental Sciences',
      parentOrganization: {
        '@type': 'EducationalOrganization',
        name: 'Indian Institute of Science Education and Research Bhopal',
        alternateName: 'IISER Bhopal',
      },
    },
    researchFocus: [
      'Hydrology',
      'Water Resources Management',
      'Climate Change',
      'Geostatistics',
      'Environmental Science',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-wrh-green text-white px-4 py-2 rounded-lg z-50"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>

        {/* Header with contact info */}
        <Header />

        {/* Main navigation */}
        <Navigation />

        {/* Main content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
