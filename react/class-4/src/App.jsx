import React from 'react'
import Navbar from "./components/Navbar";
import Cone from "./components/Cone";

const App = () => {
  return (
    <div >
      <Navbar name="Home" links={["home", "about", "services", "contact"]} />

      <Cone/>
      
      
    </div>
  )
}

export default App  
