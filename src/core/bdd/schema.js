var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Produit = new Schema({
  _id: Integer,
  name: String,
  price: Real
});

var LigneCommande = new Schema({
  _id: Integer,
  product: Integer,
  order: Integer,
  quantity: Interger
});

var Commande = new Schema({
  _id: Integer,
  code: String,
  date: {
    type: date,
    default: Date.now
  },
  total: Real,
  status: String
});

module.exports = mongoose.model('Produit', Produit);
module.exports = mongoose.model('LigneCommande', LigneCommande);
module.exports = mongoose.model('Commande', Commande);
