/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scripts_data_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/data-storage.js */ \"./src/js/scripts/data-storage.js\");\n/* harmony import */ var _scripts_header_scrool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/header-scrool.js */ \"./src/js/scripts/header-scrool.js\");\n/* harmony import */ var _scripts_header_scrool_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_scrool_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_hamburger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/hamburger.js */ \"./src/js/scripts/hamburger.js\");\n/* harmony import */ var _scripts_hamburger_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_hamburger_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_popup_login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/popup-login.js */ \"./src/js/scripts/popup-login.js\");\n/* harmony import */ var _scripts_popup_login_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_popup_login_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scripts_popup_signup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/popup-signup.js */ \"./src/js/scripts/popup-signup.js\");\n/* harmony import */ var _scripts_popup_signup_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_popup_signup_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/slider.js */ \"./src/js/scripts/slider.js\");\n/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_slider_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scripts_restaurants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/restaurants.js */ \"./src/js/scripts/restaurants.js\");\n/* harmony import */ var _scripts_counter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/counter.js */ \"./src/js/scripts/counter.js\");\n/* harmony import */ var _scripts_counter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_counter_js__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://fudi/./src/js/index.js?");

/***/ }),

/***/ "./src/js/scripts/counter.js":
/*!***********************************!*\
  !*** ./src/js/scripts/counter.js ***!
  \***********************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var counters = document.querySelectorAll('[data-counter-max]');\n  counters.forEach(function (countElem) {\n    var value = countElem.getAttribute('data-counter-max');\n    var time = 2000; //ms\n\n    var timePerTick = 100;\n\n    function countNumber(value, elem) {\n      var stopCount = Number(value.replace(',', ''));\n      var startCount = 0;\n      var step = Math.round(timePerTick * stopCount / time);\n      var interval = setInterval(function () {\n        startCount = startCount + step;\n\n        if (startCount >= stopCount) {\n          startCount = stopCount;\n          clearInterval(interval);\n        }\n\n        elem.innerText = formatNumber(startCount);\n      }, timePerTick);\n    }\n\n    function formatNumber(num) {\n      return num.toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, \"$1,\");\n    }\n\n    countNumber(value, countElem);\n  });\n});\n\n//# sourceURL=webpack://fudi/./src/js/scripts/counter.js?");

/***/ }),

/***/ "./src/js/scripts/data-storage.js":
/*!****************************************!*\
  !*** ./src/js/scripts/data-storage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"restaurants\": () => /* binding */ restaurants\n/* harmony export */ });\nvar restaurants = [{\n  src: \"img/food1.png\",\n  alt: \"food-img\",\n  title: \"ITALIAN\",\n  text: '327 Recipes'\n}, {\n  src: \"img/food2.png\",\n  alt: \"food-img\",\n  title: \"INDIAN\",\n  text: '856 Recipes'\n}, {\n  src: \"img/food3.png\",\n  alt: \"food-img\",\n  title: \"FRENCH\",\n  text: '27 Recipes'\n}, {\n  src: \"img/food4.png\",\n  alt: \"food-img\",\n  title: \"STEAKHOUSE\",\n  text: '174 Recipes'\n}, {\n  src: \"img/food5.png\",\n  alt: \"food-img\",\n  title: \"SEAFOOD\",\n  text: '731 Recipes'\n}, {\n  src: \"img/food6.png\",\n  alt: \"food-img\",\n  title: \"SUSHI\",\n  text: '237 Recipes'\n}, {\n  src: \"img/food7.png\",\n  alt: \"food-img\",\n  title: \"MEXICAN\",\n  text: '529 Recipes'\n}, {\n  src: \"img/food8.png\",\n  alt: \"food-img\",\n  title: \"CHINESE\",\n  text: '145 Recipes'\n}, {\n  src: \"img/food9.png\",\n  alt: \"food-img\",\n  title: \"PIZZA\",\n  text: '327 Recipes'\n}, {\n  src: \"img/food10.png\",\n  alt: \"food-img\",\n  title: \"AMERICAN\",\n  text: '1.437 Recipes'\n}];\n\n//# sourceURL=webpack://fudi/./src/js/scripts/data-storage.js?");

/***/ }),

/***/ "./src/js/scripts/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/scripts/hamburger.js ***!
  \*************************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var menuOdj = [{\n    href: './index.html',\n    name: 'Home'\n  }, {\n    href: './index.html',\n    name: 'App-store'\n  }, {\n    href: './index.html',\n    name: 'Counter'\n  }, {\n    href: './index.html',\n    name: 'Restaurants'\n  }];\n  var hamburgerBtn = document.getElementById('header__hamburger-btn');\n  var headerInner = document.getElementById('header__inner');\n  var menuList = document.createElement('ul');\n  menuList.classList.add('header__menu');\n  hamburgerBtn.addEventListener('click', function () {\n    if (hamburgerBtn.classList.toggle('header_active-hamburger')) {\n      renderMenu(menuOdj, headerInner);\n    } else {\n      removeContainer(menuList);\n    }\n  });\n\n  function renderMenu(obj, container) {\n    menuList.innerHTML = '';\n    obj.forEach(function (item) {\n      var li = document.createElement('li');\n      li.classList.add('header__list-menu');\n      menuList.appendChild(li);\n      li.innerHTML = \"<a href=\".concat(item.href, \">\").concat(item.name, \"</a>\");\n      container.appendChild(menuList);\n    });\n  }\n\n  function removeContainer(container) {\n    container.remove();\n  }\n});\n\n//# sourceURL=webpack://fudi/./src/js/scripts/hamburger.js?");

/***/ }),

/***/ "./src/js/scripts/header-scrool.js":
/*!*****************************************!*\
  !*** ./src/js/scripts/header-scrool.js ***!
  \*****************************************/
/***/ (() => {

eval("window.addEventListener('scroll', function () {\n  var headerScroll = document.getElementById('header__scroll');\n  var headerInner = document.getElementById('header__inner');\n  var scrollDown = window.pageYOffset;\n\n  if (scrollDown >= 100) {\n    headerScroll.classList.add('header_background-color');\n    headerInner.style.padding = '0';\n  } else if (scrollDown === 0) {\n    headerScroll.classList.remove('header_background-color');\n    headerInner.style.padding = '10px';\n  }\n});\n\n//# sourceURL=webpack://fudi/./src/js/scripts/header-scrool.js?");

/***/ }),

/***/ "./src/js/scripts/popup-login.js":
/*!***************************************!*\
  !*** ./src/js/scripts/popup-login.js ***!
  \***************************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var logIn = {\n    img: 'img/logo.png',\n    title: 'LOG-IN',\n    inputName: 'Username or email',\n    inputPassword: 'Password',\n    btn: 'LOG-IN',\n    text: \"DON'T HAVE AN ACCOUNT?\",\n    link: 'SIGN-UP'\n  };\n  var btnLogIn = document.getElementById('log-in');\n  btnLogIn.addEventListener('click', function () {\n    renderPopup(logIn);\n  });\n\n  function renderPopup(object) {\n    var popup = document.createElement('section');\n    popup.classList.add('popup');\n    popup.id = 'popup';\n    var popupBox = document.createElement('div');\n    popupBox.classList.add('popup__box');\n    popup.appendChild(popupBox);\n    popupBox.innerHTML = \"\\n                           <div class=\\\"popup__close\\\" id=\\\"popup-close\\\">x</div>\\n                           <div class=\\\"popup__logo\\\">\\n                              <img src=\".concat(object.img, \" alt=\\\"logo\\\">  \\n                           </div>\\n                           <div class=\\\"popup__title\\\">\").concat(object.title, \"</div>\\n                           <form class=\\\"popup__form\\\" action=\\\"\\\" method=\\\"post\\\">\\n                                <input class=\\\"popup__input\\\" type=\\\"text\\\" placeholder=\").concat(object.inputName, \">\\n                                <input class=\\\"popup__input\\\" type=\\\"password\\\" placeholder=\").concat(object.inputPassword, \">\\n                                <button class=\\\"popup__form-btn\\\" type=\\\"submit\\\">\").concat(object.btn, \"</button>\\n                           </form>\\n                            <div class=\\\"popup__text\\\">\").concat(object.text, \"\\n                                <a href=\\\"#\\\" class=\\\"popup__link\\\">\").concat(object.link, \"</a>\\n                            </div>\");\n    document.body.prepend(popup);\n    var btnClose = document.getElementById('popup-close');\n    btnClose.addEventListener('click', function () {\n      popup.remove();\n    });\n  }\n});\n\n//# sourceURL=webpack://fudi/./src/js/scripts/popup-login.js?");

/***/ }),

/***/ "./src/js/scripts/popup-signup.js":
/*!****************************************!*\
  !*** ./src/js/scripts/popup-signup.js ***!
  \****************************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var btnLogSign = document.getElementById('log-sign');\n  btnLogSign.addEventListener('click', function () {\n    renderPopup(logSign);\n  });\n  var logSign = {\n    img: 'img/logo.png',\n    title: 'SIGN-UP',\n    inputName: 'Username',\n    inputEmail: 'Email',\n    inputPassword: 'Password',\n    btn: 'SIGN-UP',\n    text: \"IF YOU ALREADY HAVE AN ACCOUNT?\",\n    link: 'LOG-IN'\n  };\n\n  function renderPopup(object) {\n    var popup = document.createElement('section');\n    popup.classList.add('popup');\n    popup.id = 'popup';\n    var popupBox = document.createElement('div');\n    popupBox.classList.add('popup__box');\n    popup.appendChild(popupBox);\n    popupBox.innerHTML = \"\\n                           <div class=\\\"popup__close\\\" id=\\\"popup-close\\\">x</div>\\n                           <div class=\\\"popup__logo\\\">\\n                              <img src=\".concat(object.img, \" alt=\\\"logo\\\">  \\n                           </div>\\n                           <div class=\\\"popup__title\\\">\").concat(object.title, \"</div>\\n                           <form class=\\\"popup__form\\\" action=\\\"\\\" method=\\\"post\\\">\\n                                <input class=\\\"popup__input\\\" type=\\\"text\\\" placeholder=\").concat(object.inputName, \">\\n                                <input class=\\\"popup__input\\\" type=\\\"email\\\" placeholder=\").concat(object.inputEmail, \">\\n                                <input class=\\\"popup__input\\\" type=\\\"password\\\" placeholder=\").concat(object.inputPassword, \">\\n                                <button class=\\\"popup__form-btn\\\" type=\\\"submit\\\">\").concat(object.btn, \"</button>\\n                           </form>\\n                            <div class=\\\"popup__text\\\">\").concat(object.text, \"\\n                                <a href=\\\"#\\\" class=\\\"popup__link\\\">\").concat(object.link, \"</a>\\n                            </div>\");\n    document.body.prepend(popup);\n    var btnClose = document.getElementById('popup-close');\n    btnClose.addEventListener('click', function () {\n      popup.remove();\n    });\n  }\n});\n\n//# sourceURL=webpack://fudi/./src/js/scripts/popup-signup.js?");

/***/ }),

/***/ "./src/js/scripts/restaurants.js":
/*!***************************************!*\
  !*** ./src/js/scripts/restaurants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-storage */ \"./src/js/scripts/data-storage.js\");\n\nwindow.addEventListener('load', function () {\n  var container = document.getElementById('restaurants-list');\n  var btnArrowUp = document.getElementById('arrow-up');\n  var btnArrowDown = document.getElementById('arrow-down');\n\n  function createRestaurantsList(data) {\n    container.innerHTML = '';\n    var list = document.createElement('ul');\n    list.classList.add('restaurants__list');\n    container.appendChild(list);\n    data.forEach(function (element) {\n      var item = document.createElement('li');\n      item.classList.add('restaurants__item');\n      item.innerHTML = \"\\n                            <img src=\\\"\".concat(element.src, \"\\\" alt=\\\"\").concat(element.alt, \"\\\">\\n                            <div class=\\\"restaurants__item-box\\\">\\n                                 <span class=\\\"restaurants__item_quantity\\\">\").concat(element.text, \"</span>\\n                                 <h3 class=\\\"restaurants__item_title\\\">\").concat(element.title, \"</h3>\\n                            </div>\");\n      list.appendChild(item);\n    });\n  }\n\n  createRestaurantsList(_data_storage__WEBPACK_IMPORTED_MODULE_0__.restaurants);\n\n  function sortRestaurantsListUp(data) {\n    data.sort(function (elem1, elem2) {\n      var number1 = parseInt(formatNumber(elem1.text));\n      var number2 = parseInt(formatNumber(elem2.text));\n      return number1 - number2;\n    });\n    createRestaurantsList(data);\n  }\n\n  function sortRestaurantsListDown(data) {\n    data.sort(function (elem1, elem2) {\n      var number1 = parseInt(formatNumber(elem1.text));\n      var number2 = parseInt(formatNumber(elem2.text));\n      return number2 - number1;\n    });\n    createRestaurantsList(data);\n  }\n\n  btnArrowUp.addEventListener('click', function () {\n    sortRestaurantsListUp(_data_storage__WEBPACK_IMPORTED_MODULE_0__.restaurants);\n  });\n  btnArrowDown.addEventListener('click', function () {\n    sortRestaurantsListDown(_data_storage__WEBPACK_IMPORTED_MODULE_0__.restaurants);\n  });\n\n  function formatNumber(num) {\n    return num.replace(/[\\s.,%]/g, '');\n  }\n});\n\n//# sourceURL=webpack://fudi/./src/js/scripts/restaurants.js?");

/***/ }),

/***/ "./src/js/scripts/slider.js":
/*!**********************************!*\
  !*** ./src/js/scripts/slider.js ***!
  \**********************************/
/***/ (() => {

eval("window.addEventListener('load', function () {\n  var sliders = document.querySelectorAll('[data-slider]');\n  var dots = document.querySelectorAll('[data-dot]');\n  var index = 0;\n  callSliderFunctions();\n\n  function callSliderFunctions() {\n    activeSlide(sliders, index);\n    activeDote(dots, index);\n  }\n\n  function activeSlide(arr, number) {\n    arr.forEach(function (elem, indexElem) {\n      elem.classList.remove('slider-reviews_active');\n    });\n    arr[number].classList.add('slider-reviews_active');\n  }\n\n  function activeDote(arr, number) {\n    arr.forEach(function (elem, indexElem) {\n      elem.classList.remove('slider-reviews_dot-active');\n    });\n    arr[number].classList.add('slider-reviews_dot-active');\n  }\n\n  var nextSlide = function nextSlide() {\n    if (index === sliders.length - 1) {\n      index = 0;\n    } else {\n      index++;\n      callSliderFunctions();\n    }\n  };\n\n  var prevSlide = function prevSlide() {\n    if (index === 0) {\n      index = sliders.length - 1;\n      callSliderFunctions();\n    } else {\n      index--;\n      callSliderFunctions();\n    }\n  };\n\n  dots.forEach(function (elem, indexElem) {\n    elem.addEventListener('click', function () {\n      index = indexElem;\n      callSliderFunctions();\n    });\n  });\n});\n\n//# sourceURL=webpack://fudi/./src/js/scripts/slider.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fudi/./src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;