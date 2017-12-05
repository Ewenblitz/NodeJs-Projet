module.exports = function (app) {
  var order = require('../controllers/OrderController');

  app.route('/order')
  .get(order.list_all_orders)
  .post(order.create_orders);

  app.route('/order/:orderId')
  .get(order.read_orders)
  .put(order.update_orders)
  .delete(order.delete_orders);

  app.route('/order/:orderId/confirm')
  .put(order.confirm_order);

}
