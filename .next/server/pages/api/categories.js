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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/categories/index.js");
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

/***/ "./models/categoriesModel.js":
/*!***********************************!*\
  !*** ./models/categoriesModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const CategoriesSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.categories || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('categories', CategoriesSchema);
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

/***/ "./pages/api/categories/index.js":
/*!***************************************!*\
  !*** ./pages/api/categories/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/categoriesModel */ "./models/categoriesModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");



Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "POST":
      await createCategory(req, res);
      break;

    case "GET":
      await getCategories(req, res);
      break;
  }
});

const createCategory = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: "Autenticación inválida"
    });
    const {
      name
    } = req.body;
    if (!name) return res.status(400).json({
      err: "El nombre no puede dejarse en blanco."
    });
    const newCategory = new _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
      name
    });
    await newCategory.save();
    res.json({
      msg: '¡Éxito!',
      newCategory
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__["default"].find();
    res.json({
      categories
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9jYXRlZ29yaWVzTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwiand0IiwidmVyaWZ5IiwicHJvY2VzcyIsInVzZXIiLCJVc2VycyIsImZpbmRPbmUiLCJfaWQiLCJpZCIsInJvbGUiLCJyb290IiwiQ2F0ZWdvcmllc1NjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsImNhdGVnb3JpZXMiLCJtb2RlbCIsInVzZXJTY2hlbWEiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiZGVmYXVsdCIsIkJvb2xlYW4iLCJhdmF0YXIiLCJjb25uZWN0REIiLCJtZXRob2QiLCJjcmVhdGVDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJyZXN1bHQiLCJib2R5IiwibmV3Q2F0ZWdvcnkiLCJDYXRlZ29yaWVzIiwic2F2ZSIsIm1zZyIsIm1lc3NhZ2UiLCJmaW5kIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRN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QVMsR0FBRyxNQUFNO0FBQ3BCLE1BQUduQiwrQ0FBUSxDQUFDK0IsV0FBVCxDQUFxQixDQUFyQixFQUF3QkMsVUFBM0IsRUFBc0M7QUFDbENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQTtBQUNIOztBQUNEbEMsaURBQVEsQ0FBQ21DLE9BQVQsQ0FBaUI1QyxtSEFBakIsRUFBMEM7QUFDdEM2QyxrQkFBYyxFQUFFLElBRHNCO0FBRXRDQyxvQkFBZ0IsRUFBRSxLQUZvQjtBQUd0Q0MsbUJBQWUsRUFBRSxJQUhxQjtBQUl0Q0Msc0JBQWtCLEVBQUU7QUFKa0IsR0FBMUMsRUFLR3BELEdBQUcsSUFBSTtBQUNOLFFBQUdBLEdBQUgsRUFBUSxNQUFNQSxHQUFOO0FBQ1I4QyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNILEdBUkQ7QUFTSCxDQWREOztBQWlCZWYsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkEseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL2NhdGVnb3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9jYXRlZ29yaWVzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCdcblxuXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICAgIGlmKCF0b2tlbikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdBdXRlbnRpY2FjacOzbiBpbnbDoWxpZGEuJ30pXG5cbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVClcbiAgICBpZighZGVjb2RlZCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdBdXRlbnRpY2FjacOzbiBpbnbDoWxpZGEuJ30pXG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7X2lkOiBkZWNvZGVkLmlkfSlcblxuICAgIHJldHVybiB7aWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYXV0aCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgQ2F0ZWdvcmllc1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHJpbTogdHJ1ZVxuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy5jYXRlZ29yaWVzIHx8IG1vbmdvb3NlLm1vZGVsKCdjYXRlZ29yaWVzJywgQ2F0ZWdvcmllc1NjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJ1xuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RldmF0Y2hhbm5lbC9pbWFnZS91cGxvYWQvdjE2MDI3NTI0MDIvYXZhdGFyL2F2YXRhcl9jdWdxNDAucG5nJ1xuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gJy4uLy4uLy4uL21vZGVscy9jYXRlZ29yaWVzTW9kZWwnXG5pbXBvcnQgYXV0aCBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnXG5cbmNvbm5lY3REQigpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHN3aXRjaChyZXEubWV0aG9kKXtcbiAgICAgICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZUNhdGVnb3J5KHJlcSwgcmVzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgICAgIGF3YWl0IGdldENhdGVnb3JpZXMocmVxLCByZXMpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcylcbiAgICAgICAgaWYocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcIkF1dGVudGljYWNpw7NuIGludsOhbGlkYVwifSlcblxuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHJlcS5ib2R5XG4gICAgICAgIGlmKCFuYW1lKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJFbCBub21icmUgbm8gcHVlZGUgZGVqYXJzZSBlbiBibGFuY28uXCJ9KVxuXG4gICAgICAgIGNvbnN0IG5ld0NhdGVnb3J5ID0gbmV3IENhdGVnb3JpZXMoe25hbWV9KVxuXG4gICAgICAgIGF3YWl0IG5ld0NhdGVnb3J5LnNhdmUoKVxuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICBtc2c6ICfCocOJeGl0byEnLFxuICAgICAgICAgICAgbmV3Q2F0ZWdvcnlcbiAgICAgICAgfSlcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn1cblxuY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBDYXRlZ29yaWVzLmZpbmQoKVxuXG4gICAgICAgIHJlcy5qc29uKHtjYXRlZ29yaWVzfSlcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn0iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjdGFkby4nKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgIH0sIGVyciA9PiB7XG4gICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWN0YWRvIGEgbW9uZ29kYi4nKVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=