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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/accessToken.js");
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

/***/ "./pages/api/auth/accessToken.js":
/*!***************************************!*\
  !*** ./pages/api/auth/accessToken.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ "./models/userModel.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/generateToken */ "./utils/generateToken.js");




Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({
      err: '¡Inicia sesión ahora!'
    });
    const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(rf_token, "!@wsQBvS$9^YkvptLk)mGEq;}#H~Efd,[^yj45NNWaJt3}B7:D'+J.S9Rk#~h-gpf8{V4%[Y?5T:hT~");
    if (!result) return res.status(400).json({
      err: 'Su token es incorrecto o ha caducado.'
    });
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].findById(result.id);
    if (!user) return res.status(400).json({
      err: 'El usuario no existe.'
    });
    const access_token = Object(_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__["createAccessToken"])({
      id: user._id
    });
    res.json({
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
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2VuZXJhdGVUb2tlbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbInVzZXJTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJyb290IiwiQm9vbGVhbiIsImF2YXRhciIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwidXNlciIsIm1vZGVsIiwiY29ubmVjdERCIiwicmVxIiwicmVzIiwicmZfdG9rZW4iLCJjb29raWVzIiwicmVmcmVzaHRva2VuIiwic3RhdHVzIiwianNvbiIsImVyciIsInJlc3VsdCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJVc2VycyIsImZpbmRCeUlkIiwiaWQiLCJhY2Nlc3NfdG9rZW4iLCJjcmVhdGVBY2Nlc3NUb2tlbiIsIl9pZCIsIm1lc3NhZ2UiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInBheWxvYWQiLCJzaWduIiwiZXhwaXJlc0luIiwiY3JlYXRlUmVmcmVzaFRva2VuIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1pQixpQkFBaUIsR0FBSVksT0FBRCxJQUFhO0FBQzFDUCxTQUFPLENBQUNDLEdBQVIsQ0FBWVgsb0RBQVo7QUFDQSxTQUFPRixtREFBRyxDQUFDb0IsSUFBSixDQUFTRCxPQUFULEVBQWtCakIsb0RBQWxCLEVBQW1EO0FBQUNtQixhQUFTLEVBQUU7QUFBWixHQUFuRCxDQUFQO0FBQ0gsQ0FITTtBQUtBLE1BQU1DLGtCQUFrQixHQUFJSCxPQUFELElBQWE7QUFDM0MsU0FBT25CLG1EQUFHLENBQUNvQixJQUFKLENBQVNELE9BQVQsRUFBa0JqQixpRkFBbEIsRUFBb0Q7QUFBQ21CLGFBQVMsRUFBRTtBQUFaLEdBQXBELENBQVA7QUFDSCxDQUZNLEM7Ozs7Ozs7Ozs7O0FDUFAseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvYWNjZXNzVG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdXRoL2FjY2Vzc1Rva2VuLmpzXCIpO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAndXNlcidcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXZhdGNoYW5uZWwvaW1hZ2UvdXBsb2FkL3YxNjAyNzUyNDAyL2F2YXRhci9hdmF0YXJfY3VncTQwLnBuZydcbiAgICB9XG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0IiwiaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXJNb2RlbCdcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgY3JlYXRlQWNjZXNzVG9rZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9nZW5lcmF0ZVRva2VuJ1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJmX3Rva2VuID0gcmVxLmNvb2tpZXMucmVmcmVzaHRva2VuO1xuICAgICAgICBpZighcmZfdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnwqFJbmljaWEgc2VzacOzbiBhaG9yYSEnfSlcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBqd3QudmVyaWZ5KHJmX3Rva2VuLCBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOX1NFQ1JFVClcbiAgICAgICAgaWYoIXJlc3VsdCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdTdSB0b2tlbiBlcyBpbmNvcnJlY3RvIG8gaGEgY2FkdWNhZG8uJ30pXG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRCeUlkKHJlc3VsdC5pZClcbiAgICAgICAgaWYoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnRWwgdXN1YXJpbyBubyBleGlzdGUuJ30pXG5cbiAgICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gY3JlYXRlQWNjZXNzVG9rZW4oe2lkOiB1c2VyLl9pZH0pXG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIGFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXIsXG4gICAgICAgICAgICAgICAgcm9vdDogdXNlci5yb290XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfWNhdGNoKGVycil7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjdGFkby4nKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgIH0sIGVyciA9PiB7XG4gICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWN0YWRvIGEgbW9uZ29kYi4nKVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBY2Nlc3NUb2tlbiA9IChwYXlsb2FkKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVClcbiAgICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCwge2V4cGlyZXNJbjogJzE1bSd9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmcmVzaFRva2VuID0gKHBheWxvYWQpID0+IHtcbiAgICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgcHJvY2Vzcy5lbnYuUkVGUkVTSF9UT0tFTl9TRUNSRVQsIHtleHBpcmVzSW46ICc3ZCd9KVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9