webpackHotUpdate(5,{

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(497);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(423);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(675);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiTmV3VGlja2V0IiwicHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJlcnJvciIsInRpbWUiLCJzZWxsVGlja2V0IiwiYmluZCIsImV2dCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJpbmZvIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic3RhcnRUaW1lIiwidmVudWUiLCJjaXR5IiwicHJpY2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVRpY2tldCIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0ksQUFHZjtxQ0FFSjs7cUJBQUEsQUFBWSxPQUFPO3dDQUFBOzs0SUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztlQUFRLEFBQ0YsQUFDVDthQUZXLEFBRUosQUFDUDtZQUFNLENBQUEsQUFBQyxjQUFELEFBQWUsYUFBZixBQUE0QixhQUE1QixBQUF5QyxhQUF6QyxBQUFzRCxhQUF0RCxBQUFtRSxhQUFuRSxBQUFnRixhQUFoRixBQUE2RixhQUE3RixBQUEwRyxhQUExRyxBQUF1SCxhQUF2SCxBQUFvSSxjQUFwSSxBQUFrSixjQUFsSixBQUFnSyxjQUFoSyxBQUE4SyxhQUE5SyxBQUEyTCxhQUEzTCxBQUF3TSxhQUF4TSxBQUFvTixhQUFwTixBQUFpTyxhQUFqTyxBQUE4TyxhQUE5TyxBQUEyUCxhQUEzUCxBQUF3USxhQUF4USxBQUFxUixhQUFyUixBQUFrUyxjQUFsUyxBQUFnVCxjQUh4VCxBQUFhLEFBR0wsQUFBOFQsQUFFdFU7QUFMYSxBQUNYO1VBSUYsQUFBSyxhQUFhLE1BQUEsQUFBSyxXQUFMLEFBQWdCLEtBUGpCLEFBT2pCO1dBQ0Q7Ozs7OzsyR0FFZ0IsQTs7Ozs7bUJBQ2Y7b0JBQUEsQUFBSSxBQUNKO3FCQUFBLEFBQUssU0FBUyxFQUFDLFNBQWYsQUFBYyxBQUFVLEFBQ3BCO0EsdUJBQU8sSUFBQSxBQUFJLE9BQUosQUFBVyxLQUFYLEFBQWdCLFFBQWhCLEFBQXdCLE1BQU0sSUFBQSxBQUFJLE9BQUosQUFBVyxVQUF6QyxBQUFtRCxRQUFuRCxBQUEyRCxNQUFNLElBQUEsQUFBSSxPQUFKLEFBQVcsTUFBNUUsQUFBa0YsUUFBbEYsQUFBeUYsTUFBTSxJQUFBLEFBQUksT0FBSixBQUFXLEssQUFBSyxBQUN0SDtBLHdCQUFRLElBQUEsQUFBSSxPQUFKLEFBQVcsTUFBTSxBOzs7dUJBR0osY0FBQSxBQUFLLElBQUksQSxBQUFUOzttQkFBakI7QTs7eUNBQ0EsQUFBUSxRQUFSLEFBQ0gsYUFERyxBQUNVLE9BRFYsQUFDaUIsTUFEakIsQUFFSDt3QkFDTyxTLEFBSEosQUFFRSxBQUNFLEFBQVM7QUFEWCxBQUNKLGlCQUhFOzttQkFNTjs7K0JBQUEsQUFBTyxVQUFQLEFBQWlCOzs7Ozs7Z0RBRWpCOztxQkFBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLFlBQXZCLEFBQWMsQUFBYTs7bUJBRzdCOztxQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFoQixBQUFjLEFBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHbEIsQUFFUDs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRixvREFBQSxjQUFBLFVBQU0sVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwrREFBTyxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF3QixRQUFPLFVBQS9CLE1BQXdDLGFBQXhDLEFBQW9EO29CQUFwRDtzQkFISixBQUNFLEFBRUUsQUFFRjtBQUZFOzJCQUVGLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxNQUFSLEFBQWEsYUFBWSxPQUF6QixBQUErQjtvQkFBL0I7c0JBQUEsQUFFRTtBQUZGO2NBRUUsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixJQUFJLFVBQUEsQUFBQyxNQUFTLEFBQzVCOytCQUNFLGNBQUEsWUFBUSxLQUFSLEFBQWE7c0JBQWI7d0JBQUEsQUFBb0I7QUFBcEI7U0FBQSxFQURGLEFBQ0UsQUFFSDtBQVpQLEFBS0UsQUFDRSxBQUVFLEFBUUosNEJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHdEQUFPLE1BQVAsQUFBWSxTQUFRLE1BQXBCLEFBQXlCLFFBQU8sVUFBaEMsTUFBeUMsYUFBekMsQUFBcUQ7b0JBQXJEO3NCQWxCSixBQWdCRSxBQUVFLEFBRUY7QUFGRTsyQkFFRixjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esd0RBQU8sTUFBUCxBQUFZLFFBQU8sTUFBbkIsQUFBd0IsUUFBTyxVQUEvQixNQUF3QyxhQUF4QyxBQUFvRDtvQkFBcEQ7c0JBdEJKLEFBb0JFLEFBRUUsQUFFRjtBQUZFOzJCQUVGLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtREFBTyxNQUFQLEFBQVksU0FBUSxNQUFwQixBQUF5QixRQUFPLFVBQWhDLE1BQXlDLGFBQXpDLEFBQXFEO29CQUFyRDtzQkExQkosQUF3QkUsQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxZQUFRLE1BQVIsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBakNOLEFBSUUsQUE0QkUsQUFDRSxBQUlGLGNBQUMsS0FBQSxBQUFLLE1BQU4sQUFBWSxVQUFaLEFBQXNCLHVCQUVwQixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQXZDTixBQXVDTSxBQU1GLGtEQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsS0FBckIsQUFBMEIsdUJBRXhCLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVksZ0JBQUEsQUFBSyxNQWpEM0IsQUFDRSxBQStDTSxBQUNFLEFBQXVCLEFBTWxDOzs7OztBQTNGcUIsQSxBQThGeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXJrby9Eb2N1bWVudHMvRnVsbFN0YWNrLUp1bmlvci90aWNrZXRTZWxsaW5nREFwcCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/pages/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/pages/new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kZTM0ZWFmMGIyNTVmOWY1MTk3My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbmV3LmpzP2Y4MGU5ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL0V0aGVyZXVtL2ZhY3RvcnknXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9FdGhlcmV1bS93ZWIzJ1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcydcblxuXG5jbGFzcyBOZXdUaWNrZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZXJyb3I6ICcnLFxuICAgICAgdGltZTogWycxMjowMCBBLk0uJywgJzE6MDAgQS5NLicsICcyOjAwIEEuTS4nLCAnMzowMCBBLk0uJywgJzQ6MDAgQS5NLicsICc1OjAwIEEuTS4nLCAnNjowMCBBLk0uJywgJzc6MDAgQS5NLicsICc4OjAwIEEuTS4nLCAnOTowMCBBLk0uJywgJzEwOjAwIEEuTS4nLCAnMTI6MDAgQS5NLicsICcxMjowMCBQLk0uJywgJzE6MDAgUC5NLicsICcyOjAwIFAuTS4nLCAnMzowMCBQLk0uJywnNDowMCBQLk0uJywgJzU6MDAgUC5NLicsICc2OjAwIFAuTS4nLCAnNzowMCBQLk0uJywgJzg6MDAgUC5NLicsICc5OjAwIFAuTS4nLCAnMTA6MDAgUC5NLicsICcxMTowMCBQLk0uJywgJzEyOjAwIFAuTS4nXVxuICAgIH1cbiAgICB0aGlzLnNlbGxUaWNrZXQgPSB0aGlzLnNlbGxUaWNrZXQuYmluZCh0aGlzKVxuICB9XG5cbiAgYXN5bmMgc2VsbFRpY2tldChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxuICAgIGxldCBpbmZvID0gZXZ0LnRhcmdldC5uYW1lLnZhbHVlICsgJy8nICsgZXZ0LnRhcmdldC5zdGFydFRpbWUudmFsdWUgKyAnLycgKyBldnQudGFyZ2V0LnZlbnVlLnZhbHVlICsnLycgKyBldnQudGFyZ2V0LmNpdHkudmFsdWVcbiAgICBsZXQgcHJpY2UgPSBldnQudGFyZ2V0LnByaWNlLnZhbHVlXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXG4gICAgICAgIC5jcmVhdGVUaWNrZXQocHJpY2UsIGluZm8pXG4gICAgICAgIC5zZW5kKHtcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICB9KTtcblxuICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+RW50ZXIgVGlja2V0IEluZm9ybWF0aW9uIEJlbG93PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbGxUaWNrZXR9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+TmFtZSBvZiBQZXJmb3JtZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIk5hbWVcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInN0YXJ0VGltZVwiIGxhYmVsPVwiU3RhcnQgVGltZVwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRpbWUubWFwKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt0aW1lfT57dGltZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPlZlbnVlIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ2ZW51ZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJ2ZW51ZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5WZW51ZSBDaXR5PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJjaXR5XCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+UHJpY2U8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcmljZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCIwMDAwMDAwMFwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAge1xuICAgICAgICAgICF0aGlzLnN0YXRlLmxvYWRpbmcgPyBudWxsIDpcbiAgICAgICAgICAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBUaGlzIFdpbGwgVGFrZSAxNS0zMCBTZWNvbmRzIEJlIFBhdGllbnQhXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgPT09ICcnID8gbnVsbCA6XG4gICAgICAgICAgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyPkVycm9yISB7dGhpcy5zdGF0ZS5lcnJvcn08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3VGlja2V0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9uZXcuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBSUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBREE7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBOzs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQVFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==