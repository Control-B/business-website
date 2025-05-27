import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'The AI chatbot has transformed our customer service. We now handle 3x more inquiries with better satisfaction rates.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'Their website templates are incredible. We launched our new site in just 2 days and saw immediate improvements in conversions.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager, ServicePro',
      content: 'The AI telephony system has streamlined our call center operations. Customer wait times are down 60%.',
      rating: 5
    }
  ]

  const companies = [
    'TechStart', 'GrowthCo', 'ServicePro', 'InnovateLab', 'FutureScale', 'DataDriven'
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their operations with our AI-powered solutions.
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">3x</div>
              <div className="text-gray-600">Faster Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 