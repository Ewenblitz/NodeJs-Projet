module.exports = function (app) {
  var product = require('../controllers/ProductController');

  app.route('/product')
  .get(product.list_products)
  .post(product.create_products);

  app.route('/product/:productId')
  .get(product.read_products)
  .put(product.update_products)
  .delete(product.delete_products);
}
