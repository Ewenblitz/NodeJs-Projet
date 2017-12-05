var mongoose = require('mongoose'),
  Product = mongoose.model('Product');

exports.list_products = function(req, res) {
  Product.find({}, function(err, task) {
    if(err)
      res.send(err);
    res.json(task);
  });
};

exports.create_products = function(req, res) {
  var new_product = new Product(req.body);
  new_task.save(function(err, task) {
    if(err)
      res.send(err);
    res.json(task);
  });
};

exports.read_products = function(req, res) {
  Product.findById(req.params.productId, function(err, task) {
    if(err)
      res.send(res);
    res.json(task);
  });
};

exports.update_products = function(req, res) {
  Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, res) {
    if(err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_products = function(req, res) {
  Product.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if(err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};
