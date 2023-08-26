// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { handleHttpRequest } from "./util";

// function Main() {

//   const displayText = () => {
//     return function1()
//   };

//   const function1 = () => {
//     return "abc"
//   }

//   const submitHandler = (e) => {
//     function1()
//     // e.preventDefault();
//     // handleHttpRequest("get", "https://jsonplaceholder.typicode.com/users");
//   };

//   return (
//     <div>
//       <p data-testid="p-tag">{displayText()}</p>
//       <button onClick={submitHandler}>Submit</button>
//     </div>
//   );
// }

// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// const Main = () => {
//   const [radioOption, setRadioOption] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const path = location.pathname;
//   const [app1, setApp1] = useState(false);
//   const [app2, setApp2] = useState(false);

//   // test1
//   useEffect(() => {
//     axios
//       .get(`https://localhost:8000/v1/services`)
//       .then((response) => {
//         setApp1(response.data.app1);
//         setApp2(response.data.app2);
//       });
//   });

//   // test2
//   const onOptionChange = (e) => {
//     const radioOptionValue = e.target.value;
//     setRadioOption(radioOptionValue);
//   };

//   // test3
//   const handleRedirect = async () => {
//     const config = {
//       method: "GET",
//       url: "http://localhost:8000/v1/login/authorization/a1?return_url=true",
//       header: {
//         sid: "AL",
//         swa: "12345-54342",
//       },
//     };

//     const response = await axios(config);
//     window.location.href = response.data.url;
//   };

//   // test 4
//   const submitHandler = (e) => {
//     e.preventDefault();

//     switch (radioOption) {
//       case "app1":
//         handleRedirect();
//         break;
//       case "app2":
//         navigate("/app2");
//         break;
//       case "app3":
//         navigate("/app3");
//         break;
//     }
//   };

//   return (
//     <form>
//       <h1>Main App</h1>
//       {app1 && (
//         <section>
//           <div>
//             <input
//               value="app1"
//               name="app1"
//               type="radio"
//               id="app1"
//               onChange={onOptionChange}
//               checked={radioOption === "app1"}
//             />
//             <label htmlFor="app1">App1</label>
//           </div>
//         </section>
//       )}
//       {app2 && (
//         <section>
//           <div>
//             <input
//               value="app2"
//               name="app2"
//               type="radio"
//               id="app2"
//               onChange={onOptionChange}
//               checked={radioOption === "app2"}
//             />
//             <label htmlFor="app2">App2</label>
//           </div>
//         </section>
//       )}
//       <section>
//         <div>This is app3</div>
//       </section>
//       <section type='click' onClick={submitHandler}>
//         <button>next</button>
//       </section>
//     </form>
//   );
// };

// export default Main;
