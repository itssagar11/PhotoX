const express= require("express");
const dotenv= require("dotenv");
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
    console.log(typeof response);
    res.setHeader("Content-Type","JSON/text");
    res.status(200);
    res.send(response.data.data);
    res.end();

};

