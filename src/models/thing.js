//GIFT MODEL
var mongoose = require('mongoose');
/////////
//Constructor function
var ThingSchema = new mongoose.Schema({
  name: String,
  category: String,
  picture: String,
  link: String,
  about: String,
});
///////
module.exports = mongoose.model('Thing', ThingSchema);
