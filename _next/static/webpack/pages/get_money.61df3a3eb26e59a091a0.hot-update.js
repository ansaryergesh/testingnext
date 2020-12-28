webpackHotUpdate_N_E("pages/get_money",{

/***/ "./pages/get_money/index.js":
/*!**********************************!*\
  !*** ./pages/get_money/index.js ***!
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _components_registrationForm_FormRegister__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/registrationForm/FormRegister */ "./components/registrationForm/FormRegister.js");
/* harmony import */ var _components_registrationForm_CodeConfirm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/registrationForm/CodeConfirm */ "./components/registrationForm/CodeConfirm.js");
/* harmony import */ var _components_registrationForm_StepSecond__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/registrationForm/StepSecond */ "./components/registrationForm/StepSecond.js");
/* harmony import */ var _components_registrationForm_ThirdStep__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/registrationForm/ThirdStep */ "./components/registrationForm/ThirdStep.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/ActionCreators */ "./store/actions/ActionCreators.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_redux_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux-form */ "./node_modules/react-redux-form/lib/index.js");
/* harmony import */ var react_redux_form__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_redux_form__WEBPACK_IMPORTED_MODULE_20__);









var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz\\pages\\get_money\\index.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var labels = ['Регистрация', 'Заполнения анкеты', 'Отправка анкеты'];

var handleSteps = function handleSteps(step) {
  switch (step) {
    case 0:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_registrationForm_FormRegister__WEBPACK_IMPORTED_MODULE_12__["default"], {
        props: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this);

    case 1:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_registrationForm_CodeConfirm__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this);

    case 2:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_registrationForm_StepSecond__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this);

    case 3:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_registrationForm_ThirdStep__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this);

    default:
      break;
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    stepregistration: state.stepregistration
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    stepRegistration: function stepRegistration(step) {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_17__["stepRegistration"])(step));
    },
    resetRegistration: function resetRegistration() {
      dispatch(react_redux_form__WEBPACK_IMPORTED_MODULE_20__["actions"].reset('registration'));
    },
    resetRegistration2: function resetRegistration2() {
      dispatch(react_redux_form__WEBPACK_IMPORTED_MODULE_20__["actions"].reset('registration2'));
    },
    resetRegistration3: function resetRegistration3() {
      dispatch(react_redux_form__WEBPACK_IMPORTED_MODULE_20__["actions"].reset('registration3'));
    },
    emptyMessage: function emptyMessage() {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_17__["emptyMessage"])());
    },
    errorMessage: function errorMessage(message) {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_17__["errorMessage"])(message));
    }
  };
};

var stepcheck = function stepcheck(val) {
  if (val > 0) {
    return val - 1;
  }

  return 0;
}; // const registrationStep = window.localStorage.getItem('step')


var FormStep = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormStep, _React$Component);

  var _super = _createSuper(FormStep);

  function FormStep() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormStep);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "state", {
      registrationStep: 0
    });

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FormStep, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      jquery__WEBPACK_IMPORTED_MODULE_19___default()('input').on('focus', function () {
        var inputHeight = jquery__WEBPACK_IMPORTED_MODULE_19___default()(this).offset().top;
        jquery__WEBPACK_IMPORTED_MODULE_19___default()("html, body").animate({
          scrollTop: inputHeight
        }, 500);
        return false;
      });

      if (localStorage.getItem('step')) {
        this.setState({
          registrationStep: localStorage.getItem('step')
        });
      }

      function accepCirrilic(evt) {
        evt = evt ? evt : window.event;
        var charCode = evt.which ? evt.which : evt.keyCode;
        var verified = String.fromCharCode(charCode).match(/[a-zA-Z0-9_"*/]/);

        if (verified) {
          evt.preventDefault();
          jquery__WEBPACK_IMPORTED_MODULE_19___default()('.hint').addClass('hinterror');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_19___default()('.hint').removeClass('hinterror');
        }
      }

      jquery__WEBPACK_IMPORTED_MODULE_19___default()('.registerCyrril').on('keypress', function (event) {
        accepCirrilic(event);
      });
      jquery__WEBPACK_IMPORTED_MODULE_19___default()('.registerCyrril').keyup(function (event) {
        var textBox = event.target;
        var start = textBox.selectionStart;
        var end = textBox.selectionEnd;
        textBox.value = textBox.value.charAt(0).toUpperCase() + textBox.value.slice(1);
        textBox.setSelectionRange(start, end);
      });
      this.props.emptyMessage();
      this.props.resetRegistration();
      this.props.resetRegistration2();
      this.props.resetRegistration3();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_16___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
              children: "\u0414\u0435\u043D\u044C\u0433\u0438 \u0432 \u043A\u0440\u0435\u0434\u0438\u0442"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: "otherPages",
            activeStep: this.state.registrationStep > this.props.stepregistration && this.state.registrationStep > 1 ? parseInt(this.state.registrationStep) - 1 : parseInt(stepcheck(this.props.stepregistration)),
            style: {
              paddingTop: 30,
              paddingBottom: 50
            },
            alternativeLabel: true,
            children: labels.map(function (label) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__["default"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  children: label
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 9
                }, _this3)
              }, label, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 8
              }, _this3);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 21
          }, this), this.state.registrationStep > this.props.stepregistration && this.state.registrationStep > 1 ? handleSteps(parseInt(this.state.registrationStep)) : handleSteps(parseInt(this.props.stepregistration))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 5
      }, this);
    }
  }]);

  return FormStep;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(mapStateToProps, mapDispatchToProps)(FormStep));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2V0X21vbmV5L2luZGV4LmpzIl0sIm5hbWVzIjpbImxhYmVscyIsImhhbmRsZVN0ZXBzIiwic3RlcCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic3RlcHJlZ2lzdHJhdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3RlcFJlZ2lzdHJhdGlvbiIsInJlc2V0UmVnaXN0cmF0aW9uIiwiYWN0aW9ucyIsInJlc2V0IiwicmVzZXRSZWdpc3RyYXRpb24yIiwicmVzZXRSZWdpc3RyYXRpb24zIiwiZW1wdHlNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInN0ZXBjaGVjayIsInZhbCIsIkZvcm1TdGVwIiwicmVnaXN0cmF0aW9uU3RlcCIsIiQiLCJvbiIsImlucHV0SGVpZ2h0Iiwib2Zmc2V0IiwidG9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRTdGF0ZSIsImFjY2VwQ2lycmlsaWMiLCJldnQiLCJ3aW5kb3ciLCJldmVudCIsImNoYXJDb2RlIiwid2hpY2giLCJrZXlDb2RlIiwidmVyaWZpZWQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtYXRjaCIsInByZXZlbnREZWZhdWx0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImtleXVwIiwidGV4dEJveCIsInRhcmdldCIsInN0YXJ0Iiwic2VsZWN0aW9uU3RhcnQiLCJlbmQiLCJzZWxlY3Rpb25FbmQiLCJ2YWx1ZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInByb3BzIiwicGFyc2VJbnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcCIsImxhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLENBQUUsYUFBRixFQUFpQixtQkFBakIsRUFBc0MsaUJBQXRDLENBQWY7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsSUFBSSxFQUFJO0FBQ3hCLFVBQVFBLElBQVI7QUFDSSxTQUFLLENBQUw7QUFDSSwwQkFDSSxxRUFBQyxrRkFBRDtBQUFXLGFBQUs7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKOztBQUlKLFNBQUssQ0FBTDtBQUNJLDBCQUNJLHFFQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjs7QUFJSixTQUFLLENBQUw7QUFDSSwwQkFDSSxxRUFBQyxnRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7O0FBS0osU0FBSyxDQUFMO0FBQ0ksMEJBQ0kscUVBQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKOztBQUdKO0FBQ0k7QUF0QlI7QUF3QkgsQ0F6QkQ7O0FBMEJBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzdCLFNBQU87QUFDSEMsb0JBQWdCLEVBQUVELEtBQUssQ0FBQ0M7QUFEckIsR0FBUDtBQUdILENBSkQ7O0FBS0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN0Q0Msb0JBQWdCLEVBQUUsMEJBQUFOLElBQUksRUFBRztBQUFDSyxjQUFRLENBQUNDLHVGQUFnQixDQUFDTixJQUFELENBQWpCLENBQVI7QUFBaUMsS0FEckI7QUFFdENPLHFCQUFpQixFQUFFLDZCQUFNO0FBQUVGLGNBQVEsQ0FBQ0cseURBQU8sQ0FBQ0MsS0FBUixDQUFjLGNBQWQsQ0FBRCxDQUFSO0FBQXdDLEtBRjdCO0FBR3RDQyxzQkFBa0IsRUFBQyw4QkFBSTtBQUFDTCxjQUFRLENBQUNHLHlEQUFPLENBQUNDLEtBQVIsQ0FBYyxlQUFkLENBQUQsQ0FBUjtBQUF5QyxLQUgzQjtBQUl0Q0Usc0JBQWtCLEVBQUMsOEJBQUk7QUFBQ04sY0FBUSxDQUFDRyx5REFBTyxDQUFDQyxLQUFSLENBQWMsZUFBZCxDQUFELENBQVI7QUFBeUMsS0FKM0I7QUFLdENHLGdCQUFZLEVBQUMsd0JBQU07QUFBRVAsY0FBUSxDQUFDTyxtRkFBWSxFQUFiLENBQVI7QUFBeUIsS0FMUjtBQU10Q0MsZ0JBQVksRUFBRSxzQkFBQUMsT0FBTyxFQUFJO0FBQUNULGNBQVEsQ0FBQ1EsbUZBQVksQ0FBQ0MsT0FBRCxDQUFiLENBQVI7QUFBZ0M7QUFOcEIsR0FBZjtBQUFBLENBQTNCOztBQVVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQsRUFBUztBQUN2QixNQUFHQSxHQUFHLEdBQUMsQ0FBUCxFQUFVO0FBQ04sV0FBT0EsR0FBRyxHQUFDLENBQVg7QUFDSDs7QUFDRCxTQUFPLENBQVA7QUFDSCxDQUxELEMsQ0FNQTs7O0lBR01DLFE7Ozs7Ozs7Ozs7Ozs7Ozs7aU5BQ007QUFDSkMsc0JBQWdCLEVBQUU7QUFEZCxLOzs7Ozs7O3dDQUdZO0FBQ2hCQyxvREFBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXQyxFQUFYLENBQWMsT0FBZCxFQUFzQixZQUFVO0FBQzVCLFlBQUlDLFdBQVcsR0FBQ0YsOENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsTUFBUixHQUFpQkMsR0FBakM7QUFDQUosc0RBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JLLE9BQWhCLENBQXdCO0FBQUVDLG1CQUFTLEVBQUVKO0FBQWIsU0FBeEIsRUFBbUQsR0FBbkQ7QUFDQSxlQUFPLEtBQVA7QUFDRixPQUpGOztBQUtBLFVBQUdLLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFILEVBQWlDO0FBQzdCLGFBQUtDLFFBQUwsQ0FBYztBQUNWViwwQkFBZ0IsRUFBRVEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCO0FBRFIsU0FBZDtBQUdIOztBQUNELGVBQVNFLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQ3hCQSxXQUFHLEdBQUdBLEdBQUcsR0FBR0EsR0FBSCxHQUFTQyxNQUFNLENBQUNDLEtBQXpCO0FBQ0EsWUFBSUMsUUFBUSxHQUFHSCxHQUFHLENBQUNJLEtBQUosR0FBWUosR0FBRyxDQUFDSSxLQUFoQixHQUF3QkosR0FBRyxDQUFDSyxPQUEzQztBQUNBLFlBQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CTCxRQUFwQixFQUE4Qk0sS0FBOUIsQ0FBb0MsaUJBQXBDLENBQWY7O0FBQ0EsWUFBSUgsUUFBSixFQUFjO0FBQ1ZOLGFBQUcsQ0FBQ1UsY0FBSjtBQUNBckIsd0RBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3NCLFFBQVgsQ0FBb0IsV0FBcEI7QUFDSCxTQUhELE1BR087QUFDSHRCLHdEQUFDLENBQUMsT0FBRCxDQUFELENBQVd1QixXQUFYLENBQXVCLFdBQXZCO0FBQ0g7QUFDSjs7QUFFRHZCLG9EQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsRUFBckIsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBQVksS0FBSyxFQUFJO0FBQ3pDSCxxQkFBYSxDQUFDRyxLQUFELENBQWI7QUFDSCxPQUZEO0FBSUFiLG9EQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQndCLEtBQXJCLENBQTJCLFVBQVNYLEtBQVQsRUFBZ0I7QUFDdkMsWUFBSVksT0FBTyxHQUFHWixLQUFLLENBQUNhLE1BQXBCO0FBQ0EsWUFBSUMsS0FBSyxHQUFHRixPQUFPLENBQUNHLGNBQXBCO0FBQ0EsWUFBSUMsR0FBRyxHQUFHSixPQUFPLENBQUNLLFlBQWxCO0FBQ0FMLGVBQU8sQ0FBQ00sS0FBUixHQUFnQk4sT0FBTyxDQUFDTSxLQUFSLENBQWNDLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0JDLFdBQXhCLEtBQXdDUixPQUFPLENBQUNNLEtBQVIsQ0FBY0csS0FBZCxDQUFvQixDQUFwQixDQUF4RDtBQUNBVCxlQUFPLENBQUNVLGlCQUFSLENBQTBCUixLQUExQixFQUFpQ0UsR0FBakM7QUFDSCxPQU5EO0FBU0EsV0FBS08sS0FBTCxDQUFXM0MsWUFBWDtBQUNBLFdBQUsyQyxLQUFMLENBQVdoRCxpQkFBWDtBQUNBLFdBQUtnRCxLQUFMLENBQVc3QyxrQkFBWDtBQUNBLFdBQUs2QyxLQUFMLENBQVc1QyxrQkFBWDtBQUNIOzs7NkJBR1E7QUFBQTs7QUFDTCwwQkFDSixxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwrQkFDQSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxrQ0FDZ0IscUVBQUMsaURBQUQ7QUFBQSxtQ0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGhCLGVBRWdCLHFFQUFDLGlFQUFEO0FBQVMscUJBQVMsRUFBQyxZQUFuQjtBQUFnQyxzQkFBVSxFQUFFLEtBQUtULEtBQUwsQ0FBV2dCLGdCQUFYLEdBQThCLEtBQUtxQyxLQUFMLENBQVdwRCxnQkFBekMsSUFBNkQsS0FBS0QsS0FBTCxDQUFXZ0IsZ0JBQVgsR0FBNEIsQ0FBekYsR0FBNkZzQyxRQUFRLENBQUMsS0FBS3RELEtBQUwsQ0FBV2dCLGdCQUFaLENBQVIsR0FBc0MsQ0FBbkksR0FBdUlzQyxRQUFRLENBQUN6QyxTQUFTLENBQUMsS0FBS3dDLEtBQUwsQ0FBV3BELGdCQUFaLENBQVYsQ0FBM0w7QUFDQSxpQkFBSyxFQUFFO0FBQUVzRCx3QkFBVSxFQUFFLEVBQWQ7QUFBa0JDLDJCQUFhLEVBQUU7QUFBakMsYUFEUDtBQUM4Qyw0QkFBZ0IsTUFEOUQ7QUFBQSxzQkFFYjVELE1BQU0sQ0FBQzZELEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsa0NBQ2hCLHFFQUFDLCtEQUFEO0FBQUEsdUNBQ0MscUVBQUMsb0VBQUQ7QUFBQSw0QkFBYUE7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsaUJBQVdBLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEZ0I7QUFBQSxhQUFoQjtBQUZhO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRmhCLEVBV2lCLEtBQUsxRCxLQUFMLENBQVdnQixnQkFBWCxHQUE4QixLQUFLcUMsS0FBTCxDQUFXcEQsZ0JBQXpDLElBQTZELEtBQUtELEtBQUwsQ0FBV2dCLGdCQUFYLEdBQTRCLENBQXpGLEdBQTZGbkIsV0FBVyxDQUFDeUQsUUFBUSxDQUFDLEtBQUt0RCxLQUFMLENBQVdnQixnQkFBWixDQUFULENBQXhHLEdBQWtKbkIsV0FBVyxDQUFDeUQsUUFBUSxDQUFDLEtBQUtELEtBQUwsQ0FBV3BELGdCQUFaLENBQVQsQ0FYOUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURJO0FBa0JIOzs7O0VBbEVrQjBELDRDQUFLLENBQUNDLFM7O0FBcUViQywySEFBTyxDQUFDOUQsZUFBRCxFQUFpQkcsa0JBQWpCLENBQVAsQ0FBNENhLFFBQTVDLENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldF9tb25leS42MWRmM2EzZWIyNmU1OWEwOTFhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcidcclxuaW1wb3J0IFN0ZXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcCdcclxuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWwnXHJcbmltcG9ydCBGaXJzdFN0ZXAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZWdpc3RyYXRpb25Gb3JtL0Zvcm1SZWdpc3Rlcic7XHJcbmltcG9ydCBDb2RlQ29uZmlybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbkZvcm0vQ29kZUNvbmZpcm0nO1xyXG5pbXBvcnQgU2Vjb25kU3RlcCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbkZvcm0vU3RlcFNlY29uZCc7XHJcbmltcG9ydCBUaGlyZFN0ZXAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZWdpc3RyYXRpb25Gb3JtL1RoaXJkU3RlcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHtzdGVwUmVnaXN0cmF0aW9uLCBlbXB0eU1lc3NhZ2UsZXJyb3JNZXNzYWdlfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL0FjdGlvbkNyZWF0b3JzJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICdyZWFjdC1yZWR1eC1mb3JtJ1xyXG5jb25zdCBsYWJlbHMgPSBbICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPJywgJ9CX0LDQv9C+0LvQvdC10L3QuNGPINCw0L3QutC10YLRiycsICfQntGC0L/RgNCw0LLQutCwINCw0L3QutC10YLRiycsICBdO1xyXG5jb25zdCBoYW5kbGVTdGVwcyA9IHN0ZXAgPT4ge1xyXG4gICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEZpcnN0U3RlcCBwcm9wc1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDb2RlQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxTZWNvbmRTdGVwXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUaGlyZFN0ZXAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGVwcmVnaXN0cmF0aW9uOiBzdGF0ZS5zdGVwcmVnaXN0cmF0aW9uXHJcbiAgICB9XHJcbn1cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgc3RlcFJlZ2lzdHJhdGlvbjogc3RlcCA9PntkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKHN0ZXApKX0sXHJcbiAgICByZXNldFJlZ2lzdHJhdGlvbjogKCkgPT4geyBkaXNwYXRjaChhY3Rpb25zLnJlc2V0KCdyZWdpc3RyYXRpb24nKSl9LFxyXG4gICAgcmVzZXRSZWdpc3RyYXRpb24yOigpPT57ZGlzcGF0Y2goYWN0aW9ucy5yZXNldCgncmVnaXN0cmF0aW9uMicpKX0sXHJcbiAgICByZXNldFJlZ2lzdHJhdGlvbjM6KCk9PntkaXNwYXRjaChhY3Rpb25zLnJlc2V0KCdyZWdpc3RyYXRpb24zJykpfSxcclxuICAgIGVtcHR5TWVzc2FnZTooKSA9PiB7IGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKX0sXHJcbiAgICBlcnJvck1lc3NhZ2U6IG1lc3NhZ2UgPT4ge2Rpc3BhdGNoKGVycm9yTWVzc2FnZShtZXNzYWdlKSl9XHJcblxyXG59KVxyXG5cclxuY29uc3Qgc3RlcGNoZWNrID0gKHZhbCkgPT4ge1xyXG4gICAgaWYodmFsPjApIHtcclxuICAgICAgICByZXR1cm4gdmFsLTFcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcbi8vIGNvbnN0IHJlZ2lzdHJhdGlvblN0ZXAgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXAnKVxyXG5cclxuXHJcbmNsYXNzIEZvcm1TdGVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvblN0ZXA6IDBcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICQoJ2lucHV0Jykub24oJ2ZvY3VzJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRIZWlnaHQ9JCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGlucHV0SGVpZ2h0fSwgNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RlcCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RlcDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXAnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBhY2NlcENpcnJpbGljKGV2dCkge1xyXG4gICAgICAgICAgICBldnQgPSBldnQgPyBldnQgOiB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgICAgIHZhciBjaGFyQ29kZSA9IGV2dC53aGljaCA/IGV2dC53aGljaCA6IGV2dC5rZXlDb2RlO1xyXG4gICAgICAgICAgICB2YXIgdmVyaWZpZWQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKS5tYXRjaCgvW2EtekEtWjAtOV9cIiovXS8pO1xyXG4gICAgICAgICAgICBpZiAodmVyaWZpZWQpIHtcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmhpbnQnKS5hZGRDbGFzcygnaGludGVycm9yJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuaGludCcpLnJlbW92ZUNsYXNzKCdoaW50ZXJyb3InKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcucmVnaXN0ZXJDeXJyaWwnKS5vbigna2V5cHJlc3MnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGFjY2VwQ2lycmlsaWMoZXZlbnQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLnJlZ2lzdGVyQ3lycmlsJykua2V5dXAoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHRleHRCb3ggPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHRleHRCb3guc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSB0ZXh0Qm94LnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgdGV4dEJveC52YWx1ZSA9IHRleHRCb3gudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0ZXh0Qm94LnZhbHVlLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICB0ZXh0Qm94LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5lbXB0eU1lc3NhZ2UoKTtcclxuICAgICAgICB0aGlzLnByb3BzLnJlc2V0UmVnaXN0cmF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZXNldFJlZ2lzdHJhdGlvbjIoKTtcclxuICAgICAgICB0aGlzLnByb3BzLnJlc2V0UmVnaXN0cmF0aW9uMygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWQ+PHRpdGxlPtCU0LXQvdGM0LPQuCDQsiDQutGA0LXQtNC40YI8L3RpdGxlPjwvSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8U3RlcHBlciBjbGFzc05hbWU9XCJvdGhlclBhZ2VzXCIgYWN0aXZlU3RlcD17dGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25TdGVwID4gdGhpcy5wcm9wcy5zdGVwcmVnaXN0cmF0aW9uICYmIHRoaXMuc3RhdGUucmVnaXN0cmF0aW9uU3RlcD4xID8gcGFyc2VJbnQodGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25TdGVwKS0xIDogcGFyc2VJbnQoc3RlcGNoZWNrKHRoaXMucHJvcHMuc3RlcHJlZ2lzdHJhdGlvbikpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDMwLCBwYWRkaW5nQm90dG9tOiA1MCB9fSBhbHRlcm5hdGl2ZUxhYmVsPlxyXG5cdFx0XHRcdFx0XHR7bGFiZWxzLm1hcChsYWJlbCA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PFN0ZXAga2V5PXtsYWJlbH0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFN0ZXBMYWJlbCA+e2xhYmVsfTwvU3RlcExhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvU3RlcD5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1N0ZXBwZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvblN0ZXAgPiB0aGlzLnByb3BzLnN0ZXByZWdpc3RyYXRpb24gJiYgdGhpcy5zdGF0ZS5yZWdpc3RyYXRpb25TdGVwPjEgPyBoYW5kbGVTdGVwcyhwYXJzZUludCh0aGlzLnN0YXRlLnJlZ2lzdHJhdGlvblN0ZXApKSA6IGhhbmRsZVN0ZXBzKHBhcnNlSW50KHRoaXMucHJvcHMuc3RlcHJlZ2lzdHJhdGlvbikpfVxyXG5cclxuXHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKEZvcm1TdGVwKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=