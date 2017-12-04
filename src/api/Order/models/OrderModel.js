var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = new Schema({
  _id: Integer,
  code: String,
  date: {
    type: date,
    default: Date.now
  },
  total: Real,
  status: String
});

module.exports = mongoose.model('Order', Order);
