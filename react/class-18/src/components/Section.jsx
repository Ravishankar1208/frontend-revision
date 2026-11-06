
import React from 'react'

const Section = () => {
  return (
    <section className="min-h-[75vh] bg-gray-900 flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to <span className="text-blue-500">DevSpace</span>
        </h1>

        <p className="text-gray-400 text-lg leading-8 mb-8">
          Learn, Build and Grow with modern web technologies.
          Start your journey towards becoming a professional developer.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
            Get Started
          </button>

          <button className="border border-gray-500 hover:border-blue-500 text-white px-6 py-3 rounded-lg transition">
            Learn More
          </button>

        </div>

      </div>

    </section>
  )
}

export default Section
