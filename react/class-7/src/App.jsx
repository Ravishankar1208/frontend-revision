import React, { useState } from 'react'
import Card from "./components/Card.jsx";

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

  const deleteHandler=(idx)=>{
    const copyUser = [...allUsers]
    copyUser.splice(idx,1)
    setAllUsers(copyUser)
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

      <div className='px-4 py-10 flex flex-wrap gap-5'>

       {allUsers.map(function(elem, idx){
        return (

<div key={idx} className="w-full max-w-xs min-h-[360px] rounded-2xl p-6 flex items-center flex-col text-center bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

  <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
    <img
      className="h-full w-full rounded-full object-cover border-2 border-white"
      src={elem.imageURL}
      alt="Ravishankar Tiwari"
    />
  </div>

  <h1 className="text-2xl font-bold text-gray-900">
    {elem.username}
  </h1>

  <h5 className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mt-3 mb-4">
    {elem.userRole}
  </h5>

  <p className="text-sm text-gray-600 leading-relaxed">
    {elem.userDesc}
  </p>

 <button 
 type="button"  
 onClick={()=>
 {deleteHandler(idx)}
 }
 className="w-full mt-auto py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold hover:from-red-600 hover:to-rose-700 active:scale-95 transition-all">Remove User</button>

</div>

  )
       })}

      </div>


    </div>
  )
}

export default App

