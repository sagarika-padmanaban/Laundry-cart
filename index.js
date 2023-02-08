const express = require("express");
const mongoose = require("mongoose");
const Create = require("./routes/create");
const signin = require("./routes/signin");

const port = 5152 || process.env.PORT;

const uri = `mongodb+srv://Sagarika:Sagarika@cluster0.u0ncdyq.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery', true);
 
mongoose.connect(uri,(err)=>{
    if(err){
        console.log("Connected to mongodb Failed");
    }
    else{
        console.log("Successfully connected to mongodb");
    }
})

const app = express();
app.use("/create", Create);
app.use("/signin", signin);



app.listen(5152, () => {
    console.log(`server starting up port ${port}!`);
})

