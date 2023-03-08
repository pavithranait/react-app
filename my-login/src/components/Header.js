import React from "react";
import { Link } from "react-router-dom";
import Server from "./Server";
const Header = () => {
  return (
    <>
    <div className="header">
      <div className="header-home">
        <h1><Link to="/">Dashboard</Link></h1>
      </div>
      <div className="header-link">
        <h2><Link to="/signin">SignIn</Link></h2>
        <h2><Link to="/signup">SignUp</Link></h2>
        <h2><Link to="/fileupload">Fileupload</Link></h2>
      </div>
    </div>
    <div>
      
    </div>
    </>
  );
};

export default Header;
