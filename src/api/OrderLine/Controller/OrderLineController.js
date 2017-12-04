var mongoose = require('mongoose'),
  OrderLine = mongoose.model('OrderLine');


exports.create_orders = function (req, res) {
  var new_orderLine = new OrderLine(req.body);
  new_orderLine.save({req.params.order}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_orders = function (req, res) {
  OrderLine.findOneAndUpdate({_id: req.params.lineId, order: req.params.orderId}, , req.body, {new: true}, function(err, task) {
    if(err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_orders = function(req, res){
  OrderLine.remove({_id: req.params.lineId, order: req.params.order}, req.params.lineId, function(err, task) {
    if (err)
      res.send(err)
    res.json({ message: 'OrderLine successfully deleted' });
  });
};