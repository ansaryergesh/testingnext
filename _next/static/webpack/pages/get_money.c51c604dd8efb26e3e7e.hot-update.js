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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwicmVwbGFjZURhdGUiLCJ2YWwiLCJTdHJpbmciLCJyZXBsYWNlIiwiY2hhbmdpbmdEYXkiLCJkYXkiLCJTVUNDRVNTX1JFU1BPTlNFIiwicmVzdWx0IiwiRkFJTEVEX1JFU1BPTlNFIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiYWRkUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9ucyIsInN0ZXBSZWdpc3RyYXRpb24iLCJzdGVwIiwiaXNMb2FkaW5nIiwibG9hZGVyIiwicG9zdFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInBob25lIiwibGFzdF9uYW1lIiwiY29va2llIiwiZ2V0IiwiaW5jbHVkZXMiLCJyaXNrIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInIiLCJlIiwiZXJyb3JzIiwiaWluIiwicGFzc3dvcmQiLCJlbWFpbCIsInNldFRpbWVvdXQiLCJjaGVja0lJTiIsImRvY3VtZW50IiwibG9jYXRpb24iLCJwb3N0UmVnaXN0cmF0aW9uQ29kZSIsInNvdXJjZSIsInVuZGVmaW5lZCIsImFjY2Vzc190b2tlbiIsInBvc3RSZWdpc3RyYXRpb25TZWNvbmQiLCJyZWxhdGl2ZV9waG9uZV9udW1iZXIiLCJhZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUiLCJBdXRob3JpemF0aW9uIiwiZ2V0SXRlbSIsInJlbGF0aXZlX25hbWUiLCJyZWxhdGl2ZV9sYXN0X25hbWUiLCJhcGFydG1lbnQiLCJkYXRlTG9hZGluZyIsImRhdGVGYWlsZWQiLCJlcnJtZXNzIiwicmVnaW9uc1N1Y2NlcyIsInJlZ2lvbiIsImFkZExpbmsiLCJsaW5rIiwicG9zdFJlZ2lzdHJhdGlvblRoaXJkIiwiY2FyZF9udW1iZXIiLCJjbGVhciIsIlJvdXRlciIsInB1c2giLCJuZXdDb29raWUiLCJpZF9jYXJkX251bWJlciIsImliYW5fYWNjb3VudCIsInRlc3RpbmdBY3Rpb24iLCJoaXN0b3J5IiwiZmV0Y2hSZWdpb25zIiwicmVnaW9uX2lkIiwiQWNjZXB0IiwiZXJyb3IiLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJyZWdpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFQyxtREFENkI7QUFFbkNDLFdBQU8sRUFBRUg7QUFGMEIsR0FBTDtBQUFBLENBQTNCOztBQUtQLFNBQVNJLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9DLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBUDtBQUNIOztBQUNNLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxTQUFLO0FBQy9CUixRQUFJLEVBQUVDLGlEQUR5QjtBQUUvQkMsV0FBTyxFQUFFTTtBQUZzQixHQUFMO0FBQUEsQ0FBdkI7QUFNQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFD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RCxLQWRJLEVBZUwsVUFBQUEsS0FBSyxFQUFJO0FBQ1AsVUFBTWxCLE9BQU8sR0FBRyxJQUFJbUIsS0FBSixDQUFVRCxLQUFLLENBQUM3RSxPQUFoQixDQUFoQjtBQUNBLFlBQU0yRCxPQUFOO0FBQ0QsS0FsQkksRUFtQkpoQyxJQW5CSSxDQW1CQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDRSxJQUFULEVBQUo7QUFBQSxLQW5CVCxFQW9CSkgsSUFwQkksQ0FvQkMsVUFBQXNELE9BQU87QUFBQSxhQUFJdEUsUUFBUSxDQUFDaUQsYUFBYSxDQUFDcUIsT0FBRCxDQUFkLENBQVo7QUFBQSxLQXBCUixXQXFCRSxVQUFBSixLQUFLO0FBQUEsYUFBSWxFLFFBQVEsQ0FBQytDLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQzdFLE9BQVAsQ0FBWCxDQUFaO0FBQUEsS0FyQlAsQ0FBUDtBQXNCRCxHQXhCeUI7QUFBQSxDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRfbW9uZXkuYzUxYzYwNGRkOGVmYjI2ZTNlN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7bmV3Q29va2llfSBmcm9tICcuLi8uLi9kZWZhdWx0cy91dG1Tb3VyY2UnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5naW5nTW9uZXkgPSBtb25leSA9PiAoe1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTU9ORVlfQ0hBTkdFLFxyXG4gICAgcGF5bG9hZDogbW9uZXksXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZURhdGUodmFsKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKVxyXG59XHJcbmV4cG9ydCBjb25zdCBjaGFuZ2luZ0RheSA9IGRheSA9PiAoe1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuREFZX0NIQU5HRSxcclxuICAgIHBheWxvYWQ6IGRheSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfUkVTUE9OU0UgPSByZXN1bHQgPT4gKHtcclxuICAgIHR5cGU6IFwiU1VDQ0VTU19SRVNQT05TRVwiLFxyXG4gICAgcGF5bG9hZDogcmVzdWx0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZBSUxFRF9SRVNQT05TRSA9IHJlc3VsdCA9PiAoe1xyXG4gICAgdHlwZTogXCJGQUlMRURfUkVTUE9OU0VcIixcclxuICAgIHBheWxvYWQ6IHJlc3VsdFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IG1lc3NhZ2UgPT4gKHtcclxuICAgIHR5cGU6ICdTVUNDRVNTX01FU1NBR0UnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JNZXNzYWdlID0gbWVzc2FnZSA9PiAoe1xyXG4gICAgdHlwZTogJ0VSUk9SX01FU1NBR0UnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2UgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0VNUFRZX01FU1NBR0UnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25zID0+ICh7XHJcbiAgICB0eXBlOiAnQUREX1JFR0lTVFJBVElPTicsXHJcbiAgICBwYXlsb2FkOiByZWdpc3RyYXRpb25zLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdGVwUmVnaXN0cmF0aW9uID0gc3RlcCA9PiAoe1xyXG4gICAgdHlwZTogJ1NURVBfUkVHSVNUUkFUSU9OJyxcclxuICAgIHBheWxvYWQ6IHN0ZXAsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9IGxvYWRlciA9PiAoe1xyXG4gICAgdHlwZTogJ0lTX0xPQURJTkcnLFxyXG4gICAgcGF5bG9hZDogbG9hZGVyLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvbiA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVnaXN0cmF0aW9uKVxyXG4gICAgZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpO1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5waG9uZSA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5waG9uZSk7XHJcbiAgICByZWdpc3RyYXRpb24ubGFzdF9uYW1lID0gcmVnaXN0cmF0aW9uLmxhc3RfbmFtZSB8fCBcItCd0LXRglwiXHJcbiAgICBpZiggY29va2llLmdldCgndXRtX3NvdXJjZScpLmluY2x1ZGVzKCdzbXNyaXNrJykpIHtcclxuICAgICAgICByZWdpc3RyYXRpb24ucmlzayA9ICdzbXNyaXNrJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3JlZ2lzdHJhdGlvbl9zdGVwX29uZWAse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbiksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC8vIC50aGVuKGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChhZGRSZWdpc3RyYXRpb24ocmVnaXN0cmF0aW9uKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3RlcFJlZ2lzdHJhdGlvbigxKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGVwXCIsIDEpfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHdpbmRvdy5zY3JvbGxUbygwLDApKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN1Y2Nlc3NNZXNzYWdlKCcnKSkpXHJcbiAgICAgICAgLmNhdGNoKHI9PnIuanNvbigpLnRoZW4oZT0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZXJyb3JNZXNzYWdlKGUuZXJyb3JzLmlpbiA/IFwi0JjQndCdINGD0LbQtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0uINCS0Ysg0LHRg9C00LXRgtC1INC/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90Ysg0L3QsCDRgdGC0YDQsNC90LjRhtGDINCw0LLRgtC+0YDQuNC30LDRhtC40Y8hIFwiOiBcIlwiIHx8IGUuZXJyb3JzLnBhc3N3b3JkID8gXCLQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YJcIjogXCJcIiB8fCBlLmVycm9ycy5waG9uZSA/IFwi0J/QvtC70YzQstC+0LfQsNGC0LXQu9GMINGBINGC0LDQutC40Lwg0YLQtdC70LXRhNC+0L0g0L3QvtC80LXRgNC+0Lwg0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvVwiIDogZS5lcnJvcnMuZW1haWwgfHwgXCJcIiB8fCAgIGUuZXJyb3JzICkpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoZWNrSUlOKGUuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfSkpLnRoZW4oKCk9PmRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lJTih2YWwpIHtcclxuICAgIGlmKHZhbCAmJiB2YWwuaWluKSB7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZShcImh0dHBzOi8vd3d3LmktY3JlZGl0Lmt6L2xvZ2luXCIpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3Qgd29ya2luZ1wiKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvbkNvZGUgPSAocmVnaXN0cmF0aW9uKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKTtcclxuICAgIGRpc3BhdGNoKGlzTG9hZGluZyh0cnVlKSk7XHJcbiAgICByZWdpc3RyYXRpb24uc291cmNlID0naS1jcmVkaXQxJztcclxuICAgIGlmKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uLnNvdXJjZSA9IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSArJ18xJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvY2hlY2tfc21zX2NvZGVgLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb24pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6JyonLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5hY2Nlc3NfdG9rZW4pfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChhZGRSZWdpc3RyYXRpb24oJycpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDIpKSkudGhlbigoKSA9PiBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGVwXCIsIDIpfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHdpbmRvdy5zY3JvbGxUbygwLDApKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG4gICAgICAgIC5jYXRjaChyID0+IHIuanNvbigpLnRoZW4oZSA9PiBkaXNwYXRjaChlcnJvck1lc3NhZ2UoXCLQntGC0L/RgNCw0LLQu9C10L3QvdGL0Lkg0LLQsNC80Lgg0LrQvtC0INC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YJcIikpKSkudGhlbigoKSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RSZWdpc3RyYXRpb25TZWNvbmQgPSAocmVnaXN0cmF0aW9uKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGlzTG9hZGluZyh0cnVlKSk7XHJcbiAgICByZWdpc3RyYXRpb24ucmVsYXRpdmVfcGhvbmVfbnVtYmVyID0gcmVwbGFjZURhdGUocmVnaXN0cmF0aW9uLnJlbGF0aXZlX3Bob25lX251bWJlcik7XHJcbiAgICByZWdpc3RyYXRpb24uYWRkaXRpb25hbF9jb250YWN0X3Bob25lID0gcmVwbGFjZURhdGUocmVnaXN0cmF0aW9uLmFkZGl0aW9uYWxfY29udGFjdF9waG9uZSk7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVnaXN0cmF0aW9uX3N0ZXBfdHdvYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3RlcFJlZ2lzdHJhdGlvbigzKSkpLnRoZW4oKCkgPT4gZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RlcFwiLCAzKX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB3aW5kb3cuc2Nyb2xsVG8oMCwwKSlcclxuICAgICAgICAuY2F0Y2gociA9PiByLmpzb24oKS50aGVuKGUgPT4gZGlzcGF0Y2goZXJyb3JNZXNzYWdlKGUuZXJyb3JzLnJlbGF0aXZlX25hbWUgfHwgZS5lcnJvcnMucmVsYXRpdmVfbGFzdF9uYW1lIHx8IGUuZXJyb3JzLnJlbGF0aXZlX3Bob25lX251bWJlciB8fCBlLmVycm9ycy5hcGFydG1lbnQgfHxlLm1lc3NhZ2UpKSkpLnRoZW4oKCkgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGVMb2FkaW5nID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IFwiREFURV9MT0FESU5HXCJcclxufSlcclxuZXhwb3J0IGNvbnN0IGRhdGVGYWlsZWQgPSBlcnJtZXNzID0+ICh7XHJcbiAgICB0eXBlOiAnREFURV9GQUlMRUQnLFxyXG4gICAgcGF5bG9hZDogZXJybWVzcyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaW9uc1N1Y2NlcyA9IHJlZ2lvbiA9PiAoe1xyXG4gICAgdHlwZTogJ1JFR0lPTl9TVUNDRVNTJyxcclxuICAgIHBheWxvYWQ6IHJlZ2lvbixcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExpbmsgPSBsaW5rID0+ICh7XHJcbiAgICB0eXBlOiBcIkFERF9MSU5LXCIsXHJcbiAgICBwYXlsb2FkOmxpbmtcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVnaXN0cmF0aW9uVGhpcmQgPSAocmVnaXN0cmF0aW9uKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGlzTG9hZGluZyh0cnVlKSk7XHJcbiAgICByZWdpc3RyYXRpb24uY2FyZF9udW1iZXIgPSByZXBsYWNlRGF0ZShyZWdpc3RyYXRpb24uY2FyZF9udW1iZXIpO1xyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2xhc3Rfc3RlcGAse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbiksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN1Y2Nlc3NNZXNzYWdlKCfQo9GB0L/QtdGI0L3QvicpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBzZXRUaW1lb3V0KCgpID0+IHtkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDApKX0sNjAwMCkgKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiBzZXRUaW1lb3V0KCgpID0+IHtsb2NhbFN0b3JhZ2UuY2xlYXIoKX0sNTAwMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gUm91dGVyLnB1c2goJy90aGFua3MnKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IG5ld0Nvb2tpZSgpKVxyXG4gICAgICAgIC5jYXRjaChyID0+IHIuanNvbigpLnRoZW4oZSA9PiAgZGlzcGF0Y2goZXJyb3JNZXNzYWdlKGUuZXJyb3JzLmlkX2NhcmRfbnVtYmVyID8gXCLQndC+0LzQtdGAINGD0LTQvtGB0YLQstC+0YDQtdC90LjQtSDQu9C40YfQvdC+0YHRgtC4INGD0LbQtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L1cIiA6IFwiXCIgfHwgZS5lcnJvcnMuaWJhbl9hY2NvdW50IHx8IGUuZXJyb3JzLmNhcmRfbnVtYmVyIHx8IGUuZXJyb3JzIHx8ICBudWxsKSkpKS50aGVuKCgpID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0aW5nQWN0aW9uKGhpc3RvcnkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgJ2ZpbmFsJylcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge2xvY2FsU3RvcmFnZS5jbGVhcigpfSw1MDAwKVxyXG4gICAgaGlzdG9yeS5wdXNoKCcvdGhhbmtzJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUmVnaW9ucyA9IChyZWdpb25faWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKGRhdGVMb2FkaW5nKHRydWUpKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9jaXR5LyR7cmVnaW9uX2lkfWAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm1lc3MgPSBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgdGhyb3cgZXJybWVzcztcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihyZWdpb25zID0+IGRpc3BhdGNoKHJlZ2lvbnNTdWNjZXMocmVnaW9ucykpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZGlzcGF0Y2goZGF0ZUZhaWxlZChlcnJvci5tZXNzYWdlKSkpO1xyXG4gIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=