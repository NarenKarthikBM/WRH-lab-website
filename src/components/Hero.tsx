import { ArrowRight, Droplets, Target, Users } from 'lucide-react'
import Link from 'next/link'

/**
 * Hero section component for the homepage
 * Features: Mission statement, call-to-action, responsive design with visual elements
 */
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-wrh-bg via-blue-50 to-green-50 py-16 lg:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b7bfa' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-wrh-dark mb-6">
            Water Resources & <span className="text-gradient">Hydrology Lab</span>
          </h1>

          {/* Institution */}
          <p className="text-xl md:text-2xl text-wrh-gray mb-8">
            Indian Institute of Science Education and Research, Bhopal
          </p>

          {/* Mission statement */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-wrh-gray leading-relaxed mb-6">
              Pioneering interdisciplinary research in hydrology and water resources management to
              address critical water challenges through innovative science, sustainable solutions,
              and educational excellence.
            </p>
          </div>

          {/* Key focus areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-wrh-green bg-opacity-10 p-4 rounded-full mb-4">
                <Droplets className="w-8 h-8 text-wrh-green" />
              </div>
              <h3 className="text-lg font-semibold text-wrh-dark mb-2">Hydrological Forecasting</h3>
              <p className="text-sm text-wrh-gray">
                Advanced methods for predicting water resources and extreme weather events
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-wrh-blue bg-opacity-10 p-4 rounded-full mb-4">
                <Target className="w-8 h-8 text-wrh-blue" />
              </div>
              <h3 className="text-lg font-semibold text-wrh-dark mb-2">Post-processing Data</h3>
              <p className="text-sm text-wrh-gray">
                Statistical methods for improving hydro-meteorological data accuracy
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-purple-500 bg-opacity-10 p-4 rounded-full mb-4">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-wrh-dark mb-2">
                Multiple-point Geostatistics
              </h3>
              <p className="text-sm text-wrh-gray">
                Geostatistical modeling for spatial data analysis and climate downscaling
              </p>
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/projects"
              className="bg-wrh-green hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 no-underline"
            >
              <span>Explore Our Research</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/members"
              className="bg-transparent hover:bg-wrh-green text-wrh-green hover:text-white font-semibold py-3 px-6 rounded-lg border-2 border-wrh-green transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap no-underline"
            >
              <span>Meet Our Team</span>
              <Users size={18} className="flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
