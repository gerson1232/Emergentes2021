module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/categories.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/categories.js":
/*!*****************************!*\
  !*** ./pages/categories.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");

var _jsxFileName = "C:\\Users\\diedo\\Downloads\\nextjs-ecommerce-master\\nextjs-ecommerce-master\\pages\\categories.js";






const Categories = () => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]);
  const {
    categories,
    auth
  } = state;
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');

  const createCategory = async () => {
    if (auth.user.role !== 'admin') return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Autenticación inválida'
      }
    });
    if (!name) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'El nombre no puede dejarse en blanco'
      }
    });
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });
    let res;

    if (id) {
      res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__["putData"])(`categories/${id}`, {
        name
      }, auth.token);
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_4__["updateItem"])(categories, id, res.category, 'ADD_CATEGORIES'));
    } else {
      res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__["postData"])('categories', {
        name
      }, auth.token);
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      dispatch({
        type: "ADD_CATEGORIES",
        payload: [...categories, res.newCategory]
      });
    }

    setName('');
    setId('');
    return dispatch({
      type: 'NOTIFY',
      payload: {
        success: res.msg
      }
    });
  };

  const handleEditCategory = catogory => {
    setId(catogory._id);
    setName(catogory.name);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "col-md-6 mx-auto my-3",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Categor\xEDas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "input-group mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "form-control",
        placeholder: "Agregar una nueva categor\xEDa",
        value: name,
        onChange: e => setName(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-success ml-1",
        onClick: createCategory,
        children: id ? "Actualizar" : "Agregar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), categories.map(catogory => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card my-2 text-capitalize",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-body d-flex justify-content-between",
        children: [catogory.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            cursor: 'pointer'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-edit mr-2 text-info",
            onClick: () => handleEditCategory(catogory)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-trash-alt text-danger",
            "data-toggle": "modal",
            "data-target": "#exampleModal",
            onClick: () => dispatch({
              type: 'ADD_MODAL',
              payload: [{
                data: categories,
                id: catogory._id,
                title: catogory.name,
                type: 'ADD_CATEGORIES'
              }]
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }, undefined)
    }, catogory._id, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: ACTIONS, addToCart, decrease, increase, deleteItem, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrease", function() { return decrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increase", function() { return increase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
  ADD_MODAL: 'ADD_MODAL',
  ADD_ORDERS: 'ADD_ORDERS',
  ADD_USERS: 'ADD_USERS',
  ADD_CATEGORIES: 'ADD_CATEGORIES'
};
const addToCart = (product, cart) => {
  if (product.inStock === 0) return {
    type: 'NOTIFY',
    payload: {
      error: 'Este producto está agotado.'
    }
  };
  const check = cart.every(item => {
    return item._id !== product._id;
  });
  if (!check) return {
    type: 'NOTIFY',
    payload: {
      error: 'El producto ha sido añadido al carrito.'
    }
  };
  return {
    type: 'ADD_CART',
    payload: [...cart, _objectSpread(_objectSpread({}, product), {}, {
      quantity: 1
    })]
  };
};
const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach(item => {
    if (item._id === id) item.quantity -= 1;
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const increase = (data, id) => {
  const newData = [...data];
  newData.forEach(item => {
    if (item._id === id) item.quantity += 1;
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const deleteItem = (data, id, type) => {
  const newData = data.filter(item => item._id !== id);
  return {
    type,
    payload: newData
  };
};
const updateItem = (data, id, post, type) => {
  const newData = data.map(item => item._id === id ? post : item);
  return {
    type,
    payload: newData
  };
};

/***/ }),

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/*! exports provided: DataContext, DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reducers */ "./store/Reducers.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");

var _jsxFileName = "C:\\Users\\diedo\\Downloads\\nextjs-ecommerce-master\\nextjs-ecommerce-master\\store\\GlobalState.js";



const DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const DataProvider = ({
  children
}) => {
  const initialState = {
    notify: {},
    auth: {},
    cart: [],
    modal: [],
    orders: [],
    users: [],
    categories: []
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_Reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);
  const {
    cart,
    auth
  } = state;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const firstLogin = localStorage.getItem("firstLogin");

    if (firstLogin) {
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('auth/accessToken').then(res => {
        if (res.err) return localStorage.removeItem("firstLogin");
        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user
          }
        });
      });
    }

    Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('categories').then(res => {
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      dispatch({
        type: "ADD_CATEGORIES",
        payload: res.categories
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const __next__cart01__devat = JSON.parse(localStorage.getItem('__next__cart01__devat'));

    if (__next__cart01__devat) dispatch({
      type: 'ADD_CART',
      payload: __next__cart01__devat
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    localStorage.setItem('__next__cart01__devat', JSON.stringify(cart));
  }, [cart]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (auth.token) {
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('order', auth.token).then(res => {
        if (res.err) return dispatch({
          type: 'NOTIFY',
          payload: {
            error: res.err
          }
        });
        dispatch({
          type: 'ADD_ORDERS',
          payload: res.orders
        });
      });

      if (auth.user.role === 'admin') {
        Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('user', auth.token).then(res => {
          if (res.err) return dispatch({
            type: 'NOTIFY',
            payload: {
              error: res.err
            }
          });
          dispatch({
            type: 'ADD_USERS',
            payload: res.users
          });
        });
      }
    } else {
      dispatch({
        type: 'ADD_ORDERS',
        payload: []
      });
      dispatch({
        type: 'ADD_USERS',
        payload: []
      });
    }
  }, [auth.token]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./store/Reducers.js":
/*!***************************!*\
  !*** ./store/Reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "./store/Actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const reducers = (state, action) => {
  switch (action.type) {
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].NOTIFY:
      return _objectSpread(_objectSpread({}, state), {}, {
        notify: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].AUTH:
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_CART:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        modal: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_ORDERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        orders: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_USERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        users: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_CATEGORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./utils/fetchData.js":
/*!****************************!*\
  !*** ./utils/fetchData.js ***!
  \****************************/
/*! exports provided: getData, postData, putData, patchData, deleteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putData", function() { return putData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchData", function() { return patchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
const baseUrl = "http://localhost:3000";
const getData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  });
  const data = await res.json();
  return data;
};
const postData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const putData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const patchData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const deleteData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
  const data = await res.json();
  return data;
};

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0dsb2JhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNhdGVnb3JpZXMiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsImNhdGVnb3JpZXMiLCJhdXRoIiwiaWQiLCJzZXRJZCIsImNyZWF0ZUNhdGVnb3J5IiwidXNlciIsInJvbGUiLCJ0eXBlIiwicGF5bG9hZCIsImVycm9yIiwibG9hZGluZyIsInJlcyIsInB1dERhdGEiLCJ0b2tlbiIsImVyciIsInVwZGF0ZUl0ZW0iLCJjYXRlZ29yeSIsInBvc3REYXRhIiwibmV3Q2F0ZWdvcnkiLCJzdWNjZXNzIiwibXNnIiwiaGFuZGxlRWRpdENhdGVnb3J5IiwiY2F0b2dvcnkiLCJfaWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJjdXJzb3IiLCJkYXRhIiwidGl0bGUiLCJBQ1RJT05TIiwiTk9USUZZIiwiQVVUSCIsIkFERF9DQVJUIiwiQUREX01PREFMIiwiQUREX09SREVSUyIsIkFERF9VU0VSUyIsIkFERF9DQVRFR09SSUVTIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsImNhcnQiLCJpblN0b2NrIiwiY2hlY2siLCJldmVyeSIsIml0ZW0iLCJxdWFudGl0eSIsImRlY3JlYXNlIiwibmV3RGF0YSIsImZvckVhY2giLCJpbmNyZWFzZSIsImRlbGV0ZUl0ZW0iLCJmaWx0ZXIiLCJwb3N0IiwiY3JlYXRlQ29udGV4dCIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwibm90aWZ5IiwibW9kYWwiLCJvcmRlcnMiLCJ1c2VycyIsInVzZVJlZHVjZXIiLCJyZWR1Y2VycyIsInVzZUVmZmVjdCIsImZpcnN0TG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0RGF0YSIsInRoZW4iLCJyZW1vdmVJdGVtIiwiYWNjZXNzX3Rva2VuIiwiX19uZXh0X19jYXJ0MDFfX2RldmF0IiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFjdGlvbiIsImJhc2VVcmwiLCJwcm9jZXNzIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsImJvZHkiLCJwYXRjaERhdGEiLCJkZWxldGVEYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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R0FBRyxNQUFNbEIsR0FBRyxDQUFDeUUsSUFBSixFQUFuQjtBQUNBLFNBQU92RCxJQUFQO0FBQ0gsQ0FYTSxDOzs7Ozs7Ozs7OztBQzNEUCxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9jYXRlZ29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jYXRlZ29yaWVzLmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0RhdGFDb250ZXh0fSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcbmltcG9ydCB7dXBkYXRlSXRlbX0gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcbmltcG9ydCB7IHBvc3REYXRhLCBwdXREYXRhIH0gZnJvbSBcIi4uL3V0aWxzL2ZldGNoRGF0YVwiO1xuXG5jb25zdCBDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICAgIGNvbnN0IHtjYXRlZ29yaWVzLCBhdXRofSA9IHN0YXRlXG4gICAgXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZihhdXRoLnVzZXIucm9sZSAhPT0gJ2FkbWluJylcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnQXV0ZW50aWNhY2nDs24gaW52w6FsaWRhJ319KVxuXG4gICAgICAgIGlmKCFuYW1lKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdFbCBub21icmUgbm8gcHVlZGUgZGVqYXJzZSBlbiBibGFuY28nfX0pXG5cbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7bG9hZGluZzogdHJ1ZX19KVxuXG4gICAgICAgIGxldCByZXM7XG4gICAgICAgIGlmKGlkKXtcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHB1dERhdGEoYGNhdGVnb3JpZXMvJHtpZH1gLCB7bmFtZX0sIGF1dGgudG9rZW4pXG4gICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9fSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUl0ZW0oY2F0ZWdvcmllcywgaWQsIHJlcy5jYXRlZ29yeSwgJ0FERF9DQVRFR09SSUVTJykpXG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXMgPSBhd2FpdCBwb3N0RGF0YSgnY2F0ZWdvcmllcycsIHtuYW1lfSwgYXV0aC50b2tlbilcbiAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUREX0NBVEVHT1JJRVNcIiwgcGF5bG9hZDogWy4uLmNhdGVnb3JpZXMsIHJlcy5uZXdDYXRlZ29yeV19KVxuICAgICAgICB9XG4gICAgICAgIHNldE5hbWUoJycpXG4gICAgICAgIHNldElkKCcnKVxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogcmVzLm1zZ319KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVkaXRDYXRlZ29yeSA9IChjYXRvZ29yeSkgPT4ge1xuICAgICAgICBzZXRJZChjYXRvZ29yeS5faWQpXG4gICAgICAgIHNldE5hbWUoY2F0b2dvcnkubmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbXgtYXV0byBteS0zXCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q2F0ZWdvcsOtYXM8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdyZWdhciB1bmEgbnVldmEgY2F0ZWdvcsOtYVwiIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbWwtMVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlQ2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAgICB7aWQgPyBcIkFjdHVhbGl6YXJcIjogXCJBZ3JlZ2FyXCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKGNhdG9nb3J5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdG9nb3J5Ll9pZH0gY2xhc3NOYW1lPVwiY2FyZCBteS0yIHRleHQtY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdG9nb3J5Lm5hbWV9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVkaXQgbXItMiB0ZXh0LWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0Q2F0ZWdvcnkoY2F0b2dvcnkpfT48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdCB0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQUREX01PREFMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IFt7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGNhdGVnb3JpZXMsIGlkOiBjYXRvZ29yeS5faWQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBjYXRvZ29yeS5uYW1lLCB0eXBlOiAnQUREX0NBVEVHT1JJRVMnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzIiwiZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgTk9USUZZOiAnTk9USUZZJyxcbiAgICBBVVRIOiAnQVVUSCcsXG4gICAgQUREX0NBUlQ6ICdBRERfQ0FSVCcsXG4gICAgQUREX01PREFMOiAnQUREX01PREFMJyxcbiAgICBBRERfT1JERVJTOiAnQUREX09SREVSUycsXG4gICAgQUREX1VTRVJTOiAnQUREX1VTRVJTJyxcbiAgICBBRERfQ0FURUdPUklFUzogJ0FERF9DQVRFR09SSUVTJyxcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0LCBjYXJ0KSA9PiB7XG4gICAgaWYocHJvZHVjdC5pblN0b2NrID09PSAwKVxuICAgIHJldHVybiAoeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnRXN0ZSBwcm9kdWN0byBlc3TDoSBhZ290YWRvLid9IH0pIFxuXG4gICAgY29uc3QgY2hlY2sgPSBjYXJ0LmV2ZXJ5KGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkXG4gICAgfSlcblxuICAgIGlmKCFjaGVjaykgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdFbCBwcm9kdWN0byBoYSBzaWRvIGHDsWFkaWRvIGFsIGNhcnJpdG8uJ30gfSkgXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogWy4uLmNhcnQsIHsuLi5wcm9kdWN0LCBxdWFudGl0eTogMX1dIH0pIFxufVxuXG5leHBvcnQgY29uc3QgZGVjcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZihpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgLT0gMVxuICAgIH0pXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5jcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZihpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgKz0gMVxuICAgIH0pXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxufVxuXG5cbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtID0gKGRhdGEsIGlkLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgIT09IGlkKVxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YSwgaWQsIHBvc3QsIHR5cGUpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoaXRlbSA9PiAoaXRlbS5faWQgPT09IGlkID8gcG9zdCA6IGl0ZW0pKVxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXJzJ1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcblxuXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IFxuICAgICAgICBub3RpZnk6IHt9LCBhdXRoOiB7fSwgY2FydDogW10sIG1vZGFsOiBbXSwgb3JkZXJzOiBbXSwgdXNlcnM6IFtdLCBjYXRlZ29yaWVzOiBbXVxuICAgIH1cblxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKVxuICAgIGNvbnN0IHsgY2FydCwgYXV0aCB9ID0gc3RhdGVcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0TG9naW5cIik7XG4gICAgICAgIGlmKGZpcnN0TG9naW4pe1xuICAgICAgICAgICAgZ2V0RGF0YSgnYXV0aC9hY2Nlc3NUb2tlbicpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJmaXJzdExvZ2luXCIpXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyBcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJBVVRIXCIsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVzLnVzZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGF0YSgnY2F0ZWdvcmllcycpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxuXG4gICAgICAgICAgICBkaXNwYXRjaCh7IFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQUREX0NBVEVHT1JJRVNcIixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXMuY2F0ZWdvcmllc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSxbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fbmV4dF9fY2FydDAxX19kZXZhdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9fY2FydDAxX19kZXZhdCcpKVxuXG4gICAgICAgIGlmKF9fbmV4dF9fY2FydDAxX19kZXZhdCkgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBfX25leHRfX2NhcnQwMV9fZGV2YXQgfSlcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfX2NhcnQwMV9fZGV2YXQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSlcbiAgICB9LCBbY2FydF0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihhdXRoLnRva2VuKXtcbiAgICAgICAgICAgIGdldERhdGEoJ29yZGVyJywgYXV0aC50b2tlbilcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfT1JERVJTJywgcGF5bG9hZDogcmVzLm9yZGVyc30pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZihhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyl7XG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgndXNlcicsIGF1dGgudG9rZW4pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogcmVzLnVzZXJzfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IFtdfSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW119KVxuICAgICAgICB9XG4gICAgfSxbYXV0aC50b2tlbl0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iLCJpbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSAnLi9BY3Rpb25zJ1xuXG5cbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIEFDVElPTlMuTk9USUZZOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEFDVElPTlMuQVVUSDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfQ0FSVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfTU9EQUw6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1vZGFsOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9PUkRFUlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG9yZGVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfVVNFUlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9DQVRFR09SSUVTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzIiwiY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMXG5cbmV4cG9ydCBjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59XG5cblxuXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgcGF0Y2hEYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuXG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9