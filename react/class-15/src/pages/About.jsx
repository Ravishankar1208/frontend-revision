
import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      
      <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl border border-gray-800 text-center">
        
        <h1 className="text-4xl font-bold text-white mb-4">
          About Us! 👋
        </h1>

        <p className="text-gray-400 mb-6">
         Your Welcome on About Page. This is a simple React application styled with Tailwind CSS.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
          Get Started
        </button>

      </div>

    </div>
  )
}

export default About