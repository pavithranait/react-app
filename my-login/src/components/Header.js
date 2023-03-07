import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header-home">
        <h1><Link to="/">Dashboard</Link></h1>
      </div>
      <div className="header-link">
        <h2><Link to="/signin">SignIn</Link></h2>
        <h2><Link to="/signup">SignUp</Link></h2>
      </div>
    </div>
  );
};

export default Header;
