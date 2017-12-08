var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose');

var Order = require('./api/Order/models/OrderModel'),
    OrderLine = require('./api/OrderLine/models/OrderLineModel'),
    Product = require('./api/Product/models/ProductModel'),
    Dashboard = require('./api/Dashboard/models/DashboardModel');

var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BDD');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var OrderRoute = require('./api/Order/routes/OrderRoutes'),
    OrderLineRoute = require('./api/OrderLine/routes/OrderLineRoutes'),
    ProductRoute = require('./api/Product/routes/ProductRoutes'),
    DashboardRoute = require('./api/Dashboard/routes/DashboardRoutes');

OrderRoute(app);
OrderLineRoute(app);
ProductRoute(app);
DashboardRoute(app);

app.listen(port);

console.log('Serveur lancé');
