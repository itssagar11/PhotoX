const express=require("express");
const delle= require("../controllers/delleE");
const router=express.Router();
const cors= require("./cors");
router.get("/",cors.cors,(req,res,next)=>{
    res.end("Delle API");
})
// router.options(cors.restrictedCors,(req,res)=>{
//     res.sendStatus(200);
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
// })
router. post("/generator",delle.delleE);

router. post("/g",(req,res)=>{
    res.send("Hello");
});




module.exports=router;