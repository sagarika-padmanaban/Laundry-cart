const express = require("express");
const SigninBlog = require("../models/SigninBlog");
const cors = require('cors');
const bodyparser = require("body-parser");
const CreateBlog = require('../models/orderBlog')
const router = express.Router();
router.use(bodyparser.json());
router.use(cors());
let usermail;

router.post("/register",async (req,res)=>{
    try {
        const {name,email,password,phone,state,address,district,pincode} = req.body;
        // console.log(name,email,password,arr);
        const data = await SigninBlog.findOne({email:email})
        if (data) {
            return res.status(409).json({
                status: "Failed-user",
                message: "User already exists"
            });
        }
        else{
            console.log((name,email,password,phone,state,address,district,pincode));
            const user = await SigninBlog.create({
                name,email,password,phone,state,address,district,pincode
            })
            return res.status(200).json({
                status: "success",
                message: "User successfully registered",
                user
            });
        }
       

    } catch (error) {
        res.status(400).json({
            status:"failed",
            message:error.message
        })
    }

})




router.post("/login",async (req,res)=>{
    try {
        const {text,password} = req.body;
        console.log(text,password);
        const data1 = await SigninBlog.findOne({phone:text})
        const data2 = await SigninBlog.findOne({email:text})
        // data?data:data2;
        let data
        if(data1==null&& data2==null){
            data=null
        }
        else if(data1==null){
            data=data2;
        }
        else{
            data=data1;
        }
        console.log(data.password,data.email);
        if(data==null){
            res.status(400).json({
                status:"failed",
                message:"user does exist",
            })
        }
        else
          if(password === data.password){
            usermail=data.email
            res.status(200).json({
                status:"Hurray",
                message:"You are in",
                name:data.name,
                email:data.email
            })
            }
            else{
                res.status(400).json({
                    status:"oopps!!",
                    message:"Check your password"
            })
            
        }
        

    } catch (error) {
        res.status(200).json({
            status:"failed",
            message:error.message
        })
    }

})


router.get("/pastorder", async (req, res) => {
    // console.log(oper.usermail);
    // const {email} = req.body;
    const data = await CreateBlog.find({email:usermail});
    console.log(data);
    res.status(200).json({
        status: "success",
        data
    })
})

router.get("/:id", async (req, res) => {
    // console.log(oper.usermail);
    // const {email} = req.body;
    const data = await CreateBlog.find({_id:req.params.id});
    console.log(data);
    res.status(200).json({
        status: "success",
        data
    })
})


module.exports = router,usermail;
// module.exports = usermail;



// "name":"sagarika",
// "phone":"9360379336",
// "password":"9360379336",
// "state":"fghhhj",
// "address":"dfghj",
// "district":"sdfgh",
// "pincode":345678,