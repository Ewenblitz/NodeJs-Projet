var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderLine = new Schema({
  _id: Integer,
  product: Integer,
  order: Integer,
  quantity: Interger
});

module.exports = mongoose.model('OrderLine', OrderLine);
