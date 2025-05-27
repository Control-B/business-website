import React, { useState } from 'react'
import { ArrowRight, Sparkles, MessageCircle, Mic, Phone, Search } from 'lucide-react'

const Hero = () => {
  const [chatInput, setChatInput] = useState('')
  const [activeMode, setActiveMode] = useState('text')

  const chatModes = [
    { id: 'text', icon: MessageCircle, label: 'Text Chat' },
    { id: 'voice', icon: Mic, label: 'Voice Mode' },
    { id: 'phone', icon: Phone, label: 'Phone Call' }
  ]

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
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
            <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-slide-up">
              Discover professional website templates, intelligent chatbots, voice assistants, 
              and AI telephony systems designed to elevate your business and automate 
              customer interactions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary group">
                Explore Templates
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                Try AI Chat
                <MessageCircle className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Chatbot Interface */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-2xl">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Try Our AI Assistant</h3>
                <p className="text-sm text-gray-600">Ask anything about our services...</p>
              </div>

              {/* Chat Input */}
              <div className="relative mb-4">
                <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 p-4">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask anything..."
                    className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500"
                  />
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Mic className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Mode Buttons */}
              <div className="flex items-center justify-center space-x-4">
                {chatModes.map((mode) => {
                  const Icon = mode.icon
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setActiveMode(mode.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        activeMode === mode.id
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{mode.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['Website Templates', 'AI Chatbots', 'Voice Assistants', 'Telephony'].map((action) => (
                  <button
                    key={action}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="aspect-video relative">
                {/* Placeholder for video - you can replace this with an actual video */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 flex items-center justify-center">
                  {/* Mock Dashboard UI */}
                  <div className="w-full h-full p-8 relative">
                    {/* Top Cards */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <span className="text-white text-sm font-medium">Marketing</span>
                        </div>
                        <div className="mt-2 text-white text-xs opacity-80">
                          <div>Campaign Analytics</div>
                          <div>Email: 94.2%</div>
                          <div>Social: 87.1%</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-white text-sm font-medium">Sales</span>
                        </div>
                        <div className="mt-2 text-white text-xs opacity-80">
                          <div>Pipeline Value by Account</div>
                          <div className="flex space-x-1 mt-1">
                            <div className="w-8 h-1 bg-green-400 rounded"></div>
                            <div className="w-6 h-1 bg-green-300 rounded"></div>
                            <div className="w-4 h-1 bg-green-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl md:text-6xl font-bold mb-4 opacity-20">
                          marketing
                        </div>
                        <div className="text-2xl md:text-4xl font-bold mb-2">
                          See tangible results across sales
                        </div>
                        <div className="text-xl md:text-2xl opacity-80">
                          service
                        </div>
                        <div className="text-xl md:text-2xl font-bold mt-2">
                          commerce
                        </div>
                      </div>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1 group-hover:scale-110 transition-transform"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 