webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/shared/Nav.js":
/*!**********************************!*\
  !*** ./components/shared/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "E:\\job\\server-zaymi\\zaymikz\\components\\shared\\Nav.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var isLogged = function isLogged() {
  var bollean = false;

  if (js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get('token')) {
    bollean = true;
  }

  return bollean;
};

var AppLink = function AppLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
      className: className,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, _this);
};

_c = AppLink;

var Navbar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar, _React$Component);

  var _super = _createSuper(Navbar);

  function Navbar(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    _this2 = _super.call(this, props);
    _this2.state = {
      isNavOpen: false,
      loader: false
    };
    _this2.toggleNav = _this2.toggleNav.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.toggleClose = _this2.toggleClose.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.toggleLogOut = _this2.toggleLogOut.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "toggleNav",
    value: function toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
  }, {
    key: "toggleClose",
    value: function toggleClose() {
      this.setState({
        isNavOpen: false
      });
    }
  }, {
    key: "toggleLogOut",
    value: function toggleLogOut() {
      var _this3 = this;

      this.setState({
        isNavOpen: false,
        loader: true
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.remove('token');
      setTimeout(function () {
        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/login');

        _this3.setState({
          loader: false
        });
      }, 300);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var $win = jquery__WEBPACK_IMPORTED_MODULE_9___default()(window);
      $win.scroll(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_9___default()(window).width() > 550) {
          if ($win.scrollTop() == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_9___default()(".navbar").removeClass("fade-color");
          } else if (!$win.scrollTop() == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_9___default()(".navbar").addClass("fade-color");
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [this.state.loader === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "modelLoader loaded"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("nav", {
          className: " mb-2 navbar navbar-expand-lg navbar-light  transparent ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(AppLink, {
              href: "/",
              className: "navbar-brand logo",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h5", {
                children: "i-credit.kz \u0441 \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u043E\u0439 "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
                children: ["zaymi.kz ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
                  children: "\u24C7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 22
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(AppLink, {
              href: "/payment",
              className: "text-center paymentCenter ",
              children: "\u0412\u043D\u0435\u0441\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
              onClick: this.toggleNav,
              className: "navbar-toggler burger",
              type: "button",
              "data-toggle": "collapse",
              "data-target": "#navigationBar",
              "aria-controls": "navigationBar",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                className: "animated-icon1",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 49
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 57
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
              className: "phone-numbers",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                className: "phonenotworking",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
                    className: "fa fa-phone"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 43
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                    href: "tel:+77272501500",
                    children: ["+7 727 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("b", {
                      className: "black",
                      children: "250 15 00"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 106
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 72
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 39
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("b", {
                  className: "phoneInfo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 149
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
                  className: "fa fa-phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                    href: "tel:+77007501500",
                    children: ["+7 700 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("b", {
                      className: "black",
                      children: "750 15 00"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 80
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 46
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 42
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
              navbar: true,
              isOpen: this.state.isNavOpen,
              className: "text-center justify-content-end",
              id: "navigationBar",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
                className: "navbar-nav links",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                  className: "nav-item mx-1",
                  onClick: this.toggleClose,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(AppLink, {
                    className: "nav-link align-items-center d-flex",
                    href: "/payment_methods",
                    children: " \u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 11
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                  className: "nav-item mx-1",
                  onClick: this.toggleClose,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(AppLink, {
                    className: "nav-link align-items-center d-flex font-weight-bold",
                    href: "/payment",
                    children: "\u0412\u043D\u0435\u0441\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 11
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                  className: "nav-item mx-1",
                  onClick: this.toggleClose,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(AppLink, {
                    className: "nav-link mainnavphone",
                    href: "/guide",
                    children: "\u0412\u043E\u043F\u0440\u043E\u0441-\u043E\u0442\u0432\u0435\u0442"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 11
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                  className: "nav-item mx-1",
                  onClick: this.toggleClose,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(AppLink, {
                    className: "nav-link mainnavphone",
                    href: "/complaint",
                    children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0436\u0430\u043B\u043E\u0431\u0443"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 11
                }, this), isLogged() === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                    className: "nav-item mx-1",
                    onClick: this.toggleClose,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(AppLink, {
                      className: "nav-link align-items-center d-flex",
                      href: "/cabinet/loans",
                      children: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 15
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                    className: "nav-item mx-1",
                    onClick: this.toggleLogOut,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                      className: "nav-link align-items-center d-flex",
                      children: "\u0412\u044B\u0439\u0442\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 15
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 13
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                    className: "nav-item mx-1",
                    onClick: this.toggleClose,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(AppLink, {
                      className: "nav-link align-items-center d-flex",
                      href: "/login",
                      children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
                    className: "mobphones mt-2",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                      className: "nav-item mx-1 mobphonenotworking",
                      onClick: this.toggleClose,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                        href: "tel:+77272501500",
                        className: "nav-link mainnavphone",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
                          className: "fa fa-phone"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 140,
                          columnNumber: 74
                        }, this), " +77272501500"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 13
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 13
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                      className: "nav-item mx-1",
                      onClick: this.toggleClose,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                        href: "tel:+77007501500",
                        className: "nav-link mainnavphone",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
                          className: "fa fa-phone"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 144,
                          columnNumber: 74
                        }, this), " +77007501500"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 13
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 11
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                      className: "nav-item mx-1 mobphonenotworking",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                        className: "redphone nav-link mainnavphone",
                        children: "\u041D\u043E\u043C\u0435\u0440 \"\u041E\u0442\u0434\u0435\u043B \u0432\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u044F\":"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 62
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 13
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
                      className: "nav-item mx-1 mobphonenotworking",
                      onClick: this.toggleClose,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
                        href: "tel:+77788701029",
                        className: "nav-link mainnavphone",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
                          className: "fa fa-phone"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 149,
                          columnNumber: 74
                        }, this), " +77788701029"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 13
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 11
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, this);
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "AppLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2LmpzIl0sIm5hbWVzIjpbImlzTG9nZ2VkIiwiYm9sbGVhbiIsImNvb2tpZSIsImdldCIsIkFwcExpbmsiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImhyZWYiLCJOYXZiYXIiLCJwcm9wcyIsInN0YXRlIiwiaXNOYXZPcGVuIiwibG9hZGVyIiwidG9nZ2xlTmF2IiwiYmluZCIsInRvZ2dsZUNsb3NlIiwidG9nZ2xlTG9nT3V0Iiwic2V0U3RhdGUiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsIiR3aW4iLCIkIiwid2luZG93Iiwic2Nyb2xsIiwid2lkdGgiLCJzY3JvbGxUb3AiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLE1BQUlDLE9BQU8sR0FBRyxLQUFkOztBQUNBLE1BQUdDLGlEQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLENBQUgsRUFBd0I7QUFDckJGLFdBQU8sR0FBRyxJQUFWO0FBQ0Y7O0FBQ0QsU0FBT0EsT0FBUDtBQUNELENBTkQ7O0FBT0EsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxNQUFZQyxTQUFaLFFBQVlBLFNBQVo7QUFBQSxNQUF1QkMsSUFBdkIsUUFBdUJBLElBQXZCO0FBQUEsc0JBQ2QscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQVo7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRUQsU0FBZDtBQUFBLGdCQUEwQkQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFB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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjcxODVmODI1MzIzNWRiNjgzNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtDb2xsYXBzZX0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmNvbnN0IGlzTG9nZ2VkID0gKCkgPT4ge1xyXG4gIHZhciBib2xsZWFuID0gZmFsc2VcclxuICBpZihjb29raWUuZ2V0KCd0b2tlbicpKSB7XHJcbiAgICAgYm9sbGVhbiA9IHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGJvbGxlYW5cclxufVxyXG5jb25zdCBBcHBMaW5rID0gKHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBocmVmfSkgPT5cclxuICA8TGluayBocmVmPXtocmVmfT5cclxuICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxyXG4gIDwvTGluaz5cclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50ICB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgaXNOYXZPcGVuOiBmYWxzZSxcclxuICAgICAgICBsb2FkZXI6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZU5hdiA9IHRoaXMudG9nZ2xlTmF2LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnRvZ2dsZUNsb3NlID0gdGhpcy50b2dnbGVDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy50b2dnbGVMb2dPdXQgPSB0aGlzLnRvZ2dsZUxvZ091dC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTmF2KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgIGlzTmF2T3BlbjogIXRoaXMuc3RhdGUuaXNOYXZPcGVuXHJcbiAgICB9KTtcclxufVxyXG50b2dnbGVDbG9zZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICBpc05hdk9wZW46IGZhbHNlXHJcbiAgICB9KTtcclxufVxyXG5cclxudG9nZ2xlTG9nT3V0KCkge1xyXG4gIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgIGlzTmF2T3BlbjogZmFsc2UsXHJcbiAgICBsb2FkZXI6IHRydWVcclxuICB9KTtcclxuICBjb29raWUucmVtb3ZlKCd0b2tlbicpXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICBsb2FkZXI6IGZhbHNlXHJcbiAgfSlcclxuICB9LDMwMClcclxufVxyXG5jb21wb25lbnREaWRNb3VudCgpIHtcclxuICB2YXIgJHdpbiA9ICQod2luZG93KTtcclxuXHJcbiAgJHdpbi5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU1MCkge1xyXG4gICAgICBpZiAoJHdpbi5zY3JvbGxUb3AoKSA9PSAwKSB7XHJcbiAgICAgICAgICAkKFwiLm5hdmJhclwiKS5yZW1vdmVDbGFzcyhcImZhZGUtY29sb3JcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoISR3aW4uc2Nyb2xsVG9wKCkgPT0gMCkge1xyXG4gICAgICAgICAgJChcIi5uYXZiYXJcIikuYWRkQ2xhc3MoXCJmYWRlLWNvbG9yXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgIHt0aGlzLnN0YXRlLmxvYWRlciA9PT0gdHJ1ZVxyXG4gICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyXCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJtb2RlbExvYWRlciBsb2FkZWRcIj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIiBtYi0yIG5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCAgdHJhbnNwYXJlbnQgXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgPEFwcExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgbG9nb1wiPlxyXG5cclxuICAgICAgICA8aDU+aS1jcmVkaXQua3og0YEg0YLQvtGA0LPQvtCy0L7QuSDQvNCw0YDQutC+0LkgPC9oNT5cclxuICAgICAgICA8aDI+emF5bWkua3ogPHNwYW4+4pOHPC9zcGFuPiA8L2gyPlxyXG4gICAgPC9BcHBMaW5rPlxyXG5cclxuICAgIDxBcHBMaW5rIGhyZWY9Jy9wYXltZW50JyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwYXltZW50Q2VudGVyIFwiPtCS0L3QtdGB0YLQuCDQvtC/0LvQsNGC0YM8L0FwcExpbms+XHJcbiAgICAgIDxidXR0b24gIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2fSBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBidXJnZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmlnYXRpb25CYXJcIiBhcmlhLWNvbnRyb2xzPVwibmF2aWdhdGlvbkJhclwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWQtaWNvbjFcIj48c3BhbiAvPjxzcGFuIC8+PHNwYW4gLz48L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwaG9uZS1udW1iZXJzXCI+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9J3Bob25lbm90d29ya2luZyc+PGgxPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz48YSBocmVmPVwidGVsOis3NzI3MjUwMTUwMFwiPis3IDcyNyA8YiBjbGFzc05hbWU9XCJibGFja1wiPjI1MCAxNSAwMDwvYj48L2E+PC9oMT48YiBjbGFzc05hbWU9J3Bob25lSW5mbyc+PC9iPjwvbGk+XHJcbiAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz48aDE+PGEgaHJlZj1cInRlbDorNzcwMDc1MDE1MDBcIj4rNyA3MDAgPGIgY2xhc3NOYW1lPVwiYmxhY2tcIj43NTAgMTUgMDA8L2I+PC9hPjwvaDE+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPENvbGxhcHNlIG5hdmJhciBpc09wZW49e3RoaXMuc3RhdGUuaXNOYXZPcGVufSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgaWQ9XCJuYXZpZ2F0aW9uQmFyXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbGlua3NcIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteC0xXCIgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2xvc2V9ID5cclxuICAgICAgICAgICAgPEFwcExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleFwiICBocmVmPScvcGF5bWVudF9tZXRob2RzJz4g0KHQv9C+0YHQvtCxXHJcbiAgICAgICAgICAgICAg0L7Qv9C70LDRgtGLPC9BcHBMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteC0xXCIgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2xvc2V9PlxyXG4gICAgICAgICAgICA8QXBwTGluayAgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBmb250LXdlaWdodC1ib2xkXCIgaHJlZj1cIi9wYXltZW50XCI+XHJcbiAgICAgICAgICAgICAg0JLQvdC10YHRgtC4INC+0L/Qu9Cw0YLRgzwvQXBwTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXgtMVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2xvc2V9ID5cclxuICAgICAgICAgICAgPEFwcExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmsgbWFpbm5hdnBob25lXCIgaHJlZj1cIi9ndWlkZVwiPlxyXG4gICAgICAgICAgICAgINCS0L7Qv9GA0L7RgS3QvtGC0LLQtdGCPC9BcHBMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteC0xXCIgb25DbGljaz17dGhpcy50b2dnbGVDbG9zZX0gPlxyXG4gICAgICAgICAgICA8QXBwTGluayBjbGFzc05hbWU9XCJuYXYtbGluayBtYWlubmF2cGhvbmVcIiBocmVmPVwiL2NvbXBsYWludFwiPlxyXG4gICAgICAgICAgICAgINCe0YHRgtCw0LLQuNGC0Ywg0LbQsNC70L7QsdGDPC9BcHBMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuIFxyXG4gICAgICAgICBcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIHtpc0xvZ2dlZCgpID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG14LTFcIiAgb25DbGljaz17dGhpcy50b2dnbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICA8QXBwTGluayAgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleFwiICBocmVmPScvY2FiaW5ldC9sb2Fucyc+0JrQsNCx0LjQvdC10YI8L0FwcExpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG14LTFcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUxvZ091dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4XCI+0JLRi9C50YLQuDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD4pXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG14LTFcIiAgb25DbGljaz17dGhpcy50b2dnbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICA8QXBwTGluayAgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleFwiICBocmVmPScvbG9naW4nPtCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRgjwvQXBwTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50Pil9XHJcbiAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2JwaG9uZXMgbXQtMic+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteC0xIG1vYnBob25lbm90d29ya2luZ1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2xvc2V9ID5cclxuICAgICAgICAgICAgPGEgaHJlZj0ndGVsOis3NzI3MjUwMTUwMCcgY2xhc3NOYW1lPSduYXYtbGluayBtYWlubmF2cGhvbmUnPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz4gKzc3MjcyNTAxNTAwPC9hPlxyXG4gICAgICAgICAgICB7LyogPGIgY2xhc3NOYW1lPSdwaG9uZUluZm8nPtCt0YLQvtGCINC90L7QvNC10YAg0LLRgNC10LzQtdC90L3QviDQvdC1INGA0LDQsdC+0YLQsNC10YI8L2I+ICovfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteC0xXCIgb25DbGljaz17dGhpcy50b2dnbGVDbG9zZX0gPlxyXG4gICAgICAgICAgICA8YSBocmVmPSd0ZWw6Kzc3MDA3NTAxNTAwJyBjbGFzc05hbWU9J25hdi1saW5rIG1haW5uYXZwaG9uZSc+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcGhvbmVcIiAvPiArNzcwMDc1MDE1MDA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIG14LTEgbW9icGhvbmVub3R3b3JraW5nJz48YSBjbGFzc05hbWU9J3JlZHBob25lIG5hdi1saW5rIG1haW5uYXZwaG9uZSc+0J3QvtC80LXRgCBcItCe0YLQtNC10Lsg0LLQt9GL0YHQutCw0L3QuNGPXCI6PC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXgtMSBtb2JwaG9uZW5vdHdvcmtpbmdcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNsb3NlfSA+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9J3RlbDorNzc3ODg3MDEwMjknIGNsYXNzTmFtZT0nbmF2LWxpbmsgbWFpbm5hdnBob25lJz48aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiIC8+ICs3Nzc4ODcwMTAyOTwvYT5cclxuICAgICAgICAgICAgey8qIDxiIGNsYXNzTmFtZT0ncGhvbmVJbmZvJz7QrdGC0L7RgiDQvdC+0LzQtdGAINCy0YDQtdC80LXQvdC90L4g0L3QtSDRgNCw0LHQvtGC0LDQtdGCPC9iPiAqL31cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgICB7LyogPGxpICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNsb3NlfSBjbGFzc05hbWU9XCJuYXYtaXRlbSBteC0xIFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz48aDE+PGEgaHJlZj1cInRlbDorNzcyNzI1MDE1MDBcIj4rNyA3MjcgPGIgY2xhc3NOYW1lPVwiYmxhY2tcIj4yNTAgMTUgMDA8L2I+PC9hPjwvaDE+PC9saT5cclxuICAgICAgICAgIDxsaSAgb25DbGljaz17dGhpcy50b2dnbGVDbG9zZX0gY2xhc3NOYW1lPVwibmF2LWl0ZW0gbXgtMSBwaG9uZW5hdlwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz48aDE+PGEgaHJlZj1cInRlbDorNzcwMDc1MDE1MDBcIj4rNyA3MDAgPGIgY2xhc3NOYW1lPVwiYmxhY2tcIj43NTAgMTUgMDA8L2I+PC9hPjwvaDE+PC9saT4gKi99XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuICA8L2Rpdj5cclxuICApO31cclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9