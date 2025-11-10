import { Award, Calendar, ExternalLink, Star } from 'lucide-react'

/**
 * Recent awards and achievements section
 * Features: Timeline layout, responsive design, external links
 */
export default function RecentAwards() {
  const awards = [
    {
      id: 1,
      title: 'Distinguished Teacher Award',
      organization: 'IISER Bhopal',
      recipient: 'Dr. Sanjeev K. Jha',
      year: '2024',
      date: '2023-24-II Semester',
      description:
        'Distinguished Teacher Award for 2023-24-II Semester at IISER Bhopal recognizing excellence in teaching and student mentorship.',
      type: 'Individual',
      prestige: 'National',
      link: 'https://www.iiserb.ac.in/',
    },
    {
      id: 2,
      title: 'AGU Research Spotlight',
      organization: 'American Geophysical Union',
      recipient: 'Dr. Sanjeev K. Jha',
      year: '2013',
      date: 'August 2013',
      description:
        'Paper "Demonstration of a geostatistical approach to physically-consistent downscaling of climate modeling simulations" selected as American Geophysical Union Research Spotlight.',
      type: 'Research',
      prestige: 'International',
      link: 'https://agupubs.onlinelibrary.wiley.com/journal/19447973',
    },
    {
      id: 3,
      title: 'Emerging Thematic Areas Recognition',
      organization: 'Water Resources Research',
      recipient: 'Dr. Sanjeev K. Jha',
      year: '2013',
      date: 'December 2013',
      description:
        'Paper on geostatistical approach to downscaling cited as emerging and dominant thematic areas in "Water Resources Research in 2013." Water Resources Research, 50, 2787-2794.',
      type: 'Research',
      prestige: 'International',
      link: 'https://agupubs.onlinelibrary.wiley.com/journal/19447973',
    },
    {
      id: 4,
      title: 'Best Paper Award',
      organization: 'Journal of Hydrology',
      recipient: 'WRH Lab Team',
      year: '2024',
      date: 'September 2024',
      description:
        "For the research paper 'Monsoon-Groundwater Interactions in the Western Ghats: A Multi-scale Analysis'.",
      type: 'Team',
      prestige: 'International',
      link: '/journals/hydrology',
    },
    {
      id: 5,
      title: 'Early Career Researcher Award',
      organization: 'International Association of Hydrological Sciences',
      recipient: 'Dr. [Postdoc/Faculty Name]',
      year: '2023',
      date: 'November 2023',
      description:
        'Recognized for innovative research in urban hydrology and sustainable water management.',
      type: 'Individual',
      prestige: 'International',
      link: 'https://iahs.info/',
    },
    {
      id: 6,
      title: 'Research Excellence Grant',
      organization: 'Department of Science and Technology, India',
      recipient: 'WRH Lab',
      year: '2023',
      date: 'August 2023',
      description:
        "₹75 Lakhs funding awarded for 'Climate-Smart Water Management in Indian Cities' project.",
      type: 'Funding',
      prestige: 'National',
      link: '/projects',
    },
  ]

  const getAwardIcon = (type: string) => {
    switch (type) {
      case 'Funding':
        return <Star className="w-5 h-5" />
      case 'Research':
        return <ExternalLink className="w-5 h-5" />
      default:
        return <Award className="w-5 h-5" />
    }
  }

  const getPrestigeColor = (prestige: string) => {
    switch (prestige) {
      case 'International':
        return 'text-purple-600 bg-purple-100'
      case 'National':
        return 'text-wrh-green bg-green-100'
      default:
        return 'text-wrh-blue bg-blue-100'
    }
  }

  return (
    <section className="py-16 lg:py-20 bg-wrh-bg">
      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Recent Awards & Recognition</h2>
          <p className="section-subtitle">
            Celebrating our achievements and contributions to the global water research community.
          </p>
        </div>

        {/* Awards timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-wrh-green transform md:-translate-x-0.5"></div>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-wrh-green rounded-full transform -translate-x-1.5 md:-translate-x-1.5 z-10">
                  <div className="w-full h-full bg-white rounded-full border-2 border-wrh-green"></div>
                </div>

                {/* Award card */}
                <div
                  className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-wrh-green bg-opacity-10 p-2 rounded-lg">
                          {getAwardIcon(award.type)}
                        </div>
                        <div>
                          <h3 className="font-bold text-wrh-dark text-lg">{award.title}</h3>
                          <p className="text-wrh-gray text-sm">{award.organization}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getPrestigeColor(award.prestige)}`}
                        >
                          {award.prestige}
                        </span>
                        <div className="flex items-center gap-1 text-wrh-gray text-sm">
                          <Calendar size={14} />
                          <span>{award.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Recipient */}
                    <div className="mb-3">
                      <span className="font-semibold text-wrh-dark text-sm">Recipient: </span>
                      <span className="text-wrh-gray text-sm">{award.recipient}</span>
                    </div>

                    {/* Description */}
                    <p className="text-wrh-gray mb-4 leading-relaxed">{award.description}</p>

                    {/* External link */}
                    {award.link && (
                      <a
                        href={award.link}
                        target={award.link.startsWith('http') ? '_blank' : undefined}
                        rel={award.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 text-wrh-green hover:text-wrh-blue font-semibold transition-colors duration-200 text-sm"
                      >
                        Learn More
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement stats */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-wrh-dark text-center mb-8">Recognition Summary</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-wrh-green mb-2">12+</div>
              <div className="text-sm text-wrh-gray">Awards Received</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-wrh-blue mb-2">₹3Cr+</div>
              <div className="text-sm text-wrh-gray">Grant Funding</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">8</div>
              <div className="text-sm text-wrh-gray">International Recognition</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-2">15+</div>
              <div className="text-sm text-wrh-gray">Media Features</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
