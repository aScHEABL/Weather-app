/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/geocodingAPI.js":
/*!*****************************!*\
  !*** ./src/geocodingAPI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geoLocationConvert)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


async function geoLocationConvert() {
  let cityName = ___WEBPACK_IMPORTED_MODULE_0__.globalVariables.cityName;
  const limitNumber = "1";
  const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
  const apiCall =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&limit=" +
    limitNumber +
    "&appid=" +
    apiKey;

  const response = await fetch(apiCall, { mode: "cors" });
  const geoData = await response.json();

  const coordinateLat = geoData[0].lat;
  const coordinateLon = geoData[0].lon
  console.log(geoData);
  console.log(`Lat: ${geoData[0].lat} Lon: ${geoData[0].lon}`);
  
  ___WEBPACK_IMPORTED_MODULE_0__.globalVariables.coordinateLat = coordinateLat;
  ___WEBPACK_IMPORTED_MODULE_0__.globalVariables.coordinateLon = coordinateLon;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalVariables": () => (/* binding */ globalVariables)
/* harmony export */ });
/* harmony import */ var _geocodingAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geocodingAPI */ "./src/geocodingAPI.js");
/* harmony import */ var _stringChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringChecker */ "./src/stringChecker.js");
console.log("Hello World!");



let globalVariables = {
    cityName : "hong kong",
    coordinateLat : "",
    coordinateLon : ""
}

;(0,_stringChecker__WEBPACK_IMPORTED_MODULE_1__["default"])();
// geoLocationConvert();

/***/ }),

/***/ "./src/stringChecker.js":
/*!******************************!*\
  !*** ./src/stringChecker.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stringChecker)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function stringChecker() {
    let cityName = ___WEBPACK_IMPORTED_MODULE_0__.globalVariables.cityName;
    // regExp rules
    const whiteSpaceInTheMiddle = /\b\s+\b/g;

    whiteSpaceInTheMiddle.test(cityName) ? concatString() : false;
    function concatString() {
        cityName = cityName.replaceAll(whiteSpaceInTheMiddle, "+");
    }
    ___WEBPACK_IMPORTED_MODULE_0__.globalVariables.cityName = cityName;
}


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map