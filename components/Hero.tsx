'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, MessageCircle, Mic, Phone, Search } from 'lucide-react'

const Hero = () => {
  const [chatInput, setChatInput] = useState('')
  const [activeMode, setActiveMode] = useState('text')
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const chatModes = [
    { id: 'text', icon: MessageCircle, label: 'Text Chat' },
    { id: 'voice', icon: Mic, label: 'Voice Mode' },
    { id: 'phone', icon: Phone, label: 'Phone Call' }
  ]

  // AI-focused videos similar to Salesforce style
  const aiVideos = [
    {
      id: 'ai-chatbot-demo',
      title: 'AI Chatbot in Action',
      description: 'See how our AI chatbots handle customer conversations naturally',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
    },
    {
      id: 'voice-ai-demo',
      title: 'Voice AI Technology',
      description: 'Experience natural voice interactions with our AI assistants',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      thumbnail: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
    },
    {
      id: 'ai-telephony-demo',
      title: 'AI Telephony System',
      description: 'Smart call routing and automated customer service',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
    },
    {
      id: 'ai-automation-demo',
      title: 'Business AI Automation',
      description: 'Streamline operations with intelligent automation',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
    }
  ]

  // Auto-advance videos every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % aiVideos.length)
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentVideoIndex, aiVideos.length])

  const handleVideoSelect = (index: number) => {
    setCurrentVideoIndex(index)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-8 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Business Solutions
          </div>
        </div>

        {/* Top Section: Text and Video at Same Level */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
          {/* Left Content */}
          <div className="text-left">

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3 animate-fade-in">
              Transform Your Business with
              <span className="text-primary-600 block">AI Technology</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-4 max-w-2xl animate-slide-up">
              Discover professional website templates, intelligent chatbots, voice assistants, 
              and AI telephony systems designed to elevate your business and automate 
              customer interactions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Explore Templates
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                Try AI Chat
                <MessageCircle className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Video Player Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Preview Container */}
              <div className="aspect-video relative cursor-pointer" onClick={togglePlay}>
                <img
                  key={aiVideos[currentVideoIndex].id}
                  src={aiVideos[currentVideoIndex].thumbnail}
                  alt={aiVideos[currentVideoIndex].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`bg-white/90 backdrop-blur-sm rounded-full p-4 transition-all duration-300 ${
                    isPlaying ? 'scale-0 opacity-0' : 'scale-100 opacity-100 hover:scale-110'
                  }`}>
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Simulated Progress Bar */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-[5000ms] ease-linear"
                      style={{ width: isPlaying ? '100%' : '0%' }}
                    ></div>
                  </div>
                )}
                {/* Video Overlay with Title and Description */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {aiVideos[currentVideoIndex].title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {aiVideos[currentVideoIndex].description}
                    </p>
                  </div>
                </div>

                {/* Video Navigation Dots */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {aiVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleVideoSelect(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentVideoIndex
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Video Thumbnails Row */}
              <div className="absolute -bottom-16 left-0 right-0 flex justify-center space-x-2">
                {aiVideos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSelect(index)}
                    className={`relative w-16 h-9 rounded-lg overflow-hidden transition-all duration-200 ${
                      index === currentVideoIndex
                        ? 'ring-2 ring-blue-400 scale-110'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>

        {/* Bottom Section: Chatbot Interface - Full Width */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Try Our AI Assistant</h3>
              <p className="text-gray-600">Ask anything about our services and get instant answers</p>
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
                  className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
                />
                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                    <Mic className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Mode Buttons */}
            <div className="flex items-center justify-center space-x-4 mb-4">
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
            <div className="flex flex-wrap justify-center gap-2">
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
      </div>


    </section>
  )
}

export default Hero 