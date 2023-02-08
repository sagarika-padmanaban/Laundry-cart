const express = require("express");
const bodyparser = require("body-parser");
const path = require('path');
const fs = require('fs')
const cors = require('cors')
const CreateBlog = require('../models/orderBlog')

const router = express.Router();
router.use(bodyparser.json());


router.use(cors());


router.get("/", async (req, res) => {
    const data = await CreateBlog.find();
    console.log(data);
    res.status(200).json({
        status: "success",
        data
    })
})



router.post('/order', async (req, res) => {
    try {
        const data = await CreateBlog.create({
            order: req.body.order,
            washtype:req.body.washtype,
            phone: req.body.phone,
            location: req.body.location,
            price: req.body.price,
            address: req.body.address
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
