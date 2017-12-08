module.exports = function (app) {
  var order = require('../controllers/OrderController');

  app.route('/order')
  .get(order.list_all_orders)
  .post(order.create_orders);

  app.route('/order/:orderId')
  .get(order.read_orders)
  .post(order.update_orders)
  .delete(order.delete_orders);
/*
  app.route('/order/:orderId/confirm')
  .post(order.confirm_order);
*/
}
