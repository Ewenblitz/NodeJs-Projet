/**
 * Ici le fichier controller pour les produits (Product)
 * @alias ProductController
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
var mongoose = require('mongoose'),
  Product = mongoose.model('Product');

/**
 * list_products function - Recuperation de tous les produits
 * @alias list_products
 * @return {object}     Liste des elements existants
 */
exports.list_products = function(req, res) {
  Product.find({}, function(err, task) {
    if(err)
      res.send(err);
    res.json(task);
  });
};

/**
 * create_products function - Creation d'un produit
 * @alias create_products
 * @return {object}     Renvoie de l'element cree
 */
exports.create_products = function(req, res) {
  var new_product = new Product(req.body);
  new_product.save(function(err, task) {
    if(err)
      res.send(err);
    res.json(task);
  });
};

/**
 * read_products function - Recuperation d'un produit
 * @alias read_products
 * @return {object}     Renvoie de l'element existant
 */
exports.read_products = function(req, res) {
  Product.findById(req.params.productId, function(err, task) {
    if(err)
      res.send(res);
    res.json(task);
  });
};

/**
 * update_products function - Met a jour un produit existant
 * @alias update_products
 * @return {object}     Renvoie l'element modifie
 */
exports.update_products = function(req, res) {
  Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, res) {
    if(err)
      res.send(err);
    res.json(task);
  });
};

/**
 * delete_products function - Supprime un produit existant
 * @alias delete_products
 * @return {string}     Renvoie un message de confirmation
 */
exports.delete_products = function(req, res) {
  Product.remove({
    _id: req.params.productId
  }, function(err, task) {
    if(err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};
