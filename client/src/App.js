import React, { useEffect, useState } from "react";
import "./css/App.css";
import ImageCard from "./imageCard";
import Header from "./header";
import GenerateButton from "./generateButton";
import Loader from "./loading";
















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
        const response= await fetch(`http://localhost:4000/delle/generator`,{
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
           <div className="sub-container">
           {
            images.length==0?(
              <>
              {/* <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-16.jpg"} />
              <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
              <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
               <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-16.jpg"} />
               <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
               <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} /> */}
              </>
            ):(
              images.map((binary)=>(
           
                <ImageCard binary={binary} />
             
              ))
            )
           }
         
          
             

            
            </div>


       )}
       
        
         
             
           
     </>
    )
}

export default App;