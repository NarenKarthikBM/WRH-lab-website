import { Metadata } from 'next'
import { Calendar, Users, MapPin, ExternalLink, TrendingUp, Clock, FolderOpen } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Research Projects - WRH Lab Active & Completed Studies',
  description:
    'Current and completed research projects at Water Resources & Hydrology Lab, IISER Bhopal. Innovative studies in climate hydrology, flood modeling, and water sustainability.',
  keywords: [
    'research projects',
    'hydrology studies',
    'water resources projects',
    'climate research',
    'flood modeling',
    'water sustainability',
    'IISER Bhopal research',
    'environmental projects',
  ],
  openGraph: {
    title: 'WRH Lab Research Projects - Current & Completed Studies',
    description:
      'Explore our innovative research projects advancing water science and sustainability.',
  },
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Climate Change Impacts on Monsoon Hydrology',
      status: 'Active',
      duration: '2022-2025',
      funding: '₹85 Lakhs',
      fundingAgency: 'Department of Science and Technology (DST)',
      description:
        'Investigating the impacts of changing climate patterns on monsoon hydrology across the Indian subcontinent using advanced modeling techniques and multi-source data analysis.',
      objectives: [
        'Analyze long-term trends in monsoon precipitation and streamflow',
        'Develop high-resolution climate-hydrology models',
        'Assess future water availability under climate scenarios',
        'Provide adaptation strategies for water resource management',
      ],
      team: ['Dr. [PI Name]', '[PhD Student 1]', '[MS Student 1]'],
      locations: ['Western Ghats', 'Central India', 'Northeast India'],
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&h=300&fit=crop',
      publications: 5,
      progress: 75,
    },
    {
      id: 2,
      title: 'Urban Water Security Assessment',
      status: 'Active',
      duration: '2023-2026',
      funding: '₹60 Lakhs',
      fundingAgency: 'Ministry of Jal Shakti',
      description:
        'Comprehensive assessment of water security in rapidly growing Indian cities, focusing on supply-demand dynamics, quality issues, and sustainable management strategies.',
      objectives: [
        'Develop integrated water security indicators',
        'Assess current and future water demands',
        'Evaluate groundwater depletion risks',
        'Design sustainable water management frameworks',
      ],
      team: ['Dr. [Postdoc Name]', '[PhD Student 2]', '[MS Student 2]'],
      locations: ['Bhopal', 'Indore', 'Pune', 'Ahmedabad', 'Jaipur'],
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=500&h=300&fit=crop',
      publications: 3,
      progress: 45,
    },
    {
      id: 3,
      title: 'Groundwater-Surface Water Interactions in Western Ghats',
      status: 'Completed',
      duration: '2020-2023',
      funding: '₹45 Lakhs',
      fundingAgency: 'Indian Space Research Organisation (ISRO)',
      description:
        'Multi-scale analysis of groundwater-surface water exchange processes in the biodiversity hotspot of Western Ghats and their role in maintaining ecosystem services.',
      objectives: [
        'Quantify groundwater-surface water fluxes',
        'Map connectivity patterns across watersheds',
        'Assess ecosystem service dependencies',
        'Develop conservation recommendations',
      ],
      team: ['Dr. [PI Name]', '[Former PhD Student]', '[Former MS Student]'],
      locations: ['Kerala', 'Karnataka', 'Tamil Nadu', 'Maharashtra'],
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?w=500&h=300&fit=crop',
      publications: 8,
      progress: 100,
    },
    {
      id: 4,
      title: 'Machine Learning for Hydrological Forecasting',
      status: 'Active',
      duration: '2024-2027',
      funding: '₹70 Lakhs',
      fundingAgency: 'Science and Engineering Research Board (SERB)',
      description:
        'Development of advanced machine learning and deep learning models for improving hydrological forecasting accuracy in data-sparse regions of India.',
      objectives: [
        'Develop ensemble ML models for precipitation forecasting',
        'Improve flood prediction capabilities',
        'Create uncertainty quantification frameworks',
        'Deploy operational forecasting systems',
      ],
      team: ['Dr. [PI Name]', '[New PhD Student]', '[Postdoc]'],
      locations: ['Narmada Basin', 'Godavari Basin', 'Brahmaputra Basin'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      publications: 1,
      progress: 25,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-wrh-green text-white'
      case 'Completed':
        return 'bg-wrh-blue text-white'
      case 'Proposed':
        return 'bg-wrh-gray text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="min-h-screen bg-wrh-bg">
      {/* Hero Section */}
      <PageHero
        title="Research Projects"
        description="Discover our ongoing and completed research projects addressing critical water challenges through innovative interdisciplinary approaches"
        icon={FolderOpen}
        stats={[
          { label: 'Active Projects', value: '12+' },
          // { label: 'Total Funding', value: '₹2.8Cr' },
          { label: 'Research Sites', value: '25+' },
          { label: 'Publications', value: '50+' },
        ]}
      />

      <div className="max-w-8xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article key={project.id} className="card overflow-hidden">
              <div className="md:flex">
                {/* Project image */}
                <div className="md:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>

                {/* Project content */}
                <div className="md:w-2/3 p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-wrh-dark mb-2">{project.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-wrh-gray">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp size={16} />
                          <span>{project.funding}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-wrh-gray mb-4 leading-relaxed">{project.description}</p>

                  {/* Key objectives */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-wrh-dark mb-2">Key Objectives:</h4>
                    <ul className="text-sm text-wrh-gray space-y-1">
                      {project.objectives.slice(0, 2).map((objective, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-wrh-green mt-1">•</span>
                          <span>{objective}</span>
                        </li>
                      ))}
                      {project.objectives.length > 2 && (
                        <li className="text-wrh-green text-sm">
                          + {project.objectives.length - 2} more objectives
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Project details grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {/* Team */}
                    <div>
                      <h5 className="font-semibold text-wrh-dark text-sm mb-2 flex items-center gap-1">
                        <Users size={14} />
                        Research Team
                      </h5>
                      <div className="space-y-1">
                        {project.team.map((member, index) => (
                          <div key={index} className="text-xs text-wrh-gray">
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Locations */}
                    <div>
                      <h5 className="font-semibold text-wrh-dark text-sm mb-2 flex items-center gap-1">
                        <MapPin size={14} />
                        Study Locations
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {project.locations.slice(0, 3).map((location, index) => (
                          <span
                            key={index}
                            className="bg-wrh-bg text-wrh-gray px-2 py-1 rounded text-xs"
                          >
                            {location}
                          </span>
                        ))}
                        {project.locations.length > 3 && (
                          <span className="text-wrh-green text-xs">
                            +{project.locations.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Progress */}
                    <div>
                      <h5 className="font-semibold text-wrh-dark text-sm mb-2 flex items-center gap-1">
                        <Clock size={14} />
                        Progress
                      </h5>
                      <div className="space-y-2">
                        <div className="bg-wrh-nav rounded-full h-2">
                          <div
                            className="bg-wrh-green h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-wrh-gray">{project.progress}% Complete</div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-wrap items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-wrh-gray">
                      <span className="font-semibold">Funding:</span> {project.fundingAgency}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-wrh-gray">
                        <span className="font-semibold">{project.publications}</span> Publications
                      </span>
                      <button className="text-wrh-green hover:text-wrh-blue font-semibold flex items-center gap-1">
                        View Details
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-wrh-dark mb-4">Interested in Collaboration?</h2>
          <p className="text-wrh-gray mb-6 max-w-2xl mx-auto">
            We welcome partnerships with researchers, institutions, and organizations working on
            water-related challenges. Let&apos;s work together to advance water science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="/opportunities" className="btn-secondary">
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
