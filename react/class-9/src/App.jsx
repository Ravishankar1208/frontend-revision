// import React from 'react'

// const App = () => {

//   const user = ["Ravi" , "anuj" , "addi", "ajay", "amit"]


//   return (
//     <div>
//       {user.map(function (elem) {
//         return <h1>{elem}</h1>        
//       })}

//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {

//   const users = ["Ravi", "Anuj", "Ajay", "Amit"]

//   return (
//     <div>
//       {users.map((elem) => {
//         return <h1 key={elem}>{elem}</h1>
//       })}
//     </div>
//   )
// }

// export default App





import React from 'react'

const App = () => {

  const arr = [2,4,5,7,3,7,4,77,55,33,2,3,1,6,8]


  return (
    <div>
      {arr.filter(function (elem) {
        return elem >5        
      })}

    </div>
  )
}

export default App