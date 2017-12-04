var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
  _id: Integer,
  name: String,
  price: Real
});

module.exports = mongoose.model('Product', Product);
