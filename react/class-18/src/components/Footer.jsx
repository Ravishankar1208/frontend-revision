
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-5 px-6 text-center ">

      <p className="text-sm">
        © {new Date().getFullYear()} 
        <span className="text-blue-500 font-semibold"> DevSpace</span>.
        All Rights Reserved.
      </p>

      <p className="text-xs mt-2">
        Made with ❤️ using React & Tailwind CSS
      </p>

    </footer>
  )
}

export default Footer
