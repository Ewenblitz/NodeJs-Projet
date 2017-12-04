var mongoose = require('mongoose'),
  Order = mongoose.model('Order');

exports.list_all_orders = function (req, res) {
  Order.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_orders = function (req, res) {
  var new_order = new Order(req.body);
  new_order.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_orders = function (req, res) {
  Order.findById(req.params.orderId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_orders = function (req, res) {
  Order.findOneAndUpdate({_id: req.params.orderId}, req.body, {new: true}, function(err, task) {
    if(err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_orders = function(req, res){
  Order.remove({
    _id: req.params.orderId
  }, function(err, task) {
    if (err)
      res.send(err)
    res.json({ message: 'Order successfully deleted' });
  });
};
