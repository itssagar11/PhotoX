
import React from "react";
import GenerateButton from "./generateButton";
import "./css/App.css";

import { useState } from "react";
const Header=({callback})=>{
    const [prompt,setPrompt]=useState("");
    const[dimension,setDimension]=useState("1024x1024");
   
    return (
        <>
        <div className="app-header">
        <img src="https://respinor.com/wp-content/uploads/2017/04/logo-dummy.png" className="logo"></img>
        <div className="loginuser">
          <img className="loginUser-img" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"></img>
          <span>Hello,User</span>
        </div>
        </div>
    <br /><p style={{margin:"5px"}}>Edit the detailed description</p><div className="search-container">
  
          <input type="text" id="search-bar" placeholder="A Range of Mountains" value={prompt}
            onChange={(e) => setPrompt(e.target.value)} />
          <GenerateButton
            prompt={prompt}
            size="256x256"
            callback={callback} />
        </div>
        
        </>
        
          
         
    )
  }
  export default React.memo(Header)