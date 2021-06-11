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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/Actions */ "./store/Actions.js");

var _jsxFileName = "C:\\Users\\diedo\\Downloads\\nextjs-ecommerce-master\\nextjs-ecommerce-master\\pages\\product\\[id].js";






const DetailProduct = props => {
  const {
    0: product
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.product);
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__["DataContext"]);
  const {
    cart
  } = state;

  const isActive = index => {
    if (tab === index) return " active";
    return "";
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row detail_page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Detalle de Producto"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: product.images[tab].url,
        alt: product.images[tab].url,
        className: "d-block img-thumbnail rounded mt-4 w-100",
        style: {
          height: '350px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row mx-0",
        style: {
          cursor: 'pointer'
        },
        children: product.images.map((img, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: img.url,
          alt: img.url,
          className: `img-thumbnail rounded ${isActive(index)}`,
          style: {
            height: '80px',
            width: '20%'
          },
          onClick: () => setTab(index)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-6 mt-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-uppercase",
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        className: "text-danger",
        children: ["$", product.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row mx-0 d-flex justify-content-between",
        children: [product.inStock > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "text-danger",
          children: ["En Stock: ", product.inStock]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 27
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "text-danger",
          children: "Sin Stock"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 27
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "text-danger",
          children: ["Vendidos: ", product.sold]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-2",
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-2",
        children: product.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "btn btn-success d-block my-3 px-5",
        onClick: () => dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_5__["addToCart"])(product, cart)),
        children: "Comprar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

async function getServerSideProps({
  params: {
    id
  }
}) {
  const res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])(`product/${id}`); // server side rendering

  return {
    props: {
      product: res.product
    } // will be passed to the page component as props

  };
}
/* harmony default export */ __webpack_exports__["default"] = (DetailProduct);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdC8uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJEZXRhaWxQcm9kdWN0IiwicHJvcHMiLCJwcm9kdWN0IiwidXNlU3RhdGUiLCJ0YWIiLCJzZXRUYWIiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiY2FydCIsImlzQWN0aXZlIiwiaW5kZXgiLCJpbWFnZXMiLCJ1cmwiLCJoZWlnaHQiLCJjdXJzb3IiLCJtYXAiLCJpbWciLCJ3aWR0aCIsInRpdGxlIiwicHJpY2UiLCJpblN0b2NrIiwic29sZCIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsImFkZFRvQ2FydCIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsImlkIiwicmVzIiwiZ2V0RGF0YSIsIkFDVElPTlMiLCJOT1RJRlkiLCJBVVRIIiwiQUREX0NBUlQiLCJBRERfTU9EQUwiLCJBRERfT1JERVJTIiwiQUREX1VTRVJTIiwiQUREX0NBVEVHT1JJRVMiLCJ0eXBlIiwicGF5bG9hZCIsImVycm9yIiwiY2hlY2siLCJldmVyeSIsIml0ZW0iLCJfaWQiLCJxdWFudGl0eSIsImRlY3JlYXNlIiwiZGF0YSIsIm5ld0RhdGEiLCJmb3JFYWNoIiwiaW5jcmVhc2UiLCJkZWxldGVJdGVtIiwiZmlsdGVyIiwidXBkYXRlSXRlbSIsInBvc3QiLCJjcmVhdGVDb250ZXh0IiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpbml0aWFsU3RhdGUiLCJub3RpZnkiLCJhdXRoIiwibW9kYWwiLCJvcmRlcnMiLCJ1c2VycyIsImNhdGVnb3JpZXMiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlcnMiLCJ1c2VFZmZlY3QiLCJmaXJzdExvZ2luIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJlcnIiLCJyZW1vdmVJdGVtIiwidG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJ1c2VyIiwiX19uZXh0X19jYXJ0MDFfX2RldmF0IiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJvbGUiLCJhY3Rpb24iLCJiYXNlVXJsIiwicHJvY2VzcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImpzb24iLCJwb3N0RGF0YSIsImJvZHkiLCJwdXREYXRhIiwicGF0Y2hEYXRhIiwiZGVsZXRlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtR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LENBQUNHLFNBQUwsQ0FBZTNCLElBQWY7QUFOdUMsR0FBMUIsQ0FBdkI7QUFTQSxRQUFNUCxJQUFJLEdBQUcsTUFBTW5CLEdBQUcsQ0FBQzZELElBQUosRUFBbkI7QUFDQSxTQUFPMUMsSUFBUDtBQUNILENBWk07QUFlQSxNQUFNK0MsVUFBVSxHQUFHLE9BQU9sRixHQUFQLEVBQVk4RCxLQUFaLEtBQXNCO0FBQzVDLFFBQU05QyxHQUFHLEdBQUcsTUFBTTBELEtBQUssQ0FBRSxHQUFFRixPQUFRLFFBQU94RSxHQUFJLEVBQXZCLEVBQTBCO0FBQzdDMkUsVUFBTSxFQUFFLFFBRHFDO0FBRTdDQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0Isa0JBRFg7QUFFTCx1QkFBaUJkO0FBRlo7QUFGb0MsR0FBMUIsQ0FBdkI7QUFRQSxRQUFNM0IsSUFBSSxHQUFHLE1BQU1uQixHQUFHLENBQUM2RCxJQUFKLEVBQW5CO0FBQ0EsU0FBTzFDLElBQVA7QUFDSCxDQVhNLEM7Ozs7Ozs7Ozs7O0FDM0RQLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZHVjdC9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaERhdGEnXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSAnLi4vLi4vc3RvcmUvQWN0aW9ucydcblxuY29uc3QgRGV0YWlsUHJvZHVjdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtwcm9kdWN0XSA9IHVzZVN0YXRlKHByb3BzLnByb2R1Y3QpXG4gICAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApXG5cbiAgICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgICBjb25zdCB7IGNhcnQgfSA9IHN0YXRlXG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZih0YWIgPT09IGluZGV4KSByZXR1cm4gXCIgYWN0aXZlXCI7XG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkZXRhaWxfcGFnZVwiPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkRldGFsbGUgZGUgUHJvZHVjdG88L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eyBwcm9kdWN0LmltYWdlc1t0YWJdLnVybCB9IGFsdD17IHByb2R1Y3QuaW1hZ2VzW3RhYl0udXJsIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIGltZy10aHVtYm5haWwgcm91bmRlZCBtdC00IHctMTAwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzM1MHB4J319IC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC0wXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319ID5cblxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5pbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IHNyYz17aW1nLnVybH0gYWx0PXtpbWcudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW1nLXRodW1ibmFpbCByb3VuZGVkICR7aXNBY3RpdmUoaW5kZXgpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzgwcHgnLCB3aWR0aDogJzIwJSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKGluZGV4KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTNcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj57cHJvZHVjdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPiR7cHJvZHVjdC5wcmljZX08L2g1PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pblN0b2NrID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8aDYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5FbiBTdG9jazoge3Byb2R1Y3QuaW5TdG9ja308L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5TaW4gU3RvY2s8L2g2PlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+VmVuZGlkb3M6IHtwcm9kdWN0LnNvbGR9PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGQtYmxvY2sgbXktMyBweC01XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCwgY2FydCkpfSA+XG4gICAgICAgICAgICAgICAgICAgIENvbXByYXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zOiB7aWR9fSkge1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RGF0YShgcHJvZHVjdC8ke2lkfWApXG4gICAgLy8gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IHByb2R1Y3Q6IHJlcy5wcm9kdWN0IH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQcm9kdWN0IiwiZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgTk9USUZZOiAnTk9USUZZJyxcbiAgICBBVVRIOiAnQVVUSCcsXG4gICAgQUREX0NBUlQ6ICdBRERfQ0FSVCcsXG4gICAgQUREX01PREFMOiAnQUREX01PREFMJyxcbiAgICBBRERfT1JERVJTOiAnQUREX09SREVSUycsXG4gICAgQUREX1VTRVJTOiAnQUREX1VTRVJTJyxcbiAgICBBRERfQ0FURUdPUklFUzogJ0FERF9DQVRFR09SSUVTJyxcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0LCBjYXJ0KSA9PiB7XG4gICAgaWYocHJvZHVjdC5pblN0b2NrID09PSAwKVxuICAgIHJldHVybiAoeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnRXN0ZSBwcm9kdWN0byBlc3TDoSBhZ290YWRvLid9IH0pIFxuXG4gICAgY29uc3QgY2hlY2sgPSBjYXJ0LmV2ZXJ5KGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkXG4gICAgfSlcblxuICAgIGlmKCFjaGVjaykgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdFbCBwcm9kdWN0byBoYSBzaWRvIGHDsWFkaWRvIGFsIGNhcnJpdG8uJ30gfSkgXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogWy4uLmNhcnQsIHsuLi5wcm9kdWN0LCBxdWFudGl0eTogMX1dIH0pIFxufVxuXG5leHBvcnQgY29uc3QgZGVjcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZihpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgLT0gMVxuICAgIH0pXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5jcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZihpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgKz0gMVxuICAgIH0pXG5cbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxufVxuXG5cbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtID0gKGRhdGEsIGlkLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgIT09IGlkKVxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YSwgaWQsIHBvc3QsIHR5cGUpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoaXRlbSA9PiAoaXRlbS5faWQgPT09IGlkID8gcG9zdCA6IGl0ZW0pKVxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXJzJ1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcblxuXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IFxuICAgICAgICBub3RpZnk6IHt9LCBhdXRoOiB7fSwgY2FydDogW10sIG1vZGFsOiBbXSwgb3JkZXJzOiBbXSwgdXNlcnM6IFtdLCBjYXRlZ29yaWVzOiBbXVxuICAgIH1cblxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKVxuICAgIGNvbnN0IHsgY2FydCwgYXV0aCB9ID0gc3RhdGVcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0TG9naW5cIik7XG4gICAgICAgIGlmKGZpcnN0TG9naW4pe1xuICAgICAgICAgICAgZ2V0RGF0YSgnYXV0aC9hY2Nlc3NUb2tlbicpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJmaXJzdExvZ2luXCIpXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyBcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJBVVRIXCIsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVzLnVzZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGF0YSgnY2F0ZWdvcmllcycpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxuXG4gICAgICAgICAgICBkaXNwYXRjaCh7IFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQUREX0NBVEVHT1JJRVNcIixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXMuY2F0ZWdvcmllc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSxbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fbmV4dF9fY2FydDAxX19kZXZhdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9fY2FydDAxX19kZXZhdCcpKVxuXG4gICAgICAgIGlmKF9fbmV4dF9fY2FydDAxX19kZXZhdCkgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBfX25leHRfX2NhcnQwMV9fZGV2YXQgfSlcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfX2NhcnQwMV9fZGV2YXQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSlcbiAgICB9LCBbY2FydF0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihhdXRoLnRva2VuKXtcbiAgICAgICAgICAgIGdldERhdGEoJ29yZGVyJywgYXV0aC50b2tlbilcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfT1JERVJTJywgcGF5bG9hZDogcmVzLm9yZGVyc30pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZihhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyl7XG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgndXNlcicsIGF1dGgudG9rZW4pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogcmVzLnVzZXJzfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IFtdfSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW119KVxuICAgICAgICB9XG4gICAgfSxbYXV0aC50b2tlbl0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iLCJpbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSAnLi9BY3Rpb25zJ1xuXG5cbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIEFDVElPTlMuTk9USUZZOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEFDVElPTlMuQVVUSDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfQ0FSVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfTU9EQUw6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1vZGFsOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9PUkRFUlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG9yZGVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfVVNFUlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9DQVRFR09SSUVTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzIiwiY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMXG5cbmV4cG9ydCBjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59XG5cblxuXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgcGF0Y2hEYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuXG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9