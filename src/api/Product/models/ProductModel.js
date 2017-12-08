/**
 * Mise en place du model pour les produit (Product)
 * @alias ProductModel
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
  _id: {
    type: Number
  },
  name: {
    type: String
  },
  price: {
    type: Number
  }
});

module.exports = mongoose.model('Product', Product);
