import { ArrowRight, Mail, Phone, MapPin, Users, BookOpen, Briefcase } from 'lucide-react'
import Link from 'next/link'

/**
 * Contact call-to-action section for the homepage
 * Features: Multiple contact methods, quick access to key sections, responsive design
 */
export default function ContactCTA() {
  const quickActions = [
    {
      title: 'Join Our Team',
      description: 'Explore PhD and Postdoc opportunities',
      icon: <Users className="w-6 h-6" />,
      link: '/opportunities',
      color: 'wrh-green',
    },
    {
      title: 'Research Collaboration',
      description: 'Partner with us on water research projects',
      icon: <BookOpen className="w-6 h-6" />,
      link: '/projects',
      color: 'wrh-blue',
    },
    {
      title: 'Industry Partnerships',
      description: 'Consulting and applied research services',
      icon: <Briefcase className="w-6 h-6" />,
      link: '/contact',
      color: 'purple-500',
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-wrh-blue via-blue-600 to-wrh-green text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Collaborate on Water Solutions?
            </h2>

            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join us in addressing critical water challenges through cutting-edge research,
              education, and innovation. Whether you're a researcher, student, or industry partner,
              let's work together to create sustainable water solutions.
            </p>

            {/* Contact methods */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:sanjeevj@iiserb.ac.in"
                className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-200 backdrop-blur-sm"
              >
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-blue-100 text-sm">sanjeevj@iiserb.ac.in</div>
                </div>
              </a>

              <a
                href="tel:+91-755-6691-306"
                className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-200 backdrop-blur-sm"
              >
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-blue-100 text-sm">+91-755-6691-306</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-blue-100 text-sm">IISER Bhopal, Bhauri, Bhopal - 462066</div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-wrh-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg"
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right side - Quick actions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>

            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.link}
                className="block p-6 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-200 backdrop-blur-sm group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`bg-${action.color} bg-opacity-20 p-3 rounded-full group-hover:bg-opacity-30 transition-all duration-200`}
                  >
                    {action.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-blue-100 transition-colors duration-200">
                      {action.title}
                    </h4>
                    <p className="text-blue-100 text-sm">{action.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-200 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}

            {/* Additional info */}
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-3">Research Areas</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Climate Hydrology',
                  'Water Security',
                  'Sustainable Management',
                  'Urban Water Systems',
                  'Groundwater Studies',
                  'Remote Sensing',
                ].map((area) => (
                  <span
                    key={area}
                    className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
