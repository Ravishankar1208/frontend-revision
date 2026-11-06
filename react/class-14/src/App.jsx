import React, { useEffect, useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)


  useEffect(()=>{
    console.log("hello");
    
  })


  return (
  <div>
     <h1>{counter}</h1>

   <button onClick={()=>{
    setCounter(counter+1)
   }}>Increase</button>
  </div>
  )
}

export default App
