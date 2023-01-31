import React from "react";
import "./css/imageCard.css"

const ImageCard=({  url })=>{
    console.log(url)
    return (
      
		
                
				<div className="poster-container">
                    <img src={url} className="poster" />
                   <div className="overley">  
                    <div className="buttons">
                    <span className="material-symbols-rounded">
download
</span>
                   </div>
                   </div>
                  
				
				</div>
		
	

        
        

		

          
    )
}
export default ImageCard;