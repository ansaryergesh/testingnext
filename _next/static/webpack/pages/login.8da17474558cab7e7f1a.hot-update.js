webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spinner-material */ "./node_modules/react-spinner-material/lib/index.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spinner_material__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/actions/userAction */ "./store/actions/userAction.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _defaults_validationredux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../defaults/validationredux */ "./defaults/validationredux.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_20__);









var _jsxFileName = "D:\\icredit\\server-zaymi\\zaymikz\\pages\\login.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 // import {validEmail, requiredd, iinValidation} from '../../defaults/validations';











var scrollToElement = __webpack_require__(/*! scroll-to-element */ "./node_modules/scroll-to-element/index.js");

var AppLink = function AppLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    href: href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
      className: className,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, _this);
};

_c = AppLink;
var maskIin = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

var Login = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _React$Component);

  var _super = _createSuper(Login);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);

      if (js_cookie__WEBPACK_IMPORTED_MODULE_20___default.a.get('token') && !this.props.loggedIn) {
        next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push('/');
      }
    }
  }]);

  function Login(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    _this2 = _super.call(this, props);
    _this2.state = {
      btnLoading: false,
      message: null,
      errorMessage: null
    };
    _this2.handleSubmit = _this2.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.redirectFunc = _this2.redirectFunc.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, [{
    key: "redirectFunc",
    value: function redirectFunc() {
      next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push('/');
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(values) {
      //  e.preventDefault();
      if (!Object(_defaults_validationredux__WEBPACK_IMPORTED_MODULE_18__["required"])(values.username) || !Object(_defaults_validationredux__WEBPACK_IMPORTED_MODULE_18__["required"])(values.password)) {
        this.setState({
          errorMessage: "Введите данные"
        });
      } else {
        this.props.loginUser(values);
        this.setState({
          errorMessage: null
        });
      }

      console.log(values);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
          className: "otherPages",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_19___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
              children: "\u0412\u043E\u0439\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
              className: "oplata feedback row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: " oplate--form feedbackForm",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Formik"], {
                  initialValues: {
                    username: '',
                    password: ""
                  },
                  onSubmit: function onSubmit(values) {
                    _this3.handleSubmit(values);
                  },
                  children: function children(_ref2) {
                    var errors = _ref2.errors,
                        touched = _ref2.touched,
                        isValidating = _ref2.isValidating,
                        isSubmitting = _ref2.isSubmitting;
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Form"], {
                      className: "oplataform",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
                        className: "text-center mb-5",
                        children: "\u0412\u043E\u0439\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 17
                      }, _this3), _this3.props.failedLogin && _this3.props.error !== null || _this3.state.errorMessage !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                        className: "alert alert-danger",
                        role: "alert",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
                          children: [" ", _this3.state.errorMessage || _this3.props.error]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 99,
                          columnNumber: 25
                        }, _this3)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 23
                      }, _this3) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                        className: "input-group",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                          htmlFor: "email",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
                            children: "\u0418\u0418\u041D:"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 104,
                            columnNumber: 23
                          }, _this3)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 20
                        }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                          name: "username",
                          placeholder: "\u0418\u0418\u041D" // validate={iinValidation}
                          ,
                          render: function render(_ref3) {
                            var field = _ref3.field;
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_text_mask__WEBPACK_IMPORTED_MODULE_11___default.a, _objectSpread(_objectSpread({}, field), {}, {
                              mask: maskIin,
                              autoComplete: "off",
                              id: "username",
                              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u0418\u041D",
                              type: "text"
                            }), void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 112,
                              columnNumber: 25
                            }, _this3);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 21
                        }, _this3), errors.username && touched.username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                          className: "text-danger",
                          children: errors.username
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 122,
                          columnNumber: 61
                        }, _this3)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 20
                      }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                        className: "input-group",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
                            children: "\u041F\u0430\u0440\u043E\u043B\u044C:"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 127,
                            columnNumber: 23
                          }, _this3)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 126,
                          columnNumber: 21
                        }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                          name: "password",
                          type: "password",
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 129,
                          columnNumber: 23
                        }, _this3), errors.password && touched.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                          className: "text-danger",
                          children: errors.password
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 130,
                          columnNumber: 63
                        }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(AppLink, {
                          href: "password_reset",
                          className: "resetText mt-4",
                          children: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 132,
                          columnNumber: 21
                        }, _this3)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 20
                      }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                        className: "buttonForm",
                        children: _this3.props.authenticatingUser === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_spinner_material__WEBPACK_IMPORTED_MODULE_10___default.a, {
                          className: "loading",
                          size: 200,
                          spinnerColor: "#ef2221",
                          spinnerWidth: 2,
                          visible: true
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 138,
                          columnNumber: 23
                        }, _this3) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                          className: "loginbutton",
                          type: "submit",
                          children: "\u0412\u043E\u0439\u0442\u0438"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 139,
                          columnNumber: 23
                        }, _this3)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 20
                      }, _this3)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 19
                    }, _this3);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, this);
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref4) {
  var _ref4$userReducer = _ref4.userReducer,
      authenticatingUser = _ref4$userReducer.authenticatingUser,
      failedLogin = _ref4$userReducer.failedLogin,
      error = _ref4$userReducer.error,
      loggedIn = _ref4$userReducer.loggedIn;
  return {
    authenticatingUser: authenticatingUser,
    failedLogin: failedLogin,
    error: error,
    loggedIn: loggedIn
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps, {
  loginUser: _store_actions_userAction__WEBPACK_IMPORTED_MODULE_16__["loginUser"],
  fetchCurrentUser: _store_actions_userAction__WEBPACK_IMPORTED_MODULE_16__["fetchCurrentUser"]
})(Login));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsic2Nyb2xsVG9FbGVtZW50IiwicmVxdWlyZSIsIkFwcExpbmsiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImhyZWYiLCJtYXNrSWluIiwiTG9naW4iLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImNvb2tpZSIsImdldCIsInByb3BzIiwibG9nZ2VkSW4iLCJSb3V0ZXIiLCJwdXNoIiwic3RhdGUiLCJidG5Mb2FkaW5nIiwibWVzc2FnZSIsImVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJyZWRpcmVjdEZ1bmMiLCJ2YWx1ZXMiLCJyZXF1aXJlZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRTdGF0ZSIsImxvZ2luVXNlciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNWYWxpZGF0aW5nIiwiaXNTdWJtaXR0aW5nIiwiZmFpbGVkTG9naW4iLCJlcnJvciIsImZpZWxkIiwiYXV0aGVudGljYXRpbmdVc2VyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyUmVkdWNlciIsImNvbm5lY3QiLCJmZXRjaEN1cnJlbnRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQSxlQUFlLEdBQUdDLG1CQUFPLENBQUMsb0VBQUQsQ0FBN0I7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxNQUFZQyxTQUFaLFFBQVlBLFNBQVo7QUFBQSxNQUF1QkMsSUFBdkIsUUFBdUJBLElBQXZCO0FBQUEsc0JBQ2QscUVBQUMsaURBQUQ7QUFB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QUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXlFQzs7OztFQWxIZUMsNENBQUssQ0FBQ0MsUzs7QUFxSDFCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxnQ0FDdEJDLFdBRHNCO0FBQUEsTUFFcEJKLGtCQUZvQixxQkFFcEJBLGtCQUZvQjtBQUFBLE1BRUFILFdBRkEscUJBRUFBLFdBRkE7QUFBQSxNQUVhQyxLQUZiLHFCQUVhQSxLQUZiO0FBQUEsTUFFb0J2QixRQUZwQixxQkFFb0JBLFFBRnBCO0FBQUEsU0FJakI7QUFDTHlCLHNCQUFrQixFQUFsQkEsa0JBREs7QUFFTEgsZUFBVyxFQUFYQSxXQUZLO0FBR0xDLFNBQUssRUFBTEEsS0FISztBQUlMdkIsWUFBUSxFQUFSQTtBQUpLLEdBSmlCO0FBQUEsQ0FBeEI7O0FBV2U4QiwySEFBTyxDQUFDRixlQUFELEVBQWtCO0FBQUViLFdBQVMsRUFBVEEsb0VBQUY7QUFBWWdCLGtCQUFnQixFQUFoQkEsMkVBQWdCQTtBQUE1QixDQUFsQixDQUFQLENBQXlEckMsS0FBekQsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi44ZGExNzQ3NDU1OGNhYjdlN2YxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IElucHV0TWFzayBmcm9tIFwicmVhY3QtaW5wdXQtbWFza1wiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1zcGlubmVyLW1hdGVyaWFsJztcclxuaW1wb3J0IE1hc2tlZElucHV0IGZyb20gJ3JlYWN0LXRleHQtbWFzayc7XHJcbi8vIGltcG9ydCB7dmFsaWRFbWFpbCwgcmVxdWlyZWRkLCBpaW5WYWxpZGF0aW9ufSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEVycm9yTWVzc2FnZSwgRmllbGRBcnJheSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtsb2dpblVzZXIsZmV0Y2hDdXJyZW50VXNlcn0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge2lpbiwgcmVxdWlyZWR9IGZyb20gJy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25yZWR1eCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbnZhciBzY3JvbGxUb0VsZW1lbnQgPSByZXF1aXJlKCdzY3JvbGwtdG8tZWxlbWVudCcpO1xyXG5cclxuY29uc3QgQXBwTGluayA9ICh7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgaHJlZn0pID0+XHJcbiAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvYT5cclxuICA8L0xpbms+XHJcbmNvbnN0IG1hc2tJaW4gPSBbXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC9cclxuXTtcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIGlmKGNvb2tpZS5nZXQoJ3Rva2VuJykgJiYgIXRoaXMucHJvcHMubG9nZ2VkSW4pIHtcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYnRuTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogbnVsbCxcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnJlZGlyZWN0RnVuYyA9IHRoaXMucmVkaXJlY3RGdW5jLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICByZWRpcmVjdEZ1bmMoKSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgfVxyXG5cclxuXHJcbiAgaGFuZGxlU3VibWl0KHZhbHVlcykge1xyXG4gIC8vICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICBpZighcmVxdWlyZWQodmFsdWVzLnVzZXJuYW1lKSB8fCAhcmVxdWlyZWQodmFsdWVzLnBhc3N3b3JkKSkge1xyXG4gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgZXJyb3JNZXNzYWdlOiBcItCS0LLQtdC00LjRgtC1INC00LDQvdC90YvQtVwiXHJcbiAgICAgfSlcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgdGhpcy5wcm9wcy5sb2dpblVzZXIodmFsdWVzKVxyXG4gICB0aGlzLnNldFN0YXRlKHtcclxuICAgICBlcnJvck1lc3NhZ2U6IG51bGxcclxuICAgfSlcclxuICB9XHJcbiAgIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3RoZXJQYWdlc1wiPlxyXG4gICAgICAgICAgPEhlYWQ+PHRpdGxlPtCS0L7QudGC0Lgg0LIg0LvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCPC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcGxhdGEgZmVlZGJhY2sgcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgb3BsYXRlLS1mb3JtIGZlZWRiYWNrRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dmFsdWVzPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KHZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyBlcnJvcnMsIHRvdWNoZWQsIGlzVmFsaWRhdGluZywgaXNTdWJtaXR0aW5nIH0pID0+KFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJvcGxhdGFmb3JtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTVcIj7QktC+0LnRgtC4INCyINC70LjRh9C90YvQuSDQutCw0LHQuNC90LXRgjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5wcm9wcy5mYWlsZWRMb2dpbiAmJiB0aGlzLnByb3BzLmVycm9yICE9PSBudWxsKSB8fCB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+IHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSB8fCB0aGlzLnByb3BzLmVycm9yfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDI+0JjQmNCdOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JjQmNCdJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRlPXtpaW5WYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXNrZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXttYXNrSWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0JjQmNCdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZSAmJiB0b3VjaGVkLnVzZXJuYW1lICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy51c2VybmFtZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMj7Qn9Cw0YDQvtC70Yw6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3Bhc3N3b3JkJyB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQgJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBhc3N3b3JkfTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj0ncGFzc3dvcmRfcmVzZXQnIGNsYXNzTmFtZT0ncmVzZXRUZXh0IG10LTQnPtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/PC9BcHBMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXV0aGVudGljYXRpbmdVc2VyID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNsYXNzTmFtZT1cImxvYWRpbmdcIiBzaXplPXsyMDB9IHNwaW5uZXJDb2xvcj17XCIjZWYyMjIxXCJ9IHNwaW5uZXJXaWR0aD17Mn0gdmlzaWJsZT17dHJ1ZX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbmJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj7QktC+0LnRgtC4PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcclxuICB1c2VyUmVkdWNlcjoge1xyXG4gICAgYXV0aGVudGljYXRpbmdVc2VyLCBmYWlsZWRMb2dpbiwgZXJyb3IsIGxvZ2dlZEluLFxyXG4gIH0sXHJcbn0pID0+ICh7XHJcbiAgYXV0aGVudGljYXRpbmdVc2VyLFxyXG4gIGZhaWxlZExvZ2luLFxyXG4gIGVycm9yLFxyXG4gIGxvZ2dlZEluLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvZ2luVXNlcixmZXRjaEN1cnJlbnRVc2VyIH0pKExvZ2luKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==