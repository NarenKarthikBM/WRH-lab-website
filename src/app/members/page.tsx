import { Metadata } from 'next'
import { Mail, MapPin, GraduationCap, Users } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Team Members - WRH Lab Research Team',
  description:
    'Meet our dedicated research team at Water Resources & Hydrology Lab, IISER Bhopal. PhD scholars, researchers, and collaborators advancing water science and environmental research.',
  keywords: [
    'research team',
    'water resources researchers',
    'PhD students',
    'IISER Bhopal faculty',
    'hydrology research group',
    'Dr. Sanjeev K. Jha team',
    'water science researchers',
    'environmental research team',
  ],
  openGraph: {
    title: 'WRH Lab Team - Dedicated Water Resources Researchers',
    description: 'Our passionate team of researchers advancing water science at IISER Bhopal.',
  },
}

export default function Members() {
  // Team data based on Dr. Sanjeev K. Jha's actual lab
  const groupHead = {
    id: 1,
    name: 'Dr. Sanjeev K. Jha',
    position: 'Group Head & Associate Professor',
    department: 'Department of Earth and Environmental Sciences',
    email: 'sanjeevj@iiserb.ac.in',
    image: 'https://via.placeholder.com/300x300?text=Dr.+Jha',
    expertise: [
      'Hydrological Forecasting',
      'Post-processing hydro-meteorological data',
      'Multiple point Geostatistics',
    ],
    education: 'Ph.D. (Civil and Environmental Engineering), University of California Davis, 2009',
    bio: 'Associate Professor with expertise in hydrological forecasting, post-processing of hydro-meteorological data, and multiple-point geostatistics. Distinguished Teacher Award recipient for 2023-24.',
  }

  const otherMembers = [
    {
      id: 2,
      name: 'Mr. Rishu Pandey',
      position: 'PhD Scholar',
      department: 'Department of Earth and Environmental Sciences',
      email: 'rishu@iiserb.ac.in',
      image: 'https://via.placeholder.com/300x300?text=Rishu',
      expertise: ['Hydrological Modeling', 'Data Analysis', 'Statistical Methods'],
      education: 'M.Tech in Water Resources Engineering',
      bio: 'PhD student working on hydrological modeling and data analysis. Joined the lab in January 2025.',
    },
    {
      id: 3,
      name: 'Mr. Naman Kumar Rajouria',
      position: 'PhD Scholar',
      department: 'Department of Earth and Environmental Sciences',
      email: 'naman@iiserb.ac.in',
      image: 'https://via.placeholder.com/300x300?text=Naman',
      expertise: ['Hydrological Forecasting', 'Remote Sensing', 'GIS Applications'],
      education: 'M.Tech in Remote Sensing',
      bio: 'PhD student focusing on hydrological forecasting methods. Started in August 2024.',
    },
    {
      id: 4,
      name: 'Mr. Rohit Verma',
      position: 'PhD Scholar',
      department: 'Department of Earth and Environmental Sciences',
      email: 'rohit@iiserb.ac.in',
      image: 'https://via.placeholder.com/300x300?text=Rohit',
      expertise: ['Statistical Hydrology', 'Post-processing', 'Climate Data'],
      education: 'M.Sc in Atmospheric Sciences',
      bio: 'PhD student working on post-processing of hydro-meteorological data. Joined in August 2024.',
    },
    {
      id: 5,
      name: 'Ms. Pragati Prajapati',
      position: 'PhD Scholar',
      department: 'Department of Earth and Environmental Sciences',
      email: 'pragati@iiserb.ac.in',
      image: 'https://via.placeholder.com/300x300?text=Pragati',
      expertise: ['Urban Hydrology', 'Flood Risk Assessment', 'Climate Change'],
      education: 'M.Tech in Environmental Engineering',
      bio: 'PhD student working on urban flood vulnerability assessment. Joined in August 2022.',
    },
    {
      id: 6,
      name: 'Ms. Kavya M',
      position: 'PhD Scholar',
      department: 'Department of Earth and Environmental Sciences',
      email: 'kavya@iiserb.ac.in',
      image: 'https://via.placeholder.com/300x300?text=Kavya',
      expertise: ['Watershed Hydrology', 'Remote Sensing', 'Hydrological Modeling'],
      education: 'M.Tech in Water Resources Engineering',
      bio: 'PhD student focusing on watershed hydrology using reanalysis data. Started in August 2021.',
    },
    {
      id: 7,
      name: 'Mr. Anirudh Arora',
      position: 'MS Student',
      department: 'Department of Earth and Environmental Sciences',
      email: 'anirudh@iiserb.ac.in',
      image: 'https://via.placeholder.com/300x300?text=Anirudh',
      expertise: ['Hydrology', 'Data Analysis', 'Statistical Methods'],
      education: 'B.Tech in Civil Engineering',
      bio: 'MS student working on hydrological data analysis. Joined in June 2025.',
    },
    {
      id: 8,
      name: 'Mr. Sanyog Sharma',
      position: 'MS Student',
      department: 'Department of Earth and Environmental Sciences',
      email: 'sanyog@iiserb.ac.in',
      image: 'https://via.placeholder.com/300x300?text=Sanyog',
      expertise: ['Geostatistics', 'Spatial Analysis', 'Water Resources'],
      education: 'B.Sc in Earth Sciences',
      bio: 'MS student focusing on geostatistical analysis of water resources. Started in June 2025.',
    },
  ]

  const teamStats = {
    totalMembers: 1 + otherMembers.length,
    phdStudents: otherMembers.filter((member) => member.position.includes('PhD')).length,
    msStudents: otherMembers.filter((member) => member.position.includes('MS')).length,
  }

  return (
    <div className="min-h-screen bg-wrh-bg">
      {/* Hero Section */}
      <PageHero
        title="Our Team"
        description="Meet the dedicated researchers, students, and faculty advancing water science at IISER Bhopal"
        icon={Users}
        stats={[
          { label: 'Team Members', value: teamStats.totalMembers },
          { label: 'PhD Students', value: teamStats.phdStudents },
          { label: 'MS Students', value: teamStats.msStudents },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Group Head Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-wrh-dark text-center mb-8">Group Head</h2>
          <div className="flex justify-center">
            <article className="card p-6 hover:shadow-xl transition-shadow duration-300 max-w-md">
              {/* Profile image */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-wrh-nav">
                <img
                  src={groupHead.image}
                  alt={groupHead.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and position */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-wrh-dark mb-2">{groupHead.name}</h3>
                <p className="text-wrh-green font-semibold mb-1">{groupHead.position}</p>
                <p className="text-wrh-gray text-sm">{groupHead.department}</p>
              </div>

              {/* Contact */}
              <div className="flex items-center justify-center gap-2 mb-4 text-sm text-wrh-gray">
                <Mail size={16} />
                <a
                  href={`mailto:${groupHead.email}`}
                  className="hover:text-wrh-green transition-colors duration-200"
                >
                  {groupHead.email}
                </a>
              </div>

              {/* Education */}
              <div className="flex items-center gap-2 mb-4 text-sm text-wrh-gray">
                <GraduationCap size={16} className="flex-shrink-0" />
                <span>{groupHead.education}</span>
              </div>

              {/* Expertise tags */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-wrh-dark mb-2">Research Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  {groupHead.expertise.map((area) => (
                    <span
                      key={area}
                      className="bg-wrh-green bg-opacity-10 text-white px-2 py-1 rounded-full text-xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <p className="text-wrh-gray text-sm leading-relaxed text-center">{groupHead.bio}</p>

              {/* Link to full profile */}
              <div className="mt-6 text-center">
                <a href="/group-head" className="btn-primary">
                  View Full Profile
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-wrh-dark text-center mb-8">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherMembers.map((member) => (
              <article
                key={member.id}
                className="card p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Profile image */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-wrh-nav">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name and position */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-wrh-dark mb-2">{member.name}</h3>
                  <p className="text-wrh-green font-semibold mb-1">{member.position}</p>
                  <p className="text-wrh-gray text-sm">{member.department}</p>
                </div>

                {/* Contact */}
                <div className="flex items-center justify-center gap-2 mb-4 text-sm text-wrh-gray">
                  <Mail size={16} />
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-wrh-green transition-colors duration-200"
                  >
                    {member.email}
                  </a>
                </div>

                {/* Education */}
                <div className="flex items-center gap-2 mb-4 text-sm text-wrh-gray">
                  <GraduationCap size={16} className="flex-shrink-0" />
                  <span>{member.education}</span>
                </div>

                {/* Expertise tags */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-wrh-dark mb-2">Research Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((area) => (
                      <span
                        key={area}
                        className="bg-wrh-green bg-opacity-10 text-white px-2 py-1 rounded-full text-xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-wrh-gray text-sm leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Join us section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-wrh-dark mb-4">Join Our Research Team</h2>
          <p className="text-wrh-gray mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for passionate researchers to join our team. Explore current
            opportunities for PhD, MS, and Postdoc positions.
          </p>
          <a href="/opportunities" className="btn-primary">
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  )
}
