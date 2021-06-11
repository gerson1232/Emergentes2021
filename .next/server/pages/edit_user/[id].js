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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/edit_user/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/edit_user/[id].js":
/*!*********************************!*\
  !*** ./pages/edit_user/[id].js ***!
  \*********************************/
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
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/Actions */ "./store/Actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/fetchData */ "./utils/fetchData.js");

var _jsxFileName = "C:\\Users\\diedo\\Downloads\\nextjs-ecommerce-master\\nextjs-ecommerce-master\\pages\\edit_user\\[id].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const EditUser = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]);
  const {
    auth,
    users
  } = state;
  const {
    0: editUser,
    1: setEditUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: checkAdmin,
    1: setCheckAdmin
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: num,
    1: setNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    users.forEach(user => {
      if (user._id === id) {
        setEditUser(user);
        setCheckAdmin(user.role === 'admin' ? true : false);
      }
    });
  }, [users]);

  const handleCheck = () => {
    setCheckAdmin(!checkAdmin);
    setNum(num + 1);
  };

  const handleSubmit = () => {
    let role = checkAdmin ? 'admin' : 'user';

    if (num % 2 !== 0) {
      dispatch({
        type: 'NOTIFY',
        payload: {
          loading: true
        }
      });
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_6__["patchData"])(`user/${editUser._id}`, {
        role
      }, auth.token).then(res => {
        if (res.err) return dispatch({
          type: 'NOTIFY',
          payload: {
            error: res.err
          }
        });
        dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_4__["updateItem"])(users, editUser._id, _objectSpread(_objectSpread({}, editUser), {}, {
          role
        }), 'ADD_USERS'));
        return dispatch({
          type: 'NOTIFY',
          payload: {
            success: res.msg
          }
        });
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "edit_user my-3",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Editar Usuario"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-info",
        onClick: () => router.back(),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-long-arrow-alt-left",
          "aria-hidden": true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined), " Regresar"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-4 mx-auto my-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-uppercase text-secondary",
        children: "Editar Usuario"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "name",
          className: "d-block",
          children: "Nombre"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "name",
          defaultValue: editUser.name,
          disabled: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          className: "d-block",
          children: "Correo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "email",
          defaultValue: editUser.email,
          disabled: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          id: "isAdmin",
          checked: checkAdmin,
          style: {
            width: '20px',
            height: '20px'
          },
          onChange: handleCheck
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "isAdmin",
          style: {
            transform: 'translate(4px, -3px)'
          },
          children: "Admin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-success",
        onClick: handleSubmit,
        children: "Actualizar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EditUser);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZWRpdF91c2VyLy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0dsb2JhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRWRpdFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsImF1dGgiLCJ1c2VycyIsImVkaXRVc2VyIiwic2V0RWRpdFVzZXIiLCJ1c2VTdGF0ZSIsImNoZWNrQWRtaW4iLCJzZXRDaGVja0FkbWluIiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsInVzZXIiLCJfaWQiLCJyb2xlIiwiaGFuZGxlQ2hlY2siLCJoYW5kbGVTdWJtaXQiLCJ0eXBlIiwicGF5bG9hZCIsImxvYWRpbmciLCJwYXRjaERhdGEiLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJlcnIiLCJlcnJvciIsInVwZGF0ZUl0ZW0iLCJzdWNjZXNzIiwibXNnIiwiYmFjayIsIm5hbWUiLCJlbWFpbCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwiQUNUSU9OUyIsIk5PVElGWSIsIkFVVEgiLCJBRERfQ0FSVCIsIkFERF9NT0RBTCIsIkFERF9PUkRFUlMiLCJBRERfVVNFUlMiLCJBRERfQ0FURUdPUklFUyIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJjYXJ0IiwiaW5TdG9jayIsImNoZWNrIiwiZXZlcnkiLCJpdGVtIiwicXVhbnRpdHkiLCJkZWNyZWFzZSIsImRhdGEiLCJuZXdEYXRhIiwiaW5jcmVhc2UiLCJkZWxldGVJdGVtIiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsImNyZWF0ZUNvbnRleHQiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsImluaXRpYWxTdGF0ZSIsIm5vdGlmeSIsIm1vZGFsIiwib3JkZXJzIiwiY2F0ZWdvcmllcyIsInVzZVJlZHVjZXIiLCJyZWR1Y2VycyIsImZpcnN0TG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0RGF0YSIsInJlbW92ZUl0ZW0iLCJhY2Nlc3NfdG9rZW4iLCJfX25leHRfX2NhcnQwMV9fZGV2YXQiLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWN0aW9uIiwiYmFzZVVybCIsInByb2Nlc3MiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJqc29uIiwicG9zdERhdGEiLCJib2R5IiwicHV0RGF0YSIsImRlbGV0ZURhdGEiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FB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QXNCO0FBQzVDLFFBQU1FLEdBQUcsR0FBRyxNQUFNNkQsS0FBSyxDQUFFLEdBQUVILE9BQVEsUUFBT0UsR0FBSSxFQUF2QixFQUEwQjtBQUM3Q0UsVUFBTSxFQUFFLFFBRHFDO0FBRTdDQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0Isa0JBRFg7QUFFTCx1QkFBaUJqRTtBQUZaO0FBRm9DLEdBQTFCLENBQXZCO0FBUUEsUUFBTStCLElBQUksR0FBRyxNQUFNN0IsR0FBRyxDQUFDZ0UsSUFBSixFQUFuQjtBQUNBLFNBQU9uQyxJQUFQO0FBQ0gsQ0FYTSxDOzs7Ozs7Ozs7OztBQzNEUCxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9lZGl0X3VzZXIvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZWRpdF91c2VyL1tpZF0uanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0RhdGFDb250ZXh0fSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSdcbmltcG9ydCB7dXBkYXRlSXRlbX0gZnJvbSAnLi4vLi4vc3RvcmUvQWN0aW9ucydcblxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtwYXRjaERhdGF9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoRGF0YSdcblxuY29uc3QgRWRpdFVzZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IGlkIH09IHJvdXRlci5xdWVyeVxuXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICAgIGNvbnN0IHthdXRoLCB1c2Vyc30gPSBzdGF0ZVxuXG4gICAgY29uc3QgW2VkaXRVc2VyLCBzZXRFZGl0VXNlcl0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbY2hlY2tBZG1pbiwgc2V0Q2hlY2tBZG1pbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbnVtLCBzZXROdW1dID0gdXNlU3RhdGUoMClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBpZih1c2VyLl9pZCA9PT0gaWQpe1xuICAgICAgICAgICAgICAgIHNldEVkaXRVc2VyKHVzZXIpXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tBZG1pbih1c2VyLnJvbGUgPT09ICdhZG1pbicgPyB0cnVlIDogZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxbdXNlcnNdKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hlY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldENoZWNrQWRtaW4oIWNoZWNrQWRtaW4pXG4gICAgICAgIHNldE51bShudW0gKyAxKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJvbGUgPSBjaGVja0FkbWluID8gJ2FkbWluJyA6ICd1c2VyJ1xuICAgICAgICBpZihudW0gJSAyICE9PSAwKXtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2xvYWRpbmc6IHRydWV9fSlcbiAgICAgICAgICAgIHBhdGNoRGF0YShgdXNlci8ke2VkaXRVc2VyLl9pZH1gLCB7cm9sZX0sIGF1dGgudG9rZW4pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxuXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlSXRlbSh1c2VycywgZWRpdFVzZXIuX2lkLCB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmVkaXRVc2VyLCByb2xlXG4gICAgICAgICAgICAgICAgfSwgJ0FERF9VU0VSUycpKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge3N1Y2Nlc3M6IHJlcy5tc2d9fSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X3VzZXIgbXktM1wiPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkVkaXRhciBVc3VhcmlvPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtbGVmdFwiIGFyaWEtaGlkZGVuPjwvaT4gUmVncmVzYXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG14LWF1dG8gbXktNFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LXNlY29uZGFyeVwiPkVkaXRhciBVc3VhcmlvPC9oMj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJkLWJsb2NrXCI+Tm9tYnJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXtlZGl0VXNlci5uYW1lfSBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJkLWJsb2NrXCI+Q29ycmVvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIGRlZmF1bHRWYWx1ZT17ZWRpdFVzZXIuZW1haWx9IGRpc2FibGVkIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiaXNBZG1pblwiIGNoZWNrZWQ9e2NoZWNrQWRtaW59XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcyMHB4JywgaGVpZ2h0OiAnMjBweCd9fSBvbkNoYW5nZT17aGFuZGxlQ2hlY2t9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpc0FkbWluXCIgc3R5bGU9e3t0cmFuc2Zvcm06ICd0cmFuc2xhdGUoNHB4LCAtM3B4KSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkbWluXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+QWN0dWFsaXphcjwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRVc2VyIiwiZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgTk9USUZZOiAnTk9USUZZJyxcbiAgICBBVVRIOiAnQVVUSCcsXG4gICAgQUREX0NBUlQ6ICdBRERfQ0FSVCcsXG4gICAgQUREX01PREFMOiAnQUREX01PREFMJyxcbiAgICBBRERfT1JERVJTOiAnQUREX09SREVSUycsXG4gICAgQUREX1VTRVJTOiAnQUREX1VTRVJTJyxcbiAgICBBRERfQ0FURUdPUklFUzogJ0FERF9DQVRFR09SSUVTJyxcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0LCBjYXJ0KSA9PiB7XG4gICAgaWYocHJvZHVjdC5pblN0b2NrID09PSAwKVxuICAgIHJldHVybiAoeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnRXN0ZSBwcm9kdWN0byBlc3TDoSBhZ290YWRvLid9IH0pIFxuXG4gICAgY29uc3QgY2hlY2sgPSBjYXJ0LmV2ZXJ5KGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkXG4gICAgfSlcblxuICAgIGlmKCFjaGVjaykgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdFbCBwcm9kdWN0byBoYSBzaWRvIGHDsWFkaWRvIGFsIGNhcnJpdG8uJ30gfSkgXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogWy4uLmNhcnQsIHsuLi5wcm9kdWN0LCBxdWFudGl0eTogMX1dIH0pIFxufVxuXG5leHBvcnQgY29uc3QgZGVjcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZihpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgLT0gMVxuICAgIH0pXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5jcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZihpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgKz0gMVxuICAgIH0pXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxufVxuXG5cbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtID0gKGRhdGEsIGlkLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgIT09IGlkKVxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YSwgaWQsIHBvc3QsIHR5cGUpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoaXRlbSA9PiAoaXRlbS5faWQgPT09IGlkID8gcG9zdCA6IGl0ZW0pKVxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXJzJ1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcblxuXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IFxuICAgICAgICBub3RpZnk6IHt9LCBhdXRoOiB7fSwgY2FydDogW10sIG1vZGFsOiBbXSwgb3JkZXJzOiBbXSwgdXNlcnM6IFtdLCBjYXRlZ29yaWVzOiBbXVxuICAgIH1cblxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKVxuICAgIGNvbnN0IHsgY2FydCwgYXV0aCB9ID0gc3RhdGVcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0TG9naW5cIik7XG4gICAgICAgIGlmKGZpcnN0TG9naW4pe1xuICAgICAgICAgICAgZ2V0RGF0YSgnYXV0aC9hY2Nlc3NUb2tlbicpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJmaXJzdExvZ2luXCIpXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyBcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJBVVRIXCIsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVzLnVzZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGF0YSgnY2F0ZWdvcmllcycpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxuXG4gICAgICAgICAgICBkaXNwYXRjaCh7IFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQUREX0NBVEVHT1JJRVNcIixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXMuY2F0ZWdvcmllc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSxbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fbmV4dF9fY2FydDAxX19kZXZhdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9fY2FydDAxX19kZXZhdCcpKVxuXG4gICAgICAgIGlmKF9fbmV4dF9fY2FydDAxX19kZXZhdCkgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBfX25leHRfX2NhcnQwMV9fZGV2YXQgfSlcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfX2NhcnQwMV9fZGV2YXQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSlcbiAgICB9LCBbY2FydF0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihhdXRoLnRva2VuKXtcbiAgICAgICAgICAgIGdldERhdGEoJ29yZGVyJywgYXV0aC50b2tlbilcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfT1JERVJTJywgcGF5bG9hZDogcmVzLm9yZGVyc30pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZihhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyl7XG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgndXNlcicsIGF1dGgudG9rZW4pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogcmVzLnVzZXJzfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IFtdfSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW119KVxuICAgICAgICB9XG4gICAgfSxbYXV0aC50b2tlbl0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iLCJpbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSAnLi9BY3Rpb25zJ1xuXG5cbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIEFDVElPTlMuTk9USUZZOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEFDVElPTlMuQVVUSDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfQ0FSVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfTU9EQUw6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1vZGFsOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9PUkRFUlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG9yZGVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfVVNFUlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9DQVRFR09SSUVTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzIiwiY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMXG5cbmV4cG9ydCBjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59XG5cblxuXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgcGF0Y2hEYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuXG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9