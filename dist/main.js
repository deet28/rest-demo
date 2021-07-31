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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction contactFunction(){\n  const contact = document.createElement(\"div\");\n  contact.classList.add(\"contact-page\");\n\n  const phoneCard = document.createElement(\"div\");\n  \n  const phoneNumber = document.createElement(\"h2\");\n  phoneNumber.innerText = \"Phone Number\" \n  const phone = document.createElement(\"p\");\n  phone.innerText = `(1)111-1234`;\n\n  phoneCard.appendChild(phoneNumber);\n  phoneCard.appendChild(phone);\n  phoneCard.classList.add(\"contact-card\");\n\n  const locationCard = document.createElement(\"div\");\n\n  const locationTitle = document.createElement(\"h2\");\n  locationTitle.innerText = \"Location:\"\n  const location = document.createElement(\"p\");\n  location.innerText = `123 Ice Cream Lane,\n  Newport, Rhode Island`\n\n  locationCard.appendChild(locationTitle);\n  locationCard.appendChild(location);\n  locationCard.classList.add(\"contact-card\");\n  \n  contact.appendChild(locationCard);\n  contact.appendChild(phoneCard);\n\n  return contact;\n\n};\n\nfunction contactPage(){\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(contactFunction());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage); \n\n//# sourceURL=webpack://rest-demo/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction makeHome(){\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home-page\");\n\n  const iceCream = document.createElement(\"img\");\n  iceCream.src = \"pictures/iceCream.jpeg\";\n  iceCream.classList.add(\"ice-cream-icon\");\n\n  const firstP = document.createElement(\"p\");\n  firstP.innerText = `Moo Moo has the goods! \n  All of our ice cream is home made!\n  We source our dairy locally! \n  We have a variety of toppings and flavors!\n  In the mooood for something good?! \n  Come in and see us!`\n  firstP.classList.add(\"home-p\");\n\n  const secondP = document.createElement(\"p\");\n  secondP.innerText = `HOURS\n  Monday:    8a - 6p\n  Tuesday:   8a - 6p \n  Wednesday: 8a - 6p \n  Thursday:  8a - 6p \n  Friday:    8a - 9p \n  Saturday:  8a - 9p \n  Sunday:    9a - 6p`;\n  secondP.classList.add(\"home-p\");\n\n  home.appendChild(firstP);\n  home.appendChild(secondP);\n\n  return home; \n\n}\n\nfunction homePage(){\n  const main = document.getElementById(\"main\");\n  main.textContent=\"\";\n  main.appendChild(makeHome());\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage); \n\n//# sourceURL=webpack://rest-demo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://rest-demo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction menuFunction(){\n  let menu = document.createElement('div');\n  \n  let header = document.createElement('h1');\n  header.innerText = \"Menu\";\n  header.classList.add(\"menu-header\");\n\n  let header2 = document.createElement('h2');\n  header2.textContent = \"Drinks\";\n  header2.classList.add(\"section-header\");\n\n  let drink1 = document.createElement('p');\n  drink1.innerText = `Milkshakes\n  Come in chocolate, vanilla, strawberry, banana, cookie dough, and coffee flavors!`\n  drink1.classList.add('menu-p');\n\n  let drink2 = document.createElement('p');\n  drink2.innerText = `Root Beer Floats!\n  Choose from either Root Beer or Cream Soda!`\n  drink2.classList.add('menu-p');\n\n  let drink3 = document.createElement('p');\n  drink3.innerText = `Coffee and Tea!\n  We have iced and hot coffee and tea!`\n  drink3.classList.add('menu-p');\n\n  let header3 = document.createElement('h2');\n  header3.textContent = \"Ice Cream!\"\n  header3.classList.add(\"section-header\");\n\n  let flavor1 = document.createElement('p');\n  flavor1.innerText = `Chocolate\n  Classic chocolately goodness`;\n  flavor1.classList.add('menu-p');\n\n  let flavor2 = document.createElement('p');\n  flavor2.innerText = `Vanilla\n  The old school cool`\n  flavor2.classList.add('menu-p');\n\n  let flavor3 = document.createElement('p');\n  flavor3.innerText = `Strawberry\n  Our signature strawberry ice cream is made with real fresh strawberries!`\n  flavor3.classList.add('menu-p');\n\n  let flavor4 = document.createElement('p');\n  flavor4.innerText = `Coffee\n  Rhode Island's own, cawfee flavored ice cream!`\n  flavor4.classList.add('menu-p');\n\n  let flavor5 = document.createElement('p');\n  flavor5.innerText = `Banana\n  A crowd favorite, banana flavored ice cream!`\n  flavor5.classList.add('menu-p');\n\n  let flavor6 = document.createElement('p');\n  flavor6.innerText = `Cookie Dough\n  Our vanilla ice cream fused with chocolate chips!`\n  flavor6.classList.add('menu-p');\n\n  let header4 = document.createElement('h2');\n  header4.innerText = \"Specials\"\n  header4.classList.add(\"section-header\");\n\n  let special1 = document.createElement('p');\n  special1.innerText = `Banana Sundae\n  Chocolate, Banana, and Strawberry Ice Cream.\n  Whipped Cream, Hot Fudge, Bananas.\n  Topped with a cherry!`\n  special1.classList.add('menu-p');\n\n  let special2 = document.createElement('p');\n  special2.innerText = `Blended Coffee\n  Turn any flavored milkshake into blended coffee!\n  All of the caffeine and all of the sweetness.`\n  special2.classList.add('menu-p');\n\n  menu.appendChild(header);\n  \n  menu.appendChild(header2);\n  menu.appendChild(drink1);\n  menu.appendChild(drink2);\n  menu.appendChild(drink3);\n\n  menu.appendChild(header3);\n  menu.appendChild(flavor1);\n  menu.appendChild(flavor2);\n  menu.appendChild(flavor3);\n  menu.appendChild(flavor4);\n  menu.appendChild(flavor5);\n  menu.appendChild(flavor6);\n\n  menu.appendChild(header4);\n  menu.appendChild(special1);\n  menu.appendChild(special2);\n\n  menu.classList.add('menu-container');\n\n  return menu; \n  \n};\n\nfunction menuPage(){\n  const main = document.getElementById(\"main\");\n  main.textContent=\"\";\n  main.appendChild(menuFunction());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://rest-demo/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nfunction navDiv(){\n\n  const header = document.createElement(\"header\");\n  header.classList.add(\"header\"); \n  \n  const name = document.createElement(\"h1\");\n  name.classList.add(\"name\");\n  name.textContent = \"Moo Moo\";\n\n  header.appendChild(name);\n  header.appendChild(navBar());\n\n  return header;\n}\n\nfunction navBar(){\n  const navBar = document.createElement(\"nav\");\n  \n  const homeButton = document.createElement(\"button\");\n  homeButton.textContent = \"Home\";\n  homeButton.classList.add(\"button-nav\");\n  homeButton.addEventListener(\"click\",(e) =>{\n    if (e.target.classList.contains(\"engaged\")) return;\n    setEngaged(homeButton);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n  });\n\n  const menuButton = document.createElement(\"button\");\n  menuButton.textContent = \"Menu\";\n  menuButton.classList.add(\"button-nav\");\n  menuButton.addEventListener(\"click\",(e) =>{\n    if (e.target.classList.contains(\"engaged\")) return;\n    setEngaged(menuButton);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n  });  \n\n  const contactButton = document.createElement(\"button\");\n  contactButton.textContent = \"Contact\";\n  contactButton.classList.add(\"button-nav\");\n  contactButton.addEventListener(\"click\",(e) =>{\n    if (e.target.classList.contains(\"engaged\")) return;\n    setEngaged(contactButton);\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();  \n  });\n\n  navBar.appendChild(homeButton);\n  navBar.appendChild(menuButton);\n  navBar.appendChild(contactButton);\n\n  return navBar;\n}\n\nfunction setEngaged(button){\n  const buttons = document.querySelectorAll(\".button-nav\");\n\n  buttons.forEach((button) => {\n    if (button !== this){\n      button.classList.remove(\"engaged\")\n    }\n  });\n  button.classList.add(\"engaged\");\n}\n\nfunction mainDiv(){\n  const main = document.createElement(\"main\");\n  main.classList.add(\"main\");\n  main.setAttribute(\"id\", \"main\");\n  return main;\n\n}\n\nfunction footerDiv(){\n\n  const cowPic = document.createElement(\"img\");\n  cowPic.src = \"pictures/cow-icon.jpg\";\n  cowPic.classList.add(\"cow-pic\");\n  \n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"footer\");\n\n  const bottomText = document.createElement(\"p\");\n  bottomText.innerText = `Moo Moo Ice Cream\n  EST.1950`;\n\n  footer.appendChild(bottomText);\n  footer.appendChild(cowPic);\n\n  return footer;\n}\n\nfunction makeSite(){\n  const content = document.getElementById(\"content\");\n\n  content.appendChild(navDiv());\n  content.appendChild(mainDiv());\n  content.appendChild(footerDiv());\n\n  setEngaged(document.querySelector(\".button-nav\"));\n  \n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeSite); \n\n//# sourceURL=webpack://rest-demo/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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