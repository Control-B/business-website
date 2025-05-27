import React from 'react'
import { Check, Star } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 199,
      description: 'Perfect for small businesses getting started with AI',
      features: [
        '1 AI Chatbot',
        '500 Voice Minutes/month',
        '100 Telephone Calls/month',
        '3 Website Templates',
        'Basic Hosting',
        'Email Support',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: 299,
      description: 'Most popular choice for growing businesses',
      features: [
        '3 AI Chatbots',
        '2,000 Voice Minutes/month',
        '500 Telephone Calls/month',
        '10 Website Templates',
        'Premium Hosting',
        'Priority Support',
        'Advanced Analytics',
        'Custom Integrations',
        'Multi-language Support'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 499,
      description: 'Enterprise solution for large organizations',
      features: [
        'Unlimited AI Chatbots',
        '10,000 Voice Minutes/month',
        '2,000 Telephone Calls/month',
        'All Website Templates',
        'Enterprise Hosting',
        '24/7 Phone Support',
        'Real-time Analytics',
        'Custom Development',
        'White-label Solutions',
        'Dedicated Account Manager',
        'SLA Guarantee'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-blue-500 transform scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-600">${plan.price}</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-blue-50 text-gray-900 border-2 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">
              Compare All Features
            </button>
            <button className="btn-primary">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing 