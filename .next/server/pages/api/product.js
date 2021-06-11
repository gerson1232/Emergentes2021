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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product/index.js");
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

/***/ "./pages/api/product/index.js":
/*!************************************!*\
  !*** ./pages/api/product/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;

    case "POST":
      await createProduct(req, res);
      break;
  }
});

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = _objectSpread({}, this.queryString);

    const excludeFields = ['page', 'sort', 'limit'];
    excludeFields.forEach(el => delete queryObj[el]);
    if (queryObj.category !== 'all') this.query.find({
      category: queryObj.category
    });
    if (queryObj.title !== 'all') this.query.find({
      title: {
        $regex: queryObj.title
      }
    });
    this.query.find();
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join('');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 6;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }

}

const getProducts = async (req, res) => {
  try {
    const features = new APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"].find(), req.query).filtering().sorting().paginating();
    const products = await features.query;
    res.json({
      status: 'success',
      result: products.length,
      products
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: 'Autenticación inválida'
    });
    const {
      title,
      price,
      inStock,
      description,
      content,
      category,
      images
    } = req.body;
    if (!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0) return res.status(400).json({
      err: '¡Agregue todos los campos!'
    });
    const newProduct = new _models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
      title: title.toLowerCase(),
      price,
      inStock,
      description,
      content,
      category,
      images
    });
    await newProduct.save();
    res.json({
      msg: '¡Éxito!'
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9wcm9kdWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwiand0IiwidmVyaWZ5IiwicHJvY2VzcyIsInVzZXIiLCJVc2VycyIsImZpbmRPbmUiLCJfaWQiLCJpZCIsInJvbGUiLCJyb290IiwicHJvZHVjdFNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJOdW1iZXIiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJBcnJheSIsImNhdGVnb3J5IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaW5TdG9jayIsInNvbGQiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCIsInVzZXJTY2hlbWEiLCJuYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImF2YXRhciIsImNvbm5lY3REQiIsIm1ldGhvZCIsImdldFByb2R1Y3RzIiwiY3JlYXRlUHJvZHVjdCIsIkFQSWZlYXR1cmVzIiwiY29uc3RydWN0b3IiLCJxdWVyeSIsInF1ZXJ5U3RyaW5nIiwiZmlsdGVyaW5nIiwicXVlcnlPYmoiLCJleGNsdWRlRmllbGRzIiwiZm9yRWFjaCIsImVsIiwiZmluZCIsIiRyZWdleCIsInNvcnRpbmciLCJzb3J0Iiwic29ydEJ5Iiwic3BsaXQiLCJqb2luIiwicGFnaW5hdGluZyIsInBhZ2UiLCJsaW1pdCIsInNraXAiLCJmZWF0dXJlcyIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJyZXN1bHQiLCJsZW5ndGgiLCJtZXNzYWdlIiwiYm9keSIsIm5ld1Byb2R1Y3QiLCJ0b0xvd2VyQ2FzZSIsInNhdmUiLCJtc2ciLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7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QXNDO0FBQ2xDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0E7QUFDSDs7QUFDRHBFLGlEQUFRLENBQUNxRSxPQUFULENBQWlCOUUsbUhBQWpCLEVBQTBDO0FBQ3RDK0Usa0JBQWMsRUFBRSxJQURzQjtBQUV0Q0Msb0JBQWdCLEVBQUUsS0FGb0I7QUFHdENDLG1CQUFlLEVBQUUsSUFIcUI7QUFJdENDLHNCQUFrQixFQUFFO0FBSmtCLEdBQTFDLEVBS0d0RixHQUFHLElBQUk7QUFDTixRQUFHQSxHQUFILEVBQVEsTUFBTUEsR0FBTjtBQUNSZ0YsV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDSCxHQVJEO0FBU0gsQ0FkRDs7QUFpQmV0Qyx3RUFBZixFOzs7Ozs7Ozs7OztBQ25CQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Byb2R1Y3QvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCBVc2VycyBmcm9tICcuLi9tb2RlbHMvdXNlck1vZGVsJ1xuXG5cbmNvbnN0IGF1dGggPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4gICAgaWYoIXRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0F1dGVudGljYWNpw7NuIGludsOhbGlkYS4nfSlcblxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxuICAgIGlmKCFkZWNvZGVkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0F1dGVudGljYWNpw7NuIGludsOhbGlkYS4nfSlcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHtfaWQ6IGRlY29kZWQuaWR9KVxuXG4gICAgcmV0dXJuIHtpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290fTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhdXRoIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHJpbTogdHJ1ZVxuICAgIH0sXG4gICAgcHJpY2U6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHJpbTogdHJ1ZVxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpbWFnZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjYXRlZ29yeToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjaGVja2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBpblN0b2NrOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgc29sZDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMucHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbCgncHJvZHVjdCcsIHByb2R1Y3RTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAndXNlcidcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXZhdGNoYW5uZWwvaW1hZ2UvdXBsb2FkL3YxNjAyNzUyNDAyL2F2YXRhci9hdmF0YXJfY3VncTQwLnBuZydcbiAgICB9XG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0IiwiaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCdcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCdcblxuY29ubmVjdERCKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICBhd2FpdCBnZXRQcm9kdWN0cyhyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlUHJvZHVjdChyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuY2xhc3MgQVBJZmVhdHVyZXMge1xuICAgIGNvbnN0cnVjdG9yKHF1ZXJ5LCBxdWVyeVN0cmluZyl7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5xdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nO1xuICAgIH1cbiAgICBmaWx0ZXJpbmcoKXtcbiAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7Li4udGhpcy5xdWVyeVN0cmluZ31cblxuICAgICAgICBjb25zdCBleGNsdWRlRmllbGRzID0gWydwYWdlJywgJ3NvcnQnLCAnbGltaXQnXVxuICAgICAgICBleGNsdWRlRmllbGRzLmZvckVhY2goZWwgPT4gZGVsZXRlKHF1ZXJ5T2JqW2VsXSkpXG5cbiAgICAgICAgaWYocXVlcnlPYmouY2F0ZWdvcnkgIT09ICdhbGwnKVxuICAgICAgICAgICAgdGhpcy5xdWVyeS5maW5kKHtjYXRlZ29yeTogcXVlcnlPYmouY2F0ZWdvcnl9KVxuICAgICAgICBpZihxdWVyeU9iai50aXRsZSAhPT0gJ2FsbCcpXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbmQoe3RpdGxlOiB7JHJlZ2V4OiBxdWVyeU9iai50aXRsZX19KVxuXG4gICAgICAgIHRoaXMucXVlcnkuZmluZCgpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNvcnRpbmcoKXtcbiAgICAgICAgaWYodGhpcy5xdWVyeVN0cmluZy5zb3J0KXtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRCeSA9IHRoaXMucXVlcnlTdHJpbmcuc29ydC5zcGxpdCgnLCcpLmpvaW4oJycpXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5zb3J0KHNvcnRCeSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5zb3J0KCctY3JlYXRlZEF0JylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBhZ2luYXRpbmcoKXtcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMucXVlcnlTdHJpbmcucGFnZSAqIDEgfHwgMVxuICAgICAgICBjb25zdCBsaW1pdCA9IHRoaXMucXVlcnlTdHJpbmcubGltaXQgKiAxIHx8IDZcbiAgICAgICAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBsaW1pdDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc2tpcChza2lwKS5saW1pdChsaW1pdClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID0gbmV3IEFQSWZlYXR1cmVzKFByb2R1Y3RzLmZpbmQoKSwgcmVxLnF1ZXJ5KVxuICAgICAgICAuZmlsdGVyaW5nKCkuc29ydGluZygpLnBhZ2luYXRpbmcoKVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmVhdHVyZXMucXVlcnlcbiAgICAgICAgXG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgcmVzdWx0OiBwcm9kdWN0cy5sZW5ndGgsXG4gICAgICAgICAgICBwcm9kdWN0c1xuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpXG4gICAgICAgIGlmKHJlc3VsdC5yb2xlICE9PSAnYWRtaW4nKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0F1dGVudGljYWNpw7NuIGludsOhbGlkYSd9KVxuXG4gICAgICAgIGNvbnN0IHt0aXRsZSwgcHJpY2UsIGluU3RvY2ssIGRlc2NyaXB0aW9uLCBjb250ZW50LCBjYXRlZ29yeSwgaW1hZ2VzfSA9IHJlcS5ib2R5XG5cbiAgICAgICAgaWYoIXRpdGxlIHx8ICFwcmljZSB8fCAhaW5TdG9jayB8fCAhZGVzY3JpcHRpb24gfHwgIWNvbnRlbnQgfHwgY2F0ZWdvcnkgPT09ICdhbGwnIHx8IGltYWdlcy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnwqFBZ3JlZ3VlIHRvZG9zIGxvcyBjYW1wb3MhJ30pXG5cblxuICAgICAgICBjb25zdCBuZXdQcm9kdWN0ID0gbmV3IFByb2R1Y3RzKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZS50b0xvd2VyQ2FzZSgpLCBwcmljZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXNcbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBuZXdQcm9kdWN0LnNhdmUoKVxuXG4gICAgICAgIHJlcy5qc29uKHttc2c6ICfCocOJeGl0byEnfSlcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn0iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjdGFkby4nKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgIH0sIGVyciA9PiB7XG4gICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWN0YWRvIGEgbW9uZ29kYi4nKVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=