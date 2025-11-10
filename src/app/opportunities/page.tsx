import { Metadata } from 'next'
import {
  GraduationCap,
  Briefcase,
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  BookOpen,
} from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Research Opportunities - Join WRH Lab Team',
  description:
    'Explore PhD positions, research internships, and collaboration opportunities at Water Resources & Hydrology Lab, IISER Bhopal. Join cutting-edge research in water science.',
  keywords: [
    'PhD opportunities',
    'research positions',
    'water resources careers',
    'IISER Bhopal admissions',
    'hydrology research jobs',
    'environmental research internships',
    'graduate school opportunities',
    'research collaboration',
  ],
  openGraph: {
    title: 'Research Opportunities at WRH Lab - Join Our Team',
    description:
      'Discover exciting research opportunities and career paths in water resources and hydrology.',
  },
}

export default function Opportunities() {
  const currentPositions = [
    {
      id: 1,
      title: 'PhD Position: Climate-Hydrology Modeling',
      type: 'PhD',
      duration: '5 years',
      deadline: '2025-03-15',
      description:
        'We are seeking a motivated PhD student to work on climate-hydrology modeling with focus on extreme events and water security assessment.',
      requirements: [
        'M.Tech/M.S. in Civil Engineering, Environmental Engineering, or related field',
        'Strong background in hydrology, climatology, or water resources',
        'Programming experience in Python/R/MATLAB',
        'GATE/NET qualification required',
      ],
      benefits: [
        'Monthly fellowship as per institute norms',
        'Travel funding for conferences',
        'Access to high-performance computing facilities',
        'Opportunity to publish in top-tier journals',
      ],
      supervisor: 'Dr. Sanjeev K. Jha',
      status: 'Open',
    },
    {
      id: 2,
      title: 'Postdoctoral Research Position',
      type: 'Postdoc',
      duration: '2 years',
      deadline: '2025-02-28',
      description:
        'Postdoctoral position available for research on urban water systems and sustainable water management strategies.',
      requirements: [
        'Ph.D. in Civil Engineering, Environmental Engineering, or related field',
        'Strong publication record in water resources/hydrology',
        'Experience with numerical modeling and data analysis',
        'Excellent written and verbal communication skills',
      ],
      benefits: [
        'Competitive salary package',
        'Research and travel support',
        'Collaborative research environment',
        'Career development opportunities',
      ],
      supervisor: 'Dr. Sanjeev K. Jha',
      status: 'Open',
    },
  ]

  const internshipPrograms = [
    {
      id: 1,
      title: 'Summer Research Internship Program',
      duration: '8-12 weeks',
      period: 'May - July 2025',
      eligibility: 'B.Tech/B.E./M.Sc. students (3rd year and above)',
      description:
        'Hands-on research experience in water resources and hydrology. Interns will work on real research projects under faculty supervision.',
      projects: [
        'Hydrological data analysis and visualization',
        'Climate change impact assessment',
        'GIS and remote sensing applications',
        'Water quality monitoring and analysis',
      ],
      benefits: [
        'Stipend provided',
        'Certificate of completion',
        'Letter of recommendation',
        'Potential for publication co-authorship',
      ],
      applicationDeadline: '2025-03-31',
    },
    {
      id: 2,
      title: 'Winter Research Internship',
      duration: '6-8 weeks',
      period: 'December 2024 - January 2025',
      eligibility: 'M.Sc./M.Tech students',
      description:
        'Short-term research internship focusing on specific projects in computational hydrology and water resources modeling.',
      projects: [
        'Hydrological model development',
        'Statistical analysis of hydro-meteorological data',
        'Machine learning applications in hydrology',
        'Water resources system optimization',
      ],
      benefits: [
        'Stipend provided',
        'Research publication opportunity',
        'Networking with research community',
        'Access to lab facilities',
      ],
      applicationDeadline: '2024-11-15',
    },
  ]

  const collaborationOpportunities = [
    {
      title: 'Industry Partnerships',
      description:
        'We welcome collaborations with water utilities, consulting firms, and technology companies.',
      areas: [
        'Water resource assessment',
        'Climate risk analysis',
        'Decision support systems',
        'Data analytics solutions',
      ],
    },
    {
      title: 'Academic Collaborations',
      description: 'Seeking partnerships with national and international research institutions.',
      areas: [
        'Joint research projects',
        'Student exchange programs',
        'Shared facilities access',
        'Co-supervision opportunities',
      ],
    },
    {
      title: 'Government Agencies',
      description: 'Collaborative research with government departments and policy-making bodies.',
      areas: [
        'Policy research',
        'Technical advisory services',
        'Capacity building programs',
        'Knowledge transfer initiatives',
      ],
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const isDeadlineSoon = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const diffTime = deadlineDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 30
  }

  return (
    <div className="min-h-screen bg-wrh-bg">
      {/* Hero Section */}
      <PageHero
        title="Research Opportunities"
        description="Join our team and contribute to cutting-edge water resources research"
        icon={Briefcase}
        stats={[
          { label: 'Open Positions', value: currentPositions.length },
          { label: 'Research Areas', value: 5 },
          { label: 'Collaborations', value: collaborationOpportunities.length },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Current Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
            <Briefcase className="mr-3 text-wrh-green" size={32} />
            Current Open Positions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentPositions.map((position) => (
              <div key={position.id} className="card p-8 relative overflow-hidden">
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-wrh-green text-white rounded-full">
                    {position.status}
                  </span>
                </div>

                {/* Deadline warning */}
                {isDeadlineSoon(position.deadline) && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600 font-medium flex items-center">
                      <Clock className="mr-2" size={16} />
                      Application deadline: {formatDate(position.deadline)}
                    </p>
                  </div>
                )}

                <div className="mb-4">
                  <span className="px-3 py-1 text-sm font-medium bg-wrh-blue text-white rounded-full">
                    {position.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-wrh-dark mb-2">{position.title}</h3>

                <div className="flex items-center text-wrh-gray mb-4 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="mr-1" size={16} />
                    {position.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="mr-1" size={16} />
                    {position.supervisor}
                  </span>
                </div>

                <p className="text-wrh-gray mb-6">{position.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-wrh-dark mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight
                          className="mr-2 mt-0.5 text-wrh-green flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm text-wrh-gray">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-wrh-dark mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {position.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight
                          className="mr-2 mt-0.5 text-wrh-green flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm text-wrh-gray">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full btn-primary">Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Internship Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
            <GraduationCap className="mr-3 text-wrh-blue" size={32} />
            Internship Programs
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internshipPrograms.map((program) => (
              <div key={program.id} className="card p-8">
                <h3 className="text-xl font-bold text-wrh-dark mb-4">{program.title}</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-sm">
                    <span className="font-semibold text-wrh-dark">Duration:</span>
                    <p className="text-wrh-gray">{program.duration}</p>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-wrh-dark">Period:</span>
                    <p className="text-wrh-gray">{program.period}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-semibold text-wrh-dark text-sm">Eligibility:</span>
                  <p className="text-wrh-gray text-sm">{program.eligibility}</p>
                </div>

                <p className="text-wrh-gray mb-6">{program.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-wrh-dark mb-3">Research Areas:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {program.projects.map((project, index) => (
                      <div key={index} className="flex items-center">
                        <BookOpen className="mr-2 text-wrh-blue flex-shrink-0" size={16} />
                        <span className="text-sm text-wrh-gray">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-wrh-dark mb-3">Benefits:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {program.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <ArrowRight className="mr-2 text-wrh-green flex-shrink-0" size={16} />
                        <span className="text-sm text-wrh-gray">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-wrh-bg rounded-lg mb-6">
                  <p className="text-sm font-medium text-wrh-dark">
                    Application Deadline:{' '}
                    <span className="text-wrh-green">
                      {formatDate(program.applicationDeadline)}
                    </span>
                  </p>
                </div>

                <button className="w-full btn-secondary">Learn More & Apply</button>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
            <Users className="mr-3 text-wrh-green" size={32} />
            Collaboration Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationOpportunities.map((collab, index) => (
              <div key={index} className="card p-8 text-center">
                <h3 className="text-xl font-bold text-wrh-dark mb-4">{collab.title}</h3>
                <p className="text-wrh-gray mb-6">{collab.description}</p>

                <div className="space-y-3">
                  {collab.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="p-3 bg-wrh-bg rounded-lg">
                      <span className="text-sm font-medium text-wrh-dark">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
