const express= require("express");
const dotenv= require("dotenv");
const axios=require("axios");
const async=require("async");
const {Configuration,OpenAIApi }= require("openai");
dotenv.config();
const configuration= new Configuration({
    apiKey:process.env.OPENAI_API_KEY,

});

const openai= new OpenAIApi(configuration);

exports.delleE= async (req,res,next)=>{
    
    const prompt=req.body.prompt;
    const size=req.body.size;
    console.log(prompt+"dd");
    try{
        const response= await openai.createImage({
            prompt:prompt,
            n:10,
            size:size,
           
        });

   

    const responseArray=response.data.data;
        console.log(responseArray)
    const resObj=[];
    async.each(responseArray,async (resp)=>{
        const url= resp.url;
        const r= await axios.get(url, { responseType: "arraybuffer" });
        resObj.push(r.data);
        //  console.log(url);

    },()=>{
        res.setHeader("Content-Type","JSON/text");
        res.status(200);
        // res.send(responseArray);
        //  console.log(resObj);
        res.send(resObj);
        res.end();
    })
    // res.send(response);
    // res.end();
}catch(error){
    if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
  
      res.status(400).json({
        success: false,
        error: 'The image could not be generated',
      });
}

   

};

