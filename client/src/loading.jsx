import React from "react"
import "./css/loader.css"
import aiLoader from "./images/AiLoaing.gif"
const Loader=()=>{
    return(
        <>
            <div className="spinner-box">
  <div className="pulse-container">  
    <div className="pulse-bubble pulse-bubble-1"></div>
    <div className="pulse-bubble pulse-bubble-2"></div>
    <div className="pulse-bubble pulse-bubble-3"></div>
  </div>
  <div className="flex-box">
        <img  className="aiLoader" src={aiLoader}/>
        <p id="loader"><b>Tips:-</b>dde d ewd wd fwe  de d d dewd d d de  dew dddeded dew e d</p>

  </div>
</div>
        </>
    )
}

export default Loader

