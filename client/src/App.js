import React, { useEffect, useState } from "react";
import "./css/App.css";
import ImageCard from "./imageCard";
import Header from "./header";
import GenerateButton from "./generateButton";
import Loader from "./loading";
import BackGround from "./background";
















const App= ()=>{
    const [images,setImages]= useState([]);

  const[ isloading,setIsloader]=useState(false);
  useEffect(()=>{
    setTimeout(()=> {
     setIsloader(false)
    },5000);
  },[images])


    const generateImage= async(data)=>{
      setIsloader(true);
      if(data.prompt=="") return
        const response= await fetch(`https://photox-api-production.up.railway.app/delle/generator`,{
                        method:'POST',
                        headers:{
                          'Content-Type':'application/json'
                        },
                        body:JSON.stringify(data)
        });
      
        const res= await response.json();
        console.log(res);
         setImages(res);
        
        
        
    }
   
 
    return (
        <>
       
          <Header 
            callback={generateImage}
           />

     
    
    
          

        
       { isloading==true?(  <Loader/>):(
             images.length==0?(
              <>
              <BackGround/>
              </>
             ):(
           <div className="sub-container">
           {
           
            
              images.map((binary)=>(
           
                <ImageCard binary={binary} />
             
              ))
            
           }
         
          
             

            
            </div>


       ))}
       
        
         
             
           
     </>
    )
}

export default App;