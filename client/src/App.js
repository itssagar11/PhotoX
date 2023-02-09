import React, { useEffect, useState } from "react";
import "./css/App.css";
import ImageCard from "./imageCard";
import Header from "./header";
import GenerateButton from "./generateButton";
import Loader from "./loading";
import BackGround from "./background";
import loginpopup from "./loginpopup";















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
      console.log(data)
      if(data.prompt=="") return
      
        const response= await fetch(`http://localhost:4000/delle/generator`,{
                        method:'POST',
                        headers: {
                          'Access-Control-Allow-Origin': '*',
                          "Content-Type": "application/json"
                          
                        },
                        body:JSON.stringify(data)
        });
        if(response.status!='200'){
          console.log(response);
          return;
        }
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