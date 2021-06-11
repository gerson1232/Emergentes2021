webpackHotUpdate_N_E("pages/order/[id]",{

/***/ "./components/OrderDetail.js":
/*!***********************************!*\
  !*** ./components/OrderDetail.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paypalBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paypalBtn */ "./components/paypalBtn.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");




var _jsxFileName = "C:\\Users\\diedo\\Downloads\\nextjs-ecommerce-master\\nextjs-ecommerce-master\\components\\OrderDetail.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var OrderDetail = function OrderDetail(_ref) {
  var orderDetail = _ref.orderDetail,
      state = _ref.state,
      dispatch = _ref.dispatch;
  var auth = state.auth,
      orders = state.orders;

  var handleDelivered = function handleDelivered(order) {
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });
    Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__["patchData"])("order/delivered/".concat(order._id), null, auth.token).then(function (res) {
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      var _res$result = res.result,
          paid = _res$result.paid,
          dateOfPayment = _res$result.dateOfPayment,
          method = _res$result.method,
          delivered = _res$result.delivered;
      dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_5__["updateItem"])(orders, order._id, _objectSpread(_objectSpread({}, order), {}, {
        paid: paid,
        dateOfPayment: dateOfPayment,
        method: method,
        delivered: delivered
      }), 'ADD_ORDERS'));
      return dispatch({
        type: 'NOTIFY',
        payload: {
          success: res.msg
        }
      });
    });
  };

  if (!auth.user) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: orderDetail.map(function (order) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        style: {
          margin: '20px auto'
        },
        className: "row justify-content-around",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "text-uppercase my-3",
          style: {
            maxWidth: '600px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
            className: "text-break",
            children: ["Pedido: ", order._id]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "mt-4 text-secondary",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
              children: "Env\xEDo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: ["Nombre: ", order.user.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: ["Correo: ", order.user.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: ["Direcci\xF3n: ", order.address]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: ["Celular: ", order.mobile]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "alert ".concat(order.delivered ? 'alert-success' : 'alert-danger', "\n                        d-flex justify-content-between align-items-center"),
              role: "alert",
              children: [order.delivered ? "Entregado ".concat(order.updatedAt) : 'No Entregado', auth.user.role === 'admin' && !order.delivered && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                className: "btn btn-success text-uppercase",
                onClick: function onClick() {
                  return handleDelivered(order);
                },
                children: "Marcar como entregado"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
              children: "Pago"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 25
            }, _this), order.method && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
              children: ["Method: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("em", {
                children: order.method
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 57
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 45
            }, _this), order.paymentId && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: ["PaymentId: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("em", {
                children: order.paymentId
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 62
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 48
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "alert ".concat(order.paid ? 'alert-success' : 'alert-danger', "\n                        d-flex justify-content-between align-items-center"),
              role: "alert",
              children: order.paid ? "Pagado ".concat(order.dateOfPayment) : 'No Pagado'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                children: "Art\xEDculos del Pedido"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 29
              }, _this), order.cart.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "row border-bottom mx-0 p-2 justify-content-betwenn align-items-center",
                  style: {
                    maxWidth: '550px'
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                    src: item.images[0].url,
                    alt: item.images[0].url,
                    style: {
                      width: '50px',
                      height: '45px',
                      objectFit: 'cover'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                    className: "flex-fill text-secondary px-3 m-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                      href: "/product/".concat(item._id),
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                        children: item.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                    className: "text-info m-0",
                    children: [item.quantity, " x $", item.price, " = $", item.price * item.quantity]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 41
                  }, _this)]
                }, item._id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, _this), !order.paid && auth.user.role !== 'admin' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "p-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
            className: "mb-4 text-uppercase",
            children: ["Total: $", order.total]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_paypalBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
            order: order
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this)]
      }, order._id, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false);
};

_c = OrderDetail;
/* harmony default export */ __webpack_exports__["default"] = (OrderDetail);

var _c;

$RefreshReg$(_c, "OrderDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckRldGFpbC5qcyJdLCJuYW1lcyI6WyJPcmRlckRldGFpbCIsIm9yZGVyRGV0YWlsIiwic3RhdGUiLCJkaXNwYXRjaCIsImF1dGgiLCJvcmRlcnMiLCJoYW5kbGVEZWxpdmVyZWQiLCJvcmRlciIsInR5cGUiLCJwYXlsb2FkIiwibG9hZGluZyIsInBhdGNoRGF0YSIsIl9pZCIsInRva2VuIiwidGhlbiIsInJlcyIsImVyciIsImVycm9yIiwicmVzdWx0IiwicGFpZCIsImRhdGVPZlBheW1lbnQiLCJtZXRob2QiLCJkZWxpdmVyZWQiLCJ1cGRhdGVJdGVtIiwic3VjY2VzcyIsIm1zZyIsInVzZXIiLCJtYXAiLCJtYXJnaW4iLCJtYXhXaWR0aCIsIm5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJtb2JpbGUiLCJ1cGRhdGVkQXQiLCJyb2xlIiwicGF5bWVudElkIiwiY2FydCIsIml0ZW0iLCJpbWFnZXMiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsInRpdGxlIiwicXVhbnRpdHkiLCJwcmljZSIsInRvdGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFvQztBQUFBLE1BQWxDQyxXQUFrQyxRQUFsQ0EsV0FBa0M7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBQUEsTUFDN0NDLElBRDZDLEdBQzdCRixLQUQ2QixDQUM3Q0UsSUFENkM7QUFBQSxNQUN2Q0MsTUFEdUMsR0FDN0JILEtBRDZCLENBQ3ZDRyxNQUR1Qzs7QUFHcEQsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0JKLFlBQVEsQ0FBQztBQUFDSyxVQUFJLEVBQUUsUUFBUDtBQUFpQkMsYUFBTyxFQUFFO0FBQUNDLGVBQU8sRUFBRTtBQUFWO0FBQTFCLEtBQUQsQ0FBUjtBQUVBQyxzRUFBUywyQkFBb0JKLEtBQUssQ0FBQ0ssR0FBMUIsR0FBaUMsSUFBakMsRUFBdUNSLElBQUksQ0FBQ1MsS0FBNUMsQ0FBVCxDQUNDQyxJQURELENBQ00sVUFBQUMsR0FBRyxFQUFJO0FBQ1QsVUFBR0EsR0FBRyxDQUFDQyxHQUFQLEVBQVksT0FBT2IsUUFBUSxDQUFDO0FBQUNLLFlBQUksRUFBRSxRQUFQO0FBQWlCQyxlQUFPLEVBQUU7QUFBQ1EsZUFBSyxFQUFFRixHQUFHLENBQUNDO0FBQVo7QUFBMUIsT0FBRCxDQUFmO0FBREgsd0JBRzBDRCxHQUFHLENBQUNHLE1BSDlDO0FBQUEsVUFHREMsSUFIQyxlQUdEQSxJQUhDO0FBQUEsVUFHS0MsYUFITCxlQUdLQSxhQUhMO0FBQUEsVUFHb0JDLE1BSHBCLGVBR29CQSxNQUhwQjtBQUFBLFVBRzRCQyxTQUg1QixlQUc0QkEsU0FINUI7QUFLVG5CLGNBQVEsQ0FBQ29CLGlFQUFVLENBQUNsQixNQUFELEVBQVNFLEtBQUssQ0FBQ0ssR0FBZixrQ0FDWkwsS0FEWTtBQUNMWSxZQUFJLEVBQUpBLElBREs7QUFDQ0MscUJBQWEsRUFBYkEsYUFERDtBQUNnQkMsY0FBTSxFQUFOQSxNQURoQjtBQUN3QkMsaUJBQVMsRUFBVEE7QUFEeEIsVUFFaEIsWUFGZ0IsQ0FBWCxDQUFSO0FBSUEsYUFBT25CLFFBQVEsQ0FBQztBQUFDSyxZQUFJLEVBQUUsUUFBUDtBQUFpQkMsZUFBTyxFQUFFO0FBQUNlLGlCQUFPLEVBQUVULEdBQUcsQ0FBQ1U7QUFBZDtBQUExQixPQUFELENBQWY7QUFDSCxLQVhEO0FBWUgsR0FmRDs7QUFpQkEsTUFBRyxDQUFDckIsSUFBSSxDQUFDc0IsSUFBVCxFQUFlLE9BQU8sSUFBUDtBQUNmLHNCQUNJO0FBQUEsY0FFSXpCLFdBQVcsQ0FBQzBCLEdBQVosQ0FBZ0IsVUFBQXBCLEtBQUs7QUFBQSwwQkFDckI7QUFBcUIsYUFBSyxFQUFFO0FBQUNxQixnQkFBTSxFQUFFO0FBQVQsU0FBNUI7QUFBbUQsaUJBQVMsRUFBQyw0QkFBN0Q7QUFBQSxnQ0FFSTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBcUMsZUFBSyxFQUFFO0FBQUNDLG9CQUFRLEVBQUU7QUFBWCxXQUE1QztBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxZQUFkO0FBQUEsbUNBQW9DdEIsS0FBSyxDQUFDSyxHQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFHSTtBQUFLLHFCQUFTLEVBQUMscUJBQWY7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEscUNBQVlMLEtBQUssQ0FBQ21CLElBQU4sQ0FBV0ksSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBQSxxQ0FBWXZCLEtBQUssQ0FBQ21CLElBQU4sQ0FBV0ssS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBSUk7QUFBQSwyQ0FBZXhCLEtBQUssQ0FBQ3lCLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQUtJO0FBQUEsc0NBQWF6QixLQUFLLENBQUMwQixNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEosZUFPSTtBQUFLLHVCQUFTLGtCQUFXMUIsS0FBSyxDQUFDZSxTQUFOLEdBQWtCLGVBQWxCLEdBQW9DLGNBQS9DLGdGQUFkO0FBQ29ELGtCQUFJLEVBQUMsT0FEekQ7QUFBQSx5QkFHUWYsS0FBSyxDQUFDZSxTQUFOLHVCQUErQmYsS0FBSyxDQUFDMkIsU0FBckMsSUFBbUQsY0FIM0QsRUFNUTlCLElBQUksQ0FBQ3NCLElBQUwsQ0FBVVMsSUFBVixLQUFtQixPQUFuQixJQUE4QixDQUFDNUIsS0FBSyxDQUFDZSxTQUFyQyxpQkFDQTtBQUFRLHlCQUFTLEVBQUMsZ0NBQWxCO0FBQ0EsdUJBQU8sRUFBRTtBQUFBLHlCQUFNaEIsZUFBZSxDQUFDQyxLQUFELENBQXJCO0FBQUEsaUJBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLGVBc0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRCSixFQXdCUUEsS0FBSyxDQUFDYyxNQUFOLGlCQUFnQjtBQUFBLGtEQUFZO0FBQUEsMEJBQUtkLEtBQUssQ0FBQ2M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF4QnhCLEVBNEJRZCxLQUFLLENBQUM2QixTQUFOLGlCQUFtQjtBQUFBLHFEQUFjO0FBQUEsMEJBQUs3QixLQUFLLENBQUM2QjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTVCM0IsZUErQkk7QUFBSyx1QkFBUyxrQkFBVzdCLEtBQUssQ0FBQ1ksSUFBTixHQUFhLGVBQWIsR0FBK0IsY0FBMUMsZ0ZBQWQ7QUFDb0Qsa0JBQUksRUFBQyxPQUR6RDtBQUFBLHdCQUdRWixLQUFLLENBQUNZLElBQU4sb0JBQXVCWixLQUFLLENBQUNhLGFBQTdCLElBQStDO0FBSHZEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBL0JKLGVBdUNJO0FBQUEsc0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFHUWIsS0FBSyxDQUFDOEIsSUFBTixDQUFXVixHQUFYLENBQWUsVUFBQVcsSUFBSTtBQUFBLG9DQUNmO0FBQUssMkJBQVMsRUFBQyx1RUFBZjtBQUNtQyx1QkFBSyxFQUFFO0FBQUNULDRCQUFRLEVBQUU7QUFBWCxtQkFEMUM7QUFBQSwwQ0FFSTtBQUFLLHVCQUFHLEVBQUVTLElBQUksQ0FBQ0MsTUFBTCxDQUFZLENBQVosRUFBZUMsR0FBekI7QUFBOEIsdUJBQUcsRUFBRUYsSUFBSSxDQUFDQyxNQUFMLENBQVksQ0FBWixFQUFlQyxHQUFsRDtBQUNBLHlCQUFLLEVBQUU7QUFBQ0MsMkJBQUssRUFBRSxNQUFSO0FBQWdCQyw0QkFBTSxFQUFFLE1BQXhCO0FBQWdDQywrQkFBUyxFQUFFO0FBQTNDO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSixlQUtJO0FBQUksNkJBQVMsRUFBQyxtQ0FBZDtBQUFBLDJDQUNJLHFFQUFDLGdEQUFEO0FBQU0sMEJBQUkscUJBQWNMLElBQUksQ0FBQzFCLEdBQW5CLENBQVY7QUFBQSw2Q0FDSTtBQUFBLGtDQUFJMEIsSUFBSSxDQUFDTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMSixlQVdJO0FBQU0sNkJBQVMsRUFBQyxlQUFoQjtBQUFBLCtCQUNLTixJQUFJLENBQUNPLFFBRFYsVUFDd0JQLElBQUksQ0FBQ1EsS0FEN0IsVUFDd0NSLElBQUksQ0FBQ1EsS0FBTCxHQUFhUixJQUFJLENBQUNPLFFBRDFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFYSjtBQUFBLG1CQUN5QlAsSUFBSSxDQUFDMUIsR0FEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEZTtBQUFBLGVBQW5CLENBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBeUVRLENBQUNMLEtBQUssQ0FBQ1ksSUFBUCxJQUFlZixJQUFJLENBQUNzQixJQUFMLENBQVVTLElBQVYsS0FBbUIsT0FBbEMsaUJBQ0E7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMscUJBQWQ7QUFBQSxtQ0FBNkM1QixLQUFLLENBQUN3QyxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSxxRUFBQyxrREFBRDtBQUFXLGlCQUFLLEVBQUV4QztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExRVI7QUFBQSxTQUFVQSxLQUFLLENBQUNLLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEcUI7QUFBQSxLQUFyQjtBQUZKLG1CQURKO0FBeUZILENBOUdEOztLQUFNWixXO0FBZ0hTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlci9baWRdLjVmZTUzOTFkN2RiOTI4Y2Q0YjYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUGF5cGFsQnRuIGZyb20gJy4vcGF5cGFsQnRuJ1xuaW1wb3J0IHtwYXRjaERhdGF9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcbmltcG9ydCB7dXBkYXRlSXRlbX0gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcblxuY29uc3QgT3JkZXJEZXRhaWwgPSAoe29yZGVyRGV0YWlsLCBzdGF0ZSwgZGlzcGF0Y2h9KSA9PiB7XG4gICAgY29uc3Qge2F1dGgsIG9yZGVyc30gPSBzdGF0ZVxuXG4gICAgY29uc3QgaGFuZGxlRGVsaXZlcmVkID0gKG9yZGVyKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2xvYWRpbmc6IHRydWV9fSlcblxuICAgICAgICBwYXRjaERhdGEoYG9yZGVyL2RlbGl2ZXJlZC8ke29yZGVyLl9pZH1gLCBudWxsLCBhdXRoLnRva2VuKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXG5cbiAgICAgICAgICAgIGNvbnN0IHsgcGFpZCwgZGF0ZU9mUGF5bWVudCwgbWV0aG9kLCBkZWxpdmVyZWQgfSA9IHJlcy5yZXN1bHRcblxuICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlSXRlbShvcmRlcnMsIG9yZGVyLl9pZCwge1xuICAgICAgICAgICAgICAgIC4uLm9yZGVyLCBwYWlkLCBkYXRlT2ZQYXltZW50LCBtZXRob2QsIGRlbGl2ZXJlZFxuICAgICAgICAgICAgfSwgJ0FERF9PUkRFUlMnKSlcblxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge3N1Y2Nlc3M6IHJlcy5tc2d9fSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZighYXV0aC51c2VyKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIHtcbiAgICAgICAgICAgIG9yZGVyRGV0YWlsLm1hcChvcmRlciA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17b3JkZXIuX2lkfSBzdHlsZT17e21hcmdpbjogJzIwcHggYXV0byd9fSBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSBteS0zXCIgc3R5bGU9e3ttYXhXaWR0aDogJzYwMHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1icmVha1wiPlBlZGlkbzoge29yZGVyLl9pZH08L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkVudsOtbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob21icmU6IHtvcmRlci51c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29ycmVvOiB7b3JkZXIudXNlci5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EaXJlY2Npw7NuOiB7b3JkZXIuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DZWx1bGFyOiB7b3JkZXIubW9iaWxlfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCAke29yZGVyLmRlbGl2ZXJlZCA/ICdhbGVydC1zdWNjZXNzJyA6ICdhbGVydC1kYW5nZXInfVxuICAgICAgICAgICAgICAgICAgICAgICAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlcmB9IHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZGVsaXZlcmVkID8gYEVudHJlZ2FkbyAke29yZGVyLnVwZGF0ZWRBdH1gIDogJ05vIEVudHJlZ2FkbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJiAhb3JkZXIuZGVsaXZlcmVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIHRleHQtdXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsaXZlcmVkKG9yZGVyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJjYXIgY29tbyBlbnRyZWdhZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QYWdvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5tZXRob2QgJiYgPGg2Pk1ldGhvZDogPGVtPntvcmRlci5tZXRob2R9PC9lbT48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIucGF5bWVudElkICYmIDxwPlBheW1lbnRJZDogPGVtPntvcmRlci5wYXltZW50SWR9PC9lbT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWxlcnQgJHtvcmRlci5wYWlkID8gJ2FsZXJ0LXN1Y2Nlc3MnIDogJ2FsZXJ0LWRhbmdlcid9XG4gICAgICAgICAgICAgICAgICAgICAgICBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyYH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5wYWlkID8gYFBhZ2FkbyAke29yZGVyLmRhdGVPZlBheW1lbnR9YCA6ICdObyBQYWdhZG8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFydMOtY3Vsb3MgZGVsIFBlZGlkbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5jYXJ0Lm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGJvcmRlci1ib3R0b20gbXgtMCBwLTIganVzdGlmeS1jb250ZW50LWJldHdlbm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zLWNlbnRlclwiIGtleT17aXRlbS5faWR9IHN0eWxlPXt7bWF4V2lkdGg6ICc1NTBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZXNbMF0udXJsfSBhbHQ9e2l0ZW0uaW1hZ2VzWzBdLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnNTBweCcsIGhlaWdodDogJzQ1cHgnLCBvYmplY3RGaXQ6ICdjb3Zlcid9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZsZXgtZmlsbCB0ZXh0LXNlY29uZGFyeSBweC0zIG0tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtpdGVtLl9pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWluZm8gbS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fSB4ICR7aXRlbS5wcmljZX0gPSAke2l0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICFvcmRlci5wYWlkICYmIGF1dGgudXNlci5yb2xlICE9PSAnYWRtaW4nICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXVwcGVyY2FzZVwiPlRvdGFsOiAke29yZGVyLnRvdGFsfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGF5cGFsQnRuIG9yZGVyPXtvcmRlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckRldGFpbCJdLCJzb3VyY2VSb290IjoiIn0=