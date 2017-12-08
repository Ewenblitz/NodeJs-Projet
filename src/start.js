/**
 * Ici le fichier d'initialisation et de demarrage du serveur
 * @alias Serveur
 * @author Ewen Lomer, Christopher Leccia, Rahpael Apruzzese
 */

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose');

// Importation des models pour la base de donnée
var Order = require('./api/Order/models/OrderModel'),
    OrderLine = require('./api/OrderLine/models/OrderLineModel'),
    Product = require('./api/Product/models/ProductModel'),
    Dashboard = require('./api/Dashboard/models/DashboardModel');

// Permet ici de faciliter l'utilisation des middleware

var bodyParser = require('body-parser');

// Mise en place le connection a la base de donnée avec mongoose

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BDD');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importation des routes
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

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
