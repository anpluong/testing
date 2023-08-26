// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import axiosRetry from "axiosRetry";

// axiosRetry(axios, {
//   retries: 3, // number of retries
//   retryDelay: (retryCount) => {
//     return retryCount * 2000; // time interval between retries
//   },
//   retryCondition: (error) => {
//     return error.message === "Network Error" || error.response.status >= 500;
//   },
// });

// function MyComponent() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         setError(error);
//       });
//   }, []);

//   const handleSubmit = () => {
//     const config = {
//       method: "GET",
//       url: "https://jsonplaceholder.typicode.com/posts",
//     };

//     const result = handleHttpRequest(config);

//     result.then((response) => {
//       setData();
//     });
//   };

//   const handleHttpRequest = async (config) => {
//     return await axios(config);
//   };

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Data from API:</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MyComponent;
