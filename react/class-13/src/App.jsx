import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

 async function getData() {


   const response = await axios.get("https://picsum.photos/v2/list")

     setData(response.data)
    
    
    
  }


  return (
    <div>
      <h1>Hellooo.... Ravi.......</h1>
      <button onClick={getData}>get data</button>

    {data.map((elem, idx) => {
  return <h1 key={elem.id}>{elem.author}</h1>
})}

    </div>
  )
}

export default App







// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState([]);

//   async function getData() {
//     try {
//       const response = await axios.get(
//         "https://picsum.photos/v2/list"
//       );

//       console.log(response.data);
//       setData(response.data);

//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <h1>Hello Ravi!</h1>

//       <button onClick={getData}>Get Data</button>

//       {data.map((elem) => (
//         <div key={elem.id}>
//           <h2>{elem.author}</h2>

//           <img
//             src={elem.download_url}
//             alt={elem.author}
//             width="200"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;



