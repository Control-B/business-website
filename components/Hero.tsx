import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Business Solutions
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transform Your Business with
            <span className="text-primary-600 block">AI Technology</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Discover professional website templates, intelligent chatbots, voice assistants, 
            and AI telephony systems designed to elevate your business and automate customer interactions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button className="btn-primary flex items-center group">
              Explore Templates
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="btn-secondary">
              Try AI Chat Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-gray-600">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">10K+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 