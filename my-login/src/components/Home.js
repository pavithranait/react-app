import React from "react";
import Body from "./Body";
import Header from "./Header";
import { useEffect, useState } from "react";
import { API } from "../constants";

const Home = () => {
    
  return (
    <div className="homee">
   
      <div>
        <Header />

      </div>
      <div>
         <FileUpload /> 
      </div>
    </div>
    
  );
};

export default Home;
