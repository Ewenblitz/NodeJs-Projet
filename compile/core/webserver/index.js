'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Webserver = function () {
  function Webserver() {
    _classCallCheck(this, Webserver);

    this.express = null;
    this.server = null;
  }

  _createClass(Webserver, [{
    key: 'start',
    value: function start(callback) {
      var _this = this;

      this.express = (0, _express2.default)();

      this.server = this.express.listen(3001, function (err) {
        if (typeof callback === 'function') {
          callback(err, _this.express);
        }
      });
    }
  }, {
    key: 'close',
    value: function close(callback) {
      if (this.server === null) {
        callback(new Error('Le serveur n\'est pas fonctionnel'));
      } else {
        this.server.close(function (err) {
          if (typeof callback === 'function') {
            callback(err);
          }
        });
      }
    }
  }]);

  return Webserver;
}();

exports.default = new Webserver();