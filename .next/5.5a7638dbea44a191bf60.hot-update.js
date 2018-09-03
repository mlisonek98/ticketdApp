webpackHotUpdate(5,{

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _ticket = __webpack_require__(495);

var _ticket2 = _interopRequireDefault(_ticket);

var _web = __webpack_require__(423);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/Components/SingleTicket.js';


var SingleTicket = function (_Component) {
  (0, _inherits3.default)(SingleTicket, _Component);

  function SingleTicket(props) {
    (0, _classCallCheck3.default)(this, SingleTicket);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SingleTicket.__proto__ || (0, _getPrototypeOf2.default)(SingleTicket)).call(this, props));

    _this.state = {
      concert: [],
      price: '',
      loading: false,
      error: '',
      deleted: false
    };
    _this.loadInfo = _this.loadInfo.bind(_this);
    _this.buyTicket = _this.buyTicket.bind(_this);
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
                _context.prev = 0;
                ticket = (0, _ticket2.default)(this.props.address);
                _context.next = 4;
                return ticket.methods.concertInfo().call();

              case 4:
                ticketInfo = _context.sent;
                info = ticketInfo.split('/');
                _context.next = 8;
                return ticket.methods.ticketPrice().call();

              case 8:
                ticketPrice = _context.sent;

                this.loadInfo(info, ticketPrice);
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);
                this.setState({ deleted: true });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
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
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(evt) {
        var ticket, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                evt.preventDefault();
                ticket = (0, _ticket2.default)(this.props.address);

                this.setState({ loading: true });

                _context2.prev = 3;
                _context2.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context2.sent;
                _context2.next = 9;
                return ticket.methods.buyTicket().send({
                  from: accounts[0],
                  value: this.state.price
                });

              case 9:
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](3);

                this.setState({ error: _context2.t0.message });

              case 14:

                this.setState({ loading: false });

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 11]]);
      }));

      function buyTicket(_x) {
        return _ref2.apply(this, arguments);
      }

      return buyTicket;
    }()
  }, {
    key: 'render',
    value: function render() {

      return this.state.deleted ? null : _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('div', { className: 'ticket', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('div', { className: 'ticketHeader', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, this.state.concert[0]), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, this.state.price + ' wei')), _react2.default.createElement('div', { className: 'ticketmeta', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Starts at ' + this.state.concert[1]), _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, this.state.concert[2] + ' in ', this.state.concert[3])), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('button', { type: 'submit', onClick: this.buyTicket, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Buy')), !this.state.loading ? null : _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'This takes 15-30 Seonds, please wait!')), this.state.error === '' ? null : _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, 'Error! ', this.state.error))));
    }
  }]);

  return SingleTicket;
}(_react.Component);

exports.default = SingleTicket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvU2luZ2xlVGlja2V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGlja2V0cyIsIndlYjMiLCJTaW5nbGVUaWNrZXQiLCJwcm9wcyIsInN0YXRlIiwiY29uY2VydCIsInByaWNlIiwibG9hZGluZyIsImVycm9yIiwiZGVsZXRlZCIsImxvYWRJbmZvIiwiYmluZCIsImJ1eVRpY2tldCIsInRpY2tldCIsImFkZHJlc3MiLCJtZXRob2RzIiwiY29uY2VydEluZm8iLCJjYWxsIiwidGlja2V0SW5mbyIsImluZm8iLCJzcGxpdCIsInRpY2tldFByaWNlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFHWCxBO3dDQUVKOzt3QkFBQSxBQUFZLE9BQU87d0NBQUE7O2tKQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2VBQVEsQUFDRixBQUNUO2FBRlcsQUFFSixBQUNQO2VBSFcsQUFHRixBQUNUO2FBSlcsQUFJSixBQUNQO2VBTEYsQUFBYSxBQUtGLEFBRVg7QUFQYSxBQUNYO1VBTUYsQUFBSyxXQUFXLE1BQUEsQUFBSyxTQUFMLEFBQWMsS0FBOUIsQUFDQTtVQUFBLEFBQUssWUFBWSxNQUFBLEFBQUssVUFBTCxBQUFlLEtBVmYsQUFVakI7V0FDRDs7Ozs7Ozs7Ozs7O2dDQUlTO0EseUJBQVMsc0JBQVEsS0FBQSxBQUFLLE1BQWIsQSxBQUFtQjs7dUJBQ1QsT0FBQSxBQUFPLFFBQVAsQUFBZSxjQUFmLEEsQUFBNkI7O21CQUFoRDtBLHNDQUNBO0EsdUJBQU8sV0FBQSxBQUFXLE0s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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/Components/SingleTicket.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/Components/SingleTicket.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41YTc2MzhkYmVhNDRhMTkxYmY2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9TaW5nbGVUaWNrZXQuanM/N2M3NTdkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpY2tldHMgZnJvbSAnLi4vRXRoZXJldW0vdGlja2V0J1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vRXRoZXJldW0vd2ViMydcblxuXG5jbGFzcyBTaW5nbGVUaWNrZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbmNlcnQ6IFtdLFxuICAgICAgcHJpY2U6ICcnLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBlcnJvcjogJycsXG4gICAgICBkZWxldGVkOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmxvYWRJbmZvID0gdGhpcy5sb2FkSW5mby5iaW5kKHRoaXMpXG4gICAgdGhpcy5idXlUaWNrZXQgPSB0aGlzLmJ1eVRpY2tldC5iaW5kKHRoaXMpXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdGlja2V0ID0gVGlja2V0cyh0aGlzLnByb3BzLmFkZHJlc3MpXG4gICAgICBjb25zdCB0aWNrZXRJbmZvID0gYXdhaXQgdGlja2V0Lm1ldGhvZHMuY29uY2VydEluZm8oKS5jYWxsKClcbiAgICAgIGNvbnN0IGluZm8gPSB0aWNrZXRJbmZvLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IHRpY2tldFByaWNlID0gYXdhaXQgdGlja2V0Lm1ldGhvZHMudGlja2V0UHJpY2UoKS5jYWxsKClcbiAgICAgIHRoaXMubG9hZEluZm8oaW5mbywgdGlja2V0UHJpY2UpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB0aGlzLnNldFN0YXRlKHtkZWxldGVkOiB0cnVlfSlcbiAgICB9XG4gIH1cblxuICBsb2FkSW5mbyhpbmZvLCBwcmljZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvbmNlcnQ6IGluZm99KVxuICAgIHRoaXMuc2V0U3RhdGUoe3ByaWNlOiAnJyArIHByaWNlfSlcbiAgfVxuXG4gIGFzeW5jIGJ1eVRpY2tldChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRpY2tldCA9IFRpY2tldHModGhpcy5wcm9wcy5hZGRyZXNzKVxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IHRpY2tldC5tZXRob2RzLmJ1eVRpY2tldCgpLnNlbmQoe1xuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUucHJpY2VcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2V9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUuZGVsZXRlZCA/IG51bGwgOlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWNrZXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldEhlYWRlclwiPlxuICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLmNvbmNlcnRbMF19PC9oMT5cbiAgICAgICAgICAgIDxoMj57dGhpcy5zdGF0ZS5wcmljZSArICcgd2VpJ308L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0bWV0YVwiPlxuICAgICAgICAgICAgPGg0PnsnU3RhcnRzIGF0ICcgKyB0aGlzLnN0YXRlLmNvbmNlcnRbMV19PC9oND5cbiAgICAgICAgICAgIDxoNT57dGhpcy5zdGF0ZS5jb25jZXJ0WzJdICsgJyBpbiAnfXt0aGlzLnN0YXRlLmNvbmNlcnRbM119PC9oNT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5idXlUaWNrZXR9PkJ1eTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLmxvYWRpbmcgPyBudWxsIDpcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDQ+VGhpcyB0YWtlcyAxNS0zMCBTZW9uZHMsIHBsZWFzZSB3YWl0ITwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yID09PSAnJyA/IG51bGwgOlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg0PkVycm9yISB7dGhpcy5zdGF0ZS5lcnJvcn08L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVRpY2tldFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9TaW5nbGVUaWNrZXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BO0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQVVBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=