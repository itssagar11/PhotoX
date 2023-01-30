const express=require("express");
const delle= require("../controllers/delleE");
const router=express.Router();

router.post("/generator",delle.delleE);






module.exports=router;