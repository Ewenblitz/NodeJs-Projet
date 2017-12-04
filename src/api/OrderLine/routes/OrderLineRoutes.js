module.exports = function (app) {
  var orderline = require('../controllers/OrderLineController');

  app.route('/order/{order id}/line')
  .post(orderline.create_orderline);

  app.route('/order/{order id}/line/{line id}')
  .put(orderline.update_orderline)
  .delete(orderline.delete_orderline);
}
