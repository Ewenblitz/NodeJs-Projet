/**
 * Ici le fichier controller pour les ligne de commandes (OrderLine)
 * @alias OrderLineController
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
var mongoose = require('mongoose'),
  OrderLine = mongoose.model('OrderLine'),
  Order = mongoose.model('Order');

/**
 * create_orderline function - Creation d'une ligne de commande avec une commande et un produit existants
 * @alias create_orderline
 * @return {object}     Renvoie de l'element cree
 */
exports.create_orderline = function (req, res) {
  var new_orderLine = new OrderLine(req.body);
  new_orderLine.save({order: req.params.orderId}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/**
 * update_orderline function - Mise a jour d'une ligne de commande existante
 * @alias update_orderline
 * @return {object}     Renvoie l'element mis a jour
 */
exports.update_orderline = function (req, res) {
  OrderLine.findOneAndUpdate({_id: req.params.lineId, order: req.params.orderId}, req.body, {new: true}, function(err, task) {
    if(err)
      res.send(err);
    res.json(task);
  });
};

/**
 * delete_orderline function - Supprime une ligne de commande existante
 * @alias delete_orderline
 * @return {string}     Renvoie un message de confirmation de suppression
 */
exports.delete_orderline = function(req, res){
  OrderLine.remove({_id: req.params.lineId, order: req.params.orderId}, function(err, task) {
    if (err)
      res.send(err)
    res.json({ message: 'OrderLine successfully deleted' });
  });
};

/**
 * read_line function - Recuperation d'une ligne de commande (ajouter a des fins de tests)
 * @alias read_line
 * @return {object}     Renvoie les lignes de commandes existantes 
 */
exports.read_line = function (req, res) {
  OrderLine.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
