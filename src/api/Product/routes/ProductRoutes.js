/**
 * Mise en place des route concernant les produits (Product)
 * @alias ProductRoutes
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
module.exports = function (app) {
  var product = require('../controllers/ProductController');
// Methode GET pour obtenir les produits
// Methode POST pour creer un produit non existant
  app.route('/product')
  .get(product.list_products)
  .post(product.create_products);
// Methode GET pour obtenir un produit par son ID
// Methode PUT pour mettre a jour un produit par son ID
// Methode DELETE pour supprimer un produit par son ID
  app.route('/product/:productId')
  .get(product.read_products)
  .put(product.update_products)
  .delete(product.delete_products);
}
