import React from "react";
import axios from "axios";
const DisplayUser = () => {

    const handleUpdate = () => {
        axios
      .post("http://127.0.0.1:3000/get-users", { email, password })
      .then(response => {
        console.log(response)
        console.log(response.data)
        // Handle response
      })

    }
return (
    <div>
    <button onClick={handleUpdate}>display</button>
    </div>
)

}

export default DisplayUser