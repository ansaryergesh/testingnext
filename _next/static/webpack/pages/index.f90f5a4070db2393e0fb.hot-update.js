webpackHotUpdate_N_E("pages/index",{

/***/ "./store/actions/ActionCreators.js":
/*!*****************************************!*\
  !*** ./store/actions/ActionCreators.js ***!
  \*****************************************/
/*! exports provided: changingMoney, changingDay, SUCCESS_RESPONSE, FAILED_RESPONSE, successMessage, errorMessage, emptyMessage, addRegistration, stepRegistration, isLoading, postRegistration, postRegistrationCode, postRegistrationSecond, dateLoading, dateFailed, regionsSucces, addLink, postRegistrationThird, fetchRegions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changingMoney", function() { return changingMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changingDay", function() { return changingDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_RESPONSE", function() { return SUCCESS_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILED_RESPONSE", function() { return FAILED_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successMessage", function() { return successMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyMessage", function() { return emptyMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRegistration", function() { return addRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepRegistration", function() { return stepRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRegistration", function() { return postRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRegistrationCode", function() { return postRegistrationCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRegistrationSecond", function() { return postRegistrationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateLoading", function() { return dateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFailed", function() { return dateFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionsSucces", function() { return regionsSucces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLink", function() { return addLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRegistrationThird", function() { return postRegistrationThird; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRegions", function() { return fetchRegions; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_utmSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/utmSource */ "./defaults/utmSource.js");




var changingMoney = function changingMoney(money) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["MONEY_CHANGE"],
    payload: money
  };
};

function replaceDate(val) {
  return String(val).replace(/[^A-Z0-9]/g, '');
}

var changingDay = function changingDay(day) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DAY_CHANGE"],
    payload: day
  };
};
var SUCCESS_RESPONSE = function SUCCESS_RESPONSE(result) {
  return {
    type: "SUCCESS_RESPONSE",
    payload: result
  };
};
_c = SUCCESS_RESPONSE;
var FAILED_RESPONSE = function FAILED_RESPONSE(result) {
  return {
    type: "FAILED_RESPONSE",
    payload: result
  };
};
_c2 = FAILED_RESPONSE;
var successMessage = function successMessage(message) {
  return {
    type: 'SUCCESS_MESSAGE',
    payload: message
  };
};
var errorMessage = function errorMessage(message) {
  return {
    type: 'ERROR_MESSAGE',
    payload: message
  };
};
var emptyMessage = function emptyMessage() {
  return {
    type: 'EMPTY_MESSAGE'
  };
};
var addRegistration = function addRegistration(registrations) {
  return {
    type: 'ADD_REGISTRATION',
    payload: registrations
  };
};
var stepRegistration = function stepRegistration(step) {
  return {
    type: 'STEP_REGISTRATION',
    payload: step
  };
};
var isLoading = function isLoading(loader) {
  return {
    type: 'IS_LOADING',
    payload: loader
  };
};
var postRegistration = function postRegistration(registration) {
  return function (dispatch) {
    dispatch(emptyMessage());
    dispatch(isLoading(true));
    registration.phone = replaceDate(registration.phone);
    registration.last_name = registration.last_name || "Нет";

    if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('utm_source').includes('smsrisk')) {
      registration.risk = 'smsrisk';
    }

    return fetch("https://api.money-men.kz/api/registration_step_one", {
      method: 'POST',
      body: JSON.stringify(registration),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      throw response;
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      return dispatch(addRegistration(registration));
    }).then(function (response) {
      return dispatch(isLoading(false));
    }).then(function (response) {
      return dispatch(stepRegistration(1));
    }).then(function (response) {
      localStorage.setItem("step", 1);
    }).then(function (response) {
      return window.scrollTo(0, 0);
    }).then(function (response) {
      return dispatch(successMessage(''));
    })["catch"](function (r) {
      return r.json().then(function (e) {
        dispatch(errorMessage(e.errors.iin ? "ИНН уже зарегистрирован. Вы будете перенаправлены на страницу авторизация! " :  false || e.errors.password ? "Пароли не совпадают" :  false || e.errors.phone ? "Польвозатель с таким телефон номером уже зарегистрирован" : e.errors.email || "" || e.errors));
        setTimeout(function () {
          checkIIN(e.errors);
        }, 3000);
      });
    }).then(function () {
      return dispatch(isLoading(false));
    });
  };
};

function checkIIN(val) {
  if (val && val.iin) {
    document.location.replace("https://www.i-credit.kz/login");
  } else {
    console.log("not working");
  }
}

var postRegistrationCode = function postRegistrationCode(registration) {
  return function (dispatch) {
    dispatch(emptyMessage());
    dispatch(isLoading(true));
    registration.source = 'i-credit1';

    if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('utm_source') !== undefined) {
      registration.source = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('utm_source') + '_1';
    }

    return fetch("https://api.money-men.kz/api/check_sms_code", {
      method: 'POST',
      body: JSON.stringify(registration),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      throw response;
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      localStorage.setItem("token", response.access_token);
    }).then(function (response) {
      return dispatch(addRegistration(''));
    }).then(function (response) {
      return dispatch(stepRegistration(2));
    }).then(function () {
      return dispatch(emptyMessage());
    }).then(function (response) {
      localStorage.setItem("step", 2);
    }).then(function (response) {
      return window.scrollTo(0, 0);
    }).then(function (response) {
      return dispatch(isLoading(false));
    })["catch"](function (r) {
      return r.json().then(function (e) {
        return dispatch(errorMessage("Отправленный вами код не существует"));
      });
    }).then(function () {
      return dispatch(isLoading(false));
    });
  };
};
var postRegistrationSecond = function postRegistrationSecond(registration) {
  return function (dispatch) {
    dispatch(isLoading(true));
    registration.relative_phone_number = replaceDate(registration.relative_phone_number);
    registration.additional_contact_phone = replaceDate(registration.additional_contact_phone);
    return fetch("https://api.money-men.kz/api/registration_step_two", {
      method: 'POST',
      body: JSON.stringify(registration),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: "Bearer ".concat(localStorage.getItem('token'))
      },
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      throw response;
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      return dispatch(isLoading(false));
    }).then(function (response) {
      return dispatch(stepRegistration(3));
    }).then(function () {
      return dispatch(emptyMessage());
    }).then(function (response) {
      localStorage.setItem("step", 3);
    }).then(function (response) {
      return window.scrollTo(0, 0);
    })["catch"](function (r) {
      return r.json().then(function (e) {
        return dispatch(errorMessage(e.errors.relative_name || e.errors.relative_last_name || e.errors.relative_phone_number || e.errors.apartment || e.message));
      });
    }).then(function () {
      return dispatch(isLoading(false));
    });
  };
};
var dateLoading = function dateLoading() {
  return {
    type: "DATE_LOADING"
  };
};
var dateFailed = function dateFailed(errmess) {
  return {
    type: 'DATE_FAILED',
    payload: errmess
  };
};
var regionsSucces = function regionsSucces(region) {
  return {
    type: 'REGION_SUCCESS',
    payload: region
  };
};
var addLink = function addLink(link) {
  return {
    type: "ADD_LINK",
    payload: link
  };
};
var postRegistrationThird = function postRegistrationThird(registration) {
  return function (dispatch) {
    dispatch(isLoading(true));
    registration.card_number = replaceDate(registration.card_number);
    return fetch("https://api.money-men.kz/api/last_step", {
      method: 'POST',
      body: JSON.stringify(registration),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: "Bearer ".concat(localStorage.getItem('token'))
      },
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      throw response;
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      return dispatch(successMessage('Успешно'));
    }).then(function (response) {
      return setTimeout(function () {
        dispatch(stepRegistration(0));
      }, 6000);
    }).then(function (response) {
      return dispatch(isLoading(false));
    }).then(function (response) {
      return setTimeout(function () {
        localStorage.clear();
      }, 5000);
    }).then(function (response) {
      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/thanks');
    }).then(function (response) {
      return Object(_defaults_utmSource__WEBPACK_IMPORTED_MODULE_3__["newCookie"])();
    })["catch"](function (r) {
      return r.json().then(function (e) {
        return dispatch(errorMessage(e.errors.id_card_number ? "Номер удостворение личности уже зарегистрирован" :  false || e.errors.iban_account || e.errors.card_number || e.errors || null));
      });
    }).then(function () {
      return dispatch(isLoading(false));
    });
  };
};

function testingAction(history) {
  localStorage.setItem('step', 'final');
  setTimeout(function () {
    localStorage.clear();
  }, 5000);
  history.push('/thanks');
}

var fetchRegions = function fetchRegions(region_id) {
  return function (dispatch) {
    dispatch(dateLoading(true));
    return fetch("https://api.money-men.kz/api/city/".concat(region_id), {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
      error.response = response;
      throw error;
    }, function (error) {
      var errmess = new Error(error.message);
      throw errmess;
    }).then(function (response) {
      return response.json();
    }).then(function (regions) {
      return dispatch(regionsSucces(regions));
    })["catch"](function (error) {
      return dispatch(dateFailed(error.message));
    });
  };
};

var _c, _c2;

$RefreshReg$(_c, "SUCCESS_RESPONSE");
$RefreshReg$(_c2, "FAILED_RESPONSE");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwicmVwbGFjZURhdGUiLCJ2YWwiLCJTdHJpbmciLCJyZXBsYWNlIiwiY2hhbmdpbmdEYXkiLCJkYXkiLCJTVUNDRVNTX1JFU1BPTlNFIiwicmVzdWx0IiwiRkFJTEVEX1JFU1BPTlNFIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiYWRkUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9ucyIsInN0ZXBSZWdpc3RyYXRpb24iLCJzdGVwIiwiaXNMb2FkaW5nIiwibG9hZGVyIiwicG9zdFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsImRpc3BhdGNoIiwicGhvbmUiLCJsYXN0X25hbWUiLCJjb29raWUiLCJnZXQiLCJpbmNsdWRlcyIsInJpc2siLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIndpbmRvdyIsInNjcm9sbFRvIiwiciIsImUiLCJlcnJvcnMiLCJpaW4iLCJwYXNzd29yZCIsImVtYWlsIiwic2V0VGltZW91dCIsImNoZWNrSUlOIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwb3N0UmVnaXN0cmF0aW9uQ29kZSIsInNvdXJjZSIsInVuZGVmaW5lZCIsImFjY2Vzc190b2tlbiIsInBvc3RSZWdpc3RyYXRpb25TZWNvbmQiLCJyZWxhdGl2ZV9waG9uZV9udW1iZXIiLCJhZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUiLCJBdXRob3JpemF0aW9uIiwiZ2V0SXRlbSIsInJlbGF0aXZlX25hbWUiLCJyZWxhdGl2ZV9sYXN0X25hbWUiLCJhcGFydG1lbnQiLCJkYXRlTG9hZGluZyIsImRhdGVGYWlsZWQiLCJlcnJtZXNzIiwicmVnaW9uc1N1Y2NlcyIsInJlZ2lvbiIsImFkZExpbmsiLCJsaW5rIiwicG9zdFJlZ2lzdHJhdGlvblRoaXJkIiwiY2FyZF9udW1iZXIiLCJjbGVhciIsIlJvdXRlciIsInB1c2giLCJuZXdDb29raWUiLCJpZF9jYXJkX251bWJlciIsImliYW5fYWNjb3VudCIsInRlc3RpbmdBY3Rpb24iLCJoaXN0b3J5IiwiZmV0Y2hSZWdpb25zIiwicmVnaW9uX2lkIiwiQWNjZXB0IiwiZXJyb3IiLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJyZWdpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFQyxtREFENkI7QUFFbkNDLFdBQU8sRUFBRUg7QUFGMEIsR0FBTDtBQUFBLENBQTNCOztBQUtQLFNBQVNJLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9DLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBUDtBQUNIOztBQUNNLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxTQUFLO0FBQy9CUixRQUFJLEVBQUVDLGlEQUR5QjtBQUUvQkMsV0FBTyxFQUFFTTtBQUZzQixHQUFMO0FBQUEsQ0FBdkI7QUFNQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFD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QUFVRCxLQUFLLENBQUM3RSxPQUFoQixDQUFoQjtBQUNBLFlBQU0yRCxPQUFOO0FBQ0QsS0FsQkksRUFtQkpsQyxJQW5CSSxDQW1CQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDRSxJQUFULEVBQUo7QUFBQSxLQW5CVCxFQW9CSkgsSUFwQkksQ0FvQkMsVUFBQXdELE9BQU87QUFBQSxhQUFJdEUsUUFBUSxDQUFDaUQsYUFBYSxDQUFDcUIsT0FBRCxDQUFkLENBQVo7QUFBQSxLQXBCUixXQXFCRSxVQUFBSixLQUFLO0FBQUEsYUFBSWxFLFFBQVEsQ0FBQytDLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQzdFLE9BQVAsQ0FBWCxDQUFaO0FBQUEsS0FyQlAsQ0FBUDtBQXNCRCxHQXhCeUI7QUFBQSxDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mOTBmNWE0MDcwZGIyMzkzZTBmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHtuZXdDb29raWV9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3V0bVNvdXJjZSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdpbmdNb25leSA9IG1vbmV5ID0+ICh7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5NT05FWV9DSEFOR0UsXHJcbiAgICBwYXlsb2FkOiBtb25leSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlRGF0ZSh2YWwpIHtcclxuICAgIHJldHVybiBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5naW5nRGF5ID0gZGF5ID0+ICh7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5EQVlfQ0hBTkdFLFxyXG4gICAgcGF5bG9hZDogZGF5LFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU1VDQ0VTU19SRVNQT05TRSA9IHJlc3VsdCA9PiAoe1xyXG4gICAgdHlwZTogXCJTVUNDRVNTX1JFU1BPTlNFXCIsXHJcbiAgICBwYXlsb2FkOiByZXN1bHRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRkFJTEVEX1JFU1BPTlNFID0gcmVzdWx0ID0+ICh7XHJcbiAgICB0eXBlOiBcIkZBSUxFRF9SRVNQT05TRVwiLFxyXG4gICAgcGF5bG9hZDogcmVzdWx0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gbWVzc2FnZSA9PiAoe1xyXG4gICAgdHlwZTogJ1NVQ0NFU1NfTUVTU0FHRScsXHJcbiAgICBwYXlsb2FkOiBtZXNzYWdlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvck1lc3NhZ2UgPSBtZXNzYWdlID0+ICh7XHJcbiAgICB0eXBlOiAnRVJST1JfTUVTU0FHRScsXHJcbiAgICBwYXlsb2FkOiBtZXNzYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGVtcHR5TWVzc2FnZSA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiAnRU1QVFlfTUVTU0FHRScsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbnMgPT4gKHtcclxuICAgIHR5cGU6ICdBRERfUkVHSVNUUkFUSU9OJyxcclxuICAgIHBheWxvYWQ6IHJlZ2lzdHJhdGlvbnMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0ZXBSZWdpc3RyYXRpb24gPSBzdGVwID0+ICh7XHJcbiAgICB0eXBlOiAnU1RFUF9SRUdJU1RSQVRJT04nLFxyXG4gICAgcGF5bG9hZDogc3RlcCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaXNMb2FkaW5nID0gbG9hZGVyID0+ICh7XHJcbiAgICB0eXBlOiAnSVNfTE9BRElORycsXHJcbiAgICBwYXlsb2FkOiBsb2FkZXIsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVnaXN0cmF0aW9uID0gKHJlZ2lzdHJhdGlvbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSk7XHJcbiAgICBkaXNwYXRjaChpc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgcmVnaXN0cmF0aW9uLnBob25lID0gcmVwbGFjZURhdGUocmVnaXN0cmF0aW9uLnBob25lKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5sYXN0X25hbWUgPSByZWdpc3RyYXRpb24ubGFzdF9uYW1lIHx8IFwi0J3QtdGCXCJcclxuICAgIGlmKCBjb29raWUuZ2V0KCd1dG1fc291cmNlJykuaW5jbHVkZXMoJ3Ntc3Jpc2snKSkge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvbi5yaXNrID0gJ3Ntc3Jpc2snXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVnaXN0cmF0aW9uX3N0ZXBfb25lYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goYWRkUmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbikpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMSkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RlcFwiLCAxKX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB3aW5kb3cuc2Nyb2xsVG8oMCwwKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdWNjZXNzTWVzc2FnZSgnJykpKVxyXG4gICAgICAgIC5jYXRjaChyPT5yLmpzb24oKS50aGVuKGU9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGVycm9yTWVzc2FnZShlLmVycm9ycy5paW4gPyBcItCY0J3QnSDRg9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9LiDQktGLINCx0YPQtNC10YLQtSDQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdGLINC90LAg0YHRgtGA0LDQvdC40YbRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNGPISBcIjogXCJcIiB8fCBlLmVycm9ycy5wYXNzd29yZCA/IFwi0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCXCI6IFwiXCIgfHwgZS5lcnJvcnMucGhvbmUgPyBcItCf0L7Qu9GM0LLQvtC30LDRgtC10LvRjCDRgSDRgtCw0LrQuNC8INGC0LXQu9C10YTQvtC9INC90L7QvNC10YDQvtC8INGD0LbQtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L1cIiA6IGUuZXJyb3JzLmVtYWlsIHx8IFwiXCIgfHwgICBlLmVycm9ycyApKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGVja0lJTihlLmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIH0pKS50aGVuKCgpPT5kaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJSU4odmFsKSB7XHJcbiAgICBpZih2YWwgJiYgdmFsLmlpbikge1xyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlcGxhY2UoXCJodHRwczovL3d3dy5pLWNyZWRpdC5rei9sb2dpblwiKVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90IHdvcmtpbmdcIilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RSZWdpc3RyYXRpb25Db2RlID0gKHJlZ2lzdHJhdGlvbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSk7XHJcbiAgICBkaXNwYXRjaChpc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgcmVnaXN0cmF0aW9uLnNvdXJjZSA9J2ktY3JlZGl0MSc7XHJcbiAgICBpZihjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvbi5zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJykgKydfMSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2NoZWNrX3Ntc19jb2RlYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuYWNjZXNzX3Rva2VuKX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goYWRkUmVnaXN0cmF0aW9uKCcnKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3RlcFJlZ2lzdHJhdGlvbigyKSkpLnRoZW4oKCkgPT4gZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RlcFwiLCAyKX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB3aW5kb3cuc2Nyb2xsVG8oMCwwKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAuY2F0Y2gociA9PiByLmpzb24oKS50aGVuKGUgPT4gZGlzcGF0Y2goZXJyb3JNZXNzYWdlKFwi0J7RgtC/0YDQsNCy0LvQtdC90L3Ri9C5INCy0LDQvNC4INC60L7QtCDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCXCIpKSkpLnRoZW4oKCkgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVnaXN0cmF0aW9uU2Vjb25kID0gKHJlZ2lzdHJhdGlvbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChpc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgcmVnaXN0cmF0aW9uLnJlbGF0aXZlX3Bob25lX251bWJlciA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5yZWxhdGl2ZV9waG9uZV9udW1iZXIpO1xyXG4gICAgcmVnaXN0cmF0aW9uLmFkZGl0aW9uYWxfY29udGFjdF9waG9uZSA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5hZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUpO1xyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3JlZ2lzdHJhdGlvbl9zdGVwX3R3b2Ase1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbiksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMykpKS50aGVuKCgpID0+IGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0ZXBcIiwgMyl9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpXHJcbiAgICAgICAgLmNhdGNoKHIgPT4gci5qc29uKCkudGhlbihlID0+IGRpc3BhdGNoKGVycm9yTWVzc2FnZShlLmVycm9ycy5yZWxhdGl2ZV9uYW1lIHx8IGUuZXJyb3JzLnJlbGF0aXZlX2xhc3RfbmFtZSB8fCBlLmVycm9ycy5yZWxhdGl2ZV9waG9uZV9udW1iZXIgfHwgZS5lcnJvcnMuYXBhcnRtZW50IHx8ZS5tZXNzYWdlKSkpKS50aGVuKCgpID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkYXRlTG9hZGluZyA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBcIkRBVEVfTE9BRElOR1wiXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBkYXRlRmFpbGVkID0gZXJybWVzcyA9PiAoe1xyXG4gICAgdHlwZTogJ0RBVEVfRkFJTEVEJyxcclxuICAgIHBheWxvYWQ6IGVycm1lc3MsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lvbnNTdWNjZXMgPSByZWdpb24gPT4gKHtcclxuICAgIHR5cGU6ICdSRUdJT05fU1VDQ0VTUycsXHJcbiAgICBwYXlsb2FkOiByZWdpb24sXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRMaW5rID0gbGluayA9PiAoe1xyXG4gICAgdHlwZTogXCJBRERfTElOS1wiLFxyXG4gICAgcGF5bG9hZDpsaW5rXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvblRoaXJkID0gKHJlZ2lzdHJhdGlvbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChpc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgcmVnaXN0cmF0aW9uLmNhcmRfbnVtYmVyID0gcmVwbGFjZURhdGUocmVnaXN0cmF0aW9uLmNhcmRfbnVtYmVyKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9sYXN0X3N0ZXBgLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb24pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6JyonLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdWNjZXNzTWVzc2FnZSgn0KPRgdC/0LXRiNC90L4nKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2V0VGltZW91dCgoKSA9PiB7ZGlzcGF0Y2goc3RlcFJlZ2lzdHJhdGlvbigwKSl9LDYwMDApIClcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gc2V0VGltZW91dCgoKSA9PiB7bG9jYWxTdG9yYWdlLmNsZWFyKCl9LDUwMDApKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IFJvdXRlci5wdXNoKCcvdGhhbmtzJykpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiBuZXdDb29raWUoKSlcclxuICAgICAgICAuY2F0Y2gociA9PiByLmpzb24oKS50aGVuKGUgPT4gIGRpc3BhdGNoKGVycm9yTWVzc2FnZShlLmVycm9ycy5pZF9jYXJkX251bWJlciA/IFwi0J3QvtC80LXRgCDRg9C00L7RgdGC0LLQvtGA0LXQvdC40LUg0LvQuNGH0L3QvtGB0YLQuCDRg9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9XCIgOiBcIlwiIHx8IGUuZXJyb3JzLmliYW5fYWNjb3VudCB8fCBlLmVycm9ycy5jYXJkX251bWJlciB8fCBlLmVycm9ycyB8fCAgbnVsbCkpKSkudGhlbigoKSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdGluZ0FjdGlvbihoaXN0b3J5KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RlcCcsICdmaW5hbCcpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtsb2NhbFN0b3JhZ2UuY2xlYXIoKX0sNTAwMClcclxuICAgIGhpc3RvcnkucHVzaCgnL3RoYW5rcycpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFJlZ2lvbnMgPSAocmVnaW9uX2lkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaChkYXRlTG9hZGluZyh0cnVlKSk7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvY2l0eS8ke3JlZ2lvbl9pZH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zdCBlcnJtZXNzID0gbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRocm93IGVycm1lc3M7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVnaW9ucyA9PiBkaXNwYXRjaChyZWdpb25zU3VjY2VzKHJlZ2lvbnMpKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGRpc3BhdGNoKGRhdGVGYWlsZWQoZXJyb3IubWVzc2FnZSkpKTtcclxuICB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9