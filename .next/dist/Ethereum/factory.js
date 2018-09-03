'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _TicketsFactory = require('./build/TicketsFactory.json');

var _TicketsFactory2 = _interopRequireDefault(_TicketsFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//get instance of our deployed factory contract
var instance = new _web2.default.eth.Contract(JSON.parse(_TicketsFactory2.default.interface), '0x8d32641521179A30608C78AA9bdf0720903925A3');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIlRpY2tldHNGYWN0b3J5IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTJCLEFBQTNCOzs7Ozs7QUFFQTtBQUNBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDZixLQUFLLEFBQUwsTUFBVyx5QkFBZSxBQUExQixBQURlLFlBRWYsQUFGZSxBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hcmtvL0RvY3VtZW50cy9GdWxsU3RhY2stSnVuaW9yL3RpY2tldFNlbGxpbmdEQXBwIn0=