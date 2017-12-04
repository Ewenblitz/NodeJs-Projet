'use strict';

var _webserver = require('./core/webserver');

var _webserver2 = _interopRequireDefault(_webserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_webserver2.default.start(3001, function (err) {
  if (!err) {
    console.log('Serveur Web Lancé et fonctionnel');
  }
});