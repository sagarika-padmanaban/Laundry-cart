const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LaundryLogin = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    phone: {type: String},
    state:{type: String},
    district:{type: String},
    address:{type: String},
    pincode:{type: Number}
});

const LaundryBlog = mongoose.model('login', LaundryLogin);
module.exports = LaundryBlog;