// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import { API } from "../constants";

// const SignIn = () => {
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const [data, setData] = useState("");

  
//     useEffect(() => {
      
//       fetchApi();
//       console.log(data)
//     }, [data]);
//     const fetchApi = async () => {
//       const response = await fetch("http://127.0.0.1:3000/login");
//       const json = await response.json();
//       setData(json)
//       console.log(json)
//     };
//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password",
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();
//     console.log(data)

//     const { email, pass } = data[0];

//     // Find user login info
//     const userData = data[0].find((user) => user.email === email.value && user.password !== pass.value);

//     // Compare user info
//     if (userData) {
//       if (userData) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form

//   return (
//     <>
//       <Header />
//       <div className="app">
//         <div className="login-form">
//           <div className="title">Sign In</div>
//           <div className="form">
//             <form onSubmit={handleSubmit}>
//               <div className="input-container">
//                 <label>Username </label>
//                 <input type="text" name="uname" required />
//                 {renderErrorMessage("uname")}
//               </div>
//               <div className="input-container">
//                 <label>Password </label>
//                 <input type="password" name="pass" required />
//                 {renderErrorMessage("pass")}
//               </div>
//               <div className="button-container">
//                 <input type="submit" />
//               </div>
//             </form>
//           </div>
//           {isSubmitted ? (
//             <div>User is successfully logged in</div>
//           ) : (
//             "renderForm"
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn;
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FileUpload from "./FileUpload"
import Header from "./Header"

function SignIn() {
    const navigate = useNavigate();
  const handleSubmit = e => {
    // Prevent the default submit and page reload
    e.preventDefault()
    

    // Handle validations
    axios
      .post("http://127.0.0.1:3000/login", { email, password })
      .then(response => {
        console.log(response)
        console.log(response.data.token)
        localStorage.setItem("key", response.data.token);
        // Handle response
      })
    //   navigate("/")
      
      
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <div>
    <Header />
      <form action="/dashboard" id="login" method="post" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p className="item">
          <label for="email"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </p>
        <p className="item">
          <label for="password"> Password </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </p>
        <p className="item">
          <input type="submit" value="Login" />
        </p>
      </form>
    </div>
  )
}

export default SignIn