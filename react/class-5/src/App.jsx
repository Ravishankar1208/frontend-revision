// // import React, { useState } from 'react'

// // const App = () => {

// //   const [king, setking] = useState('pawan')
// //   const [queen, setQueen] = useState('kajal')

// //   const changeking =()=>{
// //     console.log(king);
    
// //     setking('allu arjun')
// //     console.log(king);
    
// //   }

// //   const changequeen =()=>{
// //     setQueen('sardha')
// //   }

// //   return (
// //     <div>
// //       <h1>{king}  x {queen}</h1>

// //       <button onClick={changeking}>king</button>
// //       <button onClick={changequeen}>queen</button>

      
      
// //     </div>
// //   )
// // }

// // export default App



// import React, { useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState(0)
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button 
//       onClick={()=>{
//         setnum(num+10)
//       }}>increace</button>
//       <button 
//       onClick={()=>{
//         setnum(num-10)
//       }}>decrease</button>
//     </div>
//   )
// }

// export default App










import React, { useState } from 'react'

const App = () => {
 
  const [marks, setmarks] = useState( [10,20, 30, 40, 50])


  return (
    <div>
      {marks.map(function(mark , idx){
        return <h1 key = {idx}>student  {idx+1}: {mark}</h1>
      })}

      <button 
      onClick={()=>{

        const newmarks= marks.map(function(mark , idx){
          return mark+10;
        })

        console.log(newmarks);
        setmarks(newmarks);
      }}>increase marks</button>
      
    </div>
  )
}

export default App
