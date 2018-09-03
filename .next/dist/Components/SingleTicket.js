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

var _ticket = require('../Ethereum/ticket');

var _ticket2 = _interopRequireDefault(_ticket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/Components/SingleTicket.js';


var SingleTicket = function (_Component) {
  (0, _inherits3.default)(SingleTicket, _Component);

  function SingleTicket(props) {
    (0, _classCallCheck3.default)(this, SingleTicket);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SingleTicket.__proto__ || (0, _getPrototypeOf2.default)(SingleTicket)).call(this, props));

    _this.state = {
      concert: [],
      price: ''
    };
    return _this;
  }

  (0, _createClass3.default)(SingleTicket, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var ticket, ticketInfo, info, ticketPrice;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ticket = (0, _ticket2.default)(this.props.address);
                _context.next = 3;
                return ticket.methods.concertInfo().call();

              case 3:
                ticketInfo = _context.sent;
                info = ticketInfo.split('/');
                _context.next = 7;
                return ticket.methods.ticketPrice().call();

              case 7:
                ticketPrice = _context.sent;

                this.loadInfo(info, ticketPrice);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'loadInfo',
    value: function loadInfo(info, price) {
      this.setState({ concert: info });
      this.setState({ price: '' + price });
    }
  }, {
    key: 'buyTicket',
    value: function buyTicket() {
      console.log('hi');
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('div', { className: 'ticket', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('div', { className: 'ticketHeader', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.state.concert[0]), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, this.state.price, ' wei')), _react2.default.createElement('div', { className: 'ticketmeta', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Starts at ', this.state.concert[1]), _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.state.concert[2], ' in ', this.state.concert[3])), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('button', { type: 'submit', onClick: this.buyTicket, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Buy'))));
    }
  }]);

  return SingleTicket;
}(_react.Component);

exports.default = SingleTicket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvU2luZ2xlVGlja2V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGlja2V0cyIsIlNpbmdsZVRpY2tldCIsInByb3BzIiwic3RhdGUiLCJjb25jZXJ0IiwicHJpY2UiLCJ0aWNrZXQiLCJhZGRyZXNzIiwibWV0aG9kcyIsImNvbmNlcnRJbmZvIiwiY2FsbCIsInRpY2tldEluZm8iLCJpbmZvIiwic3BsaXQiLCJ0aWNrZXRQcmljZSIsImxvYWRJbmZvIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiYnV5VGlja2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUdkO3dDQUVKOzt3QkFBQSxBQUFZLE9BQU87d0NBQUE7O2tKQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2VBQVEsQUFDRixBQUNUO2FBSmUsQUFFakIsQUFBYSxBQUVKO0FBRkksQUFDWDtXQUdIOzs7Ozs7Ozs7OzttQkFHTztBLHlCQUFTLHNCQUFRLEtBQUEsQUFBSyxNLEFBQWIsQUFBbUI7O3VCQUNULE9BQUEsQUFBTyxRQUFQLEFBQWUsY0FBZixBQUE2QixBOzttQkFBaEQ7QSxzQ0FDQTtBLHVCQUFPLFdBQUEsQUFBVyxNQUFNLEEsQUFBakI7O3VCQUNhLE9BQUEsQUFBTyxRQUFQLEFBQWUsYyxBQUFmLEFBQTZCOzttQkFBakQ7QSx1Q0FDTjs7cUJBQUEsQUFBSyxTQUFMLEFBQWMsTUFBZCxBQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdiLEEsTSxBQUFNLE9BQU8sQUFDcEI7V0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFBVSxBQUN4QjtXQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sS0FBdEIsQUFBYyxBQUFhLEFBQzVCOzs7O2dDQUVXLEFBQ1Y7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNiOzs7OzZCQUVPLEFBRU47OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FBSyxBQUFLLE1BQUwsQUFBVyxRQURsQixBQUNFLEFBQUssQUFBbUIsQUFDeEIscUJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FBSyxBQUFLLE1BQVYsQUFBZ0IsT0FIcEIsQUFDRSxBQUVFLEFBRUYsMEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQWUsbUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFENUIsQUFDRSxBQUFlLEFBQW1CLEFBQ2xDLHFCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQUFMLEFBQVcsUUFBaEIsQUFBSyxBQUFtQixJQUFRLGFBQUEsQUFBSyxNQUFMLEFBQVcsUUFQL0MsQUFLRSxBQUVFLEFBQWdDLEFBQW1CLEFBRXJELHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxNQUFSLEFBQWEsVUFBUyxTQUFTLEtBQS9CLEFBQW9DO29CQUFwQztzQkFBQTtBQUFBO1NBWlIsQUFDRSxBQUNFLEFBU0UsQUFDRSxBQU1UOzs7OztBQS9Dd0IsQSxBQWtEM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiU2luZ2xlVGlja2V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXJrby9Eb2N1bWVudHMvRnVsbFN0YWNrLUp1bmlvci90aWNrZXRTZWxsaW5nREFwcCJ9