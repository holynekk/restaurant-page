/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial-page-load.js */ \"./src/modules/initial-page-load.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\n\nsetup();\n\nfunction addFunctionToButtons(){\n    const home = document.getElementById(\"home\");\n    const menu = document.getElementById(\"menu\");\n    const contact = document.getElementById(\"contact\");\n\n    home.addEventListener(\"click\", _modules_home_js__WEBPACK_IMPORTED_MODULE_1__.default);\n    menu.addEventListener(\"click\", _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__.default);\n    contact.addEventListener(\"click\", _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__.default);\n}\n    \nfunction setup(){\n    (0,_modules_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n    (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n    addFunctionToButtons();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setBttnActv(id){\n    const actButton = document.querySelector(\".tab.active\");\n    if (actButton) actButton.classList.remove('active');\n\n    const hmBtn = document.getElementById(id);\n    hmBtn.classList.add('active');\n}\n\nfunction createInfoSection(){\n    const infoSection = document.createElement('div');\n    infoSection.classList.add('contact-card');\n\n    const info = document.createElement('div');\n    const loc = document.createElement('p');\n    loc.textContent = \"Unknown place\";\n    const hours = document.createElement('p');\n    hours.textContent = \"10:00 - 13:00\";\n    const phone = document.createElement('p');\n    phone.textContent = \"222 - 222 - 22 22\";\n\n    info.appendChild(loc);\n    info.appendChild(hours);\n    info.appendChild(phone);\n\n    infoSection.appendChild(info);\n\n    const image = document.createElement('img');\n    image.classList.add('location-image');\n    image.setAttribute('src', 'https://media-cdn.tripadvisor.com/media/photo-s/08/ef/c1/66/troll.jpg');\n    image.setAttribute('alt', 'location image');\n\n    infoSection.appendChild(image);\n\n    return infoSection;\n}\n\nfunction loadContact(){\n    const content = document.getElementById('tab-content');\n    content.textContent = \"\";\n\n    const conttext = document.createElement('h3');\n    conttext.classList.add('menu-text');\n    conttext.textContent = \"CONTACT\";\n\n    content.appendChild(conttext);\n\n    setBttnActv('contact');\n\n    content.appendChild(conttext);\n\n    content.appendChild(createInfoSection());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/modules/menu.js\");\n\n\nfunction createText(){\n    const abt = document.createElement('section');\n    abt.classList.add('section');\n\n    const h3 = document.createElement('h3');\n    h3.textContent = \"PEOPLE TOGETHER, LIKE GOOD FOOD!!\";\n    abt.appendChild(h3);\n\n    return abt;\n}\n\nfunction setBttnActv(id){\n    const actButton = document.querySelector(\".tab.active\");\n    if (actButton) actButton.classList.remove('active');\n\n    const hmBtn = document.getElementById(id);\n    hmBtn.classList.add('active');\n}\n\nfunction loadHome(){\n    const content = document.getElementById('tab-content');\n\n    content.textContent = '';\n\n    const text = createText();\n\n    setBttnActv('home');\n\n    content.appendChild(text);\n\n    const order = document.createElement('button');\n    order.textContent = \"ORDER NOW!\";\n    order.setAttribute('id', 'order-button');\n    order.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_0__.default);\n\n    content.appendChild(order);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initial-page-load.js":
/*!******************************************!*\
  !*** ./src/modules/initial-page-load.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id, txt){\n    const image = document.createElement('img');\n\n    const head = document.createElement('header');\n    head.setAttribute('id', id);\n\n    const mainLogo = document.createElement(\"h1\");\n    mainLogo.textContent = txt;\n\n    head.appendChild(mainLogo);\n\n    return head;\n}\n\nfunction createButton(id, txt){\n    const bttn = document.createElement('button');\n    bttn.setAttribute('id' ,id);\n\n    const content = document.createElement('span');\n    content.textContent = txt;\n    bttn.appendChild(content);\n    bttn.classList.add('tab');\n\n    return bttn;\n}\n\nfunction createNav(id){\n    const nav = document.createElement('nav');\n    nav.setAttribute('id', id);\n\n    const homeBt = createButton(\"home\", \"HOME\");\n    const menuBt = createButton(\"menu\", \"MENU\");\n    const contactBt = createButton(\"contact\", \"CONTACT\");\n\n    nav.appendChild(homeBt);\n    nav.appendChild(menuBt);\n    nav.appendChild(contactBt);\n\n    return nav;\n}\n\n\nfunction createTab(id){\n    const shownTab = document.createElement('main');\n    shownTab.setAttribute('id', id);\n\n    return shownTab;\n}\n\nfunction createFooter(id, txt){\n    const foot = document.createElement('footer');\n    foot.setAttribute('id', id);\n\n    const text = document.createElement('h3');\n    text.textContent = txt;\n\n    foot.appendChild(text);\n    return foot;\n}\n\nfunction loadInitial(){\n    const divSection = document.getElementById('content');\n\n    const header = createHeader('just-header', \"ZIKKIM RESTAURANT\")\n    divSection.appendChild(header);\n\n    const navBar = createNav('navbar');\n    header.appendChild(navBar); \n\n    const tabContent = createTab(\"tab-content\");\n    divSection.appendChild(tabContent);\n\n    const foot = createFooter(\"footer\", \"Made by HolyNekK :)\");\n    divSection.appendChild(foot);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadInitial);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initial-page-load.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction itemCreator(name, text, imgUrl, alt, price){\n    const card = document.createElement('div');\n    card.setAttribute('id', 'card');\n    \n    const image = document.createElement('img');\n    image.setAttribute('src', imgUrl);\n    image.setAttribute('alt', alt);\n    image.setAttribute('id', 'menu-image');\n\n    const infoSection = document.createElement('div');\n    const itemName = document.createElement('p');\n    itemName.textContent = name;\n    const itemDescription = document.createElement('p');\n    itemDescription.textContent = text;\n    const itemPrice = document.createElement('p');\n    itemPrice.textContent = price;\n\n    infoSection.appendChild(itemName);\n    infoSection.appendChild(itemDescription);\n    infoSection.appendChild(itemPrice);\n\n    card.appendChild(image);\n    card.appendChild(infoSection);\n\n    return card;\n}\n\n\nfunction setBttnActv(id){\n    const actButton = document.querySelector(\".tab.active\");\n    if (actButton) actButton.classList.remove('active');\n\n    const hmBtn = document.getElementById(id);\n    hmBtn.classList.add('active');\n}\n\nfunction loadMenu(){\n    const content = document.getElementById('tab-content');\n\n    content.textContent = \"\";\n\n    const menuText = document.createElement('h3');\n    menuText.classList.add('menu-text');\n    menuText.textContent = \"MENU\";\n    content.appendChild(menuText);\n\n    const menu = document.createElement('div');\n    menu.classList.add('menu-bar');\n\n\n    let itemList = [\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\"),\n        itemCreator(\"Klasiko Cayoo\",\"Muhtesem moruk kacirma\",\"https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg\",\"cay iste kocum\",\"10TL\")\n    ];\n\n    itemList.forEach(item => {\n        menu.appendChild(item);\n    });\n\n    content.appendChild(menu);\n\n    setBttnActv('menu');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;