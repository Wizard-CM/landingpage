import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
    <section className="flex flex-col gap-6">
      <main className="flex flex-col items-center gap-6 text-center mt-36">
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-200">
          {/* <Image src="/icons/sparkle.svg" alt="Icon" width={8} height={8} /> */}
          <span>Affordable Price With Best Results</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight max-w-4xl">
          Optimize Your Testing with Advanced Strategies
        </h1>
        <p className="text-lg text-gray-400 max-w-4xl">
          Unlock the power of data-driven decisions with our cutting-edge A/B/n testing software.
          Experience faster results through our innovative Multi-Variate Testing and Multi-Armed
          Bandit Approach.
        </p>
        <button className="bg-[#6C24F5] hover:bg-purple-800 font-medium text-white mt-3 px-5 py-3 rounded-3xl transition-colors cursor-pointer">
          Join Waitlist
        </button>
      </main>

      <div className="flex flex-col items-center gap-6">
        <h4 className="font-medium">Trusted by Companies</h4>
        <ul className="flex items-center justify-center gap-12 md:gap-16 opacity-60">
          <li className="">
            <Image src="/image.png" alt="" width={150} height={50} />
          </li>
          <li className="">
            <Image src="/image.png" alt="" width={150} height={50} />
          </li>
          <li className="">
            <Image src="/image.png" alt="" width={150} height={50} />
          </li>
          <li className="">
            <Image src="/image.png" alt="" width={150} height={50} />
          </li>
          <li className="">
            <Image src="/image.png" alt="" width={150} height={50} />
          </li>
          <li className="">
            <Image src="/image.png" alt="" width={150} height={50} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Section1
