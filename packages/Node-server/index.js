const express = require("express");
const port = process.env.PORT || 2000;
const app = express();

app.get('/',(req,res)=>{
    res.send("I am a backend server");
});
app.listen(port, (err) => {
    if(err){
        console.log("error");
    }
    else{
        console.log("server running");
    }
});

