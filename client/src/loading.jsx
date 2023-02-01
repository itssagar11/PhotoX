import React from "react"
import "./css/loader.css"
import LoaderImage from "./images/horse.jpg"
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
        <img  className="aiLoader" src={LoaderImage}/>
        <p id="loader"><b>Tips:-</b><i>Ask for Abstract or implausible images.</i><h1>"Photograp of an astronaut riding a horse"</h1></p>

  </div>
</div>
        </>
    )
}

export default Loader

