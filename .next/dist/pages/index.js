'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../Ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _SingleTicket = require('../Components/SingleTicket');

var _SingleTicket2 = _interopRequireDefault(_SingleTicket);

var _Nav = require('../Components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/pages/index.js?entry';


var TicketsIndex = function (_Component) {
  (0, _inherits3.default)(TicketsIndex, _Component);

  function TicketsIndex() {
    (0, _classCallCheck3.default)(this, TicketsIndex);

    return (0, _possibleConstructorReturn3.default)(this, (TicketsIndex.__proto__ || (0, _getPrototypeOf2.default)(TicketsIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(TicketsIndex, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_Nav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), this.props.tickets.map(function (address) {
        return _react2.default.createElement(_SingleTicket2.default, { key: address, address: address, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        });
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var tickets;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedTickets().call();

              case 2:
                tickets = _context.sent;
                return _context.abrupt('return', { tickets: tickets });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return TicketsIndex;
}(_react.Component);

exports.default = TicketsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIlNpbmdsZVRpY2tldCIsIk5hdiIsIlRpY2tldHNJbmRleCIsInByb3BzIiwidGlja2V0cyIsIm1hcCIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRUaWNrZXRzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7NkJBT0ssQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFFRTtBQUZGO0FBQUEsZUFFRSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLElBQUksVUFBQSxBQUFDLFNBQVksQUFDbEM7K0JBQU8sQUFBQyx3Q0FBYSxLQUFkLEFBQW1CLFNBQVMsU0FBNUIsQUFBcUM7c0JBQXJDO3dCQUFQLEFBQU8sQUFDUjtBQURRO1NBQUE7QUFMZixBQUNFLEFBR0ksQUFNUDs7Ozs7Ozs7Ozs7O3VCQWZ1QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IscUJBQWhCLEFBQXFDLEE7O21CQUFyRDtBO2lEQUNDLEVBQUMsU0FBRCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSmdCLEEsQUFxQjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXJrby9Eb2N1bWVudHMvRnVsbFN0YWNrLUp1bmlvci90aWNrZXRTZWxsaW5nREFwcCJ9