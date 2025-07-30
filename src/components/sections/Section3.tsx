import React from 'react'
import { Zap, Shield, BarChart3, BookOpen, DollarSign } from 'lucide-react'

const Section3 = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-slate-300 text-sm font-medium">Optimize</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Maximize Your Testing Potential
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Experience powerful multivariate testing like never before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testing Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="mb-4">
              <span className="text-purple-400 text-sm font-semibold uppercase tracking-wide">
                Testing
              </span>
            </div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Unlock the Power of Multivariate Testing
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Create multiple variations and optimize your results simultaneously with our advanced
              testing features.
            </p>
          </div>

          {/* Support Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="mb-4">
              <span className="text-purple-400 text-sm font-semibold uppercase tracking-wide">
                Support
              </span>
            </div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Premium Support for Our Customers
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Reach our expert team via phone, chat, or email.
            </p>
          </div>

          {/* Assistance Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="mb-4">
              <span className="text-purple-400 text-sm font-semibold uppercase tracking-wide">
                Assistance
              </span>
            </div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Smart Traffic Allocation with Bandit Approach
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Let our system find the best variations for you.
            </p>
          </div>

          {/* Knowledge Base Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm lg:col-span-1">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-4">Comprehensive Knowledge Base</h3>
            <p className="text-slate-400 leading-relaxed">
              Explore our extensive resources to enhance your testing experience and resolve any
              queries.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm lg:col-span-1">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Affordable Plans Starting at $79
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Get started with our budget-friendly pricing options.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
