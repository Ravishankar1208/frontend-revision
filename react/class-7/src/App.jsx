import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageURL, setimageURL] = useState('')
  const [userDesc, setuserDesc] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const sumbitHandler =(e)=>{
    e.preventDefault()

    const oldUsers = [...allUsers]

    oldUsers.push({username, imageURL , userRole , userDesc})

    console.log(oldUsers);
    

    setAllUsers(oldUsers)


    setUsername('')
    setUserRole('')
    setuserDesc('')
    setimageURL('')
  }


  return (
    <div className='h-screen bg-black text-white'>


      <form onSubmit={(e)=>{
        sumbitHandler(e)
      }}
      className='px-2 py-2 flex flex-wrap '>


        <input
         className='border-2 text-xl font-semibold  px-5 py-2 rounded m-2 w-[45%]'
         type="text"
          placeholder='Enter Your Name'


          value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          />

        <input 
        className='border-2  text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'
         type="text"
          placeholder='Image URL'

          value={imageURL}
          onChange={(e)=>{
            setimageURL(e.target.value)
          }}
          
          />

         <input
          className='border-2 text-xl font-semibold  px-5 py-2 rounded m-2 w-[45%]'
          type="text"
          placeholder='Enter Your Role'

          value={userRole}
          onChange={(e)=>{
            setUserRole(e.target.value)
          }}
          />

        <input
         className='border-2 text-xl font-semibold  px-5 py-2 rounded m-2 w-[45%]'
         type="text"
          placeholder='Enter Your Description'

          value={userDesc}
          onChange={(e)=>{
            setuserDesc(e.target.value)
          }}
          />

         <button
         className=' px-5 active:scale-95 py-2 bg-emerald-500 rounded m-2 w-[92%]'
         >Create User
         </button>
      </form>

      <div className='px-4 py-10 flex flex-wrap '>
        {allUsers.map(function(){
          return <div>
            "hello"
          </div>
        })}
      </div>


    </div>
  )
}

export default App

