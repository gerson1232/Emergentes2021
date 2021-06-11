module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/order/delivered/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ "./models/userModel.js");



const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({
    err: 'Autenticación inválida.'
  });
  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, "ek%LcLD3TL#dSA~*4X'+X_a?j$dfM*@VS2Ler}5j6^+N4rX+p?");
  if (!decoded) return res.status(400).json({
    err: 'Autenticación inválida.'
  });
  const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    _id: decoded.id
  });
  return {
    id: user._id,
    role: user.role,
    root: user.root
  };
};

/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./models/orderModel.js":
/*!******************************!*\
  !*** ./models/orderModel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const orderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId,
    ref: 'user'
  },
  address: String,
  mobile: String,
  cart: Array,
  total: Number,
  paymentId: String,
  method: String,
  delivered: {
    type: Boolean,
    default: false
  },
  paid: {
    type: Boolean,
    default: false
  },
  dateOfPayment: Date
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.order || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('order', orderSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  root: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./pages/api/order/delivered/[id].js":
/*!*******************************************!*\
  !*** ./pages/api/order/delivered/[id].js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/orderModel */ "./models/orderModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../middleware/auth */ "./middleware/auth.js");



Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "PATCH":
      await deliveredOrder(req, res);
      break;
  }
});

const deliveredOrder = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: 'Autenticación inválida'
    });
    const {
      id
    } = req.query;
    const order = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      _id: id
    });

    if (order.paid) {
      await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
        _id: id
      }, {
        delivered: true
      });
      res.json({
        msg: '¡Éxito!',
        result: {
          paid: true,
          dateOfPayment: order.dateOfPayment,
          method: order.method,
          delivered: true
        }
      });
    } else {
      await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
        _id: id
      }, {
        paid: true,
        dateOfPayment: new Date().toISOString(),
        method: 'Receive Cash',
        delivered: true
      });
      res.json({
        msg: '¡Éxito!',
        result: {
          paid: true,
          dateOfPayment: new Date().toISOString(),
          method: 'Receive Cash',
          delivered: true
        }
      });
    }
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = () => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    console.log('Conectado.');
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://emergentes:emergentes@cluster0.b6hpr.mongodb.net/te_proyecto_ferreteria?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Conectado a mongodb.');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9vcmRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL21vZGVscy91c2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZGVyL2RlbGl2ZXJlZC8uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZGVjb2RlZCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJ1c2VyIiwiVXNlcnMiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsIm9yZGVyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImFkZHJlc3MiLCJTdHJpbmciLCJtb2JpbGUiLCJjYXJ0IiwiQXJyYXkiLCJ0b3RhbCIsIk51bWJlciIsInBheW1lbnRJZCIsIm1ldGhvZCIsImRlbGl2ZXJlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwicGFpZCIsImRhdGVPZlBheW1lbnQiLCJEYXRlIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJvcmRlciIsIm1vZGVsIiwidXNlclNjaGVtYSIsIm5hbWUiLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJhdmF0YXIiLCJjb25uZWN0REIiLCJkZWxpdmVyZWRPcmRlciIsInJlc3VsdCIsInF1ZXJ5IiwiT3JkZXJzIiwiZmluZE9uZUFuZFVwZGF0ZSIsIm1zZyIsInRvSVNPU3RyaW5nIiwibWVzc2FnZSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFHQSxNQUFNQSxJQUFJLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzdCLFFBQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFKLENBQVlDLGFBQTFCO0FBQ0EsTUFBRyxDQUFDRixLQUFKLEVBQVcsT0FBT0QsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsT0FBRyxF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QU1BLEdBQU47QUFDUnlELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0gsR0FSRDtBQVNILENBZEQ7O0FBaUJlWix3RUFBZixFOzs7Ozs7Ozs7OztBQ25CQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvb3JkZXIvZGVsaXZlcmVkL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9vcmRlci9kZWxpdmVyZWQvW2lkXS5qc1wiKTtcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnXG5cblxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbiAgICBpZighdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnQXV0ZW50aWNhY2nDs24gaW52w6FsaWRhLid9KVxuXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpXG4gICAgaWYoIWRlY29kZWQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnQXV0ZW50aWNhY2nDs24gaW52w6FsaWRhLid9KVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoe19pZDogZGVjb2RlZC5pZH0pXG5cbiAgICByZXR1cm4ge2lkOiB1c2VyLl9pZCwgcm9sZTogdXNlci5yb2xlLCByb290OiB1c2VyLnJvb3R9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGF1dGgiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdXNlcjoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOiAndXNlcidcbiAgICB9LFxuICAgIGFkZHJlc3M6IFN0cmluZyxcbiAgICBtb2JpbGU6IFN0cmluZyxcbiAgICBjYXJ0OiBBcnJheSxcbiAgICB0b3RhbDogTnVtYmVyLFxuICAgIHBheW1lbnRJZDogU3RyaW5nLFxuICAgIG1ldGhvZDogU3RyaW5nLFxuICAgIGRlbGl2ZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcGFpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgZGF0ZU9mUGF5bWVudDogRGF0ZVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLm9yZGVyIHx8IG1vbmdvb3NlLm1vZGVsKCdvcmRlcicsIG9yZGVyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGV2YXRjaGFubmVsL2ltYWdlL3VwbG9hZC92MTYwMjc1MjQwMi9hdmF0YXIvYXZhdGFyX2N1Z3E0MC5wbmcnXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJ1xuaW1wb3J0IE9yZGVycyBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvb3JkZXJNb2RlbCdcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCdcblxuY29ubmVjdERCKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xuICAgICAgICBjYXNlIFwiUEFUQ0hcIjpcbiAgICAgICAgICAgIGF3YWl0IGRlbGl2ZXJlZE9yZGVyKHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5jb25zdCBkZWxpdmVyZWRPcmRlciA9IGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcylcbiAgICAgICAgaWYocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnQXV0ZW50aWNhY2nDs24gaW52w6FsaWRhJ30pXG4gICAgICAgIGNvbnN0IHtpZH0gPSByZXEucXVlcnlcblxuXG4gICAgICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgT3JkZXJzLmZpbmRPbmUoe19pZDogaWR9KVxuICAgICAgICBpZihvcmRlci5wYWlkKXtcbiAgICAgICAgICAgIGF3YWl0IE9yZGVycy5maW5kT25lQW5kVXBkYXRlKHtfaWQ6IGlkfSwge2RlbGl2ZXJlZDogdHJ1ZX0pXG4gICAgXG4gICAgICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICAgICAgbXNnOiAnwqHDiXhpdG8hJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFpZDogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgIGRhdGVPZlBheW1lbnQ6IG9yZGVyLmRhdGVPZlBheW1lbnQsIFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG9yZGVyLm1ldGhvZCwgXG4gICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYXdhaXQgT3JkZXJzLmZpbmRPbmVBbmRVcGRhdGUoe19pZDogaWR9LCB7XG4gICAgICAgICAgICAgICAgcGFpZDogdHJ1ZSwgZGF0ZU9mUGF5bWVudDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLCBcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdSZWNlaXZlIENhc2gnLCBkZWxpdmVyZWQ6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICAgICAgbXNnOiAnwqHDiXhpdG8hJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFpZDogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgIGRhdGVPZlBheW1lbnQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwgXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1JlY2VpdmUgQ2FzaCcsIFxuICAgICAgICAgICAgICAgICAgICBkZWxpdmVyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn0iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjdGFkby4nKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgIH0sIGVyciA9PiB7XG4gICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWN0YWRvIGEgbW9uZ29kYi4nKVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=