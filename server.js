var express=require("express");
var app=express();

////
var bodyparser=require("body-parser");
var cors=require("cors");
var mongoose=require("mongoose");
require("dotenv").config();
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
///
const corsOptions = {
    origin: ['http://localhost:3000',"https://mernback-yle9.onrender.com"],
    optionsSuccessStatus: 200, // For legacy browser support
  };
  
  app.use(cors(corsOptions));

///////////////////Database connecting
mongoose.connect(process.env.MONGO_URI)
.then(function(){
    console.log("Database connected Successfully!");
})
.catch(function(err){
    console.log("Error in the Database connection!" + err);
});


////////////////////////////


//routers.......

var Register=require("./routers/registerrouter");


//
app.get("/",async function(req,res){
    try{

res.send("Hello i am uday!");

    }
    catch(err){
        res.status(500).json({message:"somethind wwent wrong!"});
    }
})

app.use("/",Register);

app.listen(5000,function(err){
    if(err){
        console.log("Error in the server Ruinning!");
    }
    else{
        console.log("Server is Running!");

    }
})
