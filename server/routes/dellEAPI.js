const express=require("express");
const delle= require("../controllers/delleE");
const router=express.Router();


router.get("/",(req,res,next)=>{
    res.end("Delle API");
})
router.post("/generator",delle.delleE);






module.exports=router;