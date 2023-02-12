const express = require("express");
const mongoose = require("mongoose");
const Create = require("./routes/create");
const signin = require("./routes/signin");
const SigninBlog = require("./models/SigninBlog");

const port = 5678 || process.env.PORT;
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

app.get("/signin", async (req, res) => {
    const data = await SigninBlog.find();
    console.log(data);
    res.status(200).json({
        status: "success",
        data
    })
})


app.listen(5678, () => {
    console.log(`server starting up port ${port}!`);
})

