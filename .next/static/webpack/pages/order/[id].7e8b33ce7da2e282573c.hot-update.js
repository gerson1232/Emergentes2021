webpackHotUpdate_N_E("pages/order/[id]",{

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_OrderDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/OrderDetail */ "./components/OrderDetail.js");


var _jsxFileName = "C:\\Users\\diedo\\Downloads\\nextjs-ecommerce-master\\nextjs-ecommerce-master\\pages\\order\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();








var DetailOrder = function DetailOrder() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var orders = state.orders,
      auth = state.auth;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      orderDetail = _useState[0],
      setOrderDetail = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var newArr = orders.filter(function (order) {
      return order._id === router.query.id;
    });
    setOrderDetail(newArr);
  }, [orders]);
  if (!auth.user) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "my-3",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Detalle de Pedidos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-info",
        onClick: function onClick() {
          return router.back();
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-long-arrow-alt-left",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this), " Regresar"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_OrderDetail__WEBPACK_IMPORTED_MODULE_6__["default"], {
      orderDetail: orderDetail,
      state: state,
      dispatch: dispatch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(DetailOrder, "ULzN0OQk8qf7nI8vFkXcJ7N5g1g=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = DetailOrder;
/* harmony default export */ __webpack_exports__["default"] = (DetailOrder);

var _c;

$RefreshReg$(_c, "DetailOrder");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXIvLmpzIl0sIm5hbWVzIjpbIkRldGFpbE9yZGVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsIm9yZGVycyIsImF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9yZGVyRGV0YWlsIiwic2V0T3JkZXJEZXRhaWwiLCJ1c2VFZmZlY3QiLCJuZXdBcnIiLCJmaWx0ZXIiLCJvcmRlciIsIl9pZCIsInF1ZXJ5IiwiaWQiLCJ1c2VyIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLG9CQUNJQyx3REFBVSxDQUFDQyw4REFBRCxDQURkO0FBQUEsTUFDZkMsS0FEZSxlQUNmQSxLQURlO0FBQUEsTUFDUkMsUUFEUSxlQUNSQSxRQURROztBQUFBLE1BRWZDLE1BRmUsR0FFQ0YsS0FGRCxDQUVmRSxNQUZlO0FBQUEsTUFFUEMsSUFGTyxHQUVDSCxLQUZELENBRVBHLElBRk87QUFJdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFKc0Isa0JBTWdCQyxzREFBUSxDQUFDLEVBQUQsQ0FOeEI7QUFBQSxNQU1mQyxXQU5lO0FBQUEsTUFNRkMsY0FORTs7QUFRdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLE1BQU0sR0FBR1IsTUFBTSxDQUFDUyxNQUFQLENBQWMsVUFBQUMsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ0MsR0FBTixLQUFjVCxNQUFNLENBQUNVLEtBQVAsQ0FBYUMsRUFBL0I7QUFBQSxLQUFuQixDQUFmO0FBQ0FQLGtCQUFjLENBQUNFLE1BQUQsQ0FBZDtBQUNILEdBSFEsRUFHUCxDQUFDUixNQUFELENBSE8sQ0FBVDtBQUtBLE1BQUcsQ0FBQ0MsSUFBSSxDQUFDYSxJQUFULEVBQWUsT0FBTyxJQUFQO0FBQ2Ysc0JBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFBLDZCQUNJO0FBQVEsaUJBQVMsRUFBQyxjQUFsQjtBQUFpQyxlQUFPLEVBQUU7QUFBQSxpQkFBTVosTUFBTSxDQUFDYSxJQUFQLEVBQU47QUFBQSxTQUExQztBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQyw0QkFBYjtBQUEyQyx5QkFBWTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQVdJLHFFQUFDLCtEQUFEO0FBQWEsaUJBQVcsRUFBRVYsV0FBMUI7QUFBdUMsV0FBSyxFQUFFUCxLQUE5QztBQUFxRCxjQUFRLEVBQUVDO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQTlCRDs7R0FBTUosVztVQUlhUSxxRDs7O0tBSmJSLFc7QUFnQ1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVyL1tpZF0uN2U4YjMzY2U3ZGEyZTI4MjU3M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBPcmRlckRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL09yZGVyRGV0YWlsJ1xuXG5cbmNvbnN0IERldGFpbE9yZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgICBjb25zdCB7b3JkZXJzLCBhdXRofSA9IHN0YXRlXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgW29yZGVyRGV0YWlsLCBzZXRPcmRlckRldGFpbF0gPSB1c2VTdGF0ZShbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyciA9IG9yZGVycy5maWx0ZXIob3JkZXIgPT4gb3JkZXIuX2lkID09PSByb3V0ZXIucXVlcnkuaWQpXG4gICAgICAgIHNldE9yZGVyRGV0YWlsKG5ld0FycilcbiAgICB9LFtvcmRlcnNdKVxuICAgICAgICAgICAgXG4gICAgaWYoIWF1dGgudXNlcikgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5EZXRhbGxlIGRlIFBlZGlkb3M8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1sb25nLWFycm93LWFsdC1sZWZ0XCIgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gUmVncmVzYXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8T3JkZXJEZXRhaWwgb3JkZXJEZXRhaWw9e29yZGVyRGV0YWlsfSBzdGF0ZT17c3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0gLz5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsT3JkZXIiXSwic291cmNlUm9vdCI6IiJ9