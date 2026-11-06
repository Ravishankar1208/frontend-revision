
import React, { useContext } from 'react'
import {userDataContext} from '../context/UserContext.jsx'

const Navbar = () => {

  const data = useContext(userDataContext)
  console.log(data);
  

  return (
    <nav className="w-full bg-gray-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1>{data}</h1>

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Dev<span className="text-blue-500">Space</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li className="text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer transition">About</li>
          <li className="hover:text-blue-400 cursor-pointer transition">Services</li>
          <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
        </ul>

        {/* Login Button */}
        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold transition duration-300">
          Login
        </button>

      </div>
    </nav>
  )
}

export default Navbar
