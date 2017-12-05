var mongoose = require ('mongoose');

const OrderModel = mongoose.model('Order');
const OrderLineModel = mongoose.model('OrderLine');
const ProductModel = mongoose.model('Product');

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
      ProductModel.findById({ _id: id_product }, (err, product) => {
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
