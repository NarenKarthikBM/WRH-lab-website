import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ResearchHighlights from '@/components/ResearchHighlights'
// import RecentAwards from '@/components/RecentAwards'
import NewsTicker from '@/components/NewsTicker'

export const metadata: Metadata = {
  title: 'Water Resources & Hydrology Research Lab - IISER Bhopal',
  description:
    'Leading water resources and hydrology research at IISER Bhopal under Dr. Sanjeev K. Jha. Expertise in hydrological forecasting, climate data analysis, geostatistics, and sustainable water management solutions.',
  keywords: [
    'water resources research',
    'hydrology lab',
    'IISER Bhopal',
    'Dr. Sanjeev K. Jha',
    'hydrological forecasting',
    'climate change water',
    'geostatistics',
    'environmental science research',
    'PhD water resources',
    'monsoon research India',
    'sustainable water management',
    'water security',
  ],
  openGraph: {
    title: 'WRH Lab - Leading Water Resources Research at IISER Bhopal',
    description:
      'Advancing water science through innovative research in hydrology, climate analysis, and sustainable water management.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wrh-lab.iiserb.ac.in',
  },
}

export default function Home() {
  return (
    <>
      {/* News ticker/banner */}
      <NewsTicker />

      {/* Hero section with intro/mission */}
      <Hero />

      {/* Research highlights section */}
      <ResearchHighlights />

      {/* Recent awards section */}
      {/* <RecentAwards /> */}
    </>
  )
}
