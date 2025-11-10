import { Metadata } from 'next'
import {
  Calendar,
  Tag,
  User,
  ArrowRight,
  Newspaper,
  Award,
  Users,
  ExternalLink,
  Bell,
} from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Lab Updates - Latest News & Achievements',
  description:
    'Stay updated with latest news, achievements, and announcements from Water Resources & Hydrology Lab, IISER Bhopal. Research milestones, awards, and lab activities.',
  keywords: [
    'lab news',
    'research updates',
    'WRH lab achievements',
    'IISER Bhopal news',
    'water research news',
    'academic announcements',
    'research milestones',
    'lab activities',
  ],
  openGraph: {
    title: 'WRH Lab Updates - Latest Research News & Achievements',
    description:
      'Stay informed about our latest research breakthroughs, awards, and lab activities.',
  },
}

export default function Updates() {
  const updates = [
    {
      id: 1,
      type: 'Award',
      title: 'Dr. Sanjeev K. Jha Receives Distinguished Teacher Award',
      date: '2024-03-15',
      excerpt:
        'Dr. Jha has been honored with the Distinguished Teacher Award for 2023-24 in recognition of his outstanding contributions to teaching and mentoring.',
      content:
        "The IISER Bhopal community congratulates Dr. Sanjeev K. Jha on receiving the Distinguished Teacher Award for the academic year 2023-24. This prestigious award recognizes his exceptional dedication to teaching, innovative pedagogical approaches, and outstanding mentorship of undergraduate and graduate students. Dr. Jha's commitment to excellence in education has made a significant impact on the academic community.",
      image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=500&h=300&fit=crop',
      category: 'Recognition',
      featured: true,
    },
    {
      id: 2,
      type: 'Research',
      title: 'New Publication in Water Resources Research',
      date: '2024-02-28',
      excerpt:
        'Our latest research on "Climate-Informed Hydrological Forecasting" has been published in Water Resources Research journal.',
      content:
        'The WRH Lab is proud to announce the publication of our latest research titled "Climate-Informed Hydrological Forecasting: A Machine Learning Approach for Monsoon Prediction" in the prestigious Water Resources Research journal. This study presents a novel framework for integrating climate information into hydrological forecasting models, improving prediction accuracy for monsoon-driven river systems across India.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'Publication',
      featured: true,
    },
    {
      id: 3,
      type: 'News',
      title: 'New PhD Students Join the Lab',
      date: '2024-01-15',
      excerpt:
        'We welcome two new PhD students, Rishu Pandey and Naman Kumar Rajouria, to our research team.',
      content:
        'The WRH Lab is delighted to welcome two new PhD students to our research team. Mr. Rishu Pandey, who joined in January 2025, brings expertise in hydrological modeling and data analysis. Mr. Naman Kumar Rajouria, who started in August 2024, specializes in hydrological forecasting and remote sensing applications. Both students will contribute to ongoing research projects while pursuing their doctoral studies.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      category: 'Lab News',
      featured: false,
    },
    {
      id: 4,
      type: 'Conference',
      title: 'Successful Presentation at AGU Fall Meeting 2023',
      date: '2023-12-12',
      excerpt:
        'Lab members presented three research papers at the American Geophysical Union Fall Meeting in San Francisco.',
      content:
        'The WRH Lab had a strong presence at the AGU Fall Meeting 2023 in San Francisco, with team members presenting three research papers on various aspects of hydrology and water resources. The presentations covered topics ranging from climate change impacts on monsoon hydrology to urban water security assessment. The conference provided excellent opportunities for networking and collaboration with international researchers.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop',
      category: 'Conference',
      featured: false,
    },
    {
      id: 5,
      type: 'Funding',
      title: 'New DST Project Grant Awarded',
      date: '2023-11-20',
      excerpt:
        'The lab has been awarded a ₹85 lakh grant from DST for research on climate change impacts on monsoon hydrology.',
      content:
        'The Department of Science and Technology (DST) has awarded a significant research grant of ₹85 lakhs to the WRH Lab for a three-year project on "Climate Change Impacts on Monsoon Hydrology." This funding will support advanced research on understanding how changing climate patterns affect monsoon systems and their implications for water resource management across the Indian subcontinent.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
      category: 'Funding',
      featured: false,
    },
    {
      id: 6,
      type: 'Workshop',
      title: 'Hydrology Workshop for Graduate Students',
      date: '2023-10-15',
      excerpt:
        'Successfully organized a two-day workshop on "Advanced Hydrological Modeling Techniques" for graduate students.',
      content:
        'The WRH Lab organized a comprehensive two-day workshop on "Advanced Hydrological Modeling Techniques" for graduate students from various Indian institutions. The workshop covered theoretical foundations and hands-on training in numerical modeling, statistical analysis, and data visualization. Over 40 students participated, making it a highly successful knowledge-sharing event.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop',
      category: 'Outreach',
      featured: false,
    },
    {
      id: 7,
      type: 'Collaboration',
      title: 'New Partnership with IIT Delhi',
      date: '2023-09-08',
      excerpt:
        'Established collaborative research partnership with IIT Delhi for joint water resources research projects.',
      content:
        'The WRH Lab has established a new collaborative research partnership with the Department of Civil Engineering at IIT Delhi. This collaboration will focus on joint research projects related to urban water systems, sustainable water management, and climate resilience. The partnership includes student exchange programs and shared access to research facilities.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'Collaboration',
      featured: false,
    },
    {
      id: 8,
      type: 'Publication',
      title: 'Review Paper Published in Nature Water',
      date: '2023-08-22',
      excerpt:
        'Comprehensive review on "Machine Learning Applications in Hydrology" published in Nature Water journal.',
      content:
        'Our comprehensive review paper titled "Machine Learning Applications in Hydrology: Current State and Future Prospects" has been published in the prestigious Nature Water journal. This review synthesizes recent advances in applying machine learning techniques to hydrological problems and identifies future research directions in this rapidly evolving field.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'Publication',
      featured: false,
    },
  ]

  const announcements = [
    {
      id: 1,
      title: 'PhD Application Deadline Extended',
      date: '2025-01-10',
      type: 'deadline',
      content:
        "The application deadline for PhD positions has been extended to March 15, 2025. Don't miss this opportunity!",
    },
    {
      id: 2,
      title: 'Lab Seminar Series Resumes',
      date: '2025-01-08',
      type: 'event',
      content:
        'Our weekly lab seminar series will resume on January 15, 2025. First speaker: Dr. Sarah Johnson from University of Edinburgh.',
    },
    {
      id: 3,
      title: 'New Equipment Arrival',
      date: '2025-01-05',
      type: 'equipment',
      content:
        'New high-performance computing cluster has arrived and is being set up for hydrological modeling research.',
    },
  ]

  const categories = [
    { name: 'All', count: updates.length },
    { name: 'Publication', count: updates.filter((u) => u.category === 'Publication').length },
    { name: 'Recognition', count: updates.filter((u) => u.category === 'Recognition').length },
    { name: 'Lab News', count: updates.filter((u) => u.category === 'Lab News').length },
    { name: 'Conference', count: updates.filter((u) => u.category === 'Conference').length },
    { name: 'Funding', count: updates.filter((u) => u.category === 'Funding').length },
    { name: 'Outreach', count: updates.filter((u) => u.category === 'Outreach').length },
    { name: 'Collaboration', count: updates.filter((u) => u.category === 'Collaboration').length },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Award':
        return <Award className="text-yellow-500" size={20} />
      case 'Research':
      case 'Publication':
        return <Newspaper className="text-blue-500" size={20} />
      case 'News':
        return <Bell className="text-green-500" size={20} />
      case 'Conference':
        return <Users className="text-purple-500" size={20} />
      case 'Funding':
        return <Tag className="text-red-500" size={20} />
      case 'Workshop':
        return <User className="text-indigo-500" size={20} />
      case 'Collaboration':
        return <Users className="text-teal-500" size={20} />
      default:
        return <Bell className="text-gray-500" size={20} />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Publication':
        return 'bg-blue-100 text-blue-800'
      case 'Recognition':
        return 'bg-yellow-100 text-yellow-800'
      case 'Lab News':
        return 'bg-green-100 text-green-800'
      case 'Conference':
        return 'bg-purple-100 text-purple-800'
      case 'Funding':
        return 'bg-red-100 text-red-800'
      case 'Outreach':
        return 'bg-indigo-100 text-indigo-800'
      case 'Collaboration':
        return 'bg-teal-100 text-teal-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Separate featured and regular updates
  const featuredUpdates = updates.filter((update) => update.featured)
  // const regularUpdates = updates.filter((update) => !update.featured)

  return (
    <div className="min-h-screen bg-wrh-bg">
      {/* Hero Section */}
      <PageHero
        title="Latest Updates"
        description="Stay updated with the latest news, research, and developments from our lab"
        icon={Newspaper}
        stats={[
          { label: 'News Updates', value: updates.length },
          { label: 'Announcements', value: announcements.length },
          {
            label: 'This Month',
            value: updates.filter((u) => new Date(u.date).getMonth() === new Date().getMonth())
              .length,
          },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Announcements Bar */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-wrh-dark mb-6 flex items-center">
            <Bell className="mr-3 text-wrh-green" size={28} />
            Recent Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white border-l-4 border-wrh-green rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-wrh-green">
                    {formatDate(announcement.date)}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      announcement.type === 'deadline'
                        ? 'bg-red-100 text-red-600'
                        : announcement.type === 'event'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {announcement.type}
                  </span>
                </div>
                <h3 className="font-semibold text-wrh-dark mb-2">{announcement.title}</h3>
                <p className="text-sm text-wrh-gray">{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Updates */}
        {featuredUpdates.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
              <Award className="mr-3 text-yellow-500" size={32} />
              Featured Updates
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredUpdates.map((update) => (
                <article
                  key={update.id}
                  className="card overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(update.category)}`}
                      >
                        {update.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">{getTypeIcon(update.type)}</div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-wrh-gray flex items-center">
                        <Calendar className="mr-1" size={16} />
                        {formatDate(update.date)}
                      </span>
                      <span className="text-sm font-medium text-wrh-blue">{update.type}</span>
                    </div>

                    <h2 className="text-xl font-bold text-wrh-dark mb-3 group-hover:text-wrh-green transition-colors">
                      {update.title}
                    </h2>

                    <p className="text-wrh-gray mb-4">{update.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <button className="text-wrh-green hover:text-wrh-dark font-medium text-sm flex items-center transition-colors">
                        Read More
                        <ArrowRight className="ml-1" size={16} />
                      </button>
                      <ExternalLink
                        className="text-wrh-gray group-hover:text-wrh-green transition-colors"
                        size={16}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white hover:bg-wrh-green hover:text-white text-wrh-gray border border-gray-200"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* All Updates */}
        <section>
          <h2 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
            <Newspaper className="mr-3 text-wrh-blue" size={32} />
            All Updates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update) => (
              <article
                key={update.id}
                className="card overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={update.image}
                    alt={update.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(update.category)}`}
                    >
                      {update.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">{getTypeIcon(update.type)}</div>
                  {update.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-wrh-gray flex items-center">
                      <Calendar className="mr-1" size={14} />
                      {formatDate(update.date)}
                    </span>
                    <span className="text-xs font-medium text-wrh-blue">{update.type}</span>
                  </div>

                  <h3 className="text-lg font-bold text-wrh-dark mb-2 group-hover:text-wrh-green transition-colors line-clamp-2">
                    {update.title}
                  </h3>

                  <p className="text-sm text-wrh-gray mb-4 line-clamp-3">{update.excerpt}</p>

                  <button className="text-wrh-green hover:text-wrh-dark font-medium text-sm flex items-center transition-colors">
                    Read More
                    <ArrowRight className="ml-1" size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">Load More Updates</button>
        </div>
      </div>
    </div>
  )
}
