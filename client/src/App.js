import React, { useEffect, useState } from "react";
import "./css/App.css";
import ImageCard from "./imageCard";

//76703b18



const App= ()=>{
    const [movies,setMovies]= useState([]);
    const [find,setSearch]=useState("");
    const ApiFire= async()=>{
        const response= await fetch(`http://www.omdbapi.com/?apikey=76703b18&s=${find}`);
        const data=await response.json()
        //  console.log(data.Search);
         setMovies(data.Search);
        
    }
   
    useEffect(()=>{
        ApiFire();
    },[find])
 
    return (
        <>
        <div className="app-header">
          <img src="https://respinor.com/wp-content/uploads/2017/04/logo-dummy.png" className="logo"></img>
          <div className="loginuser">
          <img className="loginUser-img" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"></img>
          <span>Hello, User</span>
          </div>
          </div><hr/><br/>
          <p>Edit the detailed description</p>
            <div className="search-container">

    <input type="text" id="search-bar" placeholder="A Range of Mountains"/>
    <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
  </div>
          

        
        
       

         
              <div className="sub-container">
               
              <ImageCard movie={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-16.jpg"} />
                                <ImageCard movie={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
                    
                                <ImageCard movie={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
              
              <ImageCard movie={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-16.jpg"} />
                                <ImageCard movie={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
                    
                                <ImageCard movie={"https://ld-wp73.template-help.com/wordpress/prod_18250/v1/wp-content/uploads/2018/05/portfolio-1.jpg"} />
              
                 
  
                
                </div>
           
     </>
    )
}

export default App;