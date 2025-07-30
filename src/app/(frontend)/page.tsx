import React from 'react'
import GridLines from '../../components/backgroundEffects/GridLines'
import HalfOval from '../../components/backgroundEffects/HalfOval'
import Navbar from '../../components/Navbar'
import Section1 from '../../components/sections/Section1'
import Section2 from '../../components/sections/Section2'
import Section3 from '../../components/sections/Section3'
import { TrendingUp, Zap } from 'lucide-react'
import Section4 from '../../components/sections/Section4'
import Section5 from '@/components/sections/Section5'

const page = () => {
  return (
    <div className="min-h-screen bg-[#020116] text-white px-20 py-4 relative overflow-hidden">
      {/* BACKGROUND GRID LINES EFFECT*/}
      <GridLines />

      {/* BACKGROUND TOP RADIAL EFFECT*/}
      <div className="absolute -top-[36rem] left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] bg-[#6C24F5] rounded-full opacity-60 blur-[400px] z-1" />

      {/* BACKGROUND HALF OVAL EFFECT*/}
      <HalfOval />

      {/* NAVBAR */}
      <Navbar />

      <div className="position relative z-10">
        {/* SECTION 1 */}
        <Section1 />
        {/* SECTION 2 */}
        <Section2 />

        {/* Mini Section */}
        <div className="w-full max-w-6xl">
          <div
            className="  rounded-2xl p-8 flex items-center justify-between"
            style={{
              background: 'radial-gradient(circle at center top, #9769EF 0%, #6C24F5 100%)',
            }}
          >
            <div className="flex-1 max-w-2xl">
              <h1 className="text-white text-2xl md:text-3xl font-semibold mb-3">
                Multi-Variate Testing at budget
              </h1>
              <p className="text-purple-100 text-base md:text-lg leading-relaxed">
                Test more and faster with multi variate testing and let AI allocate the traffic to
                winner.
              </p>
            </div>

            <div className="flex items-center gap-4 ml-8">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Start For Free
              </button>
              <button className="border-purple-300 text-purple-100 hover:bg-purple-600/20 px-6 py-2 rounded-full font-medium transition-colors bg-transparent">
                Book Demo
              </button>
            </div>
          </div>
        </div>

        <Section3 />

        {/* Mini Section */}
        <div className="flex items-center px-4 py-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Optimize Badge */}
                <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-300 text-sm font-medium">Optimize</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Unlock Your Business's Full Potential Today
                </h1>

                {/* Description */}
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                  Transform your conversion rates and boost your revenue without the need for
                  additional traffic or ad spend. Our innovative approach ensures you find the
                  winning strategies faster.
                </p>
              </div>

              {/* Right Card */}
              <div className="flex justify-center lg:justify-end">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm max-w-md w-full">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-purple-400 text-xl font-semibold mb-4">Increase Revenue</h3>

                  {/* Card Description */}
                  <p className="text-slate-400 leading-relaxed">
                    Our solution enhances your conversion rates, allowing you to generate more
                    revenue without increasing your traffic. Experience growth without the extra
                    costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Section4 />
        <Section5 />
      </div>
    </div>
  )
}

export default page
