webpackHotUpdate(4,{

/***/ "./Components/SingleTicket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ethereum_ticket__ = __webpack_require__("./Ethereum/ticket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Ethereum_web3__ = __webpack_require__("./Ethereum/web3.js");

var _jsxFileName = '/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/Components/SingleTicket.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SingleTicket = function (_Component) {
  _inherits(SingleTicket, _Component);

  function SingleTicket(props) {
    _classCallCheck(this, SingleTicket);

    var _this = _possibleConstructorReturn(this, (SingleTicket.__proto__ || Object.getPrototypeOf(SingleTicket)).call(this, props));

    _this.state = {
      concert: [],
      price: '',
      loading: true,
      error: '',
      deleted: false
    };
    _this.loadInfo = _this.loadInfo.bind(_this);
    _this.buyTicket = _this.buyTicket.bind(_this);
    return _this;
  }

  _createClass(SingleTicket, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var ticket, ticketInfo, info, ticketPrice;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                ticket = Object(__WEBPACK_IMPORTED_MODULE_2__Ethereum_ticket__["a" /* default */])(this.props.address);
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(evt) {
        var ticket, accounts;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                evt.preventDefault();
                ticket = Object(__WEBPACK_IMPORTED_MODULE_2__Ethereum_ticket__["a" /* default */])(this.props.address);

                this.setState({ loading: true });

                _context2.prev = 3;
                _context2.next = 6;
                return __WEBPACK_IMPORTED_MODULE_3__Ethereum_web3__["a" /* default */].eth.getAccounts();

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

      return this.state.deleted ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'ticket', __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ticketHeader', __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              this.state.concert[0]
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h2',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              this.state.price + ' wei'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'ticketmeta', __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h4',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              'Starts at ' + this.state.concert[1]
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h5',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              },
              this.state.concert[2] + ' in ',
              this.state.concert[3]
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'button',
              { className: 'ticketButton', type: 'submit', onClick: this.buyTicket, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              },
              'Buy'
            )
          ),
          !this.state.loading ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'loading', __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h4',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              },
              'This takes 15-30 Seonds, please wait!'
            )
          ),
          this.state.error === '' ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: 'error', __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h4',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                }
              },
              'Error! ',
              this.state.error
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SingleTicket;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = SingleTicket;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SingleTicket, 'SingleTicket', '/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/Components/SingleTicket.js');
  reactHotLoader.register(_default, 'default', '/Users/Marko/Documents/FullStack-Junior/ticketSellingDApp/Components/SingleTicket.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.028e814ef70d9c3a0d60.hot-update.js.map