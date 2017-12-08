/**
 * Mise en place des routes concernant le Dashboard
 * @alias DashboardRoutes
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
module.exports = function (app) {
  var dash = require('../controllers/DashboardController');
// Methode GET pour obtenir les commande passer par mois
  app.route('/dashboard/orders')
  .get(dash.get_by_month);
// Methode GET pour obtenir les meilleurs ventes de produits
  app.route('/dashboard/product')
  .get(dash.get_best_sale);

}
