import React from 'react'

const Section2 = () => {
  return (
    <>
      <div className="">
        {/* Header Section */}
        <section className="pt-20 pb-24">
          <div className="max-w-6xl mx-auto px-4">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="bg-gray-800/50 text-white text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
                🌟 Optimize
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Unlock Your Testing Potential
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
              Experience real-time insights for better decision-making
            </p>
          </div>
        </section>

        {/* Feature Section 1 - Insights */}
        <section className="">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Image Left */}
              <ImageCard />

              {/* Content Right */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <span className="text-sm font-semibold uppercase tracking-wider text-purple-500">
                  Insights
                </span>
                <h2 className="text-2xl font-bold text-white mt-4 mb-4">
                  Harness the Power of Multivariate Testing
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Our multivariate testing feature enables you to create and test multiple
                  variations simultaneously. This means you can identify the most effective elements
                  of your campaigns faster than ever.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section 2 - Winners (Reverse Layout) */}
        <section className="">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Content Left */}
              <div className="text-center md:text-left">
                <span className="text-sm font-semibold uppercase tracking-wider text-purple-400">
                  Winners
                </span>
                <h2 className="text-2xl font-bold text-white mt-4 mb-4">
                  Smart Traffic Allocation with Bandit Approach
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Utilize our multi-armed bandit approach to direct traffic towards the winning
                  variations. This ensures you maximize your conversion rates efficiently.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105">
                  Learn More
                </button>
              </div>

              {/* Image Right */}
              <ImageCard />
            </div>
          </div>
        </section>

        {/* Feature Section 3 - Affordable */}
        <section className=" pb-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Image Left */}
              <ImageCard />

              {/* Content Right */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">
                  Affordable
                </span>
                <h2 className="text-2xl font-bold text-white mt-4 mb-4">
                  Flexible Plans to Fit Your Needs
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Our plans start at just $179 per month, making powerful testing accessible to
                  everyone. Plus, enjoy premium support to guide you through every step.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Section2

const ImageCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      {/* Outer container with subtle border */}
      <div className="w-full max-w-md aspect-square bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/30">
        {/* Inner gray square */}
        <div className="w-full h-full bg-gray-600/80 rounded-lg"></div>
      </div>
    </div>
  )
}
