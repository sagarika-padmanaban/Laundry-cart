const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreatePage = new Schema({
  shirt: String,
  totalitems:Number,
  total:Number,
  shirtwash:Array,
  jeans:String,
  trousers:String,
  boxers:String,
  tshirt:String,
  joggers:String,
  shirtwash:Array,
  jeanwash:Array,
  trouserswash:Array,
  boxerswash:Array,
  tshirtwash:Array,
  joggerswash:Array,
  email:String,
  // phone: Number,
  // location: String,
  // price:Number,
  // address: String,
  date: {
		type: Date,
		default: Date.now,
  }	
});



const CreateBlog = mongoose.model('CreateOrder', CreatePage);
module.exports = CreateBlog;