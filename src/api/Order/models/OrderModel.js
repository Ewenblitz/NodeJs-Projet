var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = new Schema({
  _id: {
    type: Number
  },
  code: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  total: {
    type: Number
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'confirm']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Order', Order);
