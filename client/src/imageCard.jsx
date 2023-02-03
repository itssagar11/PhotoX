import React from "react";
import "./css/imageCard.css"
import FileSaver from 'file-saver';

function downloadImage(dataUrl) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = "image.png";

  link.click();
  
}


const ImageCard=({  binary })=>{

    const data=Array.from(binary.data);
    const base64 = btoa(
        new Uint8Array(data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
      const src = `data:image/png;base64,${base64}`;
      // console.log(src)


      
    return (
      
		
                
				<div className="poster-container">
                    <img src={src} className="poster" />
                   <div className="overley">  
                    <div className="buttons">
                    <a className="material-symbols-rounded color"  download="image.png"href={src}>
download
</a>

                   </div>
                   </div>
                  
				
				</div>
		
	

        
        

		

          
    )
}
export default ImageCard;