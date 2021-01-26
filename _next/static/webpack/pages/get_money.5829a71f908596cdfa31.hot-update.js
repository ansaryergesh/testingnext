webpackHotUpdate_N_E("pages/get_money",{

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
    console.log(registration);
    dispatch(emptyMessage());
    dispatch(isLoading(true));
    registration.phone = replaceDate(registration.phone);
    registration.last_name = registration.last_name || "Нет";
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
    }) // .then(console.log(response))
    .then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwicmVwbGFjZURhdGUiLCJ2YWwiLCJTdHJpbmciLCJyZXBsYWNlIiwiY2hhbmdpbmdEYXkiLCJkYXkiLCJTVUNDRVNTX1JFU1BPTlNFIiwicmVzdWx0IiwiRkFJTEVEX1JFU1BPTlNFIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiYWRkUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9ucyIsInN0ZXBSZWdpc3RyYXRpb24iLCJzdGVwIiwiaXNMb2FkaW5nIiwibG9hZGVyIiwicG9zdFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInBob25lIiwibGFzdF9uYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInIiLCJlIiwiZXJyb3JzIiwiaWluIiwicGFzc3dvcmQiLCJlbWFpbCIsInNldFRpbWVvdXQiLCJjaGVja0lJTiIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwb3N0UmVnaXN0cmF0aW9uQ29kZSIsInNvdXJjZSIsImNvb2tpZSIsImdldCIsInVuZGVmaW5lZCIsImFjY2Vzc190b2tlbiIsInBvc3RSZWdpc3RyYXRpb25TZWNvbmQiLCJyZWxhdGl2ZV9waG9uZV9udW1iZXIiLCJhZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUiLCJBdXRob3JpemF0aW9uIiwiZ2V0SXRlbSIsInJlbGF0aXZlX25hbWUiLCJyZWxhdGl2ZV9sYXN0X25hbWUiLCJhcGFydG1lbnQiLCJkYXRlTG9hZGluZyIsImRhdGVGYWlsZWQiLCJlcnJtZXNzIiwicmVnaW9uc1N1Y2NlcyIsInJlZ2lvbiIsImFkZExpbmsiLCJsaW5rIiwicG9zdFJlZ2lzdHJhdGlvblRoaXJkIiwiY2FyZF9udW1iZXIiLCJjbGVhciIsIlJvdXRlciIsInB1c2giLCJuZXdDb29raWUiLCJpZF9jYXJkX251bWJlciIsImliYW5fYWNjb3VudCIsInRlc3RpbmdBY3Rpb24iLCJoaXN0b3J5IiwiZmV0Y2hSZWdpb25zIiwicmVnaW9uX2lkIiwiQWNjZXB0IiwiZXJyb3IiLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJyZWdpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFQyxtREFENkI7QUFFbkNDLFdBQU8sRUFBRUg7QUFGMEIsR0FBTDtBQUFBLENBQTNCOztBQUtQLFNBQVNJLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9DLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBUDtBQUNIOztBQUNNLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxTQUFLO0FBQy9CUixRQUFJLEVBQUVDLGlEQUR5QjtBQUUvQkMsV0FBTyxFQUFFTTtBQUZzQixHQUFMO0FBQUEsQ0FBdkI7QUFNQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLE1BQU07QUFBQSxTQUFLO0FB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QSxhQUFJQSxRQUFRLENBQUNFLElBQVQsRUFBSjtBQUFBLEtBbkJULEVBb0JKSCxJQXBCSSxDQW9CQyxVQUFBd0QsT0FBTztBQUFBLGFBQUlwRSxRQUFRLENBQUMrQyxhQUFhLENBQUNxQixPQUFELENBQWQsQ0FBWjtBQUFBLEtBcEJSLFdBcUJFLFVBQUFKLEtBQUs7QUFBQSxhQUFJaEUsUUFBUSxDQUFDNkMsVUFBVSxDQUFDbUIsS0FBSyxDQUFDM0UsT0FBUCxDQUFYLENBQVo7QUFBQSxLQXJCUCxDQUFQO0FBc0JELEdBeEJ5QjtBQUFBLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldF9tb25leS41ODI5YTcxZjkwODU5NmNkZmEzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHtuZXdDb29raWV9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3V0bVNvdXJjZSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdpbmdNb25leSA9IG1vbmV5ID0+ICh7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5NT05FWV9DSEFOR0UsXHJcbiAgICBwYXlsb2FkOiBtb25leSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlRGF0ZSh2YWwpIHtcclxuICAgIHJldHVybiBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5naW5nRGF5ID0gZGF5ID0+ICh7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5EQVlfQ0hBTkdFLFxyXG4gICAgcGF5bG9hZDogZGF5LFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU1VDQ0VTU19SRVNQT05TRSA9IHJlc3VsdCA9PiAoe1xyXG4gICAgdHlwZTogXCJTVUNDRVNTX1JFU1BPTlNFXCIsXHJcbiAgICBwYXlsb2FkOiByZXN1bHRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRkFJTEVEX1JFU1BPTlNFID0gcmVzdWx0ID0+ICh7XHJcbiAgICB0eXBlOiBcIkZBSUxFRF9SRVNQT05TRVwiLFxyXG4gICAgcGF5bG9hZDogcmVzdWx0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gbWVzc2FnZSA9PiAoe1xyXG4gICAgdHlwZTogJ1NVQ0NFU1NfTUVTU0FHRScsXHJcbiAgICBwYXlsb2FkOiBtZXNzYWdlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvck1lc3NhZ2UgPSBtZXNzYWdlID0+ICh7XHJcbiAgICB0eXBlOiAnRVJST1JfTUVTU0FHRScsXHJcbiAgICBwYXlsb2FkOiBtZXNzYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGVtcHR5TWVzc2FnZSA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiAnRU1QVFlfTUVTU0FHRScsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbnMgPT4gKHtcclxuICAgIHR5cGU6ICdBRERfUkVHSVNUUkFUSU9OJyxcclxuICAgIHBheWxvYWQ6IHJlZ2lzdHJhdGlvbnMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0ZXBSZWdpc3RyYXRpb24gPSBzdGVwID0+ICh7XHJcbiAgICB0eXBlOiAnU1RFUF9SRUdJU1RSQVRJT04nLFxyXG4gICAgcGF5bG9hZDogc3RlcCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaXNMb2FkaW5nID0gbG9hZGVyID0+ICh7XHJcbiAgICB0eXBlOiAnSVNfTE9BRElORycsXHJcbiAgICBwYXlsb2FkOiBsb2FkZXIsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVnaXN0cmF0aW9uID0gKHJlZ2lzdHJhdGlvbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZWdpc3RyYXRpb24pXHJcbiAgICBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSk7XHJcbiAgICBkaXNwYXRjaChpc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgcmVnaXN0cmF0aW9uLnBob25lID0gcmVwbGFjZURhdGUocmVnaXN0cmF0aW9uLnBob25lKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5sYXN0X25hbWUgPSByZWdpc3RyYXRpb24ubGFzdF9uYW1lIHx8IFwi0J3QtdGCXCJcclxuICAgIFxyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3JlZ2lzdHJhdGlvbl9zdGVwX29uZWAse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbiksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC8vIC50aGVuKGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChhZGRSZWdpc3RyYXRpb24ocmVnaXN0cmF0aW9uKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3RlcFJlZ2lzdHJhdGlvbigxKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGVwXCIsIDEpfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHdpbmRvdy5zY3JvbGxUbygwLDApKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN1Y2Nlc3NNZXNzYWdlKCcnKSkpXHJcbiAgICAgICAgLmNhdGNoKHI9PnIuanNvbigpLnRoZW4oZT0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZXJyb3JNZXNzYWdlKGUuZXJyb3JzLmlpbiA/IFwi0JjQndCdINGD0LbQtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0uINCS0Ysg0LHRg9C00LXRgtC1INC/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90Ysg0L3QsCDRgdGC0YDQsNC90LjRhtGDINCw0LLRgtC+0YDQuNC30LDRhtC40Y8hIFwiOiBcIlwiIHx8IGUuZXJyb3JzLnBhc3N3b3JkID8gXCLQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YJcIjogXCJcIiB8fCBlLmVycm9ycy5waG9uZSA/IFwi0J/QvtC70YzQstC+0LfQsNGC0LXQu9GMINGBINGC0LDQutC40Lwg0YLQtdC70LXRhNC+0L0g0L3QvtC80LXRgNC+0Lwg0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvVwiIDogZS5lcnJvcnMuZW1haWwgfHwgXCJcIiB8fCAgIGUuZXJyb3JzICkpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoZWNrSUlOKGUuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfSkpLnRoZW4oKCk9PmRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lJTih2YWwpIHtcclxuICAgIGlmKHZhbCAmJiB2YWwuaWluKSB7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZShcImh0dHBzOi8vd3d3LmktY3JlZGl0Lmt6L2xvZ2luXCIpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3Qgd29ya2luZ1wiKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvbkNvZGUgPSAocmVnaXN0cmF0aW9uKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKTtcclxuICAgIGRpc3BhdGNoKGlzTG9hZGluZyh0cnVlKSk7XHJcbiAgICByZWdpc3RyYXRpb24uc291cmNlID0naS1jcmVkaXQxJztcclxuICAgIGlmKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uLnNvdXJjZSA9IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSArJ18xJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvY2hlY2tfc21zX2NvZGVgLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb24pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6JyonLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5hY2Nlc3NfdG9rZW4pfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChhZGRSZWdpc3RyYXRpb24oJycpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDIpKSkudGhlbigoKSA9PiBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGVwXCIsIDIpfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHdpbmRvdy5zY3JvbGxUbygwLDApKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG4gICAgICAgIC5jYXRjaChyID0+IHIuanNvbigpLnRoZW4oZSA9PiBkaXNwYXRjaChlcnJvck1lc3NhZ2UoXCLQntGC0L/RgNCw0LLQu9C10L3QvdGL0Lkg0LLQsNC80Lgg0LrQvtC0INC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YJcIikpKSkudGhlbigoKSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RSZWdpc3RyYXRpb25TZWNvbmQgPSAocmVnaXN0cmF0aW9uKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGlzTG9hZGluZyh0cnVlKSk7XHJcbiAgICByZWdpc3RyYXRpb24ucmVsYXRpdmVfcGhvbmVfbnVtYmVyID0gcmVwbGFjZURhdGUocmVnaXN0cmF0aW9uLnJlbGF0aXZlX3Bob25lX251bWJlcik7XHJcbiAgICByZWdpc3RyYXRpb24uYWRkaXRpb25hbF9jb250YWN0X3Bob25lID0gcmVwbGFjZURhdGUocmVnaXN0cmF0aW9uLmFkZGl0aW9uYWxfY29udGFjdF9waG9uZSk7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVnaXN0cmF0aW9uX3N0ZXBfdHdvYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3RlcFJlZ2lzdHJhdGlvbigzKSkpLnRoZW4oKCkgPT4gZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RlcFwiLCAzKX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB3aW5kb3cuc2Nyb2xsVG8oMCwwKSlcclxuICAgICAgICAuY2F0Y2gociA9PiByLmpzb24oKS50aGVuKGUgPT4gZGlzcGF0Y2goZXJyb3JNZXNzYWdlKGUuZXJyb3JzLnJlbGF0aXZlX25hbWUgfHwgZS5lcnJvcnMucmVsYXRpdmVfbGFzdF9uYW1lIHx8IGUuZXJyb3JzLnJlbGF0aXZlX3Bob25lX251bWJlciB8fCBlLmVycm9ycy5hcGFydG1lbnQgfHxlLm1lc3NhZ2UpKSkpLnRoZW4oKCkgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGVMb2FkaW5nID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IFwiREFURV9MT0FESU5HXCJcclxufSlcclxuZXhwb3J0IGNvbnN0IGRhdGVGYWlsZWQgPSBlcnJtZXNzID0+ICh7XHJcbiAgICB0eXBlOiAnREFURV9GQUlMRUQnLFxyXG4gICAgcGF5bG9hZDogZXJybWVzcyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaW9uc1N1Y2NlcyA9IHJlZ2lvbiA9PiAoe1xyXG4gICAgdHlwZTogJ1JFR0lPTl9TVUNDRVNTJyxcclxuICAgIHBheWxvYWQ6IHJlZ2lvbixcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExpbmsgPSBsaW5rID0+ICh7XHJcbiAgICB0eXBlOiBcIkFERF9MSU5LXCIsXHJcbiAgICBwYXlsb2FkOmxpbmtcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVnaXN0cmF0aW9uVGhpcmQgPSAocmVnaXN0cmF0aW9uKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGlzTG9hZGluZyh0cnVlKSk7XHJcbiAgICByZWdpc3RyYXRpb24uY2FyZF9udW1iZXIgPSByZXBsYWNlRGF0ZShyZWdpc3RyYXRpb24uY2FyZF9udW1iZXIpO1xyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2xhc3Rfc3RlcGAse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbiksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN1Y2Nlc3NNZXNzYWdlKCfQo9GB0L/QtdGI0L3QvicpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBzZXRUaW1lb3V0KCgpID0+IHtkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDApKX0sNjAwMCkgKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiBzZXRUaW1lb3V0KCgpID0+IHtsb2NhbFN0b3JhZ2UuY2xlYXIoKX0sNTAwMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gUm91dGVyLnB1c2goJy90aGFua3MnKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IG5ld0Nvb2tpZSgpKVxyXG4gICAgICAgIC5jYXRjaChyID0+IHIuanNvbigpLnRoZW4oZSA9PiAgZGlzcGF0Y2goZXJyb3JNZXNzYWdlKGUuZXJyb3JzLmlkX2NhcmRfbnVtYmVyID8gXCLQndC+0LzQtdGAINGD0LTQvtGB0YLQstC+0YDQtdC90LjQtSDQu9C40YfQvdC+0YHRgtC4INGD0LbQtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L1cIiA6IFwiXCIgfHwgZS5lcnJvcnMuaWJhbl9hY2NvdW50IHx8IGUuZXJyb3JzLmNhcmRfbnVtYmVyIHx8IGUuZXJyb3JzIHx8ICBudWxsKSkpKS50aGVuKCgpID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0aW5nQWN0aW9uKGhpc3RvcnkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgJ2ZpbmFsJylcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge2xvY2FsU3RvcmFnZS5jbGVhcigpfSw1MDAwKVxyXG4gICAgaGlzdG9yeS5wdXNoKCcvdGhhbmtzJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUmVnaW9ucyA9IChyZWdpb25faWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKGRhdGVMb2FkaW5nKHRydWUpKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9jaXR5LyR7cmVnaW9uX2lkfWAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm1lc3MgPSBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgdGhyb3cgZXJybWVzcztcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihyZWdpb25zID0+IGRpc3BhdGNoKHJlZ2lvbnNTdWNjZXMocmVnaW9ucykpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZGlzcGF0Y2goZGF0ZUZhaWxlZChlcnJvci5tZXNzYWdlKSkpO1xyXG4gIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=