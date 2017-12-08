/**
 * Mise en place des route concernant les lignes de commandes (OrderLine)
 * @alias OrderLineRoute
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
module.exports = function (app) {
  var orderline = require('../controllers/OrderLineController');
// Methode POST pour creer une ligne de commande non existant par l'ID d'une commande
  app.route('/order/:orderId/line')
  .post(orderline.create_orderline);
// Methode PUT pour mettre a jour une ligne de commande existante par son ID, ainsi que l'ID de sa commande
// Methode DELETE pour supprimer une ligne de commande existante par son ID, ainsi que l'ID de sa commande
  app.route('/order/:orderId/line/:lineId')
  .put(orderline.update_orderline)
  .delete(orderline.delete_orderline);
// Methode GET pour obtenir les lignes de commandes (ajoutee a des fins de test)
  app.route('/line')
  .get(orderline.read_line);
}
