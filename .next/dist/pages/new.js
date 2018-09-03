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

var _web = require('../Ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/pages/new.js?entry';


var NewTicket = function (_Component) {
  (0, _inherits3.default)(NewTicket, _Component);

  function NewTicket(props) {
    (0, _classCallCheck3.default)(this, NewTicket);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewTicket.__proto__ || (0, _getPrototypeOf2.default)(NewTicket)).call(this, props));

    _this.state = {
      loading: false,
      error: '',
      time: ['12:00 A.M.', '1:00 A.M.', '2:00 A.M.', '3:00 A.M.', '4:00 A.M.', '5:00 A.M.', '6:00 A.M.', '7:00 A.M.', '8:00 A.M.', '9:00 A.M.', '10:00 A.M.', '12:00 A.M.', '12:00 P.M.', '1:00 P.M.', '2:00 P.M.', '3:00 P.M.', '4:00 P.M.', '5:00 P.M.', '6:00 P.M.', '7:00 P.M.', '8:00 P.M.', '9:00 P.M.', '10:00 P.M.', '11:00 P.M.', '12:00 P.M.']
    };
    _this.sellTicket = _this.sellTicket.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NewTicket, [{
    key: 'sellTicket',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(evt) {
        var info, price, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                evt.preventDefault();
                this.setState({ loading: true });
                info = evt.target.name.value + '/' + evt.target.startTime.value + '/' + evt.target.venue.value + '/' + evt.target.city.value;
                price = evt.target.price.value;
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return _factory2.default.methods.createTicket(price, info).send({
                  from: accounts[0]
                });

              case 10:

                _routes.Router.pushRoute('/');
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                this.setState({ error: _context.t0.message });

              case 16:

                this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 13]]);
      }));

      function sellTicket(_x) {
        return _ref.apply(this, arguments);
      }

      return sellTicket;
    }()
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Enter Ticket Information Below')), _react2.default.createElement('form', { onSubmit: this.sellTicket, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Name of Performer'), _react2.default.createElement('input', { name: 'name', type: 'text', required: true, placeholder: 'Name', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('select', { name: 'startTime', label: 'Start Time', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.state.time.map(function (time) {
        return _react2.default.createElement('option', { key: time, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, time);
      }))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Venue Name'), _react2.default.createElement('input', { name: 'venue', type: 'text', required: true, placeholder: 'venue', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Venue City'), _react2.default.createElement('input', { name: 'city', type: 'text', required: true, placeholder: 'city', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Price'), _react2.default.createElement('input', { name: 'price', type: 'text', required: true, placeholder: '00000000', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('button', { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Create'))), !this.state.loading ? null : _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'This Will Take 15-30 Seconds Be Patient!'), this.state.error === '' ? null : _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Error! ', this.state.error)));
    }
  }]);

  return NewTicket;
}(_react.Component);

exports.default = NewTicket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiTmV3VGlja2V0IiwicHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJlcnJvciIsInRpbWUiLCJzZWxsVGlja2V0IiwiYmluZCIsImV2dCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJpbmZvIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic3RhcnRUaW1lIiwidmVudWUiLCJjaXR5IiwicHJpY2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVRpY2tldCIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0ksQUFHZjtxQ0FFSjs7cUJBQUEsQUFBWSxPQUFPO3dDQUFBOzs0SUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztlQUFRLEFBQ0YsQUFDVDthQUZXLEFBRUosQUFDUDtZQUFNLENBQUEsQUFBQyxjQUFELEFBQWUsYUFBZixBQUE0QixhQUE1QixBQUF5QyxhQUF6QyxBQUFzRCxhQUF0RCxBQUFtRSxhQUFuRSxBQUFnRixhQUFoRixBQUE2RixhQUE3RixBQUEwRyxhQUExRyxBQUF1SCxhQUF2SCxBQUFvSSxjQUFwSSxBQUFrSixjQUFsSixBQUFnSyxjQUFoSyxBQUE4SyxhQUE5SyxBQUEyTCxhQUEzTCxBQUF3TSxhQUF4TSxBQUFvTixhQUFwTixBQUFpTyxhQUFqTyxBQUE4TyxhQUE5TyxBQUEyUCxhQUEzUCxBQUF3USxhQUF4USxBQUFxUixhQUFyUixBQUFrUyxjQUFsUyxBQUFnVCxjQUh4VCxBQUFhLEFBR0wsQUFBOFQsQUFFdFU7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LE1BQXlDLGFBQXpDLEFBQXFEO29CQUFyRDtzQkExQkosQUF3QkUsQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxZQUFRLE1BQVIsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBakNOLEFBSUUsQUE0QkUsQUFDRSxBQUlGLGNBQUMsS0FBQSxBQUFLLE1BQU4sQUFBWSxVQUFaLEFBQXNCLHVCQUVwQixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQXZDTixBQXVDTSxBQU1GLGtEQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsS0FBckIsQUFBMEIsdUJBRXhCLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVksZ0JBQUEsQUFBSyxNQWpEM0IsQUFDRSxBQStDTSxBQUNFLEFBQXVCLEFBTWxDOzs7OztBQTNGcUIsQSxBQThGeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXJrby9Eb2N1bWVudHMvRnVsbFN0YWNrLUp1bmlvci90aWNrZXRTZWxsaW5nREFwcCJ9