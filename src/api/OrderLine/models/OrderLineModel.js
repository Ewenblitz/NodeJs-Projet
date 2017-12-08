/**
 * Mise en place du model pour les lignes de commandes (OrderLine)
 * @alias OrderLineModel
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
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
