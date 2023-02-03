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
    const prompt=req.body.prompt
    const size=req.body.size;
    const response= await openai.createImage({
        prompt:prompt,
        n:10,
        size:size,
    });

    const responseArray=response.data.data;
    const resObj=[];
    async.each(responseArray,async (resp,callback)=>{
        const url= resp.url;
        const r= await axios.get(url, { responseType: "arraybuffer" });
        resObj.push(r.data);
        // console.log(r.data);

    },()=>{
        res.setHeader("Content-Type","JSON/text");
        res.status(200);
        // res.send(responseArray);
         console.log(resObj);
        res.send(JSON.stringify(resObj));
        res.end();
    })
  
    // console.log(reslt);
   

};

