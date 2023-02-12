const express = require("express");
const bodyparser = require("body-parser");
const path = require('path');
const fs = require('fs')
const cors = require('cors')
const CreateBlog = require('../models/orderBlog')
const oper = require('./signin');
const router = express.Router();
router.use(bodyparser.json());
let useremail;

router.use(cors());

router.get("/pastorder", async (req, res) => {
    console.log(oper.usermail);
    const {email} = req.body;
    const data = await CreateBlog.find({email:email});
    console.log(data);
    res.status(200).json({
        status: "success",
        data
    })
})

router.get("/", async (req, res) => {
    console.log(oper.usermail);
    const {email} = req.body;
    const data = await CreateBlog.findOne({email:email});
    console.log(data);
    res.status(200).json({
        status: "success",
        data
    })
})
// console.log(oper.usermail);


router.post('/order', async (req, res) => {
    const {totalitems,total,shirt,jeans,trousers,boxers,tshirt,joggers,shirtwash,jeanwash,trouserswash,boxerswash,tshirtwash,joggerswash,email} = req.body;
    console.log(req.body);
    // console.log(oper.usermail);
    try {
        const data = await CreateBlog.create({
            // order: req.body.order,
            // washtype:req.body.washtype,
            // phone: req.body.phone,
            // location: req.body.location,
            // price: req.body.price,
            // address: req.body.address
            shirt:shirt,
            shirtwash:shirtwash,
            jeans:jeans,
            trousers:trousers,
            boxers:boxers,
            tshirt:tshirt,
            joggers:joggers,
            shirtwash:shirtwash,
            jeanwash:jeanwash,
            trouserswash:trouserswash,
            boxerswash:boxerswash,
            tshirtwash:tshirtwash,
            joggerswash:joggerswash,
            email:email,
            totalitems:totalitems,
            total:total

        });
        res.status(200).json(data)


    } catch (error) {
        res.status(200).json({
            status: "failed",
            message: error.message
        })
    }
})


module.exports = router;
