const express= require("express");
const app= express();
const dotenv= require("dotenv");
const cors=require("cors");
const delle=require("./routes/dellEAPI");


dotenv.config();
app.use(express.json());
app.use(cors());

const port= process.env.PORT || 4000;


app.use("/delle",delle);

module.exports=app;


