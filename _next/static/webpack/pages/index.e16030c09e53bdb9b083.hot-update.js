webpackHotUpdate_N_E("pages/index",{

/***/ "./defaults/utmSource.js":
/*!*******************************!*\
  !*** ./defaults/utmSource.js ***!
  \*******************************/
/*! exports provided: newCookie, controlUtm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCookie", function() { return newCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlUtm", function() { return controlUtm; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);


function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

;
var newCookie = function newCookie() {
  if (js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('utm_source') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('utm_medium') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('utm_campaign') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('utm_term') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('clickid') !== undefined) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('utm_medium');
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('utm_campaign');
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('utm_source');
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('utm_term');
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('clickid');
  } else if (js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('utm_source') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('afclick') !== undefined) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('utm_source');
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('afclick');
  } else if (js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('utm_source') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('clickid') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('wmid') !== undefined) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('utm_source');
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('clickid');
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('wmid');
  } else if (js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('utm_source') !== undefined) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('utm_source');
  } else {}
};
var controlUtm = function controlUtm() {
  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('utm_medium').length > 0 && getUrlParameter('utm_campaign').length > 0 && getUrlParameter('utm_term').length > 0 && getUrlParameter('clickid').length > 0) {
    newCookie();

    if (getUrlParameter('utm_source').includes('qaz')) {
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_source', 'qaz', {
        expires: 1
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_medium', getUrlParameter('utm_medium'), {
        expires: 1
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_campaign', getUrlParameter('utm_campaign'), {
        expires: 1
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_term', getUrlParameter('utm_term'), {
        expires: 1
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('clickid', getUrlParameter('clickid'), {
        expires: 1
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('afclick').length > 0) {
    if (getUrlParameter('utm_source') === 'loangate') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('afclick', getUrlParameter('afclick'), {
        expires: 30
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('cpa_click_id').length > 0 && getUrlParameter('cpa_wm_id').length > 0) {
    if (getUrlParameter('utm_source') === 'leadgid') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('clickid', getUrlParameter('cpa_click_id'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('wmid', getUrlParameter('cpa_wm_id'), {
        expires: 30
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('v').length > 0 && getUrlParameter('utm_medium').length > 0 && getUrlParameter('utm_campaign').length > 0 && getUrlParameter('web_id').length > 0) {
    if (getUrlParameter('utm_source') === 'doaff') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_medium', getUrlParameter('utm_medium'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_campaign', getUrlParameter('utm_campaign'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_term', getUrlParameter('web_id'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('clickid', getUrlParameter('v'), {
        expires: 30
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('clickid').length > 0) {
    if (getUrlParameter('utm_source') === 'upsala') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('clickid', getUrlParameter('clickid'), {
        expires: 30
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0) {
    if (getUrlParameter('utm_source').includes('sms')) {
      localStorage.clear();
      newCookie();
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 1
      });
    }
  } else {}
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdXRtU291cmNlLmpzIl0sIm5hbWVzIjpbImdldFVybFBhcmFtZXRlciIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmV3Q29va2llIiwiY29va2llIiwiZ2V0IiwidW5kZWZpbmVkIiwicmVtb3ZlIiwiY29udHJvbFV0bSIsImxlbmd0aCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJzZXQiLCJleHBpcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQzdCQSxNQUFJLEdBQUdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLE1BQWIsRUFBcUIsS0FBckIsRUFBNEJBLE9BQTVCLENBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLENBQVA7QUFDQSxNQUFJQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXLFdBQVdILElBQVgsR0FBa0IsV0FBN0IsQ0FBWjtBQUNBLE1BQUlJLE9BQU8sR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0MsTUFBcEIsQ0FBZDtBQUNBLFNBQU9ILE9BQU8sS0FBSyxJQUFaLEdBQW1CLEVBQW5CLEdBQXdCSSxrQkFBa0IsQ0FBQ0osT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSCxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLENBQUQsQ0FBakQ7QUFDRDs7QUFBQTtBQUVNLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDN0IsTUFBSUMsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLFlBQVgsTUFBNkJDLFNBQTdCLElBQTBDRixnREFBTSxDQUFDQyxHQUFQLENBQVcsWUFBWCxNQUE2QkMsU0FBdkUsSUFBb0ZG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Q0QsTUFBR3JCLGVBQWUsQ0FBQyxZQUFELENBQWYsQ0FBOEJnQixNQUE5QixHQUFxQyxDQUFyQyxJQUEwQ2hCLGVBQWUsQ0FBQyxTQUFELENBQWYsQ0FBMkJnQixNQUEzQixHQUFrQyxDQUEvRSxFQUFtRjtBQUNqRixRQUFHaEIsZUFBZSxDQUFDLFlBQUQsQ0FBZixLQUFrQyxRQUFyQyxFQUErQztBQUM3Q1UsZUFBUztBQUNUUSxrQkFBWSxDQUFDQyxLQUFiO0FBQ0FSLHNEQUFNLENBQUNTLEdBQVAsQ0FBVyxZQUFYLEVBQXlCcEIsZUFBZSxDQUFDLFlBQUQsQ0FBeEMsRUFBd0Q7QUFBQ3FCLGVBQU8sRUFBRTtBQUFWLE9BQXhEO0FBQ0FWLHNEQUFNLENBQUNTLEdBQVAsQ0FBVyxTQUFYLEVBQXNCcEIsZUFBZSxDQUFDLFNBQUQsQ0FBckMsRUFBa0Q7QUFBQ3FCLGVBQU8sRUFBRTtBQUFWLE9BQWxEO0FBQ0Q7QUFDRjs7QUFDRCxNQUFJckIsZUFBZSxDQUFDLFlBQUQsQ0FBZixDQUE4QmdCLE1BQTlCLEdBQXVDLENBQTNDLEVBQThDO0FBQzVDLFFBQUloQixlQUFlLENBQUMsWUFBRCxDQUFmLENBQThCaUIsUUFBOUIsQ0FBdUMsS0FBdkMsQ0FBSixFQUFtRDtBQUNqREMsa0JBQVksQ0FBQ0MsS0FBYjtBQUNBVCxlQUFTO0FBQ1RDLHNEQUFNLENBQUNTLEdBQVAsQ0FBVyxZQUFYLEVBQXlCcEIsZUFBZSxDQUFDLFlBQUQsQ0FBeEMsRUFBd0Q7QUFBQ3FCLGVBQU8sRUFBRTtBQUFWLE9BQXhEO0FBQ0Q7QUFDRixHQU5ELE1BTU8sQ0FBRTtBQUNWLENBdkRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxNjAzMGMwOWU1M2JkYjliMDgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5mdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXIobmFtZSkge1xyXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtdLywgJ1xcXFxbJykucmVwbGFjZSgvW1xcXV0vLCAnXFxcXF0nKTtcclxuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXD8mXScgKyBuYW1lICsgJz0oW14mI10qKScpO1xyXG4gIHZhciByZXN1bHRzID0gcmVnZXguZXhlYyhsb2NhdGlvbi5zZWFyY2gpO1xyXG4gIHJldHVybiByZXN1bHRzID09PSBudWxsID8gJycgOiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3Q29va2llID0gKCkgPT4ge1xyXG4gIGlmIChjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCAmJiBjb29raWUuZ2V0KCd1dG1fbWVkaXVtJykgIT09IHVuZGVmaW5lZCAmJiBjb29raWUuZ2V0KCd1dG1fY2FtcGFpZ24nKSAhPT0gdW5kZWZpbmVkICYmIGNvb2tpZS5nZXQoJ3V0bV90ZXJtJykgIT09IHVuZGVmaW5lZCAmJiBjb29raWUuZ2V0KCdjbGlja2lkJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29va2llLnJlbW92ZSgndXRtX21lZGl1bScpXHJcbiAgICBjb29raWUucmVtb3ZlKCd1dG1fY2FtcGFpZ24nKVxyXG4gICAgY29va2llLnJlbW92ZSgndXRtX3NvdXJjZScpXHJcbiAgICBjb29raWUucmVtb3ZlKCd1dG1fdGVybScpXHJcbiAgICBjb29raWUucmVtb3ZlKCdjbGlja2lkJylcclxuICB9IGVsc2UgaWYgKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkICYmIGNvb2tpZS5nZXQoJ2FmY2xpY2snKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb29raWUucmVtb3ZlKCd1dG1fc291cmNlJylcclxuICAgIGNvb2tpZS5yZW1vdmUoJ2FmY2xpY2snKVxyXG4gIH1lbHNlIGlmKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSE9PSB1bmRlZmluZWQgJiYgY29va2llLmdldCgnY2xpY2tpZCcpIT09IHVuZGVmaW5lZCAmJiBjb29raWUuZ2V0KCd3bWlkJykhPT0gdW5kZWZpbmVkKXtcclxuICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9zb3VyY2UnKVxyXG4gICAgY29va2llLnJlbW92ZSgnY2xpY2tpZCcpXHJcbiAgICBjb29raWUucmVtb3ZlKCd3bWlkJylcclxuICB9IGVsc2UgaWYgKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb29raWUucmVtb3ZlKCd1dG1fc291cmNlJylcclxuICB9IGVsc2Uge1xyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29udHJvbFV0bSA9ICgpID0+IHtcclxuICBpZiAoZ2V0VXJsUGFyYW1ldGVyKCd1dG1fc291cmNlJykubGVuZ3RoID4gMCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9tZWRpdW0nKS5sZW5ndGggPiAwICYmIGdldFVybFBhcmFtZXRlcigndXRtX2NhbXBhaWduJykubGVuZ3RoID4gMCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV90ZXJtJykubGVuZ3RoID4gMCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ2NsaWNraWQnKS5sZW5ndGggPiAwKSB7XHJcbiAgICBuZXdDb29raWUoKVxyXG4gICAgaWYgKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLmluY2x1ZGVzKCdxYXonKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgY29va2llLnNldCgndXRtX3NvdXJjZScsICdxYXonLCB7ZXhwaXJlczogMX0pXHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9tZWRpdW0nLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9tZWRpdW0nKSwge2V4cGlyZXM6IDF9KVxyXG4gICAgICBjb29raWUuc2V0KCd1dG1fY2FtcGFpZ24nLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9jYW1wYWlnbicpLCB7ZXhwaXJlczogMX0pXHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV90ZXJtJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fdGVybScpLCB7ZXhwaXJlczogMX0pXHJcbiAgICAgIGNvb2tpZS5zZXQoJ2NsaWNraWQnLCBnZXRVcmxQYXJhbWV0ZXIoJ2NsaWNraWQnKSwge2V4cGlyZXM6IDF9KVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZ2V0VXJsUGFyYW1ldGVyKCd1dG1fc291cmNlJykubGVuZ3RoID4gMCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ2FmY2xpY2snKS5sZW5ndGggPiAwKSB7XHJcbiAgICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKSA9PT0gJ2xvYW5nYXRlJykge1xyXG4gICAgICBuZXdDb29raWUoKVxyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgY29va2llLnNldCgndXRtX3NvdXJjZScsIGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgICBjb29raWUuc2V0KCdhZmNsaWNrJywgZ2V0VXJsUGFyYW1ldGVyKCdhZmNsaWNrJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcignY3BhX2NsaWNrX2lkJykubGVuZ3RoPjAgJiYgZ2V0VXJsUGFyYW1ldGVyKCdjcGFfd21faWQnKS5sZW5ndGg+MCkge1xyXG4gICAgaWYoZ2V0VXJsUGFyYW1ldGVyKCd1dG1fc291cmNlJykgPT09ICdsZWFkZ2lkJykge1xyXG4gICAgICBuZXdDb29raWUoKVxyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgY29va2llLnNldCgndXRtX3NvdXJjZScsIGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgICBjb29raWUuc2V0KCdjbGlja2lkJywgZ2V0VXJsUGFyYW1ldGVyKCdjcGFfY2xpY2tfaWQnKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgnd21pZCcsIGdldFVybFBhcmFtZXRlcignY3BhX3dtX2lkJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcigndicpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcigndXRtX21lZGl1bScpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcigndXRtX2NhbXBhaWduJykubGVuZ3RoPjAgJiYgZ2V0VXJsUGFyYW1ldGVyKCd3ZWJfaWQnKS5sZW5ndGg+MCkge1xyXG4gICAgaWYoZ2V0VXJsUGFyYW1ldGVyKCd1dG1fc291cmNlJykgPT09ICdkb2FmZicpIHtcclxuICAgICAgbmV3Q29va2llKClcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9zb3VyY2UnLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgndXRtX21lZGl1bScsIGdldFVybFBhcmFtZXRlcigndXRtX21lZGl1bScpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgICBjb29raWUuc2V0KCd1dG1fY2FtcGFpZ24nLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9jYW1wYWlnbicpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgICBjb29raWUuc2V0KCd1dG1fdGVybScsIGdldFVybFBhcmFtZXRlcignd2ViX2lkJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICAgIGNvb2tpZS5zZXQoJ2NsaWNraWQnLCBnZXRVcmxQYXJhbWV0ZXIoJ3YnKSwge2V4cGlyZXM6IDMwfSlcclxuICAgIH1cclxuICB9XHJcbiAgaWYoZ2V0VXJsUGFyYW1ldGVyKCd1dG1fc291cmNlJykubGVuZ3RoPjAgJiYgZ2V0VXJsUGFyYW1ldGVyKCdjbGlja2lkJykubGVuZ3RoPjAgKSB7XHJcbiAgICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKSA9PT0gJ3Vwc2FsYScpIHtcclxuICAgICAgbmV3Q29va2llKClcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9zb3VyY2UnLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgnY2xpY2tpZCcsIGdldFVybFBhcmFtZXRlcignY2xpY2tpZCcpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZ2V0VXJsUGFyYW1ldGVyKCd1dG1fc291cmNlJykubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLmluY2x1ZGVzKCdzbXMnKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgbmV3Q29va2llKClcclxuICAgICAgY29va2llLnNldCgndXRtX3NvdXJjZScsIGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLCB7ZXhwaXJlczogMX0pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHt9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==