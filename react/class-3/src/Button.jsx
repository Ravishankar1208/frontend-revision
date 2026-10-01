import React from 'react'

const Button = (name) => {
  return (
    <div>


      <button className='h-20px bg-amber-400 w-fit m-2px rounded-md p-2px'>
        {name.name}
      </button>
      
    </div>
  )
}

export default Button
