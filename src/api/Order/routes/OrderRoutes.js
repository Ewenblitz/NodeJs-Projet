/**
 * Mise en place des route concernant les commandes (Order)
 * @alias OrderRoutes
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
module.exports = function (app) {
  var order = require('../controllers/OrderController');
// Methode GET pour obtenir les commandes
// Methode POST pour creer une commande non existante
  app.route('/order')
  .get(order.list_all_orders)
  .post(order.create_orders);
// Methode GET pour obtenir une commande par son ID
// Methode POST pour mettre a jour une commande par son ID
// Methode DELETE pour supprimer une commande par son ID
  app.route('/order/:orderId')
  .get(order.read_orders)
  .post(order.update_orders)
  .delete(order.delete_orders);
// Methode POST pour mettre a jour le statut d'une commande par son ID
  app.route('/order/:orderId/confirm')
  .post(order.update_orders);
}
