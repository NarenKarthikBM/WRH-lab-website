'use client'

import { useState, useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'

/**
 * News ticker/banner component for displaying important updates
 * Features: Auto-scroll, dismissible, responsive design
 */
export default function NewsTicker() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Latest news from the WRH Lab
  const newsItems = [
    {
      id: 1,
      text: "🎉 New research paper published in Urban Climate - 'Analysis of urban flood vulnerability at the sub-city administrative unit level in Mumbai'",
      link: '/publications',
      type: 'publication',
    },
    {
      id: 2,
      text: '📢 Multiple PhD and MS positions available - Join our team working on hydrological forecasting and geostatistics',
      link: '/opportunities',
      type: 'opportunity',
    },
    {
      id: 3,
      text: '🏆 Dr. Sanjeev K. Jha receives Distinguished Teacher Award for 2023-24-II Semester at IISER Bhopal',
      link: '/members',
      type: 'award',
    },
    {
      id: 4,
      text: '🔬 New research on avalanche vulnerability assessment using multi-aggregation approach published in Environment, Development and Sustainability',
      link: '/publications',
      type: 'research',
    },
  ]

  // Auto-advance news items
  useEffect(() => {
    if (!isVisible || newsItems.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isVisible, newsItems.length])

  if (!isVisible) return null

  const currentNews = newsItems[currentIndex]

  return (
    <div className="bg-gradient-to-r from-wrh-green to-emerald-500 text-white py-3 px-4 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-pulse bg-white h-full w-full"></div>
      </div>

      <div className="relative max-w-8xl mx-auto flex items-center justify-between">
        {/* News content */}
        <div className="flex-1 flex items-center">
          <span className="bg-blue-500 bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold mr-4 hidden sm:inline">
            NEWS
          </span>

          <div className="flex-1">
            {currentNews.link ? (
              <a
                href={currentNews.link}
                className="hover:text-green-100 transition-colors duration-200 flex items-center gap-2 text-sm md:text-base"
              >
                <span>{currentNews.text}</span>
                <ExternalLink size={16} className="flex-shrink-0" />
              </a>
            ) : (
              <span className="text-sm md:text-base">{currentNews.text}</span>
            )}
          </div>
        </div>

        {/* Navigation dots */}
        {/* {newsItems.length > 1 && (
          <div className="flex items-center gap-2 mx-4">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-40 hover:bg-opacity-70'
                }`}
                aria-label={`Go to news item ${index + 1}`}
              />
            ))}
          </div>
        )} */}

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-green-100 transition-colors duration-200 p-1"
          aria-label="Close news ticker"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
