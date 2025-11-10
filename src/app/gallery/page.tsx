'use client'

import { useState, useMemo, useEffect } from 'react'
import { Camera, Calendar, MapPin, Eye, Search, Image as ImageIcon, Play, X } from 'lucide-react'
import PageHero from '@/components/PageHero'

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'Field Work in Western Ghats',
      type: 'image',
      category: 'Field Work',
      date: '2024-02-15',
      location: 'Western Ghats, Maharashtra',
      description:
        'Team conducting hydrological measurements and water quality sampling in the Western Ghats region.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      thumbnail:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      tags: ['fieldwork', 'western-ghats', 'sampling', 'hydrology'],
      views: 245,
      featured: true,
    },
    {
      id: 2,
      title: 'Lab Equipment Setup',
      type: 'image',
      category: 'Laboratory',
      date: '2024-01-20',
      location: 'WRH Lab, IISER Bhopal',
      description: 'Setting up new water quality analysis equipment in our laboratory.',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop',
      thumbnail:
        'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
      tags: ['laboratory', 'equipment', 'analysis', 'setup'],
      views: 189,
      featured: false,
    },
    {
      id: 3,
      title: 'AGU Fall Meeting 2023',
      type: 'image',
      category: 'Conference',
      date: '2023-12-12',
      location: 'San Francisco, USA',
      description:
        'Team members presenting research at the American Geophysical Union Fall Meeting.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
      thumbnail:
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
      tags: ['conference', 'presentation', 'agu', 'research'],
      views: 312,
      featured: true,
    },
    {
      id: 4,
      title: 'Monsoon Data Collection',
      type: 'video',
      category: 'Field Work',
      date: '2023-08-25',
      location: 'Central India',
      description:
        'Time-lapse video of automated weather station data collection during monsoon season.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
      tags: ['monsoon', 'data-collection', 'weather-station', 'automation'],
      views: 456,
      featured: true,
      duration: '2:34',
    },
    {
      id: 5,
      title: 'Student Workshop Activities',
      type: 'image',
      category: 'Education',
      date: '2023-10-15',
      location: 'IISER Bhopal',
      description: 'Graduate students participating in hands-on hydrological modeling workshop.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      thumbnail:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
      tags: ['workshop', 'students', 'training', 'modeling'],
      views: 178,
      featured: false,
    },
    {
      id: 6,
      title: 'River Flow Measurement',
      type: 'image',
      category: 'Field Work',
      date: '2023-07-10',
      location: 'Narmada River',
      description:
        'Team measuring river discharge using ADCP (Acoustic Doppler Current Profiler) technology.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      thumbnail:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      tags: ['river', 'measurement', 'adcp', 'discharge'],
      views: 289,
      featured: false,
    },
    {
      id: 7,
      title: 'Lab Team Meeting',
      type: 'image',
      category: 'Lab Life',
      date: '2023-09-05',
      location: 'WRH Lab, IISER Bhopal',
      description: 'Weekly lab meeting discussing ongoing research projects and collaborations.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      thumbnail:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      tags: ['meeting', 'team', 'discussion', 'collaboration'],
      views: 134,
      featured: false,
    },
    {
      id: 8,
      title: 'Urban Hydrology Study',
      type: 'image',
      category: 'Research',
      date: '2023-11-08',
      location: 'Bhopal City',
      description: 'Urban runoff monitoring and stormwater management assessment in Bhopal.',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=600&fit=crop',
      thumbnail:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=300&fit=crop',
      tags: ['urban', 'stormwater', 'runoff', 'monitoring'],
      views: 267,
      featured: false,
    },
    {
      id: 9,
      title: 'Drone Survey Operations',
      type: 'video',
      category: 'Field Work',
      date: '2023-06-20',
      location: 'Betwa River Basin',
      description: 'Aerial survey using drones for watershed mapping and flood plain analysis.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      thumbnail:
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop',
      tags: ['drone', 'aerial', 'mapping', 'watershed'],
      views: 398,
      featured: false,
      duration: '4:12',
    },
    {
      id: 10,
      title: 'Laboratory Analysis Session',
      type: 'image',
      category: 'Laboratory',
      date: '2023-05-15',
      location: 'WRH Lab, IISER Bhopal',
      description: 'PhD student conducting water quality analysis using spectrophotometer.',
      image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=800&h=600&fit=crop',
      thumbnail:
        'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop',
      tags: ['analysis', 'spectrophotometer', 'water-quality', 'research'],
      views: 156,
      featured: false,
    },
    {
      id: 11,
      title: 'International Collaboration Meeting',
      type: 'image',
      category: 'Conference',
      date: '2023-04-18',
      location: 'Virtual Meeting',
      description: 'Online collaboration meeting with researchers from University of Edinburgh.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      tags: ['collaboration', 'international', 'virtual', 'partnership'],
      views: 203,
      featured: false,
    },
    {
      id: 12,
      title: 'Field Camp Setup',
      type: 'video',
      category: 'Field Work',
      date: '2023-03-22',
      location: 'Chambal River',
      description: 'Setting up field camp for extended hydrological monitoring campaign.',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop',
      thumbnail:
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop',
      tags: ['field-camp', 'monitoring', 'setup', 'campaign'],
      views: 321,
      featured: false,
      duration: '1:45',
    },
  ]

  const categories = [
    { name: 'All', count: galleryItems.length },
    {
      name: 'Field Work',
      count: galleryItems.filter((item) => item.category === 'Field Work').length,
    },
    {
      name: 'Laboratory',
      count: galleryItems.filter((item) => item.category === 'Laboratory').length,
    },
    {
      name: 'Conference',
      count: galleryItems.filter((item) => item.category === 'Conference').length,
    },
    { name: 'Research', count: galleryItems.filter((item) => item.category === 'Research').length },
    {
      name: 'Education',
      count: galleryItems.filter((item) => item.category === 'Education').length,
    },
    { name: 'Lab Life', count: galleryItems.filter((item) => item.category === 'Lab Life').length },
  ]

  // State for filtering and modal
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  // Filter items based on category and search
  const filteredItems = useMemo(() => {
    let filtered = galleryItems

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    return filtered
  }, [selectedCategory, searchQuery])

  const featuredItems = filteredItems.filter((item) => item.featured)
  const regularItems = filteredItems.filter((item) => !item.featured)

  // Open image modal
  const openImage = (item: (typeof galleryItems)[0]) => {
    setSelectedImage(item)
  }

  // Close image modal
  const closeImage = () => {
    setSelectedImage(null)
  }

  // Handle keyboard events for modal
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeImage()
    }
  }

  // Add keyboard event listener when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <div className="min-h-screen bg-wrh-bg">
      {/* Hero Section */}
      <PageHero
        title="Gallery"
        description="Explore our research activities, field work, and lab life through photos and videos"
        icon={Camera}
        stats={[
          { label: 'Photos', value: galleryItems.filter((item) => item.type === 'image').length },
          { label: 'Videos', value: galleryItems.filter((item) => item.type === 'video').length },
          {
            label: 'Total Views',
            value: galleryItems.reduce((sum, item) => sum + item.views, 0).toLocaleString(),
          },
        ]}
      />

      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wrh-gray"
                size={20}
              />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-wrh-green focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    selectedCategory === category.name
                      ? 'bg-wrh-green text-white border-wrh-green'
                      : 'bg-wrh-bg hover:bg-wrh-green hover:text-white text-wrh-gray border-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Gallery */}
        {featuredItems.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
              <Camera className="mr-3 text-wrh-green" size={32} />
              Featured
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredItems.map((item) => (
                <div key={item.id} className="group cursor-pointer" onClick={() => openImage(item)}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Image/Video Container */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Video Play Button */}
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 rounded-full p-4 group-hover:bg-opacity-70 transition-all">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                              <Play className="text-wrh-green ml-1" size={20} />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Duration for videos */}
                      {item.duration && (
                        <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                          {item.duration}
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-white bg-opacity-90 text-wrh-dark text-sm font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-wrh-green text-white text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* View Count */}
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye size={16} />
                        <span className="text-sm">{item.views} views</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-6">
                      <h3 className="text-lg font-bold text-wrh-dark mb-2 group-hover:text-wrh-green transition-colors">
                        {item.title}
                      </h3>

                      <div className="flex items-center text-sm text-wrh-gray mb-3 space-x-4">
                        <span className="flex items-center">
                          <Calendar className="mr-1" size={14} />
                          {formatDate(item.date)}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="mr-1" size={14} />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-sm text-wrh-gray mb-4 line-clamp-2">{item.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-wrh-bg text-wrh-gray text-xs rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Gallery Items */}
        <section>
          <h2 className="text-3xl font-bold text-wrh-dark mb-8 flex items-center">
            <ImageIcon className="mr-3 text-wrh-blue" size={32} />
            All Media ({filteredItems.length} items)
          </h2>

          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <ImageIcon className="mx-auto text-wrh-gray mb-4" size={48} />
              <h3 className="text-xl font-semibold text-wrh-dark mb-2">No items found</h3>
              <p className="text-wrh-gray">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group cursor-pointer" onClick={() => openImage(item)}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Image/Video Container */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Video Play Button */}
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 rounded-full p-2">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <Play className="text-wrh-green ml-0.5" size={16} />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Duration for videos */}
                      {item.duration && (
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-1.5 py-0.5 rounded text-xs">
                          {item.duration}
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-1 bg-white bg-opacity-90 text-wrh-dark text-xs font-medium rounded">
                          {item.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {item.featured && (
                        <div className="absolute top-2 right-2">
                          <span className="px-1.5 py-0.5 bg-wrh-green text-white text-xs font-semibold rounded">
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* View Count */}
                      <div className="absolute bottom-2 left-2 flex items-center space-x-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye size={12} />
                        <span className="text-xs">{item.views}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-wrh-dark mb-1 group-hover:text-wrh-green transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      <div className="flex items-center text-xs text-wrh-gray mb-2">
                        <Calendar className="mr-1" size={12} />
                        {formatDate(item.date)}
                      </div>

                      <p className="text-xs text-wrh-gray line-clamp-2 mb-3">{item.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 bg-wrh-bg text-wrh-gray text-xs rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
            >
              <X size={24} />
            </button>

            {/* Image Container */}
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Video Play Button for videos */}
                {selectedImage.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-6">
                      <Play className="text-white" size={32} />
                    </div>
                  </div>
                )}

                {/* Duration Badge for videos */}
                {selectedImage.duration && (
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded">
                    {selectedImage.duration}
                  </div>
                )}
              </div>

              {/* Image Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-wrh-dark mb-2">{selectedImage.title}</h3>
                    <div className="flex items-center text-sm text-wrh-gray space-x-4">
                      <span className="flex items-center">
                        <Calendar className="mr-1" size={16} />
                        {formatDate(selectedImage.date)}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="mr-1" size={16} />
                        {selectedImage.location}
                      </span>
                      <span className="flex items-center">
                        <Eye className="mr-1" size={16} />
                        {selectedImage.views} views
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-wrh-bg text-wrh-dark text-sm font-medium rounded-full">
                      {selectedImage.category}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        selectedImage.type === 'video'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {selectedImage.type}
                    </span>
                  </div>
                </div>

                <p className="text-wrh-gray mb-4">{selectedImage.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-wrh-blue text-white text-sm rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
