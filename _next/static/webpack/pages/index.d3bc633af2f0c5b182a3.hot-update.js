webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_banner_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/banner.png */ "./img/banner.png?2146");
/* harmony import */ var _img_banner_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_banner_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_shared_ProgressBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/ProgressBar */ "./components/shared/ProgressBar.js");
/* harmony import */ var _img_bottomBanner_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/bottomBanner.png */ "./img/bottomBanner.png");
/* harmony import */ var _img_bottomBanner_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_bottomBanner_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _defaults_utmSource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../defaults/utmSource */ "./defaults/utmSource.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);









var _jsxFileName = "E:\\job\\server-zaymi\\zaymikz\\pages\\index.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var scrollToElement = __webpack_require__(/*! scroll-to-element */ "./node_modules/scroll-to-element/index.js");



function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

;

var AppLink = function AppLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
    href: href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
      className: className,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, _this);
};

_c = AppLink;

var Home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "state", {
      collapse: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "toggleCollapse", function (id) {
      return function () {
        if (!_this2.state.collapse || id !== _this2.state.collapse) {
          _this2.setState({
            collapse: id
          });
        } else if (_this2.state.collapse === id) {
          _this2.setState({
            collapse: false
          });
        }
      };
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "testfunc", function () {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_16___default.a.get('utm_source')) {
        return true;
      } else {
        return false;
      }
    });

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "handleFocus",
    value: function handleFocus() {
      scrollToElement('.calculator-info', {
        offset: 0,
        align: 'middle',
        ease: 'outExpo',
        duration: 600
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_defaults_utmSource__WEBPACK_IMPORTED_MODULE_13__["controlUtm"])();
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.props.query)
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_15___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
            children: "\u0414\u0435\u043D\u044C\u0433\u0438 \u0432 \u043A\u0440\u0435\u0434\u0438\u0442 \u043E\u043D\u043B\u0430\u0439\u043D \u043C\u0438\u043A\u0440\u043E\u0437\u0430\u0439\u043C\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0443 \u043F\u043E \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0443"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "view",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "mainbanner",
              styles: {
                backgroundImage: "url(".concat(_img_banner_png__WEBPACK_IMPORTED_MODULE_9___default.a, ")")
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "header-text row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
                  className: "secondary-header col-md-5 col-12",
                  children: ["\u041C\u0438\u043A\u0440\u043E\u0437\u0430\u0439\u043C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                    className: "d-block",
                    children: "\u043E\u043D\u043B\u0430\u0439\u043D \u043D\u0430 \u043A\u0430\u0440\u0442\u0443"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 70
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                    className: "d-block",
                    children: ["\u0434\u043E ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                      className: "red",
                      children: "145 000\u0442\u0433"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 148
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 119
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 11
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "header-imgs col-md-7 col-12 align-items-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    className: "bigzerotext",
                    src: __webpack_require__(/*! ../img/0.svg */ "./img/0.svg"),
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 13
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "header-imgs--right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                      className: "percentageZero",
                      src: __webpack_require__(/*! ../img/percent.svg */ "./img/percent.svg"),
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 15
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                      className: "vsegdaPervidni",
                      src: __webpack_require__(/*! ../img/Всегда первые 7 дней.svg */ "./img/Всегда первые 7 дней.svg"),
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 15
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 13
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 11
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
                className: "calculator container",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "texts",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    children: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u043C\u0438\u043A\u0440\u043E\u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 13
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    children: "\u041B\u044C\u0433\u043E\u0442\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 7 \u0434\u043D\u0435\u0439"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 13
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 11
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_shared_ProgressBar__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 11
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("main", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
            className: "finance",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
              className: " primary text-center",
              children: ["\u041E\u043D\u043B\u0430\u0439\u043D \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043C\u0438\u043A\u0440\u043E\u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 88
              }, this), "\u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0430 \u043A\u0430\u0440\u0442\u0443 \u0438 \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0435 \u0441\u0440\u043E\u043A\u0438!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "advantages text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "advantages--box",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                      className: "red d-block",
                      children: "1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 23
                    }, this), "\u0411\u044B\u0441\u0442\u0440\u043E"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    children: "\u0411\u0435\u0437 \u0441\u043F\u0440\u0430\u0432\u043E\u043A, \u043F\u043E\u0440\u0443\u0447\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u043B\u0438\u0448\u043D\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0437\u0430 10 \u043C\u0438\u043D\u0443\u0442"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "advantages--box",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                      className: "red d-block",
                      children: "2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 23
                    }, this), "\u0423\u0434\u043E\u0431\u043D\u043E"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    children: "\u0411\u0435\u0437 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u043E\u0444\u0438\u0441\u0430 \u0443\u0437\u043D\u0430\u0439\u0442\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "advantages--box",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                      className: "red d-block",
                      children: "3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 23
                    }, this), "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    children: "\u041D\u0435 \u043E\u0447\u0435\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u0430\u044F \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u0430\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u2014 \u043D\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u043E\u0442\u043A\u0430\u0437\u0430"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "presents pt-5 mt-5",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "col-md-3"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "col-md-6 mt mb-5 present",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "content",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
                      className: "red",
                      children: "100"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                      children: ["\u041A\u0430\u0436\u0434\u043E\u043C\u0443 100-\u043C\u0443 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                        className: "d-block",
                        children: "\u0437\u0430\u0435\u043C\u0449\u0438\u043A\u043E\u043C"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 124,
                        columnNumber: 39
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                        className: "d-block",
                        children: "\u043F\u0440\u043E\u0449\u0430\u0435\u043C"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 124,
                        columnNumber: 81
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                        className: "d-block",
                        children: "\u043A\u0440\u0435\u0434\u0438\u0442"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 32
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(AppLink, {
                    href: "/get_money",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                      className: "content-bottom red",
                      children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../img/Bitmap.png */ "./img/Bitmap.png"),
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
            className: "stepmoney",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
              className: "primary text-center",
              children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438 \u0432 \u043A\u0440\u0435\u0434\u0438\u0442 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 74
              }, this), "\u0437\u0430 \u0434\u0432\u0430 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u0448\u0430\u0433\u0430!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "steps mt-5",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "step mb-5 col-md-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../img/svg/icon 1.svg */ "./img/svg/icon 1.svg"),
                    className: "mb-5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
                    children: ["\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443 \u043D\u0430 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                      children: " \u0441\u0430\u0439\u0442\u0435 \u043E\u043D\u043B\u0430\u0439\u043D"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 43
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "step mb-5 col-md-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../img/svg/icon 2.svg */ "./img/svg/icon 2.svg"),
                    className: "mb-5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
                    children: "\u0416\u0434\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10 \u043C\u0438\u043D\u0443\u0442!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              className: "little-header mb-5",
              children: ["\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F \u0412\u0430\u0448\u0435\u0433\u043E \u0437\u0430\u0439\u043C\u0430 \u043D\u0430\u0448 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                className: "d-block",
                children: "\u043A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0412\u0430\u043C\u0438."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 83
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "button rounded",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(AppLink, {
                href: "/get_money",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  className: "takebtn",
                  children: "  \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 42
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
              className: "mt-5 whyus",
              children: ["\u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E \u043C\u044B? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                className: "whyus--little d-block",
                children: "\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 58
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "advantages",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "advantage col-lg-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../img/ptichka.png */ "./img/ptichka.png"),
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
                    className: "advantage--text",
                    children: "0% \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0435 7 \u0434\u043D\u0435\u0439 \u0432\u0441\u0435\u0433\u0434\u0430"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "advantage col-lg-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../img/ptichka.png */ "./img/ptichka.png"),
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
                    className: "advantage--text",
                    children: "\u0411\u0435\u0437 \u0437\u0430\u043B\u043E\u0433\u0430 \u0438 \u043F\u043E\u0440\u0443\u0447\u0438\u0442\u0435\u043B\u0435\u0439"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "advantage col-lg-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../img/ptichka.png */ "./img/ptichka.png"),
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
                    className: "advantage--text",
                    children: "10 \u043C\u0438\u043D\u0443\u0442 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0435"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "advantage col-lg-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../img/ptichka.png */ "./img/ptichka.png"),
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
                    className: "advantage--text",
                    children: "\u0411\u0435\u0437 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0438\u0445 \u0434\u043E\u0445\u043E\u0434\u043E\u0432"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "advantage col-lg-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../img/ptichka.png */ "./img/ptichka.png"),
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
                    className: "advantage--text",
                    children: "\u0417\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u043D\u0435\u0433 \u043D\u0430 \u0441\u0447\u0435\u0442 \u043B\u044E\u0431\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0430"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "advantage col-lg-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../img/ptichka.png */ "./img/ptichka.png"),
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
                    className: "advantage--text",
                    children: "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0434 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439 \u0437\u0430\u0449\u0438\u0442\u043E\u0439"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "whyus-footer",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
                className: "whyus mt-5",
                children: ["\u0412\u044B\u0434\u0430\u0434\u0438\u043C \u0437\u0430\u0435\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                  className: "red",
                  children: ["10 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                    children: "\u043C\u0438\u043D\u0443\u0442"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 90
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 65
                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                  className: "whyus--little d-block",
                  children: "\u041F\u043E\u043B\u0443\u0447\u0438 \u0434\u0435\u043D\u044C\u0433\u0438 \u0432 \u0437\u0430\u0439\u043C\u044B, \u0443\u0436\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0430 \u0441\u0430\u043C\u044B\u0445 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 116
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(AppLink, {
                href: "/get_money",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  className: "takebtn",
                  children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
          className: "bottom-banner",
          styles: {
            backgroundImage: "url(".concat(_img_bottomBanner_png__WEBPACK_IMPORTED_MODULE_11___default.a, ")")
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "bContent mb-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "topText",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
                  className: "red",
                  children: "100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
                  children: ["\u041A\u0430\u0436\u0434\u043E\u043C\u0443 100-\u043C\u0443 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 34
                  }, this), "\u0437\u0430\u0435\u043C\u0449\u0438\u043A\u043E\u043C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 52
                  }, this), "\u043A\u0440\u0435\u0434\u0438\u0442 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "bContent--text",
                children: "\u0417\u0430\u0439\u043C\u0438 \u0438 \u0441\u0442\u0430\u043D\u044C \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u043C \u0437\u0430\u0435\u043C\u0449\u0438\u043A\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u043C\u044B \u043F\u0440\u043E\u0441\u0442\u0438\u043C \u043A\u0440\u0435\u0434\u0438\u0442. \u041A\u0430\u0436\u0434\u043E\u043C\u0443 100-\u043C\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u043F\u0440\u043E\u0449\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F, \u0442\u0430\u043A \u0438 \u0441\u0430\u043C \u0437\u0430\u0451\u043C! \u0423\u0441\u043F\u0435\u0439 \u0441\u0442\u0430\u0442\u044C 100-\u0442\u044B\u043C!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "bContent--links",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  className: "takebtn",
                  children: "\u0425\u043E\u0447\u0443 \u043A\u0440\u0435\u0434\u0438\u0442 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "videolist",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "inst",
                onClick: this.toggleCollapse("video1"),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "playblock",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "playbtn"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "inst",
                onClick: this.toggleCollapse("video2"),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "playblock",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "playbtn"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "inst",
                onClick: this.toggleCollapse("video3"),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "playblock",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "playbtn"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "inst",
                onClick: this.toggleCollapse("video4"),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "playblock",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "playbtn"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "bottom-banner--text ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "container",
            children: ["\u0421\u0440\u043E\u0447\u043D\u043E \u043D\u0443\u0436\u043D\u044B \u0434\u0435\u043D\u044C\u0433\u0438 \u0438 \u043D\u0435 \u0443 \u043A\u043E\u0433\u043E \u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C, \u0432\u044B \u043F\u043E\u043F\u0430\u043B\u0438 \u0432 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0437\u0434\u0435\u0441\u044C \u0438 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441. \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0432\u0430\u0448\u0435\u043C\u0443 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044E \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043C\u0438\u043A\u0440\u043E\u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u044F \u0438\u0437 \u0434\u043E\u043C\u0430. \u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430 10 \u043C\u0438\u043D\u0443\u0442 \u0434\u043B\u044F \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 \u043C\u0443\u0436\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u0430 \u043E\u0442 18 \u0434\u043E 67 \u043B\u0435\u0442, \u0434\u043B\u044F \u0436\u0435\u043D\u0449\u0438\u043D \u043E\u0442 18 \u0434\u043E 73 \u043B\u0435\u0442.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 338
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 347
            }, this), "\u041D\u0430\u0448\u0438 \u043C\u0438\u043A\u0440\u043E\u043A\u0440\u0435\u0434\u0438\u0442\u044B \u2013 \u044D\u0442\u043E \u043A\u0440\u0430\u0442\u043A\u043E\u0441\u0440\u043E\u0447\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432 \u0431\u044B\u0442\u043E\u0432\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F\u0445 \u0438\u043B\u0438 \u0432 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0435\u043D\u0438\u044F\u0445 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0438\u043D\u0430 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0430 \u043E\u0442 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u043D\u0435\u0437\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0438\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B \u0443\u0441\u043B\u0443\u0433. \u041A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u043C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0447\u0438\u0432 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u0435 \u043E\u043D\u043B\u0430\u0439\u043D \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u0441\u0435\u0433\u043E \u043B\u0438\u0448\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u0430\u043D\u043A\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 365
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 374
            }, this), "\u041E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0435 \u0435\u0449\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u044B \u0438\u043B\u0438 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0435, \u043D\u043E \u043E\u0447\u0435\u043D\u044C \u043D\u0443\u0436\u0434\u0430\u0435\u0442\u0435\u0441\u044C \u0432 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u0445 \u043D\u0435 \u0431\u0435\u0434\u0430, \u043C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043C\u0438\u043A\u0440\u043E\u0437\u0430\u0439\u043C\u044B \u0432 \u0441\u0430\u043C\u044B\u0445 \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F\u0445. \u041E\u043D\u043B\u0430\u0439\u043D \u0441\u0435\u0440\u0432\u0438\u0441 Zaymi \u2013 \u044D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0435 \u0441\u0440\u043E\u043A\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043C\u0438\u043A\u0440\u043E\u0437\u0430\u0439\u043C\u043E\u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u043D\u0430 \u043A\u0430\u0440\u0442\u0443.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 293
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 302
            }, this), "\u0414\u043B\u044F \u043F\u0435\u0440\u0432\u0438\u0447\u043D\u044B\u0445 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F: \u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u043F\u0435\u0440\u0432\u044B\u0435 7 \u0434\u043D\u0435\u0439 \u0431\u0435\u0437 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0435 \u043A\u0430\u043A \u043D\u043E\u0432\u044B\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0442\u0430\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u043C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C - \u0437\u0430\u0435\u043C\u0449\u0438\u043A\u0430\u043C. ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 211
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 13
            }, this), "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 43
            }, this), "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u0432 \u0434\u0435\u043D\u044C \u2013 1%.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 45
            }, this), "\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442 15 \u0434\u043E 30 \u0434\u043D\u0435\u0439", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 47
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 56
            }, this), "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u0440\u043E\u043A\u0430 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 \u043F\u043E \u0437\u0430\u0439\u043C\u0443, \u0437\u0430\u0435\u043C\u0449\u0438\u043A \u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u044F\u0437\u0430\u043D \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043D\u0435\u0443\u0441\u0442\u043E\u0439\u043A\u0443, \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 0,5% \u043E\u0442 \u0441\u0443\u043C\u043C\u044B \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0434\u043E\u043B\u0433\u0430 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438, \u043D\u043E \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10% \u043E\u0442 \u0441\u0443\u043C\u043C\u044B \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0434\u043E\u043B\u0433\u0430 \u0432 \u0433\u043E\u0434."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
          isOpen: this.state.collapse === "video1",
          toggle: this.toggleCollapse("video1"),
          id: "video1",
          size: "md",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("iframe", {
              src: "https://www.instagram.com/p/CGX1ryJIUY1/embed?autoplay=1",
              height: "500px",
              width: "100%",
              frameborder: "0",
              scrolling: "no",
              allow: "autoplay",
              allowtransparency: "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
          isOpen: this.state.collapse === "video2",
          toggle: this.toggleCollapse("video2"),
          id: "video2",
          size: "md",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("iframe", {
              src: "https://www.instagram.com/p/CF7tqQWp98a/embed?autoplay=1",
              height: "500px",
              width: "100%",
              frameborder: "0",
              scrolling: "no",
              allow: "autoplay",
              allowtransparency: "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 10
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
          isOpen: this.state.collapse === "video3",
          toggle: this.toggleCollapse("video3"),
          id: "video3",
          size: "md",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("iframe", {
              src: "https://www.instagram.com/p/CF7wKQap_3M/embed?autoplay=1",
              height: "500px",
              width: "100%",
              frameborder: "0",
              scrolling: "no",
              allow: "autoplay",
              allowtransparency: "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 10
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
          isOpen: this.state.collapse === "video4",
          toggle: this.toggleCollapse("video4"),
          id: "video4",
          size: "md",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("iframe", {
              src: "https://www.instagram.com/p/CH0v9xehpWX/embed/?autoplay=1",
              height: "500px",
              width: "100%",
              frameborder: "0",
              scrolling: "no",
              allow: "autoplay",
              allowtransparency: "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 10
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(Home));

var _c, _c2;

$RefreshReg$(_c, "AppLink");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic2Nyb2xsVG9FbGVtZW50IiwicmVxdWlyZSIsImdldFVybFBhcmFtZXRlciIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiQXBwTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaHJlZiIsIkhvbWUiLCJjb2xsYXBzZSIsImlkIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNvb2tpZSIsImdldCIsIm9mZnNldCIsImFsaWduIiwiZWFzZSIsImR1cmF0aW9uIiwiY29udHJvbFV0bSIsImJhY2tncm91bmRJbWFnZSIsImJhbm5lciIsImJvdHRvbUJhbm5lciIsInRvZ2dsZUNvbGxhcHNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQSxlQUFlLEdBQUdDLG1CQUFPLENBQUMsb0VBQUQsQ0FBN0I7O0FBQ0E7O0FBRUEsU0FBU0MsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDN0JBLE1BQUksR0FBR0EsSUFBSSxDQUFDQyxPQUFMLENBQWEsTUFBYixFQUFxQixLQUFyQixFQUE0QkEsT0FBNUIsQ0FBb0MsTUFBcEMsRUFBNEMsS0FBNUMsQ0FBUDtBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsV0FBV0gsSUFBWCxHQUFrQixXQUE3QixDQUFaO0FBQ0EsTUFBSUksT0FBTyxHQUFHRixLQUFLLENBQUNHLElBQU4sQ0FBV0MsUUFBUSxDQUFDQyxNQUFwQixDQUFkO0FBQ0EsU0FBT0gsT0FBTyxLQUFLLElBQVosR0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoTkQsZUFxTkMscUVBQUMsaURBQUQ7QUFBUSxnQkFBTSxFQUFFLEtBQUtaLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixRQUF4QztBQUFrRCxnQkFBTSxFQUFFLEtBQUtjLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBMUQ7QUFBeUYsWUFBRSxFQUFDLFFBQTVGO0FBQXNHLGNBQUksRUFBQyxJQUEzRztBQUFBLGlDQUNKLHFFQUFDLHFEQUFEO0FBQUEsbUNBQ0k7QUFBUyxpQkFBRyxFQUFDLDJEQUFiO0FBQXlFLG9CQUFNLEVBQUMsT0FBaEY7QUFBd0YsbUJBQUssRUFBQyxNQUE5RjtBQUFxRyx5QkFBVyxFQUFDLEdBQWpIO0FBQXFILHVCQUFTLEVBQUMsSUFBL0g7QUFBb0ksbUJBQUssRUFBQyxVQUExSTtBQUFxSiwrQkFBaUIsRUFBQztBQUF2SztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBck5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUROO0FBNk5DOzs7O0VBaFFnQkMsNENBQUssQ0FBQ0MsUzs7QUFtUVYscUVBQUFDLCtEQUFVLENBQUNsQixJQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQzYmM2MzNhZjJmMGM1YjE4MmEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJhbm5lciBmcm9tICcuLi9pbWcvYmFubmVyLnBuZydcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9Qcm9ncmVzc0Jhcic7XG5pbXBvcnQgYm90dG9tQmFubmVyIGZyb20gJy4uL2ltZy9ib3R0b21CYW5uZXIucG5nJ1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7Y29udHJvbFV0bX0gZnJvbSAnLi4vZGVmYXVsdHMvdXRtU291cmNlJ1xuaW1wb3J0IHsgdXNlUm91dGVyLCB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG52YXIgc2Nyb2xsVG9FbGVtZW50ID0gcmVxdWlyZSgnc2Nyb2xsLXRvLWVsZW1lbnQnKTtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKG5hbWUpIHtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLCAnXFxcXFsnKS5yZXBsYWNlKC9bXFxdXS8sICdcXFxcXScpO1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXD8mXScgKyBuYW1lICsgJz0oW14mI10qKScpO1xuICB2YXIgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcbiAgcmV0dXJuIHJlc3VsdHMgPT09IG51bGwgPyAnJyA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbn07XG5cbmNvbnN0IEFwcExpbmsgPSAoe2NoaWxkcmVuLCBjbGFzc05hbWUsIGhyZWZ9KSA9PlxuICA8TGluayBocmVmPXtocmVmfT5cbiAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvYT5cbiAgPC9MaW5rPlxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY29sbGFwc2U6IFwiXCJcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlID0gaWQgPT4gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5jb2xsYXBzZSB8fCBpZCAhPT0gdGhpcy5zdGF0ZS5jb2xsYXBzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbGxhcHNlOiBpZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbGxhcHNlID09PSBpZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGFwc2U6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgdGVzdGZ1bmMgPSAoKSA9PiB7XG4gICAgaWYoY29va2llLmdldCgndXRtX3NvdXJjZScpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHNjcm9sbFRvRWxlbWVudCgnLmNhbGN1bGF0b3ItaW5mbycsIHtcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIGFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGVhc2U6ICdvdXRFeHBvJyxcbiAgICAgIGR1cmF0aW9uOiA2MDBcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb250cm9sVXRtKClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5xdWVyeSlcbiAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgINCU0LXQvdGM0LPQuCDQsiDQutGA0LXQtNC40YIg0L7QvdC70LDQudC9INC80LjQutGA0L7Qt9Cw0LnQvNGLINC90LAg0LrQsNGA0YLRgyDQv9C+INCa0LDQt9Cw0YXRgdGC0LDQvdGDXG4gICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbmJhbm5lclwiIHN0eWxlcz17eyBiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke2Jhbm5lcn0pYCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGV4dCByb3dcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWhlYWRlciBjb2wtbWQtNSBjb2wtMTJcIj7QnNC40LrRgNC+0LfQsNC50LwgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9ja1wiPtC+0L3Qu9Cw0LnQvSDQvdCwINC60LDRgNGC0YM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2tcIj7QtNC+IDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPjE0NVxuICAgICAgICAgICAgICAgIDAwMNGC0LM8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbWdzIGNvbC1tZC03IGNvbC0xMiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmlnemVyb3RleHRcIiBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvMC5zdmdcIil9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbWdzLS1yaWdodFwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBlcmNlbnRhZ2VaZXJvXCIgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL3BlcmNlbnQuc3ZnXCIpfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZzZWdkYVBlcnZpZG5pXCIgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL9CS0YHQtdCz0LTQsCDQv9C10YDQstGL0LUgNyDQtNC90LXQuS5zdmdcIil9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhbGN1bGF0b3IgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0c1wiPlxuXG4gICAgICAgICAgICA8cD7QmtCw0LvRjNC60YPQu9GP0YLQvtGAINC80LjQutGA0L7QutGA0LXQtNC40YLQvtCyPC9wPlxuICAgICAgICAgICAgPHA+0JvRjNCz0L7RgtC90YvQuSDQv9C10YDQuNC+0LQgNyDQtNC90LXQuTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UHJvZ3Jlc3NCYXIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmaW5hbmNlXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiIHByaW1hcnkgdGV4dC1jZW50ZXJcIj7QntC90LvQsNC50L0g0YHQtdGA0LLQuNGBINC/0L7Qu9GD0YfQtdC90LjRjyDQvNC40LrRgNC+0LrRgNC10LTQuNGC0L7QsiA8YnI+PC9icj7Qv9GA0L7RgdGC0L4g0L3QsCDQutCw0YDRgtGDINC4INCyINC60YDQsNGC0YfQsNC50YjQuNC1INGB0YDQvtC60LghPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR2YW50YWdlcyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdmFudGFnZXMtLWJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDE+PHNwYW4gY2xhc3NOYW1lPVwicmVkIGQtYmxvY2tcIj4xPC9zcGFuPtCR0YvRgdGC0YDQvjwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD7QkdC10Lcg0YHQv9GA0LDQstC+0LosINC/0L7RgNGD0YfQuNGC0LXQu9C10Lkg0Lgg0LvQuNGI0L3QuNGFINCy0L7Qv9GA0L7RgdC+0LIg0LfQsCAxMCDQvNC40L3Rg9GCPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHZhbnRhZ2VzLS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgxPjxzcGFuIGNsYXNzTmFtZT1cInJlZCBkLWJsb2NrXCI+Mjwvc3Bhbj7Qo9C00L7QsdC90L48L2gxPlxuICAgICAgICAgICAgICAgICAgPHA+0JHQtdC3INC/0L7RgdC10YnQtdC90LjRjyDQvtGE0LjRgdCwINGD0LfQvdCw0LnRgtC1INGA0LXRiNC10L3QuNC1INC+0LTQvtCx0YDQtdC90LjRjzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR2YW50YWdlcy0tYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMT48c3BhbiBjbGFzc05hbWU9XCJyZWQgZC1ibG9ja1wiPjM8L3NwYW4+0JTQvtGB0YLRg9C/0L3QvjwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD7QndC1INC+0YfQtdC90Ywg0YXQvtGA0L7RiNCw0Y8g0LrRgNC10LTQuNGC0L3QsNGPINC40YHRgtC+0YDQuNGPIOKAlCDQvdC1INC/0YDQuNGH0LjQvdCwINC+0YLQutCw0LfQsDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlc2VudHMgcHQtNSBtdC01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0zJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10IG1iLTUgcHJlc2VudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZWRcIj4xMDA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD7QmtCw0LbQtNC+0LzRgyAxMDAt0LzRgyA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrXCI+0LfQsNC10LzRidC40LrQvtC8PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2tcIj7Qv9GA0L7RidCw0LXQvFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2tcIj7QutGA0LXQtNC40YI8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPVwiL2dldF9tb25leVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJvdHRvbSByZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YPRh9C40YLRjCDQtNC10L3RjNCz0LhcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9BcHBMaW5rPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvQml0bWFwLnBuZ1wiKX0gYWx0PVwiXCIgLz5cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3RlcG1vbmV5XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJpbWFyeSB0ZXh0LWNlbnRlclwiPtCf0L7Qu9GD0YfQuNGC0Ywg0LTQtdC90YzQs9C4INCyINC60YDQtdC00LjRgiA8YnI+PC9icj7Qt9CwINC00LLQsCDQv9GA0L7RgdGC0YvRhSDRiNCw0LPQsCFcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBzIG10LTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAgbWItNSBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvc3ZnL2ljb24gMS5zdmdcIil9ICBjbGFzc05hbWU9XCJtYi01XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoND7Ql9Cw0L/QvtC70L3QuNGC0Ywg0LDQvdC60LXRgtGDINC90LAgPHNwYW4+INGB0LDQudGC0LUg0L7QvdC70LDQudC9PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwIG1iLTUgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL3N2Zy9pY29uIDIuc3ZnXCIpfSAgY2xhc3NOYW1lPVwibWItNVwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDQ+0JbQtNCw0YLRjCDRgNC10YjQtdC90LjQtSDQsiDRgtC10YfQtdC90LjQtSAxMCDQvNC40L3Rg9GCITwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaXR0bGUtaGVhZGVyIG1iLTVcIj7QkiDRgdC70YPRh9Cw0LUg0L7QtNC+0LHRgNC10L3QuNGPINCS0LDRiNC10LPQviDQt9Cw0LnQvNCwINC90LDRiCA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrXCI+0LrRgNC10LTQuNGC0L3Ri9C5INC80LXQvdC10LTQttC10YBcbiAgICAgICAgICAgICAgICDRgdCy0Y/QttC10YLRgdGPINGBINCS0LDQvNC4Ljwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvZ2V0X21vbmV5XCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWtlYnRuXCI+ICDQn9C+0LvRg9GH0LjRgtGMINC00LXQvdGM0LPQuFxuICAgICAgICAgICAgICAgICA8L2J1dHRvbj48L0FwcExpbms+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTUgd2h5dXNcIj7Qn9C+0YfQtdC80YMg0LjQvNC10L3QvdC+INC80Ys/IDxzcGFuIGNsYXNzTmFtZT1cIndoeXVzLS1saXR0bGUgZC1ibG9ja1wiPtCd0LDRiNC4XG4gICAgICAgICAgICAgICAg0L/RgNC10LjQvNGD0YnQtdGB0YLQstCwPC9zcGFuPjwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdmFudGFnZXNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdmFudGFnZSBjb2wtbGctNFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvcHRpY2hrYS5wbmdcIil9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYWR2YW50YWdlLS10ZXh0XCI+MCUg0L3QsCDQv9C10YDQstGL0LUgNyDQtNC90LXQuSDQstGB0LXQs9C00LA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR2YW50YWdlIGNvbC1sZy00XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uL2ltZy9wdGljaGthLnBuZ1wiKX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhZHZhbnRhZ2UtLXRleHRcIj7QkdC10Lcg0LfQsNC70L7Qs9CwINC4INC/0L7RgNGD0YfQuNGC0LXQu9C10Lk8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR2YW50YWdlIGNvbC1sZy00XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uL2ltZy9wdGljaGthLnBuZ1wiKX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhZHZhbnRhZ2UtLXRleHRcIj4xMCDQvNC40L3Rg9GCINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQtTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHZhbnRhZ2UgY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL3B0aWNoa2EucG5nXCIpfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFkdmFudGFnZS0tdGV4dFwiPtCR0LXQtyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQstCw0YjQuNGFINC00L7RhdC+0LTQvtCyPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdmFudGFnZSBjb2wtbGctNFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvcHRpY2hrYS5wbmdcIil9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYWR2YW50YWdlLS10ZXh0XCI+0JfQsNGH0LjRgdC70LXQvdC40LUg0LTQtdC90LXQsyDQvdCwINGB0YfQtdGCINC70Y7QsdC+0LPQviDQsdCw0L3QutCwPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdmFudGFnZSBjb2wtbGctNFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvcHRpY2hrYS5wbmdcIil9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYWR2YW50YWdlLS10ZXh0XCI+0JvQuNGH0L3Ri9C1INC00LDQvdC90YvQtSDQv9C+0LQg0L3QsNC00LXQttC90L7QuSDQt9Cw0YnQuNGC0L7QuTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoeXVzLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwid2h5dXMgbXQtNVwiPtCS0YvQtNCw0LTQuNC8INC30LDQtdC8INCyINGC0LXRh9C10L3QuNC1IDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPjEwIDxzcGFuPtC80LjQvdGD0YI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ3aHl1cy0tbGl0dGxlIGQtYmxvY2tcIj7Qn9C+0LvRg9GH0LhcbiAgICAgICAgICAgICAgICAgINC00LXQvdGM0LPQuCDQsiDQt9Cw0LnQvNGLLCDRg9C20LUg0YHQtdC50YfQsNGBINC90LAg0YHQsNC80YvRhSDQstGL0LPQvtC00L3Ri9GFINGD0YHQu9C+0LLQuNGP0YU8L3NwYW4+IDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8QXBwTGluayBocmVmPVwiL2dldF9tb25leVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRha2VidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCf0L7Qu9GD0YfQuNGC0Ywg0LTQtdC90YzQs9C4XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPjwvQXBwTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvdHRvbS1iYW5uZXJcIiBzdHlsZXM9e3sgYmFja2dyb3VuZEltYWdlOmB1cmwoJHtib3R0b21CYW5uZXJ9KWAgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYkNvbnRlbnQgbWItNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFRleHRcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVkXCI+MTAwPC9oMT5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICDQmtCw0LbQtNC+0LzRgyAxMDAt0LzRgyA8YnI+PC9icj7Qt9Cw0LXQvNGJ0LjQutC+0Lw8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgINC60YDQtdC00LjRgiDQsiDQv9C+0LTQsNGA0L7QulxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJiQ29udGVudC0tdGV4dFwiPtCX0LDQudC80Lgg0Lgg0YHRgtCw0L3RjCDRgdGH0LDRgdGC0LvQuNCy0YvQvCDQt9Cw0LXQvNGJ0LjQutC+0LwsINC60L7RgtC+0YDQvtC80YMg0LzRiyDQv9GA0L7RgdGC0LjQvCDQutGA0LXQtNC40YIuINCa0LDQttC00L7QvNGDIDEwMC3QvNGDINC60LvQuNC10L3RgtGDINC/0YDQvtGJ0LDQtdGC0YHRjyDQutCw0Log0L/RgNC+0YbQtdC90YLRiyDQstC+0LfQvdCw0LPRgNCw0LbQtNC10L3QuNGPLCDRgtCw0Log0Lgg0YHQsNC8INC30LDRkdC8ISDQo9GB0L/QtdC5INGB0YLQsNGC0YwgMTAwLdGC0YvQvCE8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYkNvbnRlbnQtLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWtlYnRuXCI+0KXQvtGH0YMg0LrRgNC10LTQuNGCINCyINC/0L7QtNCw0YDQvtC6PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj7Qo9C30L3QsNGC0Ywg0L/QvtC00YDQvtCx0L3QtdC1PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJ2aWRlb2xpc3RcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0XCIgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UoXCJ2aWRlbzFcIil9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlidG5cIiA+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UoXCJ2aWRlbzJcIil9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlidG5cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UoXCJ2aWRlbzNcIil9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWJsb2NrXCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5YnRuXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlKFwidmlkZW80XCIpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlibG9ja1wiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWJ0blwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWJhbm5lci0tdGV4dCBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgINCh0YDQvtGH0L3QviDQvdGD0LbQvdGLINC00LXQvdGM0LPQuCDQuCDQvdC1INGDINC60L7Qs9C+INC+0LTQvtC70LbQuNGC0YwsINCy0Ysg0L/QvtC/0LDQu9C4INCyINGB0LjRgtGD0LDRhtC40Y4g0L/QvtGC0YDQtdCx0L3QvtGB0YLQuCDRgdGA0LXQtNGB0YLQsiDQt9C00LXRgdGMINC4INC/0YDRj9C80L4g0YHQtdC50YfQsNGBLiDQn9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXQvCDQstCw0YjQtdC80YMg0LLQvdC40LzQsNC90LjRjiDRgdC10YDQstC40YEg0L/QvtC70YPRh9C10L3QuNGPINC80LjQutGA0L7QutGA0LXQtNC40YLQvtCyINC+0L3Qu9Cw0LnQvSDQvdC1INCy0YvRhdC+0LTRjyDQuNC3INC00L7QvNCwLiDQkdGL0YHRgtGA0L7QtSDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QuNC1INGA0LXRiNC10L3QuNGPINC60YDQtdC00LjRgtC+0LLQsNC90LjRjyDQt9CwIDEwINC80LjQvdGD0YIg0LTQu9GPINGE0LjQt9C40YfQtdGB0LrQuNGFINC70LjRhiDQvNGD0LbRgdC60L7Qs9C+INC/0L7Qu9CwINC+0YIgMTgg0LTQviA2NyDQu9C10YIsINC00LvRjyDQttC10L3RidC40L0g0L7RgiAxOCDQtNC+IDczINC70LXRgi48YnI+PC9icj48YnI+PC9icj5cbiAgICAgICAgICAgINCd0LDRiNC4INC80LjQutGA0L7QutGA0LXQtNC40YLRiyDigJMg0Y3RgtC+INC60YDQsNGC0LrQvtGB0YDQvtGH0L3QvtC1INGA0LXRiNC10L3QuNC1INCyINCx0YvRgtC+0LLRi9GFINGB0LjRgtGD0LDRhtC40Y/RhSDQuNC70Lgg0LIg0YTQuNC90LDQvdGB0L7QstGL0YUg0LfQsNGC0YDRg9C00L3QtdC90LjRj9GFINC60LDQttC00L7Qs9C+INCz0YDQsNC20LTQsNC90LjQvdCwINCa0LDQt9Cw0YXRgdGC0LDQvdCwINC+0YIg0L3QtdC/0YDQtdC00LLQuNC00LXQvdC90YvRhSDQuNC70Lgg0L3QtdC30LDQv9C70LDQvdC40YDQvtCy0LDQvdC90YvRhSDQv9C+0LrRg9C/0L7QuiDQuNC70Lgg0L7Qv9C70LDRgtGLINGD0YHQu9GD0LMuINCa0LDQttC00L7QvNGDINC60LvQuNC10L3RgtGDINC80Ysg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10Lwg0Y3QutC+0L3QvtC80LjQtSDQstGA0LXQvNC10L3QuCDQvdCwINC/0L7RgdC10YnQtdC90LjQtSDQvtGC0LTQtdC70LXQvdC40Lkg0L/QvtC70YPRh9C40LIg0L7QtNC+0LHRgNC10L3QuNC1INC+0L3Qu9Cw0LnQvSDQtNC70Y8g0Y3RgtC+0LPQviDQstGB0LXQs9C+INC70LjRiNGMINC90LXQvtCx0YXQvtC00LjQvNC+INC/0YDQvtC50YLQuCDQsNC90LrQtdGC0LjRgNC+0LLQsNC90LjQtSDQvdCwINGB0LDQudGC0LUuPGJyPjwvYnI+PGJyPjwvYnI+XG4gICAgICAgICAgICDQntC/0LvQsNGH0LjQstCw0LXRgtC1INC10YnQtSDQutGA0LXQtNC40YLRiyDQuNC70Lgg0L3QsNGF0L7QtNC40YLQtdGB0Ywg0L3QsCDQv9GA0L7RgdGA0L7Rh9C60LUsINC90L4g0L7Rh9C10L3RjCDQvdGD0LbQtNCw0LXRgtC10YHRjCDQsiDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9GFINC00LXQvdC10LbQvdGL0YUg0YHRgNC10LTRgdGC0LLQsNGFINC90LUg0LHQtdC00LAsINC80Ysg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10Lwg0LzQuNC60YDQvtC30LDQudC80Ysg0LIg0YHQsNC80YvRhSDQt9Cw0YLRgNGD0LTQvdC40YLQtdC70YzQvdGL0YUg0YHQuNGC0YPQsNGG0LjRj9GFLiDQntC90LvQsNC50L0g0YHQtdGA0LLQuNGBIFpheW1pIOKAkyDRjdGC0L4g0L/RgNC+0YHRgtC+0LUg0YDQtdGI0LXQvdC40LUg0LIg0LrRgNCw0YLRh9Cw0LnRiNC40LUg0YHRgNC+0LrQuCDQv9C+0LvRg9GH0LXQvdC40Y8g0LzQuNC60YDQvtC30LDQudC80L7QsiDQvtC90LvQsNC50L0g0L3QsCDQutCw0YDRgtGDLjxicj48L2JyPjxicj48L2JyPlxuICAgICAgICAgICAg0JTQu9GPINC/0LXRgNCy0LjRh9C90YvRhSDQuCDQv9C+0LLRgtC+0YDQvdGL0YUg0LrQu9C40LXQvdGC0L7QsiDQvNGLINC/0YDQtdC00L7RgdGC0LDQstC40Lwg0L7QtNC40L3QsNC60L7QstGL0LUg0LLRi9Cz0L7QtNC90YvQtSDRg9GB0LvQvtCy0LjRjzog0JLRgdC10LPQtNCwINC/0LXRgNC40L7QtCDQv9C10YDQstGL0LUgNyDQtNC90LXQuSDQsdC10Lcg0L/RgNC+0YbQtdC90YLQvtCyINC+0LTQuNC90LDQutC+0LLQviDQstGL0LPQvtC00L3Ri9C1INC60LDQuiDQvdC+0LLRi9C8INC60LvQuNC10L3RgtCw0Lwg0YLQsNC6INC/0YDQvtCy0LXRgNC10L3QvdGL0Lwg0L/QsNGA0YLQvdC10YDQsNC8IC0g0LfQsNC10LzRidC40LrQsNC8LiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxicj48L2JyPtCj0YHQu9C+0LLQuNGPINC60YDQtdC00LjRgtC+0LLQsNC90LjRjzo8YnI+PC9icj5cbiAgICAgICAgICAgINCc0LDQutGB0LjQvNCw0LvRjNC90LDRjyDRgdGC0LDQstC60LAg0LIg0LTQtdC90Ywg4oCTIDElLjxicj48L2JyPlxuICAgICAgICAgICAg0KHRgNC+0Log0LrRgNC10LTQuNGC0L7QstCw0L3QuNGPINC+0YIgMTUg0LTQviAzMCDQtNC90LXQuTxicj48L2JyPjxicj48L2JyPlxuICAgICAgICAgICAg0JIg0YHQu9GD0YfQsNC1INC90LDRgNGD0YjQtdC90LjRjyDRg9GB0YLQsNC90L7QstC70LXQvdC90L7Qs9C+INGB0YDQvtC60LAg0L/Qu9Cw0YLQtdC20LAg0L/QviDQt9Cw0LnQvNGDLCDQt9Cw0LXQvNGJ0LjQuiDQsdGD0LTQtdGCINC+0LHRj9C30LDQvSDQvtC/0LvQsNGC0LjRgtGMINC90LXRg9GB0YLQvtC50LrRgywg0LIg0YDQsNC30LzQtdGA0LUgMCw1JSDQvtGCINGB0YPQvNC80Ysg0L7RgdC90L7QstC90L7Qs9C+INC00L7Qu9Cz0LAg0LfQsCDQutCw0LbQtNGL0Lkg0LTQtdC90Ywg0L/RgNC+0YHRgNC+0YfQutC4LCDQvdC+INC90LUg0LHQvtC70LXQtSAxMCUg0L7RgiDRgdGD0LzQvNGLINC+0YHQvdC+0LLQvdC+0LPQviDQtNC+0LvQs9CwINCyINCz0L7QtC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxNb2RhbCAgaXNPcGVuPXt0aGlzLnN0YXRlLmNvbGxhcHNlID09PSBcInZpZGVvMVwifSB0b2dnbGU9e3RoaXMudG9nZ2xlQ29sbGFwc2UoXCJ2aWRlbzFcIil9IGlkPVwidmlkZW8xXCIgIHNpemU9XCJtZFwiPlxuXHRcdFx0XHQgPE1vZGFsQm9keT5cbiAgICAgICAgIDxpZnJhbWUgIHNyYz1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcC9DR1gxcnlKSVVZMS9lbWJlZD9hdXRvcGxheT0xXCIgaGVpZ2h0PVwiNTAwcHhcIiB3aWR0aD1cIjEwMCVcIiBmcmFtZWJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiIGFsbG93PVwiYXV0b3BsYXlcIiBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIj48L2lmcmFtZT5cblx0XHRcdFx0XHQgPC9Nb2RhbEJvZHk+XG5cdFx0XHRcdCA8L01vZGFsPlxuICAgICAgICAgPE1vZGFsICBpc09wZW49e3RoaXMuc3RhdGUuY29sbGFwc2UgPT09IFwidmlkZW8yXCJ9IHRvZ2dsZT17dGhpcy50b2dnbGVDb2xsYXBzZShcInZpZGVvMlwiKX0gaWQ9XCJ2aWRlbzJcIiAgc2l6ZT1cIm1kXCI+XG5cdFx0XHRcdCA8TW9kYWxCb2R5PlxuICAgICAgICAgPGlmcmFtZSAgc3JjPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wL0NGN3RxUVdwOThhL2VtYmVkP2F1dG9wbGF5PTFcIiBoZWlnaHQ9XCI1MDBweFwiIHdpZHRoPVwiMTAwJVwiIGZyYW1lYm9yZGVyPVwiMFwiIHNjcm9sbGluZz1cIm5vXCIgYWxsb3c9XCJhdXRvcGxheVwiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiPjwvaWZyYW1lPlxuXHRcdFx0XHRcdCA8L01vZGFsQm9keT5cblx0XHRcdFx0IDwvTW9kYWw+XG4gICAgICAgICA8TW9kYWwgIGlzT3Blbj17dGhpcy5zdGF0ZS5jb2xsYXBzZSA9PT0gXCJ2aWRlbzNcIn0gdG9nZ2xlPXt0aGlzLnRvZ2dsZUNvbGxhcHNlKFwidmlkZW8zXCIpfSBpZD1cInZpZGVvM1wiICBzaXplPVwibWRcIj5cblx0XHRcdFx0IDxNb2RhbEJvZHk+XG4gICAgICAgICA8aWZyYW1lICBzcmM9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3AvQ0Y3d0tRYXBfM00vZW1iZWQ/YXV0b3BsYXk9MVwiIGhlaWdodD1cIjUwMHB4XCIgd2lkdGg9XCIxMDAlXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBhbGxvdz1cImF1dG9wbGF5XCIgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCI+PC9pZnJhbWU+XG5cdFx0XHRcdFx0IDwvTW9kYWxCb2R5PlxuXHRcdFx0XHQgPC9Nb2RhbD5cbiAgICAgICAgIDxNb2RhbCAgaXNPcGVuPXt0aGlzLnN0YXRlLmNvbGxhcHNlID09PSBcInZpZGVvNFwifSB0b2dnbGU9e3RoaXMudG9nZ2xlQ29sbGFwc2UoXCJ2aWRlbzRcIil9IGlkPVwidmlkZW80XCIgIHNpemU9XCJtZFwiPlxuXHRcdFx0XHQgPE1vZGFsQm9keT5cbiAgICAgICAgIDxpZnJhbWUgIHNyYz1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcC9DSDB2OXhlaHBXWC9lbWJlZC8/YXV0b3BsYXk9MVwiIGhlaWdodD1cIjUwMHB4XCIgd2lkdGg9XCIxMDAlXCIgZnJhbWVib3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIiBhbGxvdz1cImF1dG9wbGF5XCIgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCI+PC9pZnJhbWU+XG5cdFx0XHRcdFx0IDwvTW9kYWxCb2R5PlxuXHRcdFx0XHQgPC9Nb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhvbWUpO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9