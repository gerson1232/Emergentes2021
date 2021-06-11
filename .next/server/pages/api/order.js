module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/order/index.js");
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

/***/ "./models/productModel.js":
/*!********************************!*\
  !*** ./models/productModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  inStock: {
    type: Number,
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('product', productSchema);
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

/***/ "./pages/api/order/index.js":
/*!**********************************!*\
  !*** ./pages/api/order/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/orderModel */ "./models/orderModel.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");




Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res);
      break;

    case "GET":
      await getOrders(req, res);
      break;
  }
});

const getOrders = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_3__["default"])(req, res);
    let orders;

    if (result.role !== 'admin') {
      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].find({
        user: result.id
      }).populate("user", "-password");
    } else {
      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].find().populate("user", "-password");
    }

    res.json({
      orders
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const createOrder = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_3__["default"])(req, res);
    const {
      address,
      mobile,
      cart,
      total
    } = req.body;
    const newOrder = new _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
      user: result.id,
      address,
      mobile,
      cart,
      total
    });
    cart.filter(item => {
      return sold(item._id, item.quantity, item.inStock, item.sold);
    });
    await newOrder.save();
    res.json({
      msg: '¡Pedido exitoso! Nos pondremos en contacto contigo para confirmar el pedido',
      newOrder
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const sold = async (id, quantity, oldInStock, oldSold) => {
  await _models_productModel__WEBPACK_IMPORTED_MODULE_2__["default"].findOneAndUpdate({
    _id: id
  }, {
    inStock: oldInStock - quantity,
    sold: quantity + oldSold
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9vcmRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL21vZGVscy9wcm9kdWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvb3JkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZGVjb2RlZCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJ1c2VyIiwiVXNlcnMiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsIm9yZGVyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImFkZHJlc3MiLCJTdHJpbmciLCJtb2JpbGUiLCJjYXJ0IiwiQXJyYXkiLCJ0b3RhbCIsIk51bWJlciIsInBheW1lbnRJZCIsIm1ldGhvZCIsImRlbGl2ZXJlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwicGFpZCIsImRhdGVPZlBheW1lbnQiLCJEYXRlIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJvcmRlciIsIm1vZGVsIiwicHJvZHVjdFNjaGVtYSIsInRpdGxlIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJjYXRlZ29yeSIsImNoZWNrZWQiLCJpblN0b2NrIiwic29sZCIsInByb2R1Y3QiLCJ1c2VyU2NoZW1hIiwibmFtZSIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJhdmF0YXIiLCJjb25uZWN0REIiLCJjcmVhdGVPcmRlciIsImdldE9yZGVycyIsInJlc3VsdCIsIm9yZGVycyIsIk9yZGVycyIsImZpbmQiLCJwb3B1bGF0ZSIsIm1lc3NhZ2UiLCJib2R5IiwibmV3T3JkZXIiLCJmaWx0ZXIiLCJpdGVtIiwicXVhbnRpdHkiLCJzYXZlIiwibXNnIiwib2xkSW5TdG9jayIsIm9sZFNvbGQiLCJQcm9kdWN0cyIsImZpbmRPbmVBbmRVcGRhdGUiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFF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LENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxTQUFHLEVBQUVBLEdBQUcsQ0FBQ2tFO0FBQVYsS0FBckIsQ0FBUDtBQUNIO0FBQ0osQ0F2QkQ7O0FBeUJBLE1BQU1oQixJQUFJLEdBQUcsT0FBT3pDLEVBQVAsRUFBVzhELFFBQVgsRUFBcUJHLFVBQXJCLEVBQWlDQyxPQUFqQyxLQUE2QztBQUN0RCxRQUFNQyw0REFBUSxDQUFDQyxnQkFBVCxDQUEwQjtBQUFDckUsT0FBRyxFQUFFQztBQUFOLEdBQTFCLEVBQXFDO0FBQ3ZDd0MsV0FBTyxFQUFFeUIsVUFBVSxHQUFHSCxRQURpQjtBQUV2Q3JCLFFBQUksRUFBRXFCLFFBQVEsR0FBR0k7QUFGc0IsR0FBckMsQ0FBTjtBQUlILENBTEQsQzs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1qQixTQUFTLEdBQUcsTUFBTTtBQUNwQixNQUFHN0MsK0NBQVEsQ0FBQ2lFLFdBQVQsQ0FBcUIsQ0FBckIsRUFBd0JDLFVBQTNCLEVBQXNDO0FBQ2xDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0E7QUFDSDs7QUFDRHBFLGlEQUFRLENBQUNxRSxPQUFULENBQWlCOUUsbUhBQWpCLEVBQTBDO0FBQ3RDK0Usa0JBQWMsRUFBRSxJQURzQjtBQUV0Q0Msb0JBQWdCLEVBQUUsS0FGb0I7QUFHdENDLG1CQUFlLEVBQUUsSUFIcUI7QUFJdENDLHNCQUFrQixFQUFFO0FBSmtCLEdBQTFDLEVBS0d0RixHQUFHLElBQUk7QUFDTixRQUFHQSxHQUFILEVBQVEsTUFBTUEsR0FBTjtBQUNSZ0YsV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDSCxHQVJEO0FBU0gsQ0FkRDs7QUFpQmV2Qix3RUFBZixFOzs7Ozs7Ozs7OztBQ25CQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvb3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9vcmRlci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnXG5cblxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbiAgICBpZighdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnQXV0ZW50aWNhY2nDs24gaW52w6FsaWRhLid9KVxuXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpXG4gICAgaWYoIWRlY29kZWQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnQXV0ZW50aWNhY2nDs24gaW52w6FsaWRhLid9KVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoe19pZDogZGVjb2RlZC5pZH0pXG5cbiAgICByZXR1cm4ge2lkOiB1c2VyLl9pZCwgcm9sZTogdXNlci5yb2xlLCByb290OiB1c2VyLnJvb3R9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGF1dGgiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdXNlcjoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOiAndXNlcidcbiAgICB9LFxuICAgIGFkZHJlc3M6IFN0cmluZyxcbiAgICBtb2JpbGU6IFN0cmluZyxcbiAgICBjYXJ0OiBBcnJheSxcbiAgICB0b3RhbDogTnVtYmVyLFxuICAgIHBheW1lbnRJZDogU3RyaW5nLFxuICAgIG1ldGhvZDogU3RyaW5nLFxuICAgIGRlbGl2ZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcGFpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgZGF0ZU9mUGF5bWVudDogRGF0ZVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLm9yZGVyIHx8IG1vbmdvb3NlLm1vZGVsKCdvcmRlcicsIG9yZGVyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHRyaW06IHRydWVcbiAgICB9LFxuICAgIHByaWNlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHRyaW06IHRydWVcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW1hZ2VzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY2hlY2tlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaW5TdG9jazoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIHNvbGQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ3Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGV2YXRjaGFubmVsL2ltYWdlL3VwbG9hZC92MTYwMjc1MjQwMi9hdmF0YXIvYXZhdGFyX2N1Z3E0MC5wbmcnXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJ1xuaW1wb3J0IE9yZGVycyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvb3JkZXJNb2RlbCdcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdE1vZGVsJ1xuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJ1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBzd2l0Y2gocmVxLm1ldGhvZCl7XG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVPcmRlcihyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICBhd2FpdCBnZXRPcmRlcnMocmVxLCByZXMpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmNvbnN0IGdldE9yZGVycyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpXG5cbiAgICAgICAgbGV0IG9yZGVycztcbiAgICAgICAgaWYocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpe1xuICAgICAgICAgICAgb3JkZXJzID0gYXdhaXQgT3JkZXJzLmZpbmQoe3VzZXI6IHJlc3VsdC5pZH0pLnBvcHVsYXRlKFwidXNlclwiLCBcIi1wYXNzd29yZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG9yZGVycyA9IGF3YWl0IE9yZGVycy5maW5kKCkucG9wdWxhdGUoXCJ1c2VyXCIsIFwiLXBhc3N3b3JkXCIpXG4gICAgICAgIH1cblxuICAgICAgICByZXMuanNvbih7b3JkZXJzfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6IGVyci5tZXNzYWdlfSlcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZU9yZGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcylcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzLCBtb2JpbGUsIGNhcnQsIHRvdGFsIH0gPSByZXEuYm9keVxuXG4gICAgICAgIGNvbnN0IG5ld09yZGVyID0gbmV3IE9yZGVycyh7XG4gICAgICAgICAgICB1c2VyOiByZXN1bHQuaWQsIGFkZHJlc3MsIG1vYmlsZSwgY2FydCwgdG90YWxcbiAgICAgICAgfSlcblxuICAgICAgICBjYXJ0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzb2xkKGl0ZW0uX2lkLCBpdGVtLnF1YW50aXR5LCBpdGVtLmluU3RvY2ssIGl0ZW0uc29sZClcbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBuZXdPcmRlci5zYXZlKClcblxuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICBtc2c6ICfCoVBlZGlkbyBleGl0b3NvISBOb3MgcG9uZHJlbW9zIGVuIGNvbnRhY3RvIGNvbnRpZ28gcGFyYSBjb25maXJtYXIgZWwgcGVkaWRvJyxcbiAgICAgICAgICAgIG5ld09yZGVyXG4gICAgICAgIH0pXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6IGVyci5tZXNzYWdlfSlcbiAgICB9XG59XG5cbmNvbnN0IHNvbGQgPSBhc3luYyAoaWQsIHF1YW50aXR5LCBvbGRJblN0b2NrLCBvbGRTb2xkKSA9PiB7XG4gICAgYXdhaXQgUHJvZHVjdHMuZmluZE9uZUFuZFVwZGF0ZSh7X2lkOiBpZH0sIHtcbiAgICAgICAgaW5TdG9jazogb2xkSW5TdG9jayAtIHF1YW50aXR5LFxuICAgICAgICBzb2xkOiBxdWFudGl0eSArIG9sZFNvbGRcbiAgICB9KVxufSIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWN0YWRvLicpXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgfSwgZXJyID0+IHtcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25lY3RhZG8gYSBtb25nb2RiLicpXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==