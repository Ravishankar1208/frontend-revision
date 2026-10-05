// import React from 'react'

// const App = () => {

//   const handelSubmit=(e)=>{
//     e.preventDefault()
//     console.log("form submited");
    
//   }


//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         handelSubmit(e)
//       }}>
//         <input type="text"  placeholder='enter your name'/>
//         <input type="number" placeholder='enter your age' />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App










//   TWO WAY BINDING


import React, { useState } from 'react'



 

  const App = () => {

     const [username, setUsername] = useState("")
  const [allUsers, setAllUsers] = useState([])






  const handleSubmit =(e)=>{
    e.preventDefault()
    const newAllUsers = [...allUsers]

    newAllUsers.push(username)
    console.log(newAllUsers);
    setAllUsers(newAllUsers)
    
    setUsername('')
  }



  return (
    <div>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input type="text" placeholder='enter your name' value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
          
        }}  
        />
        
        <button type='submit'>submit</button>
      </form>
      
    </div>
  )
}

export default App




