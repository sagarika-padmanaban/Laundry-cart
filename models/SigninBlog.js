const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LaundryLogin = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    password: {type: Number},
    state:{type: String},
    district:{type: String},
    address:{type: String},
    pincode:{type: String}
});

const LaundryBlog = mongoose.model('login', LaundryLogin);
module.exports = LaundryBlog;