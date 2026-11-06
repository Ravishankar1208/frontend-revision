import React, { createContext } from 'react'

export const userDataContext = createContext()

const UserContext = (props) => {

  const user = "ravi"
  
  return (
    <div>
      <userDataContext.Provider value={user}>
        {props.children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
