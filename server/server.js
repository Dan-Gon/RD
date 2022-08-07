const express = require("express");
const app = express();

app.get("/api", (req,res)=>{
    res.json({message: "Hello"})
})
app.listen(4000, ()=>{
    console.log("Server initiated");
})
