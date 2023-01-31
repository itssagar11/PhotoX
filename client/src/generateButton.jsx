import React from "react";
import { useState } from "react";
const GenerateButton=  ({ prompt,size,callback})=>{
    const [loading,SetLoading]=useState(false);
  
    const handleClick= async()=>{
      SetLoading(true);
      await  callback({prompt,size})
      SetLoading(false);
    };




    
    return (
      <button className="search-icon" 
       onClick={
          ()=>(
              handleClick()
            )
       } 
      >
       { loading===true?( <>Loading..</> ):(<>Generate</>) }
    </button>
    )
  }
  
  export default GenerateButton;