/**
 * Ici le controlleur du dashboard | la gestion d'erreur fonctionne dans certain cause
 * Le dashboard n'est pas fonctionnel dans son état actuel
 * @alias DashboardController
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */
var mongoose = require ('mongoose');
// Recuperation des different models
const OrderModel = mongoose.model('Order');
const OrderLineModel = mongoose.model('OrderLine');
const ProductModel = mongoose.model('Product');

/**
 * get_by_month function - Recuperation des produit vendu, repartis par mois
 * @alias get_by_month
 * @return {number} Statut HTTP Code
 * @return {date} Date - Le mois
 * @return {object} La liste des commande par mois
 */
exports.get_by_month = function (req, res) {
  const year = (new Date()).getFullYear();
  OrderModel.aggregate([
    {
      $match: {
        status: 'confirmed',
        date: { $gte: new Date(`${year}-01-01T00:00:00.0Z`), $lte: new Date(`${year}-12-31T23:59:59:999Z`) },
      },
    },
    {
      $group: {
        _id: { $month: '$date' },
        totalCA: { $sum: '$total' },
      },
    },
    { $sort: { _id: 1 } },
  ], (err, result) => {
    if (err) {
      res.send(res, 500);
    } else if (result.length === 0) {
      res.send(res, 200, '');
    } else {
      res.json(res, 200, result);
    }
  });
};
/**
 * get_best_sale function - description
 * @alias get_best_sale
 * @return {number} Statut HTTP commande
 * @return {object} Product - Les meilleurs vente de produit des produits
 * Recuperation des meilleurs ventes de produits
 */
exports.get_best_sale = function (req, res) {
  OrderLineModel.aggregate([
    {
      $group: {
        _id: { product: '$product' },
        total: { $sum: '$quantity'},
      },
    },
    { $sort: { total: -1 } },
    { $limit: 1 },
  ], (err, result) => {
    if (err) {
      res.send(res, 500);
    } else if (result.length === 0) {
      res.send(res, 200, '');
    } else {
      const id_product = result[0]._id.product;
      ProductModel.findById({ _id: req.params.productId }, (err, product) => {
        if (err) {
          res.send(res, 500);
        } else if (product === null) {
          res.send(res, 404);
        } else {
          res.json(res, 200, product)
        }
      });
    }
  });
};
