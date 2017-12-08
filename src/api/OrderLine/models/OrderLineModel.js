var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderLine = new Schema({
  _id: {
    type: Number
  },
  product: {
    type: Number
  },
  order: {
    type: Number
  },
  quantity: {
    type: Number
  }
});

module.exports = mongoose.model('OrderLine', OrderLine);
