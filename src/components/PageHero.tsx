import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface PageHeroProps {
  title: string
  description: string
  icon: LucideIcon
  stats?: Array<{
    label: string
    value: string | number
  }>
  className?: string
  children?: ReactNode
}

export default function PageHero({
  title,
  description,
  icon: Icon,
  stats = [],
  className = '',
  children,
}: PageHeroProps) {
  return (
    <div className={`bg-gradient-to-br from-wrh-blue to-purple-700 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          <Icon className="mx-auto h-16 w-16 mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* Stats Section */}
          {stats.length > 0 && (
            <div className={`flex justify-evenly gap-6 max-w-4xl mx-auto flex-wrap`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Custom children content */}
          {children}
        </div>
      </div>
    </div>
  )
}
