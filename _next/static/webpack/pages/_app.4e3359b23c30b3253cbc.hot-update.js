webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var _components_shared_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/shared/Footer */ "./components/shared/Footer.js");
/* harmony import */ var _components_shared_MessageInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/shared/MessageInfo */ "./components/shared/MessageInfo.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);







var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var hours = 1.2;
      var now = new Date().getTime();
      var setupTime = localStorage.getItem('setupTime');

      if (setupTime == null) {
        localStorage.setItem('setupTime', now);
      } else {
        if (now - setupTime > hours * 60 * 60 * 1000) {
          localStorage.clear();
          localStorage.setItem('setupTime', now);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_13__["Provider"], {
        store: _store_store__WEBPACK_IMPORTED_MODULE_17__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_shared_MessageInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
          href: "https://api.whatsapp.com/send?phone=+77015382439",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            className: "imgwhatsapp",
            src: __webpack_require__(/*! ../img/svg/whatsapp.svg */ "./img/svg/whatsapp.svg"),
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 87
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 12
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, this);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_18___default.a); //makeStore function that returns a new store for every request


var makeStore = function makeStore() {
  return _store_store__WEBPACK_IMPORTED_MODULE_17__["default"];
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15__["createWrapper"])(makeStore);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.userReducer.loggedIn
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser: function fetchCurrentUser() {
      return dispatch(actions.fetchCurrentUser());
    }
  };
}; // //withRedux wrapper that passes the store to the App Component
// // export default makeStore.withRedux(MyApp);


/* harmony default export */ __webpack_exports__["default"] = (_c = wrapper.withRedux(MyApp)); // export default MyApp

var _c;

$RefreshReg$(_c, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsImhvdXJzIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJzZXR1cFRpbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImNsZWFyIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInJlcXVpcmUiLCJBcHAiLCJtYWtlU3RvcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibG9nZ2VkSW4iLCJ1c2VyUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hDdXJyZW50VXNlciIsImFjdGlvbnMiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozt3Q0FFZ0I7QUFDbEIsVUFBSUMsS0FBSyxHQUFHLEdBQVo7QUFDQSxVQUFJQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVY7QUFDQSxVQUFJQyxTQUFTLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFoQjs7QUFDQSxVQUFJRixTQUFTLElBQUksSUFBakIsRUFBdUI7QUFDckJDLG9CQUFZLENBQUNFLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0NOLEdBQWxDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSUEsR0FBRyxHQUFHRyxTQUFOLEdBQWtCSixLQUFLLEdBQUcsRUFBUixHQUFhLEVBQWIsR0FBa0IsSUFBeEMsRUFBOEM7QUFDNUNLLHNCQUFZLENBQUNHLEtBQWI7QUFDQUgsc0JBQVksQ0FBQ0UsT0FBYixDQUFxQixXQUFyQixFQUFrQ04sR0FBbEM7QUFDRDtBQUNGO0FBRUY7Ozs2QkFDUTtBQUFBLHdCQUMwQixLQUFLUSxLQUQvQjtBQUFBLFVBQ0VDLFNBREYsZUFDRUEsU0FERjtBQUFBLFVBQ2FDLFNBRGIsZUFDYUEsU0FEYjtBQUVMLDBCQUNJLHFFQUFDLHFEQUFEO0FBQVUsYUFBSyxFQUFFQyxxREFBakI7QUFBQSxnQ0FDRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBR0M7QUFBRyxjQUFJLEVBQUMsa0RBQVI7QUFBMkQsZ0JBQU0sRUFBQyxRQUFsRTtBQUFBLGlDQUEyRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUE2QixlQUFHLEVBQUVDLG1CQUFPLENBQUMsdURBQUQsQ0FBekM7QUFBc0UsZUFBRyxFQUFDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRCxlQUlFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRSxxRUFBQyxTQUFELG9CQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFNRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBVUg7Ozs7RUE1QmlCRyxnRCxHQStCcEI7OztBQUNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUgscURBQU47QUFBQSxDQUFsQjs7QUFDQSxJQUFNSSxPQUFPLEdBQUdDLHlFQUFhLENBQUNGLFNBQUQsQ0FBN0I7O0FBQ0EsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQ0MsWUFBUSxFQUFFRCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JEO0FBREksR0FBTDtBQUFBLENBQTdCOztBQUlBLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsUUFBUTtBQUFBLFNBQUs7QUFDdENDLG9CQUFnQixFQUFFO0FBQUEsYUFBTUQsUUFBUSxDQUFDRSxPQUFPLENBQUNELGdCQUFSLEVBQUQsQ0FBZDtBQUFBO0FBRG9CLEdBQUw7QUFBQSxDQUFuQyxDLENBSUE7QUFDQTs7O0FBQ2Usb0VBQUFSLE9BQU8sQ0FBQ1UsU0FBUixDQUFrQjNCLEtBQWxCLENBQWYsRSxDQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGUzMzU5YjIzYzMwYjMyNTNjYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3MnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9OYXYnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0Zvb3RlcidcbmltcG9ydCBNZXNzYWdlSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9NZXNzYWdlSW5mbydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBob3VycyA9IDEuMjtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIHNldHVwVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXR1cFRpbWUnKTtcbiAgICBpZiAoc2V0dXBUaW1lID09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR1cFRpbWUnLCBub3cpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChub3cgLSBzZXR1cFRpbWUgPiBob3VycyAqIDYwICogNjAgKiAxMDAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR1cFRpbWUnLCBub3cpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wc30gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxNZXNzYWdlSW5mbyAvPlxuICAgICAgICAgICB7LyogPGEgaHJlZj1cImh0dHBzOi8vdC5tZS9pY3JlZGl0X2t6Ym90XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBjbGFzc05hbWU9XCJpbWd3aGF0c2FwcFwiIHNyYz17cmVxdWlyZShcIi4uL2ltZy90ZWxlZ3JhbS5wbmdcIil9IGFsdD1cIlwiIC8+PC9hPiAqL31cbiAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPSs3NzAxNTM4MjQzOVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgY2xhc3NOYW1lPVwiaW1nd2hhdHNhcHBcIiBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvc3ZnL3doYXRzYXBwLnN2Z1wiKX0gYWx0PVwiXCIgLz48L2E+XG4gICAgICAgICAgICA8TmF2YmFyLz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICk7XG4gIH1cbn1cblxuLy9tYWtlU3RvcmUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3IHN0b3JlIGZvciBldmVyeSByZXF1ZXN0XG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsb2dnZWRJbjogc3RhdGUudXNlclJlZHVjZXIubG9nZ2VkSW5cbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBmZXRjaEN1cnJlbnRVc2VyOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmZldGNoQ3VycmVudFVzZXIoKSksXG59KTtcblxuLy8gLy93aXRoUmVkdXggd3JhcHBlciB0aGF0IHBhc3NlcyB0aGUgc3RvcmUgdG8gdGhlIEFwcCBDb21wb25lbnRcbi8vIC8vIGV4cG9ydCBkZWZhdWx0IG1ha2VTdG9yZS53aXRoUmVkdXgoTXlBcHApO1xuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==