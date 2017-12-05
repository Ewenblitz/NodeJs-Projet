import Webserver from 'app/core/webserver';
import Connect from 'app/core/bdd/connect.js';

Connect.connect();

var Order = require('./api/Order/models/OrderModel'),
    OrderLine = require('./api/OrderLine/models/OrderLineModel'),
    Product = require('./api/Product/models/ProductModel'),
    Dashboard = require('./api/Dashboard/models/DashboardModel');

const bodyParser = require('body-parser');

var OrderRoute = require('./api/Order/routes/OrderRoutes'),
    OrderLineRoute = require('./api/OrderLine/routes/OrderLineRoutes'),
    ProductRoute = require('./api/Product/routes/ProductRoutes'),
    DashboardRoute = require('./api/Dashboard/routes/DashboardRoutes');

OrderRoute(app);
OrderLineRoute(app);
ProductRoute(app);
DashboardRoute(app);

Webserver.start(3001, (err) => {
  if (!err) {
    console.log('Serveur Web Lancé et fonctionnel');
  }
});
