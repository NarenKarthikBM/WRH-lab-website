import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Contact Information - Get in Touch with WRH Lab',
  description:
    'Contact Water Resources & Hydrology Lab, IISER Bhopal. Office hours, location, email, and collaboration inquiries for research partnerships.',
  keywords: [
    'contact WRH lab',
    'IISER Bhopal contact',
    'water research collaboration',
    'Dr. Sanjeev K. Jha contact',
    'research inquiries',
    'lab visit',
    'academic collaboration',
    'hydrology research contact',
  ],
  openGraph: {
    title: 'Contact WRH Lab - Research Collaboration & Inquiries',
    description:
      'Connect with our water resources research team for collaborations, inquiries, and academic partnerships.',
  },
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-wrh-bg">
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        description="Ready to collaborate on water research? Get in touch with our team"
        icon={Mail}
      />

      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          {/* <div className="space-y-8"> */}
          {/* Office information */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-wrh-dark mb-4">Office Information</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-wrh-green bg-opacity-10 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-wrh-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-wrh-dark">Address</h4>
                  <p className="text-wrh-gray text-sm">
                    Water Resources & Hydrology Lab
                    <br />
                    Department of Earth and Climate Science
                    <br />
                    IISER Bhopal
                    <br />
                    Bhauri, Bhopal - 462066
                    <br />
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-wrh-blue bg-opacity-10 p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-wrh-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-wrh-dark">Phone</h4>
                  <p className="text-wrh-gray text-sm">
                    <a
                      href="tel:+91-755-6691-306"
                      className="hover:text-wrh-green transition-colors"
                    >
                      +91-755-6691-306
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500 bg-opacity-10 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-wrh-dark">Email</h4>
                  <p className="text-wrh-gray text-sm">
                    <a
                      href="mailto:sanjeevj@iiserb.ac.in"
                      className="hover:text-wrh-green transition-colors"
                    >
                      sanjeevj@iiserb.ac.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-500 bg-opacity-10 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-wrh-dark">Office Hours</h4>
                  <p className="text-wrh-gray text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-wrh-dark mb-4">Location</h3>
            <div className="aspect-video bg-wrh-nav rounded-lg flex items-center justify-center">
              {/* Placeholder for embedded map */}
              <div className="text-center text-wrh-gray">
                <MapPin size={48} className="mx-auto mb-2" />
                <p>Interactive map will be embedded here</p>
                <p className="text-sm">IISER Bhopal Campus</p>
              </div>
            </div>
            <p className="text-sm text-wrh-gray mt-4">
              IISER Bhopal is located in Bhauri, approximately 25 km from Bhopal city center. The
              campus is easily accessible by road and public transportation.
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}
