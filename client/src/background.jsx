import React from "react"
import "./css/background.css"
import cubic from "./images/cubicmagic.jpg"
import astro from "./images/astronout.jpg"
import pc from "./images/pc.jpg"
import monkey from "./images/monkey.jpg"
import face from "./images/face.jpg"
const Background=({text})=>{
        return (
            <>
            <div className="container">
            <div class="typewriter">
                <div className="brand">
                <h1> Photo<b>X</b></h1>
                <span> An AI Based Image Generator Platform.</span>
                </div>
               
            </div>
                <img src={cubic} className="bgImg bgImg1"/>
             <img src={pc} className="bgImg bgImg2"/>
             <img src={face} className="bgImg bgImg3"/>
             <img src={astro} className="bgImg bgImg4"/>
             <img src={monkey} className="bgImg bgImg5"/>

            </div>
           
             </>
        )

}

export default React.memo(Background)