import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Calendar,
  ExternalLink,
  Building,
  Star,
  Target,
  Globe,
  Briefcase,
} from 'lucide-react'
import { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Dr. Sanjeev K. Jha - Group Head | WRH Lab - IISER Bhopal',
  description:
    'Meet Dr. Sanjeev K. Jha, Associate Professor and Group Head of the Water Resources and Hydrology Lab at IISER Bhopal. Learn about his research, education, and achievements.',
  keywords: [
    'Dr. Sanjeev K. Jha',
    'Associate Professor',
    'IISER Bhopal',
    'Hydrology',
    'Water Resources',
    'Climate Change',
    'Geostatistics',
  ],
  openGraph: {
    title: 'Dr. Sanjeev K. Jha - Group Head | WRH Lab',
    description:
      'Associate Professor and expert in hydrological forecasting, post-processing hydro-meteorological data, and multiple-point geostatistics.',
    type: 'profile',
  },
}

export default function GroupHead() {
  const profileData = {
    name: 'Dr. Sanjeev Kumar Jha',
    position: 'Associate Professor & Group Head',
    department: 'Department of Earth and Environmental Sciences',
    institution: 'Indian Institute of Science Education and Research (IISER) Bhopal',
    email: 'sanjeevj@iiserb.ac.in',
    phone: '+91-755-6691-306',
    office: 'Room No. 227, Academic Building 1, IISER Bhopal',
    image: 'https://via.placeholder.com/400x400?text=Dr.+Sanjeev+K.+Jha',

    researchInterests: [
      'Hydrological Forecasting',
      'Post-processing hydro-meteorological data',
      'Multiple point Geostatistics',
      'Climate Change Impact Assessment',
      'Water Resources Management',
      'Statistical Hydrology',
    ],

    education: [
      {
        degree: 'Ph.D. (Civil and Environmental Engineering)',
        institution: 'University of California Davis, USA',
        year: '2009',
        details: 'Dissertation on sediment transport modeling using two-phase flow theory',
      },
      {
        degree: 'M.Tech. (Water Resources Engineering)',
        institution: 'Indian Institute of Technology Kanpur & TU Darmstadt, Germany',
        year: '2005',
        details: 'DAAD Indo-German exchange program',
      },
      {
        degree: 'B.Tech. (Civil Engineering)',
        institution: 'Indian Institute of Technology Kanpur, India',
        year: '2003',
        details: 'Proficiency prize for the best Bachelor of Technology Project',
      },
    ],

    experience: [
      {
        position: 'Associate Professor',
        organization: 'Earth and Environmental Sciences, IISER Bhopal',
        duration: 'October 2023 - Present',
        location: 'India',
      },
      {
        position: 'Assistant Professor',
        organization: 'Earth and Environmental Sciences, IISER Bhopal',
        duration: 'July 2017 - October 2023',
        location: 'India',
      },
      {
        position: 'Postdoctoral Research Fellow',
        organization: 'University of Manitoba',
        duration: 'December 2015 - July 2017',
        location: 'Canada',
      },
      {
        position: 'Hydrologist',
        organization: 'Bureau of Meteorology',
        duration: 'May - December 2015',
        location: 'Australia',
      },
      {
        position: 'Senior Research Associate',
        organization: 'University of New South Wales, Sydney',
        duration: 'October 2011 - May 2015',
        location: 'Australia',
      },
      {
        position: 'Research Associate',
        organization: 'National Center for Supercomputing Applications',
        duration: 'October 2009 - 2011',
        location: 'USA',
      },
      {
        position: 'Water Resources Engineer',
        organization: 'California Department of Water Resources',
        duration: 'May - October 2009',
        location: 'USA',
      },
    ],

    awards: [
      {
        title: 'Distinguished Teacher Award',
        organization: 'IISER Bhopal',
        year: '2023-24',
        description: 'For outstanding contributions to teaching and mentoring',
      },
      {
        title: 'American Geophysical Union Research Spotlight',
        organization: 'AGU',
        year: '2013',
        description: 'For paper on geostatistical approach to climate modeling downscaling',
      },
      {
        title: 'UC Davis Humanities Graduate Research Fellowship',
        organization: 'University of California Davis',
        year: '2008-09',
        description: 'Graduate research fellowship for academic excellence',
      },
      {
        title: 'DAAD Scholarship',
        organization: 'German Academic Exchange Program',
        year: '2004-05',
        description: 'Indo-German exchange program fellowship',
      },
      {
        title: 'Proficiency Prize',
        organization: 'IIT Kanpur',
        year: '2003',
        description: 'Best Bachelor of Technology Project in Civil Engineering',
      },
    ],

    teachingCourses: [
      'Introduction to Environmental Sciences',
      'Data Analyses and Statistics for Geosciences',
      'Surface Water Hydrology',
      'Contemporary Environmental Issues',
      'Statistical analysis of hydrologic data (University of Manitoba)',
    ],

    researchStats: {
      totalPublications: 56,
      totalCitations: 1200,
      hIndex: 24,
      i10Index: 35,
      totalStudents: 35,
      currentStudents: 12,
    },

    memberships: [
      'American Geophysical Union (AGU)',
      'European Geosciences Union (EGU)',
      'Indian Meteorological Society (IMS)',
      'Asia-Oceania Geosciences Society (AOGS)',
    ],

    editorialRoles: [
      'Associate Editor - Frontiers in Earth Sciences (Research Topic: Extreme Precipitation Events)',
      'Reviewer - Water Resources Research, Journal of Hydrology, and 25+ other journals',
    ],
  }

  return (
    <div className="min-h-screen bg-wrh-bg">
      {/* Hero Section */}
      <PageHero
        title={profileData.name}
        description={`${profileData.position}, ${profileData.department}, IISER Bhopal`}
        icon={Users}
        stats={[
          { label: 'Publications', value: profileData.researchStats.totalPublications },
          { label: 'Students Supervised', value: profileData.researchStats.totalStudents },
          { label: 'Years Experience', value: '15+' },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Photo and Contact */}
          <div className="lg:col-span-1">
            <div className="card p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-wrh-nav">
                <img
                  src={profileData.image}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-wrh-dark mb-2">{profileData.name}</h2>
              <p className="text-wrh-green font-semibold mb-2">{profileData.position}</p>
              <p className="text-wrh-gray text-sm mb-6">{profileData.department}</p>

              {/* Contact Information */}
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-wrh-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-wrh-dark">Email</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-wrh-gray hover:text-wrh-green transition-colors text-sm"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-wrh-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-wrh-dark">Phone</p>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-wrh-gray hover:text-wrh-green transition-colors text-sm"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-wrh-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-wrh-dark">Office</p>
                    <p className="text-wrh-gray text-sm">{profileData.office}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-wrh-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-wrh-dark">Institution</p>
                    <p className="text-wrh-gray text-sm">{profileData.institution}</p>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="mt-8 space-y-3">
                <a
                  href="https://home.iiserb.ac.in/~sanjeevj/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-wrh-green hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 w-full flex items-center justify-center gap-2 no-underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>IISER Profile</span>
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="bg-transparent hover:bg-wrh-green text-wrh-green hover:text-white font-semibold py-3 px-6 rounded-lg border-2 border-wrh-green transition-all duration-200 hover:-translate-y-0.5 w-full flex items-center justify-center gap-2 no-underline"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Dr. Jha</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Research Interests */}
            <section className="card p-8">
              <h3 className="text-2xl font-bold text-wrh-dark mb-6 flex items-center">
                <Target className="mr-3 text-wrh-green" />
                Research Interests
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profileData.researchInterests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-wrh-blue flex-shrink-0" />
                    <span className="text-wrh-gray">{interest}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Statistics */}
            <section className="card p-8">
              <h3 className="text-2xl font-bold text-wrh-dark mb-6 flex items-center">
                <BookOpen className="mr-3 text-wrh-blue" />
                Research Impact
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-wrh-green mb-2">
                    {profileData.researchStats.totalPublications}
                  </div>
                  <div className="text-sm text-wrh-gray">Publications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-wrh-blue mb-2">
                    {profileData.researchStats.totalCitations}+
                  </div>
                  <div className="text-sm text-wrh-gray">Citations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-wrh-green mb-2">
                    {profileData.researchStats.hIndex}
                  </div>
                  <div className="text-sm text-wrh-gray">h-index</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-wrh-blue mb-2">
                    {profileData.researchStats.i10Index}
                  </div>
                  <div className="text-sm text-wrh-gray">i10-index</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-wrh-green mb-2">
                    {profileData.researchStats.totalStudents}
                  </div>
                  <div className="text-sm text-wrh-gray">Students Supervised</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-wrh-blue mb-2">
                    {profileData.researchStats.currentStudents}
                  </div>
                  <div className="text-sm text-wrh-gray">Current Students</div>
                </div>
              </div>
            </section>

            {/* Professional Memberships */}
            <section className="card p-8">
              <h3 className="text-2xl font-bold text-wrh-dark mb-6 flex items-center">
                <Globe className="mr-3 text-wrh-green" />
                Professional Affiliations
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-wrh-dark mb-3">Memberships</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {profileData.memberships.map((membership, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-wrh-blue" />
                        <span className="text-wrh-gray text-sm">{membership}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-wrh-dark mb-3">Editorial Roles</h4>
                  <div className="space-y-2">
                    {profileData.editorialRoles.map((role, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-wrh-green mt-1 flex-shrink-0" />
                        <span className="text-wrh-gray text-sm">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
            <GraduationCap className="mr-3 text-wrh-blue" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profileData.education.map((edu, index) => (
              <div key={index} className="card p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-wrh-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-wrh-green" />
                  </div>
                  <h4 className="font-bold text-wrh-dark mb-2">{edu.degree}</h4>
                  <p className="text-wrh-blue font-semibold text-sm">{edu.institution}</p>
                  <p className="text-wrh-gray text-sm">{edu.year}</p>
                </div>
                <p className="text-wrh-gray text-sm text-center">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
            <Briefcase className="mr-3 text-wrh-green" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {profileData.experience.map((exp, index) => (
              <div key={index} className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-wrh-dark">{exp.position}</h4>
                    <p className="text-wrh-blue">{exp.organization}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-wrh-gray text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </p>
                    <p className="text-wrh-gray text-sm flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
            <Award className="mr-3 text-wrh-green" />
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profileData.awards.map((award, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-wrh-dark mb-1">{award.title}</h4>
                    <p className="text-wrh-blue text-sm font-semibold">{award.organization}</p>
                    <p className="text-wrh-gray text-sm mb-2">{award.year}</p>
                    <p className="text-wrh-gray text-sm">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
            <BookOpen className="mr-3 text-wrh-blue" />
            Teaching
          </h3>
          <div className="card p-8">
            <h4 className="font-semibold text-wrh-dark mb-4">Courses Taught</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profileData.teachingCourses.map((course, index) => (
                <div key={index} className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-wrh-green" />
                  <span className="text-wrh-gray">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-wrh-green to-wrh-blue rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Interested in Collaboration?</h3>
          <p className="text-lg mb-8 opacity-90">
            Dr. Jha welcomes collaborations in hydrology, climate science, and water resources
            research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${profileData.email}?subject=Research Collaboration Inquiry`}
              className="bg-white text-wrh-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Send Research Inquiry
            </a>
            <a
              href="/publications"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-wrh-dark transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              View Publications
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
