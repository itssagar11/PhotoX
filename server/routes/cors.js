const express= require("express");
const cors= require("cors");
const app=express();

const originList=['http://localhost:3000'];
const corsOptionDelgation=(req,callback)=>{
    var corsOption;
    if(originList.indexOf(req.header("origin"))!==-1){
        corsOption={origin:req.header("origin"), methods:['PUT','POST','OPTIONS']};
    }else{
        corsOption={origin:false};
    }
    callback(null,corsOption);
};
exports.restrictedCors= cors(corsOptionDelgation);
exports.cors=cors();

