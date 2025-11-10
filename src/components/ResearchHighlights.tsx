import { ArrowRight, BookOpen, MapPin } from 'lucide-react'
import Link from 'next/link'

/**
 * Research highlights section showcasing key research areas and recent work
 * Features: Responsive cards, hover effects, accessible design
 */
export default function ResearchHighlights() {
  const highlights = [
    {
      id: 1,
      title: 'Hydrological Forecasting & Post-processing',
      description:
        'Advanced statistical methods for improving the accuracy of hydrological and meteorological forecasts through innovative post-processing techniques.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop',
      tags: ['Forecasting', 'Post-processing', 'Statistical Methods'],
      link: '/projects/forecasting',
      stats: '25+ Publications',
    },
    {
      id: 2,
      title: 'Multiple-point Geostatistics',
      description:
        'Innovative geostatistical approaches for spatial data modeling, climate downscaling, and uncertainty quantification in hydrological applications.',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?w=400&h=250&fit=crop',
      tags: ['Geostatistics', 'Spatial Modeling', 'Downscaling'],
      link: '/projects/geostatistics',
      stats: 'Featured in WRR',
    },
    {
      id: 3,
      title: 'Urban Flood Vulnerability Assessment',
      description:
        'Comprehensive assessment of urban flood vulnerability using impact-based forecasting and multi-aggregation approaches for risk reduction.',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=250&fit=crop',
      tags: ['Urban Floods', 'Vulnerability', 'Risk Assessment'],
      link: '/projects/urban-floods',
      stats: 'Mumbai Case Study',
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Research Highlights</h2>
          <p className="section-subtitle">
            Discover our cutting-edge research addressing critical water challenges through
            innovative interdisciplinary approaches.
          </p>
        </div>

        {/* Research cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight) => (
            <article key={highlight.id} className="card group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-xl h-48">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-wrh-green text-white px-3 py-1 rounded-full text-sm font-medium">
                  {highlight.stats}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-wrh-dark mb-3 group-hover:text-wrh-green transition-colors duration-200">
                  {highlight.title}
                </h3>

                <p className="text-wrh-gray mb-4 line-clamp-3">{highlight.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {highlight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-wrh-bg text-wrh-gray px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more link */}
                <Link
                  href={highlight.link}
                  className="inline-flex items-center gap-2 text-wrh-green hover:text-wrh-blue font-semibold transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Key metrics */}
        <div className="flex justify-evenly gap-6 bg-wrh-bg rounded-2xl p-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <BookOpen className="w-6 h-6 text-wrh-green" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-wrh-dark">50+</div>
            <div className="text-sm text-wrh-gray">Publications</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="w-6 h-6 text-wrh-blue" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-wrh-dark">12</div>
            <div className="text-sm text-wrh-gray">Research Sites</div>
          </div>

          {/* <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-purple-500" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-wrh-dark">₹2.5Cr</div>
            <div className="text-sm text-wrh-gray">Research Funding</div>
          </div> */}

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <BookOpen className="w-6 h-6 text-emerald-500" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-wrh-dark">8+</div>
            <div className="text-sm text-wrh-gray">Years Active</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="bg-wrh-green hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2 no-underline"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
