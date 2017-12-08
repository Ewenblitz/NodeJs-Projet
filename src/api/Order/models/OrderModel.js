/**
 * Mise en place du model pour la commande (Order)
 * @alias OrderModel
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
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
      enum: ['draft', 'confirmed']
    }],
    default: ['draft']
  }
});

module.exports = mongoose.model('Order', Order);
