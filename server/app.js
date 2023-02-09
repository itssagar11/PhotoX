const express= require("express");
const app= express();
const dotenv= require("dotenv");
const cors=require("cors");
const delle=require("./routes/dellEAPI");


dotenv.config();
app.use(express.json());
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'https://photox-1yia.onrender.com/');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');

//     next();
// }
// app.use(allowCrossDomain);
 app.use(cors(  
        {
    origin:"http://localhost:3000"}
 ));

const port= process.env.PORT || 4000;


app.use("/delle",delle);

module.exports=app;


