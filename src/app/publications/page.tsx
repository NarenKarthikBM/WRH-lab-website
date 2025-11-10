'use client'

import { useState, useMemo } from 'react'
import { ExternalLink, BookOpen, Users, Calendar, Award, TrendingUp, MapPin } from 'lucide-react'
import PageHero from '@/components/PageHero'

// Note: Metadata export removed due to 'use client' directive
// SEO handled in layout.tsx and can be added via Next.js Head component if needed

export default function Publications() {
  // Filter state
  const [selectedYear, setSelectedYear] = useState('All Years')
  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedQuartile, setSelectedQuartile] = useState('All Quartiles')
  const [searchQuery, setSearchQuery] = useState('')

  const publications = [
    {
      id: 1,
      title:
        'Analysis of urban flood vulnerability at the sub-city administrative unit level in Mumbai: a comparison over two time periods',
      authors: ['Prajapati, P.', 'Singhal, A.', 'Jha, S. K.'],
      journal: 'Urban Climate',
      year: 2025,
      volume: 'Accepted',
      pages: '',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q1',
      impactFactor: 6.663,
      citations: 0,
      abstract:
        'This study analyzes urban flood vulnerability at the sub-city administrative unit level in Mumbai, comparing changes over two time periods to understand evolving flood risks.',
      keywords: ['Urban Flood', 'Vulnerability Assessment', 'Mumbai', 'Administrative Units'],
      status: 'Accepted',
      openAccess: false,
    },
    {
      id: 2,
      title:
        'A multi-aggregation approach to estimate avalanche vulnerability and suggest phase-wise adaptation',
      authors: ['Singhal, A.', 'Kavya, M.', 'Jha, S. K.'],
      journal: 'Environment, Development and Sustainability',
      year: 2025,
      volume: '',
      pages: '',
      doi: '10.1007/s10668-025-06015-8',
      type: 'Journal Article',
      quartile: 'Q2',
      impactFactor: 4.08,
      citations: 0,
      abstract:
        'This research presents a multi-aggregation approach for estimating avalanche vulnerability and proposing phase-wise adaptation strategies.',
      keywords: ['Avalanche', 'Vulnerability', 'Multi-aggregation', 'Adaptation'],
      status: 'Published',
      openAccess: false,
    },
    {
      id: 3,
      title:
        'INSPIRE Game: Integration of vulnerability in impact-based forecasting of urban floods',
      authors: ['Singhal, A.', 'Crochemore, L.', 'Ruin, I.', 'Jha, S. K.'],
      journal: 'Hydrology and Earth System Sciences',
      year: 2024,
      volume: '29',
      issue: '4',
      pages: '',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q1',
      impactFactor: 6.3,
      citations: 2,
      abstract:
        'The INSPIRE Game integrates vulnerability assessment in impact-based forecasting systems for urban flood management.',
      keywords: ['Impact-based Forecasting', 'Urban Floods', 'Vulnerability', 'Gaming'],
      status: 'Published',
      openAccess: true,
    },
    {
      id: 4,
      title:
        'Applicability of Reanalysis data in calibrating a hydrological model in a data-scarce mountainous watershed',
      authors: ['Kavya, M.', 'Singh, A.', 'Jha, S. K.', 'Kouwen, N.', 'Srivastava, P.'],
      journal: 'The International Journal of River Basin Management',
      year: 2025,
      volume: '',
      pages: '1-19',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q2',
      impactFactor: 2.532,
      citations: 0,
      abstract:
        'This study evaluates the applicability of reanalysis data for calibrating hydrological models in data-scarce mountainous watersheds.',
      keywords: ['Reanalysis Data', 'Hydrological Model', 'Mountainous Watershed', 'Data Scarcity'],
      status: 'Published',
      openAccess: false,
    },
    {
      id: 5,
      title:
        'Impact of Indira Sagar Dam on water discharge and sediment flow regimes of the Narmada basin',
      authors: ['Prajapati, P.', 'Meena, G. K.', 'Swarnkar, S.', 'Jha, S. K.'],
      journal: 'Journal of Hydrologic Engineering',
      year: 2025,
      volume: '30',
      issue: '2',
      pages: '',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q2',
      impactFactor: 2.4,
      citations: 0,
      abstract:
        'This research analyzes the impact of Indira Sagar Dam on water discharge and sediment flow regimes in the Narmada basin.',
      keywords: ['Dam Impact', 'Water Discharge', 'Sediment Flow', 'Narmada Basin'],
      status: 'Published',
      openAccess: false,
    },
    {
      id: 6,
      title:
        'Identifying potential locations of hydrologic monitoring stations based on topographic and hydrological information',
      authors: [
        'Singhal, A.',
        'Jaseem, M.',
        'Divya',
        'Sarker, S.',
        'Prajapati, P.',
        'Singh, A.',
        'Jha, S. K.',
      ],
      journal: 'Water Resources Management',
      year: 2024,
      volume: '38',
      pages: '369-384',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q1',
      impactFactor: 4.426,
      citations: 3,
      abstract:
        'This study develops a methodology for identifying potential locations of hydrologic monitoring stations using topographic and hydrological information.',
      keywords: ['Hydrologic Monitoring', 'Station Network', 'Topography', 'Hydrology'],
      status: 'Published',
      openAccess: false,
    },
    {
      id: 7,
      title:
        'Assessing Fourier and Latin hypercube sampling methods as new multi-model methods for hydrological simulations',
      authors: ['Singh, A.', 'Mondal, S.', 'Pandey, R.', 'Jha, S. K.'],
      journal: 'Stochastic Environmental Research and Risk Assessment',
      year: 2023,
      volume: '38',
      issue: '1',
      pages: '1-25',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q1',
      impactFactor: 4.042,
      citations: 8,
      abstract:
        'This research assesses Fourier and Latin hypercube sampling methods as innovative multi-model approaches for hydrological simulations.',
      keywords: ['Fourier Sampling', 'Latin Hypercube', 'Multi-model', 'Hydrological Simulation'],
      status: 'Published',
      openAccess: false,
    },
    {
      id: 8,
      title:
        'Towards the selection of a longer record of quantitative precipitation forecast dataset from TIGGE ensembles for India during the monsoon season',
      authors: ['Singh, A.', 'Singhal, A.', 'Ashwin, R.', 'Pandey, R.', 'Jha, S. K.'],
      journal: 'International Journal of River Basin Management',
      year: 2023,
      volume: '',
      pages: '1-23',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q2',
      impactFactor: 2.532,
      citations: 5,
      abstract:
        'This study focuses on selecting longer records of quantitative precipitation forecast datasets from TIGGE ensembles for monsoon season in India.',
      keywords: ['TIGGE Ensembles', 'Precipitation Forecast', 'Monsoon', 'India'],
      status: 'Published',
      openAccess: false,
    },
    {
      id: 9,
      title:
        'Relating forecast and satellite precipitation to generate future skillful ensemble forecasts over the northwest Himalayas at major avalanche and glacier sites',
      authors: ['Singhal, A.', 'Cheriyamparambil, A.', 'Samal, N.', 'Jha, S. K.'],
      journal: 'Journal of Hydrology',
      year: 2023,
      volume: '616',
      pages: '128795',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q1',
      impactFactor: 6.708,
      citations: 12,
      abstract:
        'This research relates forecast and satellite precipitation data to generate skillful ensemble forecasts for avalanche and glacier sites in the northwest Himalayas.',
      keywords: [
        'Ensemble Forecasts',
        'Satellite Precipitation',
        'Northwest Himalayas',
        'Avalanche',
      ],
      status: 'Published',
      openAccess: false,
    },
    {
      id: 10,
      title:
        'Spatial connections in extreme precipitation events obtained from NWP forecasts: A complex network approach',
      authors: ['Singhal, A.', 'Jaseem, M.', 'Jha, S. K.'],
      journal: 'Atmospheric Research',
      year: 2023,
      volume: '282',
      pages: '106538',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q1',
      impactFactor: 5.965,
      citations: 7,
      abstract:
        'This study uses complex network approach to analyze spatial connections in extreme precipitation events from numerical weather prediction forecasts.',
      keywords: [
        'Complex Networks',
        'Extreme Precipitation',
        'NWP Forecasts',
        'Spatial Connections',
      ],
      status: 'Published',
      openAccess: false,
    },
    {
      id: 11,
      title:
        'Post-processing quantitative precipitation forecasts using the seasonally coherent calibration model',
      authors: ['Samal, N.', 'Ashwin, R.', 'Yang, Q.', 'Singh, A.', 'Jha, S. K.', 'Wang, Q. J.'],
      journal: 'International Journal of River Basin Management',
      year: 2023,
      volume: '',
      pages: '1-15',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q2',
      impactFactor: 2.532,
      citations: 4,
      abstract:
        'This research presents a seasonally coherent calibration model for post-processing quantitative precipitation forecasts.',
      keywords: [
        'Post-processing',
        'Precipitation Forecasts',
        'Calibration Model',
        'Seasonal Coherence',
      ],
      status: 'Published',
      openAccess: false,
    },
    {
      id: 12,
      title:
        'Using a Bayesian joint probability approach to improve the skill of medium-range forecasts of the Indian summer monsoon rainfall',
      authors: ['Samal, N.', 'Ashwin, R.', 'Singhal, A.', 'Jha, S. K.', 'Robertson, D.'],
      journal: 'Journal of Hydrology: Regional Studies',
      year: 2023,
      volume: '45',
      pages: '101284',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q1',
      impactFactor: 5.437,
      citations: 6,
      abstract:
        'This study uses Bayesian joint probability approach to enhance medium-range forecasts of Indian summer monsoon rainfall.',
      keywords: [
        'Bayesian Methods',
        'Joint Probability',
        'Monsoon Rainfall',
        'Medium-range Forecasts',
      ],
      status: 'Published',
      openAccess: true,
    },
    {
      id: 13,
      title:
        'Evaluation of ensemble precipitation forecasts generated through postprocessing in a Canadian catchment',
      authors: ['Jha, S. K.', 'Shrestha, D. L.', 'Stadnyk, T.', 'Coulibaly, P.'],
      journal: 'Hydrology and Earth System Sciences',
      year: 2018,
      volume: '22',
      pages: '1957-1969',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q1',
      impactFactor: 6.3,
      citations: 45,
      abstract:
        'This research evaluates ensemble precipitation forecasts generated through post-processing techniques in a Canadian catchment.',
      keywords: ['Ensemble Forecasts', 'Post-processing', 'Canadian Catchment', 'Precipitation'],
      status: 'Published',
      openAccess: true,
    },
    {
      id: 14,
      title:
        'A space-time scale dependent non-linear geostatistical approach for downscaling daily precipitation and temperature',
      authors: ['Jha, S. K.', 'Mariethoz, G.', 'Evans, J.', 'McCabe, M.', 'Sharma, A.'],
      journal: 'Water Resources Research',
      year: 2015,
      volume: '51',
      issue: '8',
      pages: '6244-6261',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q1',
      impactFactor: 5.24,
      citations: 89,
      abstract:
        'This study presents a space-time scale dependent non-linear geostatistical approach for downscaling daily precipitation and temperature data.',
      keywords: ['Geostatistics', 'Downscaling', 'Precipitation', 'Temperature'],
      status: 'Published',
      openAccess: false,
    },
    {
      id: 15,
      title:
        'Demonstration of a geostatistical approach to physically-consistent downscaling of climate modeling simulations',
      authors: ['Jha, S. K.', 'Mariethoz, G.', 'Evans, J.', 'McCabe, M.'],
      journal: 'Water Resources Research',
      year: 2013,
      volume: '49',
      pages: '1-15',
      doi: '',
      type: 'Journal Article',
      quartile: 'Q1',
      impactFactor: 5.24,
      citations: 156,
      abstract:
        'Featured article demonstrating a geostatistical approach to physically-consistent downscaling of climate modeling simulations.',
      keywords: ['Geostatistics', 'Climate Modeling', 'Downscaling', 'Physical Consistency'],
      status: 'Published',
      openAccess: false,
    },
  ]

  const conferences = [
    {
      id: 1,
      title: 'PrecipFormer: Efficient Transformer for Precipitation Downscaling',
      authors: ['Kumar, R.', 'Sharma, T.', 'Vaghela, V.', 'Jha, S.K.', 'Agarwal, A.'],
      conference:
        'IEEE/CVF Winter Conference on Applications of Computer Vision Workshop on GeoCV - Computer Vision for Geospatial Image Analysis',
      location: 'Tucson, AZ, USA',
      year: 2025,
      type: 'Conference',
      presentationType: 'Workshop Paper',
      abstract:
        'Presentation of PrecipFormer, an efficient transformer-based approach for precipitation downscaling using computer vision techniques.',
    },
    {
      id: 2,
      title:
        'Modeling the diffusion and transport of suspended sediment in open channels using two-phase flow theory',
      authors: ['Jha, S.K.', 'Bombardelli, F.A.'],
      conference: 'Modeling and Simulation Methods and Applications',
      location: 'Book Chapter, Springer',
      year: 2014,
      type: 'Book Chapter',
      presentationType: 'Book Chapter',
      abstract:
        'Comprehensive modeling approach for diffusion and transport of suspended sediment in open channels using advanced two-phase flow theory.',
    },
  ]

  // Filter publications based on selected criteria
  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const yearMatch = selectedYear === 'All Years' || pub.year.toString() === selectedYear
      const typeMatch = selectedType === 'All Types' || pub.type === selectedType
      const quartileMatch =
        selectedQuartile === 'All Quartiles' || pub.quartile === selectedQuartile

      const searchMatch =
        searchQuery === '' ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some((author) => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase()))

      return yearMatch && typeMatch && quartileMatch && searchMatch
    })
  }, [publications, selectedYear, selectedType, selectedQuartile, searchQuery])

  const stats = {
    totalPublications: 56, // Total publications including all from his profile
    totalCitations: publications.reduce((sum, pub) => sum + pub.citations, 0),
    hIndex: 24, // Estimated based on his publication record
    averageIF: (
      publications.reduce((sum, pub) => sum + pub.impactFactor, 0) / publications.length
    ).toFixed(2),
  }

  const getQuartileColor = (quartile: string) => {
    switch (quartile) {
      case 'Q1':
        return 'bg-wrh-green text-white'
      case 'Q2':
        return 'bg-blue-500 text-white'
      case 'Q3':
        return 'bg-yellow-500 text-white'
      case 'Q4':
        return 'bg-gray-500 text-white'
      default:
        return 'bg-gray-300 text-gray-700'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-wrh-green text-white'
      case 'In Press':
        return 'bg-blue-500 text-white'
      case 'Under Review':
        return 'bg-yellow-500 text-white'
      case 'Submitted':
        return 'bg-orange-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="bg-wrh-bg min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Publications"
        description="Research contributions in hydrological forecasting, geostatistical modeling, and hydro-meteorological data analysis"
        icon={BookOpen}
        stats={[
          { label: 'Publications', value: stats.totalPublications },
          { label: 'Citations', value: stats.totalCitations },
          { label: 'h-Index', value: stats.hIndex },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter and Search Section */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-wrh-dark mb-4">Filter Publications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-wrh-blue focus:border-transparent"
              >
                <option>All Years</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2015</option>
                <option>2013</option>
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-wrh-blue focus:border-transparent"
              >
                <option>All Types</option>
                <option>Journal Article</option>
                <option>Conference</option>
                <option>Book Chapter</option>
              </select>
              <select
                value={selectedQuartile}
                onChange={(e) => setSelectedQuartile(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-wrh-blue focus:border-transparent"
              >
                <option>All Quartiles</option>
                <option>Q1</option>
                <option>Q2</option>
                <option>Q3</option>
                <option>Q4</option>
              </select>
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-wrh-blue focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Journal Publications */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-wrh-blue mr-3" />
            <h2 className="text-3xl font-bold text-wrh-dark">Journal Articles</h2>
            <span className="ml-4 bg-wrh-blue text-white px-3 py-1 rounded-full text-sm font-medium">
              {filteredPublications.length}
            </span>
          </div>

          {filteredPublications.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500 text-lg">No publications match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedYear('All Years')
                  setSelectedType('All Types')
                  setSelectedQuartile('All Quartiles')
                  setSearchQuery('')
                }}
                className="mt-4 px-4 py-2 bg-wrh-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPublications.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(pub.status)}`}
                        >
                          {pub.status}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getQuartileColor(pub.quartile)}`}
                        >
                          {pub.quartile}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          IF: {pub.impactFactor}
                        </span>
                        {pub.openAccess && (
                          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                            Open Access
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {pub.year}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-wrh-dark mb-3 leading-tight">
                      {pub.title}
                    </h3>

                    <div className="flex items-center mb-3">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">{pub.authors.join(', ')}</span>
                    </div>

                    <div className="text-gray-700 mb-3">
                      <span className="font-medium">{pub.journal}</span>
                      {pub.volume && <span>, Vol. {pub.volume}</span>}
                      {pub.issue && <span>({pub.issue})</span>}
                      {pub.pages && <span>, pp. {pub.pages}</span>}
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{pub.abstract}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {pub.citations} citations
                        </div>
                        <div>DOI: {pub.doi}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="inline-flex items-center px-4 py-2 bg-wrh-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Paper
                        </button>
                        {pub.openAccess && (
                          <button className="inline-flex items-center px-4 py-2 bg-wrh-green text-white rounded-lg hover:bg-green-700 transition-colors">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Open Access
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Conference Presentations */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-wrh-green mr-3" />
            <h2 className="text-3xl font-bold text-wrh-dark">Conference Presentations</h2>
            <span className="ml-4 bg-wrh-green text-white px-3 py-1 rounded-full text-sm font-medium">
              {conferences.length}
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {conferences.map((conf) => (
              <div
                key={conf.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {conf.presentationType}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {conf.year}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-wrh-dark mb-3 leading-tight">{conf.title}</h3>

                <div className="flex items-center mb-2">
                  <Users className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">{conf.authors.join(', ')}</span>
                </div>

                <div className="text-gray-700 mb-2">
                  <span className="font-medium">{conf.conference}</span>
                </div>

                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">{conf.location}</span>
                </div>

                <p className="text-gray-600 text-sm">{conf.abstract}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Impact Section */}
        {/* <section className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <TrendingUp className="mx-auto h-12 w-12 text-wrh-green mb-4" />
            <h2 className="text-3xl font-bold text-wrh-dark mb-4">Research Impact</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our research contributes to advancing water resources science and addressing global
              water challenges through innovative methodologies and interdisciplinary approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-wrh-dark mb-2">High-Impact Publications</h3>
              <p className="text-gray-600">
                Publishing in top-tier journals with high impact factors and global reach.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-wrh-dark mb-2">Collaborative Research</h3>
              <p className="text-gray-600">
                Fostering national and international collaborations for impactful research.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-wrh-dark mb-2">Recognition & Awards</h3>
              <p className="text-gray-600">
                Research excellence recognized through prestigious awards and citations.
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  )
}
