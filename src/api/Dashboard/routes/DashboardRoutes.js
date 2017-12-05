module.exports = function (app) {
  var dash = require('../controllers/DashboardController');

  app.route('/dashboard/orders')
  .get(dash.get_by_month);

  app.route('/dashboard/product')
  .get(dash.get_best_sale);

}
