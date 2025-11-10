import { Metadata } from 'next'
import {
  GraduationCap,
  MapPin,
  Calendar,
  Briefcase,
  Award,
  ExternalLink,
  Linkedin,
  Mail,
  Users,
  BookOpen,
  Trophy,
  Building,
} from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Alumni Network - WRH Lab Graduates & Success Stories',
  description:
    'Distinguished alumni from Water Resources & Hydrology Lab, IISER Bhopal. Success stories of our graduates in academia, industry, and research worldwide.',
  keywords: [
    'WRH lab alumni',
    'water resources graduates',
    'IISER Bhopal alumni',
    'hydrology PhD graduates',
    'research alumni network',
    'water science careers',
    'environmental graduates',
    'academic success stories',
  ],
  openGraph: {
    title: 'WRH Lab Alumni - Success Stories & Career Achievements',
    description:
      'Our proud alumni making impact in water resources research and environmental science worldwide.',
  },
}

export default function Alumni() {
  const alumni = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      degree: 'PhD in Environmental Sciences',
      yearGraduated: '2022',
      thesis: 'Machine Learning Applications in Flood Prediction for Indian River Systems',
      currentPosition: 'Assistant Professor',
      currentOrganization: 'IIT Roorkee',
      location: 'Roorkee, India',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b372?w=300&h=300&fit=crop',
      achievements: [
        'Published 8 research papers in top-tier journals',
        'Recipient of Young Scientist Award 2023',
        'Leading a DST-funded project on flood early warning systems',
      ],
      expertise: ['Flood Prediction', 'Machine Learning', 'Hydrological Modeling'],
      linkedinUrl: '#',
      email: 'priya.sharma@iitr.ac.in',
      testimonial:
        "My time at WRH Lab provided me with strong foundations in hydrology and research methodology. The collaborative environment and Dr. Jha's mentorship were instrumental in shaping my research career.",
      publications: 15,
      impact: 'High',
    },
    {
      id: 2,
      name: 'Mr. Rajesh Kumar',
      degree: 'M.Tech in Water Resources Engineering',
      yearGraduated: '2021',
      thesis: 'Groundwater Management Strategies for Semi-Arid Regions',
      currentPosition: 'Senior Hydrologist',
      currentOrganization: 'Indian Space Research Organisation (ISRO)',
      location: 'Bangalore, India',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      achievements: [
        'Lead hydrologist for ISRO water resource satellites',
        'Developed operational flood monitoring systems',
        'Co-authored 5 research papers',
      ],
      expertise: ['Remote Sensing', 'Satellite Hydrology', 'Water Management'],
      linkedinUrl: '#',
      email: 'rajesh.k@isro.gov.in',
      testimonial:
        'The research experience at WRH Lab, especially in integrating remote sensing with hydrology, directly contributed to my current role at ISRO where I work on satellite-based water monitoring systems.',
      publications: 7,
      impact: 'Medium',
    },
    {
      id: 3,
      name: 'Dr. Anita Patel',
      degree: 'PhD in Civil Engineering',
      yearGraduated: '2020',
      thesis: 'Climate Change Impacts on Urban Water Security in Indian Cities',
      currentPosition: 'Principal Scientist',
      currentOrganization: 'National Institute of Hydrology',
      location: 'Roorkee, India',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      achievements: [
        'Leading national climate-hydrology research projects',
        'Published 12 peer-reviewed research papers',
        'Expert member on Government climate adaptation committees',
      ],
      expertise: ['Climate Change', 'Urban Hydrology', 'Water Security'],
      linkedinUrl: '#',
      email: 'anita.patel@nih.gov.in',
      testimonial:
        'WRH Lab provided an excellent research environment that fostered interdisciplinary thinking. The skills I developed here in combining climate science with hydrology are central to my current research work.',
      publications: 18,
      impact: 'High',
    },
    {
      id: 4,
      name: 'Ms. Sneha Gupta',
      degree: 'M.S. in Earth Sciences',
      yearGraduated: '2023',
      thesis: 'GIS-based Watershed Management for Sustainable Agriculture',
      currentPosition: 'Water Resources Consultant',
      currentOrganization: 'World Bank',
      location: 'New Delhi, India',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
      achievements: [
        'Managing international water development projects',
        'Expertise in GIS and watershed management',
        'Contributing to sustainable development goals',
      ],
      expertise: ['GIS Applications', 'Watershed Management', 'Development Projects'],
      linkedinUrl: '#',
      email: 'sneha.gupta@worldbank.org',
      testimonial:
        'The interdisciplinary approach at WRH Lab, combining hydrology with GIS and policy aspects, prepared me well for international development work where holistic thinking is essential.',
      publications: 4,
      impact: 'Medium',
    },
    {
      id: 5,
      name: 'Mr. Vikram Singh',
      degree: 'M.Tech in Environmental Engineering',
      yearGraduated: '2019',
      thesis: 'Water Quality Assessment and Management in Industrial Areas',
      currentPosition: 'Environmental Manager',
      currentOrganization: 'Tata Steel Limited',
      location: 'Jamshedpur, India',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      achievements: [
        'Implemented water conservation projects saving 2M liters/day',
        'Leading industrial water management initiatives',
        'Certified in ISO 14001 Environmental Management',
      ],
      expertise: ['Water Quality', 'Industrial Water Management', 'Environmental Compliance'],
      linkedinUrl: '#',
      email: 'vikram.singh@tatasteel.com',
      testimonial:
        'The practical approach to water quality research at WRH Lab gave me hands-on experience that directly translates to industrial water management challenges I face today.',
      publications: 3,
      impact: 'Medium',
    },
    {
      id: 6,
      name: 'Dr. Meera Nair',
      degree: 'PhD in Hydrology',
      yearGraduated: '2018',
      thesis: 'Hydrological Modeling of Western Ghats Watersheds',
      currentPosition: 'Postdoctoral Researcher',
      currentOrganization: 'University of California, Davis',
      location: 'California, USA',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop',
      achievements: [
        'NSF Postdoctoral Fellowship recipient',
        'Published 10+ papers in international journals',
        'Developing next-generation hydrological models',
      ],
      expertise: ['Hydrological Modeling', 'Climate Hydrology', 'Data Science'],
      linkedinUrl: '#',
      email: 'meera.nair@ucdavis.edu',
      testimonial:
        'The rigorous research training and international collaboration opportunities at WRH Lab opened doors to pursue advanced research at top international institutions.',
      publications: 14,
      impact: 'High',
    },
  ]

  const alumniStats = {
    totalAlumni: alumni.length,
    phdGraduates: alumni.filter((a) => a.degree.includes('PhD')).length,
    mtechGraduates: alumni.filter((a) => a.degree.includes('M.Tech') || a.degree.includes('M.S.'))
      .length,
    industryPositions: alumni.filter(
      (a) =>
        !a.currentOrganization.includes('University') &&
        !a.currentOrganization.includes('Institute')
    ).length,
    academicPositions: alumni.filter(
      (a) =>
        a.currentOrganization.includes('University') || a.currentOrganization.includes('Institute')
    ).length,
    totalPublications: alumni.reduce((sum, a) => sum + a.publications, 0),
  }

  const careerPaths = [
    {
      sector: 'Academia',
      count: alumniStats.academicPositions,
      description: 'Teaching and research positions in universities and research institutes',
      icon: <GraduationCap className="text-blue-500" size={24} />,
      examples: ['Assistant Professor', 'Postdoctoral Researcher', 'Principal Scientist'],
    },
    {
      sector: 'Government',
      count: alumni.filter(
        (a) =>
          a.currentOrganization.includes('ISRO') ||
          a.currentOrganization.includes('NIH') ||
          a.currentOrganization.includes('gov')
      ).length,
      description: 'Positions in government agencies and research organizations',
      icon: <Building className="text-green-500" size={24} />,
      examples: ['Senior Hydrologist', 'Research Scientist', 'Policy Advisor'],
    },
    {
      sector: 'Industry',
      count: alumni.filter(
        (a) => a.currentOrganization.includes('Tata') || a.currentOrganization.includes('Limited')
      ).length,
      description: 'Water management roles in private sector and consulting',
      icon: <Briefcase className="text-purple-500" size={24} />,
      examples: ['Environmental Manager', 'Water Resources Consultant', 'Project Manager'],
    },
    {
      sector: 'International',
      count: alumni.filter(
        (a) => a.currentOrganization.includes('World Bank') || a.location.includes('USA')
      ).length,
      description: 'Positions in international organizations and foreign institutions',
      icon: <Users className="text-orange-500" size={24} />,
      examples: ['Development Consultant', 'International Researcher', 'Program Officer'],
    },
  ]

  const formatYear = (year: string) => {
    return `Class of ${year}`
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'bg-green-100 text-green-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-wrh-bg">
      {/* Hero Section */}
      <PageHero
        title="Our Alumni"
        description="Celebrating the achievements of our graduates making impact in water resources and beyond"
        icon={GraduationCap}
        stats={[
          { label: 'Total Alumni', value: alumniStats.totalAlumni },
          { label: 'PhD Graduates', value: alumniStats.phdGraduates },
          { label: 'Publications', value: alumniStats.totalPublications },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Alumni Statistics */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-wrh-dark mb-8 text-center">
              Alumni at a Glance
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-wrh-green mb-2">
                  {alumniStats.totalAlumni}
                </div>
                <div className="text-sm text-wrh-gray">Total Alumni</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-wrh-blue mb-2">
                  {alumniStats.phdGraduates}
                </div>
                <div className="text-sm text-wrh-gray">PhD Graduates</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-wrh-green mb-2">
                  {alumniStats.mtechGraduates}
                </div>
                <div className="text-sm text-wrh-gray">M.Tech/M.S.</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-wrh-blue mb-2">
                  {alumniStats.academicPositions}
                </div>
                <div className="text-sm text-wrh-gray">In Academia</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-wrh-green mb-2">
                  {alumniStats.industryPositions}
                </div>
                <div className="text-sm text-wrh-gray">In Industry</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-wrh-blue mb-2">
                  {alumniStats.totalPublications}
                </div>
                <div className="text-sm text-wrh-gray">Publications</div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-wrh-dark mb-8 text-center">Career Pathways</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerPaths.map((path, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{path.icon}</div>
                <h3 className="text-xl font-bold text-wrh-dark mb-2">{path.sector}</h3>
                <div className="text-3xl font-bold text-wrh-green mb-4">{path.count}</div>
                <p className="text-sm text-wrh-gray mb-4">{path.description}</p>

                <div className="space-y-2">
                  {path.examples.map((example, idx) => (
                    <div key={idx} className="text-xs bg-wrh-bg px-2 py-1 rounded">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Alumni */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-wrh-dark mb-8">Meet Our Alumni</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {alumni.map((alumnus) => (
              <div key={alumnus.id} className="card p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={alumnus.image}
                      alt={alumnus.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-wrh-dark">{alumnus.name}</h3>
                        <p className="text-wrh-blue font-medium">{alumnus.currentPosition}</p>
                        <p className="text-wrh-gray">{alumnus.currentOrganization}</p>
                      </div>

                      <div className="flex items-center space-x-2 mt-2 md:mt-0">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${getImpactColor(alumnus.impact)}`}
                        >
                          {alumnus.impact} Impact
                        </span>
                        <span className="px-2 py-1 text-xs bg-wrh-bg text-wrh-gray rounded-full">
                          {formatYear(alumnus.yearGraduated)}
                        </span>
                      </div>
                    </div>

                    {/* Education & Location */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-sm text-wrh-gray">
                        <GraduationCap className="mr-2 flex-shrink-0" size={16} />
                        <span>{alumnus.degree}</span>
                      </div>
                      <div className="flex items-center text-sm text-wrh-gray">
                        <MapPin className="mr-2 flex-shrink-0" size={16} />
                        <span>{alumnus.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-wrh-gray">
                        <BookOpen className="mr-2 flex-shrink-0" size={16} />
                        <span>{alumnus.publications} Publications</span>
                      </div>
                    </div>

                    {/* Thesis */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-wrh-dark text-sm mb-1">Thesis:</h4>
                      <p className="text-sm text-wrh-gray italic">&quot;{alumnus.thesis}&quot;</p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {alumnus.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-wrh-blue text-white text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-wrh-dark text-sm mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {alumnus.achievements.map((achievement, index) => (
                          <li key={index} className="text-sm text-wrh-gray flex items-start">
                            <Trophy
                              className="mr-2 mt-0.5 text-wrh-green flex-shrink-0"
                              size={12}
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="mb-6 p-4 bg-wrh-bg rounded-lg">
                      <p className="text-sm text-wrh-gray italic">
                        &quot;{alumnus.testimonial}&quot;
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="flex space-x-3">
                      <a
                        href={`mailto:${alumnus.email}`}
                        className="p-2 bg-wrh-green text-white rounded-full hover:bg-opacity-80 transition-colors"
                      >
                        <Mail size={16} />
                      </a>
                      <a
                        href={alumnus.linkedinUrl}
                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-opacity-80 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
