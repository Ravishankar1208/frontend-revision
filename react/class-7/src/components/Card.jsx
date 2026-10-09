import React from 'react'

const Card = () => {
  return (

<div className="w-full max-w-xs min-h-[360px] rounded-2xl p-6 flex items-center flex-col text-center bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

  <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
    <img
      className="h-full w-full rounded-full object-cover border-2 border-white"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfpaeghux4azDcPIdc4DW7Q20GgqUkVIuVE57VRgs8vKiwCT8gEDZ4t8&s=10"
      alt="Ravishankar Tiwari"
    />
  </div>

  <h1 className="text-2xl font-bold text-gray-900">
    Ravishankar Tiwari
  </h1>

  <h5 className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mt-3 mb-4">
    MERN Stack Developer
  </h5>

  <p className="text-sm text-gray-600 leading-relaxed">
    Passionate developer building responsive and interactive web applications using MongoDB, Express.js, React, and Node.js.
  </p>

  <button
    type="button"
    className="w-full mt-auto pt-3"
  >
    <span className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold shadow-md shadow-red-200 transition-all duration-300 hover:from-red-600 hover:to-rose-700 hover:shadow-lg active:scale-95">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M8 6V4h8v2" />
        <path d="m19 6-1 14H6L5 6" />
        <path d="M10 11v5" />
        <path d="M14 11v5" />
      </svg>
      Remove User
    </span>
  </button>

</div>

  )
}

export default Card
