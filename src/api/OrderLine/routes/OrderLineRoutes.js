module.exports = function (app) {
  var orderline = require('../controllers/OrderLineController');

  app.route('/order/:order/line')
  .post(orderline.create_orderline);

  app.route('/order/:order/line/:lineId')
  .put(orderline.update_orderline)
  .delete(orderline.delete_orderline);
}
