webpackHotUpdate_N_E("pages/get_money",{

/***/ "./components/registrationForm/CodeConfirm.js":
/*!****************************************************!*\
  !*** ./components/registrationForm/CodeConfirm.js ***!
  \****************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/ActionCreators */ "./store/actions/ActionCreators.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux-form */ "./node_modules/react-redux-form/lib/index.js");
/* harmony import */ var react_redux_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-spinner-material */ "./node_modules/react-spinner-material/lib/index.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_spinner_material__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var disable_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! disable-scroll */ "./node_modules/disable-scroll/es/index.js");









var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz\\components\\registrationForm\\CodeConfirm.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var codeConfirmation = function codeConfirmation(val) {
  var res = String(val).replace(/_/g, "");

  if (res.length !== 4) {
    return false;
  } else {
    return true;
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    registrationValues: state.registrationValues,
    somemessage: state.message,
    loading: state.loading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    postRegistrationCode: function postRegistrationCode(registration) {
      return dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_10__["postRegistrationCode"])(registration));
    },
    postRegistration: function postRegistration(registration) {
      return dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_10__["postRegistration"])(registration));
    },
    emptyMessage: function emptyMessage() {
      dispatch(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_10__["emptyMessage"]);
    },
    resetCode: function resetCode() {
      dispatch(react_redux_form__WEBPACK_IMPORTED_MODULE_13__["actions"].reset('codeConfirm'));
    }
  };
};

var CodeMask = function CodeMask(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_input_mask__WEBPACK_IMPORTED_MODULE_11___default.a, _objectSpread({
    mask: "9999",
    maskChar: " ",
    className: "my-input"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 29
  }, _this);
};

_c = CodeMask;

var CodeConfirm = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CodeConfirm, _React$Component);

  var _super = _createSuper(CodeConfirm);

  function CodeConfirm() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CodeConfirm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "sendCode", function () {
      _this2.props.postRegistration(_this2.props.registrationValues);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "handleSubmit", function (vals) {
      var object = {};
      object.code = vals.code;
      var finalobjects = Object.assign(_this2.props.registrationValues, object);

      _this2.props.postRegistrationCode(finalobjects);

      _this2.props.resetCode();
    });

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CodeConfirm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.emptyMessage();
      var progress = document.querySelector('.progress-done');
      progress.style.width = progress.getAttribute('data-done') + '%';
      progress.append(progress.getAttribute('data-done') + "%");
      progress.style.opacity = 1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      window.scrollTo(0, 0);
      var phone = this.props.registrationValues.phone || null;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          "class": "progressBar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            "class": "progress-done",
            id: "progress-done",
            "data-done": "55"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "counter",
            children: "\u0412\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, this), this.props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader",
          children: disable_scroll__WEBPACK_IMPORTED_MODULE_15__["default"].on()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: disable_scroll__WEBPACK_IMPORTED_MODULE_15__["default"].off()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_redux_form__WEBPACK_IMPORTED_MODULE_13__["Form"], {
          model: "codeConfirm",
          className: "container formsStep",
          onSubmit: function onSubmit(values) {
            return _this3.handleSubmit(values);
          },
          children: [this.props.somemessage.error !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            "class": "alert alert-danger",
            role: "alert",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: [" ", this.props.somemessage.error]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 16
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 8
          }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            "class": "alert alert-success mx-auto",
            role: "alert",
            children: ["\u041A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F  \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043D\u0430 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440. \u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
              children: phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 76
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
            className: "text-center",
            children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
            className: "form-group col-12 mx-auto",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              htmlFor: "code",
              className: "text-center mt-3",
              children: "\u041A\u043E\u0434:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_redux_form__WEBPACK_IMPORTED_MODULE_13__["Control"], {
              className: "form-control",
              placeholder: "____",
              model: ".code",
              type: "tel",
              component: CodeMask,
              validators: {
                codeConfirmation: codeConfirmation
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_redux_form__WEBPACK_IMPORTED_MODULE_13__["Errors"], {
              className: "text-danger",
              model: ".code",
              show: "touched",
              messages: {
                codeConfirmation: 'Заполните поля код'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "button form-group  codeConfirm",
            children: this.props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_spinner_material__WEBPACK_IMPORTED_MODULE_14___default.a, {
              className: "loading",
              size: 200,
              spinnerColor: "#ef2221",
              spinnerWidth: 2,
              visible: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 52
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              type: "submit",
              children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 22
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "button form-group  codeConfirm mb-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            className: "newCode",
            onClick: this.sendCode,
            children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, this);
    }
  }]);

  return CodeConfirm;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(CodeConfirm));

var _c;

$RefreshReg$(_c, "CodeMask");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3RyYXRpb25Gb3JtL0NvZGVDb25maXJtLmpzIl0sIm5hbWVzIjpbImNvZGVDb25maXJtYXRpb24iLCJ2YWwiLCJyZXMiLCJTdHJpbmciLCJyZXBsYWNlIiwibGVuZ3RoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJyZWdpc3RyYXRpb25WYWx1ZXMiLCJzb21lbWVzc2FnZSIsIm1lc3NhZ2UiLCJsb2FkaW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwb3N0UmVnaXN0cmF0aW9uQ29kZSIsInJlZ2lzdHJhdGlvbiIsInBvc3RSZWdpc3RyYXRpb24iLCJlbXB0eU1lc3NhZ2UiLCJyZXNldENvZGUiLCJhY3Rpb25zIiwicmVzZXQiLCJDb2RlTWFzayIsInByb3BzIiwiQ29kZUNvbmZpcm0iLCJ2YWxzIiwib2JqZWN0IiwiY29kZSIsImZpbmFsb2JqZWN0cyIsIk9iamVjdCIsImFzc2lnbiIsInByb2dyZXNzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ3aWR0aCIsImdldEF0dHJpYnV0ZSIsImFwcGVuZCIsIm9wYWNpdHkiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInBob25lIiwiZGlzYWJsZVNjcm9sbCIsIm9uIiwib2ZmIiwidmFsdWVzIiwiaGFuZGxlU3VibWl0IiwiZXJyb3IiLCJzZW5kQ29kZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxHQUFELEVBQVE7QUFDaEMsTUFBSUMsR0FBRyxHQUFHQyxNQUFNLENBQUNGLEdBQUQsQ0FBTixDQUFZRyxPQUFaLENBQW9CLElBQXBC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ZUE4Q0E7QUFBSyxtQkFBUyxFQUFDLHFDQUFmO0FBQUEsaUNBQ29CO0FBQVEscUJBQVMsRUFBRyxTQUFwQjtBQUE4QixtQkFBTyxFQUFFLEtBQUtvQyxRQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQW9ESDs7OztFQTlFcUJDLDRDQUFLLENBQUNDLFM7O0FBaUZoQkMsMEhBQU8sQ0FBQzVDLGVBQUQsRUFBa0JNLGtCQUFsQixDQUFQLENBQTZDVyxXQUE3QyxDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRfbW9uZXkuYWI5OTQ4ZjA2ZTM0NTMwY2JiM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHBvc3RSZWdpc3RyYXRpb25Db2RlLCBwb3N0UmVnaXN0cmF0aW9uLCBlbXB0eU1lc3NhZ2V9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvQWN0aW9uQ3JlYXRvcnMnO1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gXCJyZWFjdC1pbnB1dC1tYXNrXCI7XHJcbmltcG9ydCB7IE5hdmJhciwgTmF2YmFyQnJhbmQsIE5hdiwgTmF2YmFyVG9nZ2xlciwgQ29sbGFwc2UsIE5hdkl0ZW0sIEp1bWJvdHJvbiwgUm93LCBDb2wsXHJcbiAgICBCdXR0b24sIE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LFxyXG4gRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWwgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgQ29udHJvbCwgYWN0aW9ucywgRXJyb3JzLCBGb3JtIH0gZnJvbSAncmVhY3QtcmVkdXgtZm9ybSc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LXNwaW5uZXItbWF0ZXJpYWwnO1xyXG5pbXBvcnQgZGlzYWJsZVNjcm9sbCBmcm9tICdkaXNhYmxlLXNjcm9sbCc7XHJcblxyXG5jb25zdCBjb2RlQ29uZmlybWF0aW9uID0gKHZhbCk9PiB7XHJcblx0dmFyIHJlcyA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL18vZywgXCJcIik7XHJcbiAgICBpZihyZXMubGVuZ3RoICE9PSA0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWdpc3RyYXRpb25WYWx1ZXM6IHN0YXRlLnJlZ2lzdHJhdGlvblZhbHVlcyxcclxuICAgICAgc29tZW1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2UsXHJcbiAgICAgIGxvYWRpbmc6IHN0YXRlLmxvYWRpbmdcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgcG9zdFJlZ2lzdHJhdGlvbkNvZGU6KHJlZ2lzdHJhdGlvbikgPT4gZGlzcGF0Y2gocG9zdFJlZ2lzdHJhdGlvbkNvZGUocmVnaXN0cmF0aW9uKSksXHJcbiAgICBwb3N0UmVnaXN0cmF0aW9uOihyZWdpc3RyYXRpb24pID0+IGRpc3BhdGNoKHBvc3RSZWdpc3RyYXRpb24ocmVnaXN0cmF0aW9uKSksXHJcbiAgICBlbXB0eU1lc3NhZ2U6KCkgPT4geyBkaXNwYXRjaChlbXB0eU1lc3NhZ2UpfSxcclxuICAgIHJlc2V0Q29kZTogKCkgPT4geyBkaXNwYXRjaChhY3Rpb25zLnJlc2V0KCdjb2RlQ29uZmlybScpKX0sXHJcbn0pXHJcbmNvbnN0IENvZGVNYXNrID0gKHByb3BzKSA9PiA8SW5wdXRNYXNrIG1hc2s9XCI5OTk5XCIgbWFza0NoYXI9XCIgXCIgY2xhc3NOYW1lPVwibXktaW5wdXRcIiB7Li4ucHJvcHN9IC8+O1xyXG5jbGFzcyBDb2RlQ29uZmlybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZW1wdHlNZXNzYWdlKCk7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtZG9uZScpO1xyXG5cdFx0cHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBwcm9ncmVzcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9uZScpICsgJyUnO1xyXG5cdFx0cHJvZ3Jlc3MuYXBwZW5kKHByb2dyZXNzLmdldEF0dHJpYnV0ZSgnZGF0YS1kb25lJykgKyBcIiVcIilcclxuXHRcdHByb2dyZXNzLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZW5kQ29kZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnBvc3RSZWdpc3RyYXRpb24odGhpcy5wcm9wcy5yZWdpc3RyYXRpb25WYWx1ZXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VibWl0ID0gKHZhbHMpID0+IHtcclxuICAgICAgICB2YXIgb2JqZWN0ID0ge307XHJcbiAgICAgICAgb2JqZWN0LmNvZGUgPSB2YWxzLmNvZGU7XHJcbiAgICAgICAgY29uc3QgZmluYWxvYmplY3RzID0gT2JqZWN0LmFzc2lnbih0aGlzLnByb3BzLnJlZ2lzdHJhdGlvblZhbHVlcywgb2JqZWN0KVxyXG4gICAgICAgIHRoaXMucHJvcHMucG9zdFJlZ2lzdHJhdGlvbkNvZGUoZmluYWxvYmplY3RzKTtcclxuICAgICAgICB0aGlzLnByb3BzLnJlc2V0Q29kZSgpO1xyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgY29uc3QgcGhvbmUgPSB0aGlzLnByb3BzLnJlZ2lzdHJhdGlvblZhbHVlcy5waG9uZSB8fCBudWxsO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NCYXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb2dyZXNzLWRvbmVcIiBpZD1cInByb2dyZXNzLWRvbmVcIiBkYXRhLWRvbmU9XCI1NVwiPlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvdW50ZXJcIj7QktC10YDQvtGP0YLQvdC+0YHRgtGMINC+0LTQvtCx0YDQtdC90LjRjzwvcD5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2FkaW5nID09PSB0cnVlID9cclxuXHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbExvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGlzYWJsZVNjcm9sbC5vbigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXIgbG9hZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNhYmxlU2Nyb2xsLm9mZigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgfVxyXG4gICAgICAgICAgICA8Rm9ybSBtb2RlbD1cImNvZGVDb25maXJtXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZvcm1zU3RlcFwiIG9uU3VibWl0PXsodmFsdWVzKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCh2YWx1ZXMpfT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuc29tZW1lc3NhZ2UuZXJyb3IgIT09IG51bGwgP1xyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICBcdFx0XHRcdFx0XHRcdDxzdHJvbmc+IHsgdGhpcy5wcm9wcy5zb21lbWVzc2FnZS5lcnJvciB9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIFx0XHRcdFx0PC9kaXY+IDogbnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3MgbXgtYXV0b1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAg0JrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPICDQvtGC0L/RgNCw0LLQu9C10L0g0L3QsCDQstCw0Ygg0L3QvtC80LXRgC4g0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwOiA8c3Ryb25nPntwaG9uZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7QktCy0LXQtNC40YLQtSDQutC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y88L2gyPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29kZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTNcIj7QmtC+0LQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRNYXNrICAgaWQ9J2NvZGUnIG5hbWU9J2NvZGUnICBtYXNrPVwiOTk5OVwiIHBsYWNlaG9sZGVyPSdfX19fJyBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1hc2tDaGFyPVwiIFwiICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1sncmVxdWlyZWQnXX0gIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLTEyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvZGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0zXCI+0JrQvtC0OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2wgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJfX19fXCIgbW9kZWw9XCIuY29kZVwiIHR5cGU9J3RlbCcgY29tcG9uZW50PXtDb2RlTWFza30gdmFsaWRhdG9ycz17e2NvZGVDb25maXJtYXRpb259fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVycm9ycyBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJyBtb2RlbD0nLmNvZGUnIHNob3c9J3RvdWNoZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcz17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29kZUNvbmZpcm1hdGlvbjogJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvRjyDQutC+0LQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB9fS8+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGZvcm0tZ3JvdXAgIGNvZGVDb25maXJtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubG9hZGluZyA9PT0gdHJ1ZSA/IDxTcGlubmVyIGNsYXNzTmFtZT1cImxvYWRpbmdcIiBzaXplPXsyMDB9IHNwaW5uZXJDb2xvcj17XCIjZWYyMjIxXCJ9IHNwaW5uZXJXaWR0aD17Mn0gdmlzaWJsZT17dHJ1ZX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+0J/QvtC00YLQstC10YDQtNC40YLRjDwvYnV0dG9uPn1cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGZvcm0tZ3JvdXAgIGNvZGVDb25maXJtIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwibmV3Q29kZVwiIG9uQ2xpY2s9e3RoaXMuc2VuZENvZGV9PtCf0L7Qu9GD0YfQuNGC0Ywg0L3QvtCy0YvQuSDQutC+0LQ8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvZGVDb25maXJtKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=