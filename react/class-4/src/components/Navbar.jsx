import React from 'react'

const Navbar = (props) => {
  return (
    <div className="bg-pink-300 h-[60px] px-6 flex justify-between items-center text-black">

      {/* Logo */}
      <div>
        <h2 className="text-2xl font-bold">
          Navbar
        </h2>
      </div>

      {/* Links */}
      <div className="flex gap-[30px]">
        {props.links.map(function (link) {
          return (
            <button
              className="px-4 py-2 bg-white rounded-md hover:bg-gray-200"
            >
              {link}
            </button> 
          )
        })}
      </div>

    </div>
  )
}

export default Navbar