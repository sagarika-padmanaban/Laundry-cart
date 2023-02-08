const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreatePage = new Schema({
  order: Object,
  phone: Number,
  location: String,
  price:Number,
  address: String,
  date: {
		type: Date,
		default: Date.now,
  }	
});



const CreateBlog = mongoose.model('CreateOrder', CreatePage);
module.exports = CreateBlog;