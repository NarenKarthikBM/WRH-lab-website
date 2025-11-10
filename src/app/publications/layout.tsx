import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Publications - WRH Lab Research Output',
  description:
    'Peer-reviewed publications from Water Resources & Hydrology Research Lab, IISER Bhopal. Scientific papers on hydrological forecasting, climate analysis, water management, and environmental sustainability.',
  keywords: [
    'water resources publications',
    'hydrology research papers',
    'climate hydrology',
    'peer-reviewed articles',
    'water management research',
    'environmental publications',
    'Dr. Sanjeev K. Jha publications',
    'IISER Bhopal research',
    'geostatistics papers',
    'flood modeling publications',
  ],
  openGraph: {
    title: 'WRH Lab Publications - Research Papers & Scientific Output',
    description:
      'Explore our peer-reviewed research publications in water resources, hydrology, and climate science.',
  },
}

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
