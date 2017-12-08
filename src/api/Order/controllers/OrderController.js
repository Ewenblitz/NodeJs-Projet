/**
 * Ici le fichier controller pour les commandes (Order)
 * @alias OrderController
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
var mongoose = require('mongoose'),
  Order = mongoose.model('Order');

/**
 * list_all_orders function - Recuperation de toutes les commandes
 * @alias list_all_orders
 * @return {object}     Liste des elements existants
 */
exports.list_all_orders = function (req, res) {
  Order.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/**
 * create_orders function - Creation d'une commande
 * @alias create_orders
 * @return {object}     Renvoie de l'element cree
 */
exports.create_orders = function (req, res) {
  var new_order = new Order(req.body);
  new_order.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/**
 * read_orders function - Recuperation d'une commande
 * @alias read_orders
 * @return {object}     Renvoie l'element existant
 */
exports.read_orders = function (req, res) {
  Order.findById(req.params.orderId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/**
 * update_orders function - Met a jour une commande existante
 * @alias update_orders
 * @return {object}     Renvoie l'element modifie
 */
exports.update_orders = function (req, res) {
  Order.findOneAndUpdate({_id: req.params.orderId}, req.body, {new: true}, function(err, task) {
    if(err)
      res.send(err);
    res.json(task);
  });
};

/**
 * delete_orders function - Supprime une commande existante
 * @alias delete_orders
 * @return {string}     Renvoie un message de confirmation de suppression
 */
exports.delete_orders = function(req, res){
  Order.remove({
    _id: req.params.orderId
  }, function(err, task) {
    if (err)
      res.send(err)
    res.json({ message: 'Order successfully deleted' });
  });
};
