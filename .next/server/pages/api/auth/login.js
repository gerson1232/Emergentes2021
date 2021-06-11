module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/login.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ "./models/userModel.js");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/generateToken */ "./utils/generateToken.js");




Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
});

const login = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      email
    });
    if (!user) return res.status(400).json({
      err: 'No existe el usuario.'
    });
    const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default.a.compare(password, user.password);
    if (!isMatch) return res.status(400).json({
      err: 'Contraseña incorrecta.'
    });
    const access_token = Object(_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__["createAccessToken"])({
      id: user._id
    });
    const refresh_token = Object(_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__["createRefreshToken"])({
      id: user._id
    });
    res.json({
      msg: "¡Inicio de sesión exitoso!",
      refresh_token,
      access_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root
      }
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

/***/ "./utils/generateToken.js":
/*!********************************!*\
  !*** ./utils/generateToken.js ***!
  \********************************/
/*! exports provided: createAccessToken, createRefreshToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccessToken", function() { return createAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRefreshToken", function() { return createRefreshToken; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const createAccessToken = payload => {
  console.log("ek%LcLD3TL#dSA~*4X'+X_a?j$dfM*@VS2Ler}5j6^+N4rX+p?");
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, "ek%LcLD3TL#dSA~*4X'+X_a?j$dfM*@VS2Ler}5j6^+N4rX+p?", {
    expiresIn: '15m'
  });
};
const createRefreshToken = payload => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, "!@wsQBvS$9^YkvptLk)mGEq;}#H~Efd,[^yj45NNWaJt3}B7:D'+J.S9Rk#~h-gpf8{V4%[Y?5T:hT~", {
    expiresIn: '7d'
  });
};

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2VuZXJhdGVUb2tlbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbInVzZXJTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJyb290IiwiQm9vbGVhbiIsImF2YXRhciIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwidXNlciIsIm1vZGVsIiwiY29ubmVjdERCIiwicmVxIiwicmVzIiwibWV0aG9kIiwibG9naW4iLCJib2R5IiwiVXNlcnMiLCJmaW5kT25lIiwic3RhdHVzIiwianNvbiIsImVyciIsImlzTWF0Y2giLCJiY3J5cHQiLCJjb21wYXJlIiwiYWNjZXNzX3Rva2VuIiwiY3JlYXRlQWNjZXNzVG9rZW4iLCJpZCIsIl9pZCIsInJlZnJlc2hfdG9rZW4iLCJjcmVhdGVSZWZyZXNoVG9rZW4iLCJtc2ciLCJtZXNzYWdlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwicGF5bG9hZCIsImp3dCIsInNpZ24iLCJleHBpcmVzSW4iXSwibWFwcGlu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QUFjLEVBQUUsSUFEc0I7QUFFdENDLG9CQUFnQixFQUFFLEtBRm9CO0FBR3RDQyxtQkFBZSxFQUFFLElBSHFCO0FBSXRDQyxzQkFBa0IsRUFBRTtBQUprQixHQUExQyxFQUtHckIsR0FBRyxJQUFJO0FBQ04sUUFBR0EsR0FBSCxFQUFRLE1BQU1BLEdBQU47QUFDUmMsV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDSCxHQVJEO0FBU0gsQ0FkRDs7QUFpQmV6Qix3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTWUsaUJBQWlCLEdBQUlpQixPQUFELElBQWE7QUFDMUNSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxvREFBWjtBQUNBLFNBQU9NLG1EQUFHLENBQUNDLElBQUosQ0FBU0YsT0FBVCxFQUFrQkwsb0RBQWxCLEVBQW1EO0FBQUNRLGFBQVMsRUFBRTtBQUFaLEdBQW5ELENBQVA7QUFDSCxDQUhNO0FBS0EsTUFBTWhCLGtCQUFrQixHQUFJYSxPQUFELElBQWE7QUFDM0MsU0FBT0MsbURBQUcsQ0FBQ0MsSUFBSixDQUFTRixPQUFULEVBQWtCTCxpRkFBbEIsRUFBb0Q7QUFBQ1EsYUFBUyxFQUFFO0FBQVosR0FBcEQsQ0FBUDtBQUNILENBRk0sQzs7Ozs7Ozs7Ozs7QUNQUCxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJ1xuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RldmF0Y2hhbm5lbC9pbWFnZS91cGxvYWQvdjE2MDI3NTI0MDIvYXZhdGFyL2F2YXRhcl9jdWdxNDAucG5nJ1xuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcbmltcG9ydCBVc2VycyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdXNlck1vZGVsJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgeyBjcmVhdGVBY2Nlc3NUb2tlbiwgY3JlYXRlUmVmcmVzaFRva2VuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZ2VuZXJhdGVUb2tlbidcblxuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBzd2l0Y2gocmVxLm1ldGhvZCl7XG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICBhd2FpdCBsb2dpbihyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuY29uc3QgbG9naW4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgZW1haWwgfSlcbiAgICAgICAgaWYoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnTm8gZXhpc3RlIGVsIHVzdWFyaW8uJ30pXG5cbiAgICAgICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuICAgICAgICBpZighaXNNYXRjaCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdDb250cmFzZcOxYSBpbmNvcnJlY3RhLid9KVxuXG4gICAgICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9IGNyZWF0ZUFjY2Vzc1Rva2VuKHtpZDogdXNlci5faWR9KVxuICAgICAgICBjb25zdCByZWZyZXNoX3Rva2VuID0gY3JlYXRlUmVmcmVzaFRva2VuKHtpZDogdXNlci5faWR9KVxuICAgICAgICBcbiAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgbXNnOiBcIsKhSW5pY2lvIGRlIHNlc2nDs24gZXhpdG9zbyFcIixcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW4sXG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyLFxuICAgICAgICAgICAgICAgIHJvb3Q6IHVzZXIucm9vdFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfWNhdGNoKGVycil7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXG4gICAgfVxufSIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWN0YWRvLicpXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgfSwgZXJyID0+IHtcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25lY3RhZG8gYSBtb25nb2RiLicpXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjY2Vzc1Rva2VuID0gKHBheWxvYWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxuICAgIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULCB7ZXhwaXJlc0luOiAnMTVtJ30pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZWZyZXNoVG9rZW4gPSAocGF5bG9hZCkgPT4ge1xuICAgIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOX1NFQ1JFVCwge2V4cGlyZXNJbjogJzdkJ30pXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9