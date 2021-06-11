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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/create/[[...id]].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/create/[[...id]].js":
/*!***********************************!*\
  !*** ./pages/create/[[...id]].js ***!
  \***********************************/
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
/* harmony import */ var _utils_imageUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/imageUpload */ "./utils/imageUpload.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\diedo\\Downloads\\nextjs-ecommerce-master\\nextjs-ecommerce-master\\pages\\create\\[[...id]].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ProductsManager = () => {
  const initialState = {
    title: '',
    price: 0,
    inStock: 0,
    description: '',
    content: '',
    category: ''
  };
  const {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState);
  const {
    title,
    price,
    inStock,
    description,
    content,
    category
  } = product;
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]);
  const {
    categories,
    auth
  } = state;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    0: onEdit,
    1: setOnEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (id) {
      setOnEdit(true);
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__["getData"])(`product/${id}`).then(res => {
        setProduct(res.product);
        setImages(res.product.images);
      });
    } else {
      setOnEdit(false);
      setProduct(initialState);
      setImages([]);
    }
  }, [id]);

  const handleChangeInput = e => {
    const {
      name,
      value
    } = e.target;
    setProduct(_objectSpread(_objectSpread({}, product), {}, {
      [name]: value
    }));
    dispatch({
      type: 'NOTIFY',
      payload: {}
    });
  };

  const handleUploadInput = e => {
    dispatch({
      type: 'NOTIFY',
      payload: {}
    });
    let newImages = [];
    let num = 0;
    let err = '';
    const files = [...e.target.files];
    if (files.length === 0) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: '¡Los archivos no existen!'
      }
    });
    files.forEach(file => {
      if (file.size > 1024 * 1024) return err = '¡El tamaño de imagen más grande es de 1 MB!';
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') return err = '¡El formato de la imagen es incorrecto!';
      num += 1;
      if (num <= 5) newImages.push(file);
      return newImages;
    });
    if (err) dispatch({
      type: 'NOTIFY',
      payload: {
        error: err
      }
    });
    const imgCount = images.length;
    if (imgCount + newImages.length > 5) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: '¡Seleccione hasta 5 imágenes!'
      }
    });
    setImages([...images, ...newImages]);
  };

  const deleteImage = index => {
    const newArr = [...images];
    newArr.splice(index, 1);
    setImages(newArr);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (auth.user.role !== 'admin') return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Autenticación inválida'
      }
    });
    if (!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Agregue todos los campos'
      }
    });
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });
    let media = [];
    const imgNewURL = images.filter(img => !img.url);
    const imgOldURL = images.filter(img => img.url);
    if (imgNewURL.length > 0) media = await Object(_utils_imageUpload__WEBPACK_IMPORTED_MODULE_4__["imageUpload"])(imgNewURL);
    let res;

    if (onEdit) {
      res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__["putData"])(`product/${id}`, _objectSpread(_objectSpread({}, product), {}, {
        images: [...imgOldURL, ...media]
      }), auth.token);
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
    } else {
      res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__["postData"])('product', _objectSpread(_objectSpread({}, product), {}, {
        images: [...imgOldURL, ...media]
      }), auth.token);
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
    }

    return dispatch({
      type: 'NOTIFY',
      payload: {
        success: res.msg
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "products_manager",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Agregar Productos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "row",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "title",
          value: title,
          placeholder: "Nombre del producto",
          className: "d-block my-4 w-100 p-2",
          onChange: handleChangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "price",
              children: "Precio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              name: "price",
              value: price,
              placeholder: "Price",
              className: "d-block w-100 p-2",
              onChange: handleChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "price",
              children: "En Stock"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              name: "inStock",
              value: inStock,
              placeholder: "inStock",
              className: "d-block w-100 p-2",
              onChange: handleChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          name: "description",
          id: "description",
          cols: "30",
          rows: "4",
          placeholder: "Descripci\xF3n",
          onChange: handleChangeInput,
          className: "d-block my-4 w-100 p-2",
          value: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          name: "content",
          id: "content",
          cols: "30",
          rows: "6",
          placeholder: "Contenido",
          onChange: handleChangeInput,
          className: "d-block my-4 w-100 p-2",
          value: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "input-group-prepend px-0 my-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            name: "category",
            id: "category",
            value: category,
            onChange: handleChangeInput,
            className: "custom-select text-capitalize",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "all",
              children: "Categor\xEDas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, undefined), categories.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: item._id,
              children: item.name
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 37
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-success my-2 px-4",
          children: onEdit ? 'Actualizar' : 'Agregar'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-6 my-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "input-group mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "input-group-text",
              children: "Subir"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "custom-file border rounded",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "file",
              className: "custom-file-input",
              onChange: handleUploadInput,
              multiple: true,
              accept: "image/*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row img-up mx-0",
          children: images.map((img, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "file_img my-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: img.url ? img.url : URL.createObjectURL(img),
              alt: "",
              className: "img-thumbnail rounded"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              onClick: () => deleteImage(index),
              children: "X"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 38
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 33
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsManager);

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

/***/ "./utils/imageUpload.js":
/*!******************************!*\
  !*** ./utils/imageUpload.js ***!
  \******************************/
/*! exports provided: imageUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageUpload", function() { return imageUpload; });
const imageUpload = async images => {
  let imgArr = [];

  for (const item of images) {
    const formData = new FormData();
    formData.append("file", item);
    formData.append("upload_preset", "te_proyecto_ferreteria");
    formData.append("cloud_name", "uu");
    const res = await fetch("https://api.cloudinary.com/v1_1/uu/image/upload", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    imgArr.push({
      public_id: data.public_id,
      url: data.secure_url
    });
  }

  return imgArr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3JlYXRlL1tbLi4uaWRdXS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0dsb2JhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9pbWFnZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUHJvZHVjdHNNYW5hZ2VyIiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJwcmljZSIsImluU3RvY2siLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJjYXRlZ29yeSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidXNlU3RhdGUiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiY2F0ZWdvcmllcyIsImF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwib25FZGl0Iiwic2V0T25FZGl0IiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsInRoZW4iLCJyZXMiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJ0eXBlIiwicGF5bG9hZCIsImhhbmRsZVVwbG9hZElucHV0IiwibmV3SW1hZ2VzIiwibnVtIiwiZXJyIiwiZmlsZXMiLCJsZW5ndGgiLCJlcnJvciIsImZvckVhY2giLCJmaWxlIiwic2l6ZSIsInB1c2giLCJpbWdDb3VudCIsImRlbGV0ZUltYWdlIiwiaW5kZXgiLCJuZXdBcnIiLCJzcGxpY2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJyb2xlIiwibG9hZGluZyIsIm1lZGlhIiwiaW1nTmV3VVJMIiwiZmlsdGVyIiwiaW1nIiwidXJsIiwiaW1nT2xkVVJMIiwiaW1hZ2VVcGxvYWQiLCJwdXREYXRhIiwidG9rZW4iLCJwb3N0RGF0YSIsInN1Y2Nlc3MiLCJtc2ciLCJtYXAiLCJpdGVtIiwiX2lkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQUNUSU9OUyIsIk5PVElGWSIsIkFVVEgiLCJBRERfQ0FSVCIsIkFERF9NT0RBTCIsIkFERF9PUkRFUlMiLCJBRERfVVNFUlMiLCJBRERfQ0FURUdPUklFUyIsImFkZFRvQ2FydCIsImNhcnQiLCJjaGVjayIsImV2ZXJ5IiwicXVhbnRpdHkiLCJkZWNyZWFzZSIsImRhdGEiLCJuZXdEYXRhIiwiaW5jcmVhc2UiLCJkZWxldGVJdGVtIiwidXBkYXRlSXRlbSIsInBvc3QiLCJjcmVhdGVDb250ZXh0IiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJub3RpZnkiLCJtb2RhbCIsIm9yZGVycyIsInVzZXJzIiwidXNlUmVkdWNlciIsInJlZHVjZXJzIiwiZmlyc3RMb2dpbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiYWNjZXNzX3Rva2VuIiwiX19uZXh0X19jYXJ0MDFfX2RldmF0IiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFjdGlvbiIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsImJvZHkiLCJwYXRjaERhdGEiLCJkZWxldGVEYXRhIiwiaW1nQXJyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInB1YmxpY19pZCIsInNlY3VyZV91cmwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9jcmVhdGUvW1suLi5pZF1dLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jcmVhdGUvW1suLi5pZF1dLmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7RGF0YUNvbnRleHR9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xuaW1wb3J0IHtpbWFnZVVwbG9hZH0gZnJvbSAnLi4vLi4vdXRpbHMvaW1hZ2VVcGxvYWQnXG5pbXBvcnQge3Bvc3REYXRhLCBnZXREYXRhLCBwdXREYXRhfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaERhdGEnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFByb2R1Y3RzTWFuYWdlciA9ICgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgcHJpY2U6IDAsXG4gICAgICAgIGluU3RvY2s6IDAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgY29udGVudDogJycsXG4gICAgICAgIGNhdGVnb3J5OiAnJ1xuICAgIH1cbiAgICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpXG4gICAgY29uc3Qge3RpdGxlLCBwcmljZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5fSA9IHByb2R1Y3RcblxuICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgICBjb25zdCB7Y2F0ZWdvcmllcywgYXV0aH0gPSBzdGF0ZVxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XG4gICAgY29uc3QgW29uRWRpdCwgc2V0T25FZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoaWQpe1xuICAgICAgICAgICAgc2V0T25FZGl0KHRydWUpXG4gICAgICAgICAgICBnZXREYXRhKGBwcm9kdWN0LyR7aWR9YCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHNldFByb2R1Y3QocmVzLnByb2R1Y3QpXG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VzKHJlcy5wcm9kdWN0LmltYWdlcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0T25FZGl0KGZhbHNlKVxuICAgICAgICAgICAgc2V0UHJvZHVjdChpbml0aWFsU3RhdGUpXG4gICAgICAgICAgICBzZXRJbWFnZXMoW10pXG4gICAgICAgIH1cbiAgICB9LFtpZF0pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgc2V0UHJvZHVjdCh7Li4ucHJvZHVjdCwgW25hbWVdOnZhbHVlfSlcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fX0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkSW5wdXQgPSBlID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fX0pXG4gICAgICAgIGxldCBuZXdJbWFnZXMgPSBbXVxuICAgICAgICBsZXQgbnVtID0gMFxuICAgICAgICBsZXQgZXJyID0gJydcbiAgICAgICAgY29uc3QgZmlsZXMgPSBbLi4uZS50YXJnZXQuZmlsZXNdXG5cbiAgICAgICAgaWYoZmlsZXMubGVuZ3RoID09PSAwKSBcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnwqFMb3MgYXJjaGl2b3Mgbm8gZXhpc3RlbiEnfX0pXG5cbiAgICAgICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgICAgIGlmKGZpbGUuc2l6ZSA+IDEwMjQgKiAxMDI0KVxuICAgICAgICAgICAgcmV0dXJuIGVyciA9ICfCoUVsIHRhbWHDsW8gZGUgaW1hZ2VuIG3DoXMgZ3JhbmRlIGVzIGRlIDEgTUIhJ1xuXG4gICAgICAgICAgICBpZihmaWxlLnR5cGUgIT09ICdpbWFnZS9qcGVnJyAmJiBmaWxlLnR5cGUgIT09ICdpbWFnZS9wbmcnKVxuICAgICAgICAgICAgcmV0dXJuIGVyciA9ICfCoUVsIGZvcm1hdG8gZGUgbGEgaW1hZ2VuIGVzIGluY29ycmVjdG8hJ1xuXG4gICAgICAgICAgICBudW0gKz0gMTtcbiAgICAgICAgICAgIGlmKG51bSA8PSA1KSBuZXdJbWFnZXMucHVzaChmaWxlKVxuICAgICAgICAgICAgcmV0dXJuIG5ld0ltYWdlcztcbiAgICAgICAgfSlcblxuICAgICAgICBpZihlcnIpIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiBlcnJ9fSlcblxuICAgICAgICBjb25zdCBpbWdDb3VudCA9IGltYWdlcy5sZW5ndGhcbiAgICAgICAgaWYoaW1nQ291bnQgKyBuZXdJbWFnZXMubGVuZ3RoID4gNSlcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnwqFTZWxlY2Npb25lIGhhc3RhIDUgaW3DoWdlbmVzISd9fSlcbiAgICAgICAgc2V0SW1hZ2VzKFsuLi5pbWFnZXMsIC4uLm5ld0ltYWdlc10pXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSW1hZ2UgPSBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyciA9IFsuLi5pbWFnZXNdXG4gICAgICAgIG5ld0Fyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIHNldEltYWdlcyhuZXdBcnIpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYoYXV0aC51c2VyLnJvbGUgIT09ICdhZG1pbicpIFxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdBdXRlbnRpY2FjacOzbiBpbnbDoWxpZGEnfX0pXG5cbiAgICAgICAgaWYoIXRpdGxlIHx8ICFwcmljZSB8fCAhaW5TdG9jayB8fCAhZGVzY3JpcHRpb24gfHwgIWNvbnRlbnQgfHwgY2F0ZWdvcnkgPT09ICdhbGwnIHx8IGltYWdlcy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ0FncmVndWUgdG9kb3MgbG9zIGNhbXBvcyd9fSlcblxuICAgIFxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtsb2FkaW5nOiB0cnVlfX0pXG4gICAgICAgIGxldCBtZWRpYSA9IFtdXG4gICAgICAgIGNvbnN0IGltZ05ld1VSTCA9IGltYWdlcy5maWx0ZXIoaW1nID0+ICFpbWcudXJsKVxuICAgICAgICBjb25zdCBpbWdPbGRVUkwgPSBpbWFnZXMuZmlsdGVyKGltZyA9PiBpbWcudXJsKVxuXG4gICAgICAgIGlmKGltZ05ld1VSTC5sZW5ndGggPiAwKSBtZWRpYSA9IGF3YWl0IGltYWdlVXBsb2FkKGltZ05ld1VSTClcblxuICAgICAgICBsZXQgcmVzO1xuICAgICAgICBpZihvbkVkaXQpe1xuICAgICAgICAgICAgcmVzID0gYXdhaXQgcHV0RGF0YShgcHJvZHVjdC8ke2lkfWAsIHsuLi5wcm9kdWN0LCBpbWFnZXM6IFsuLi5pbWdPbGRVUkwsIC4uLm1lZGlhXX0sIGF1dGgudG9rZW4pXG4gICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9fSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXMgPSBhd2FpdCBwb3N0RGF0YSgncHJvZHVjdCcsIHsuLi5wcm9kdWN0LCBpbWFnZXM6IFsuLi5pbWdPbGRVUkwsIC4uLm1lZGlhXX0sIGF1dGgudG9rZW4pXG4gICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiByZXMubXNnfX0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c19tYW5hZ2VyXCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QWdyZWdhciBQcm9kdWN0b3M8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicm93XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZSBkZWwgcHJvZHVjdG9cIiBjbGFzc05hbWU9XCJkLWJsb2NrIG15LTQgdy0xMDAgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUlucHV0fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlByZWNpbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5FbiBTdG9jazwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiaW5TdG9ja1wiIHZhbHVlPXtpblN0b2NrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW5TdG9ja1wiIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBjb2xzPVwiMzBcIiByb3dzPVwiNFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcGNpw7NuXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIG15LTQgdy0xMDAgcC0yXCIgdmFsdWU9e2Rlc2NyaXB0aW9ufSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29udGVudFwiIGlkPVwiY29udGVudFwiIGNvbHM9XCIzMFwiIHJvd3M9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250ZW5pZG9cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgbXktNCB3LTEwMCBwLTJcIiB2YWx1ZT17Y29udGVudH0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmQgcHgtMCBteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjYXRlZ29yeVwiIGlkPVwiY2F0ZWdvcnlcIiB2YWx1ZT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3QgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPkNhdGVnb3LDrWFzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLl9pZH0gdmFsdWU9e2l0ZW0uX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBteS0yIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvbkVkaXQgPyAnQWN0dWFsaXphcic6ICdBZ3JlZ2FyJ31cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbXktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5TdWJpcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZSBib3JkZXIgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVXBsb2FkSW5wdXR9IG11bHRpcGxlIGFjY2VwdD1cImltYWdlLypcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGltZy11cCBteC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaW1nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZpbGVfaW1nIG15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWcudXJsID8gaW1nLnVybCA6IFVSTC5jcmVhdGVPYmplY3RVUkwoaW1nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctdGh1bWJuYWlsIHJvdW5kZWRcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gZGVsZXRlSW1hZ2UoaW5kZXgpfT5YPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c01hbmFnZXIiLCJleHBvcnQgY29uc3QgQUNUSU9OUyA9IHtcbiAgICBOT1RJRlk6ICdOT1RJRlknLFxuICAgIEFVVEg6ICdBVVRIJyxcbiAgICBBRERfQ0FSVDogJ0FERF9DQVJUJyxcbiAgICBBRERfTU9EQUw6ICdBRERfTU9EQUwnLFxuICAgIEFERF9PUkRFUlM6ICdBRERfT1JERVJTJyxcbiAgICBBRERfVVNFUlM6ICdBRERfVVNFUlMnLFxuICAgIEFERF9DQVRFR09SSUVTOiAnQUREX0NBVEVHT1JJRVMnLFxufVxuXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIGNhcnQpID0+IHtcbiAgICBpZihwcm9kdWN0LmluU3RvY2sgPT09IDApXG4gICAgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdFc3RlIHByb2R1Y3RvIGVzdMOhIGFnb3RhZG8uJ30gfSkgXG5cbiAgICBjb25zdCBjaGVjayA9IGNhcnQuZXZlcnkoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLl9pZCAhPT0gcHJvZHVjdC5faWRcbiAgICB9KVxuXG4gICAgaWYoIWNoZWNrKSByZXR1cm4gKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ0VsIHByb2R1Y3RvIGhhIHNpZG8gYcOxYWRpZG8gYWwgY2Fycml0by4nfSB9KSBcblxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBbLi4uY2FydCwgey4uLnByb2R1Y3QsIHF1YW50aXR5OiAxfV0gfSkgXG59XG5cbmV4cG9ydCBjb25zdCBkZWNyZWFzZSA9IChkYXRhLCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4uZGF0YV1cbiAgICBuZXdEYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmKGl0ZW0uX2lkID09PSBpZCkgaXRlbS5xdWFudGl0eSAtPSAxXG4gICAgfSlcblxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH0pXG59XG5cbmV4cG9ydCBjb25zdCBpbmNyZWFzZSA9IChkYXRhLCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4uZGF0YV1cbiAgICBuZXdEYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmKGl0ZW0uX2lkID09PSBpZCkgaXRlbS5xdWFudGl0eSArPSAxXG4gICAgfSlcblxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH0pXG59XG5cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSAoZGF0YSwgaWQsIHR5cGUpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gaWQpXG4gICAgcmV0dXJuICh7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGF9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhLCBpZCwgcG9zdCwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLm1hcChpdGVtID0+IChpdGVtLl9pZCA9PT0gaWQgPyBwb3N0IDogaXRlbSkpXG4gICAgcmV0dXJuICh7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGF9KVxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vUmVkdWNlcnMnXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hEYXRhJ1xuXG5cbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5cbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXG4gICAgICAgIG5vdGlmeToge30sIGF1dGg6IHt9LCBjYXJ0OiBbXSwgbW9kYWw6IFtdLCBvcmRlcnM6IFtdLCB1c2VyczogW10sIGNhdGVnb3JpZXM6IFtdXG4gICAgfVxuXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpXG4gICAgY29uc3QgeyBjYXJ0LCBhdXRoIH0gPSBzdGF0ZVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RMb2dpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlyc3RMb2dpblwiKTtcbiAgICAgICAgaWYoZmlyc3RMb2dpbil7XG4gICAgICAgICAgICBnZXREYXRhKCdhdXRoL2FjY2Vzc1Rva2VuJykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImZpcnN0TG9naW5cIilcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkFVVEhcIixcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHJlcy5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiByZXMudXNlclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBnZXREYXRhKCdjYXRlZ29yaWVzJykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHsgXG4gICAgICAgICAgICAgICAgdHlwZTogXCJBRERfQ0FURUdPUklFU1wiLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5jYXRlZ29yaWVzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9LFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgX19uZXh0X19jYXJ0MDFfX2RldmF0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X19jYXJ0MDFfX2RldmF0JykpXG5cbiAgICAgICAgaWYoX19uZXh0X19jYXJ0MDFfX2RldmF0KSBkaXNwYXRjaCh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IF9fbmV4dF9fY2FydDAxX19kZXZhdCB9KVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9fY2FydDAxX19kZXZhdCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKVxuICAgIH0sIFtjYXJ0XSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKGF1dGgudG9rZW4pe1xuICAgICAgICAgICAgZ2V0RGF0YSgnb3JkZXInLCBhdXRoLnRva2VuKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9fSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FERF9PUkRFUlMnLCBwYXlsb2FkOiByZXMub3JkZXJzfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmKGF1dGgudXNlci5yb2xlID09PSAnYWRtaW4nKXtcbiAgICAgICAgICAgICAgICBnZXREYXRhKCd1c2VyJywgYXV0aC50b2tlbilcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9fSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiByZXMudXNlcnN9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfT1JERVJTJywgcGF5bG9hZDogW119KVxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiBbXX0pXG4gICAgICAgIH1cbiAgICB9LFthdXRoLnRva2VuXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c3RhdGUsIGRpc3BhdGNofX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufSIsImltcG9ydCB7IEFDVElPTlMgfSBmcm9tICcuL0FjdGlvbnMnXG5cblxuY29uc3QgcmVkdWNlcnMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OT1RJRlk6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG5vdGlmeTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5BVVRIOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhdXRoOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9DQVJUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXJ0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9NT0RBTDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbW9kYWw6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEFDVElPTlMuQUREX09SREVSUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9VU0VSUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXNlcnM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEFDVElPTlMuQUREX0NBVEVHT1JJRVM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnMiLCJjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkxcblxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBjb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBwdXREYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBjb25zdCBwYXRjaERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5cbmV4cG9ydCBjb25zdCBkZWxldGVEYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn0iLCJleHBvcnQgY29uc3QgaW1hZ2VVcGxvYWQgPSBhc3luYyAoaW1hZ2VzKSA9PiB7XG4gICAgbGV0IGltZ0FyciA9IFtdXG4gICAgZm9yKGNvbnN0IGl0ZW0gb2YgaW1hZ2VzKXtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGl0ZW0pXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVwbG9hZF9wcmVzZXRcIiwgcHJvY2Vzcy5lbnYuQ0xPVURfVVBEQVRFX1BSRVNFVClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBwcm9jZXNzLmVudi5DTE9VRF9OQU1FKVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkNMT1VEX0FQSSwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgaW1nQXJyLnB1c2goe3B1YmxpY19pZDogZGF0YS5wdWJsaWNfaWQsIHVybDogZGF0YS5zZWN1cmVfdXJsfSlcbiAgICB9XG4gICAgcmV0dXJuIGltZ0Fycjtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=