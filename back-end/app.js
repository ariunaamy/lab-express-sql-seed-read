const express = require("express");
const cors = require("cors"); 
const songController = require("./controllers/songController")


//configuration 
const app =express(); 

//middleware 
app.use(cors());
app.use(express.json());// parses incoming json response 


app.get("/", (req,res)=>{
    res.send("Welcome to Tuner");
})

app.use("/songs",songController)

app.get("*", (req,res)=>{
    res.status(404).send("Page not found")
})

module.exports = app; 

