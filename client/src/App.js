import React, { useEffect, useState } from "react";
import "./css/App.css";
import ImageCard from "./imageCard";
import GenerateButton from "./generateButton";
import Loader from "./loading";
















const App= ()=>{
    const [images,setImages]= useState([]);
  const [prompt,setPrompt]=useState("");
   const[dimension,setDimension]=useState("1024x1024");

    const generateImage= async(data)=>{
      if(data.prompt=="") return
        const response= await fetch(`http://localhost:4000/delle/generator`,{
                        method:'POST',
                        headers:{
                          'Content-Type':'application/json'
                        },
                        body:JSON.stringify(data)
        });
        const res= await response.json();
        console.log(images)
         setImages(res);
    }
   
 
    return (
        <>
        <div className="app-header">
          <img src="https://respinor.com/wp-content/uploads/2017/04/logo-dummy.png" className="logo"></img>
          <div className="loginuser">
          <img className="loginUser-img" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"></img>
          <span>Hello,User</span>
          </div>
          </div><hr/><br/>
          <p>Edit the detailed description</p>
            <div className="search-container">
      
      <input type="text" id="search-bar" placeholder="A Range of Mountains" value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
      />
      <GenerateButton
        prompt={prompt}
        size={dimension}
        callback={generateImage} />

     
    
  </div>
          

        
        
       
          <Loader/>
         
              {/* <div className="sub-container">
               {
                images.length==0?(
                  <>
                  <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-16.jpg"} />
                  <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
                  <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
                   <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-16.jpg"} />
                   <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
                   <ImageCard url={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
                  </>
                ):(
                  images.map((image)=>(
               
                    <ImageCard url={image.url} />
                 
                  ))
                )
               }
             
              
                 
  
                
                </div> */}
           
     </>
    )
}

export default App;