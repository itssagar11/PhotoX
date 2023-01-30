import React from "react";
import "./css/imageCard.css"

const ImageCard=({  movie })=>{
	
    return (
      
		
                
				<div className="poster-container">
                    <img src={movie} className="poster" />
                   <div className="overley">  
                    <div className="buttons">
                    <span class="material-symbols-rounded">
download
</span>
                   </div>
                   </div>
                  
				
				</div>
		
	

        
        

		

          
    )
}
export default ImageCard;