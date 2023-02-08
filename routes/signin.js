const express = require("express");
const SigninBlog = require("../models/SigninBlog");
const cors = require('cors');
const bodyparser = require("body-parser");

const router = express.Router();
router.use(bodyparser.json());
router.use(cors());


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
        const {phone,email,password} = req.body;
        const data = await SigninBlog.findOne({email:email},{phone:phone})
        if(data==null){
            res.status(400).json({
                status:"failed",
                message:"user does exist"
            })
        }
        else
          if(password === data.password){
            res.status(200).json({
                status:"Hurray",
                message:"You are in"
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

module.exports = router;



// "name":"sagarika",
// "phone":"9360379336",
// "password":"9360379336",
// "state":"fghhhj",
// "address":"dfghj",
// "district":"sdfgh",
// "pincode":345678,