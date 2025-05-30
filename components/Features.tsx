import React from 'react'
import { Globe, MessageCircle, Mic, Phone } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: 'Website Templates',
      description: 'Professional, responsive templates designed for modern businesses. Easy to customize and deploy.',
      features: ['Mobile Responsive', 'SEO Optimized', 'Fast Loading', 'Easy Customization']
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that handles customer inquiries 24/7 with natural language processing.',
      features: ['Natural Language', '24/7 Availability', 'Multi-language', 'Easy Integration']
    },
    {
      icon: Mic,
      title: 'Voice Assistants',
      description: 'Advanced voice AI technology for hands-free customer interactions and voice-controlled experiences.',
      features: ['Voice Recognition', 'Natural Speech', 'Custom Commands', 'Multi-platform']
    },
    {
      icon: Phone,
      title: 'AI Telephony',
      description: 'Automated phone systems with intelligent call routing and voice-based customer service.',
      features: ['Smart Routing', 'Call Analytics', 'IVR Systems', 'CRM Integration']
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Solutions for Modern Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your business with cutting-edge AI technology and professional web solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            // Define colorful icon colors for each feature
            const iconColors = [
              'text-blue-500',    // Globe - Blue
              'text-green-500',   // MessageCircle - Green  
              'text-purple-500',  // Mic - Purple
              'text-orange-500'   // Phone - Orange
            ]
            const iconBgColors = [
              'bg-blue-50 group-hover:bg-blue-100',    // Globe background
              'bg-green-50 group-hover:bg-green-100',   // MessageCircle background
              'bg-purple-50 group-hover:bg-purple-100', // Mic background
              'bg-orange-50 group-hover:bg-orange-100'  // Phone background
            ]
            
            return (
              <div key={index} className="bg-blue-600 text-white p-6 rounded-xl shadow-lg group hover:scale-105 hover:shadow-xl transition-all duration-300">
                <div className={`flex items-center justify-center w-12 h-12 ${iconBgColors[index]} rounded-lg mb-4 transition-colors duration-300`}>
                  <IconComponent className={`w-6 h-6 ${iconColors[index]}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-blue-200">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            View All Solutions
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features 