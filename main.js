/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/geoLocationConvertAPI.js":
/*!**************************************!*\
  !*** ./src/geoLocationConvertAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geoLocationConverterAPI)
/* harmony export */ });
async function geoLocationConverterAPI(cityName) {
  console.log(`Search for ${cityName}`)
  const limitNumber = 1;
  const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
  const apiCall = "http://api.openweathermap.org/geo/1.0/direct?q=" +
  cityName +
  "&limit=" +
  limitNumber +
  "&appid=" +
  apiKey;

  const response = await fetch(apiCall, { mode: "cors"});
  const data = await response.json();
  let coordinates = {
    lat: 0,
    lon: 0
  }

  coordinates.lat = data[0].lat;
  coordinates.lon = data[0].lon;

  return coordinates;
}

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
function stringChecker(string) {
    if (string.length === 0) {
        console.log("Search input is empty.");
        return false
    } else {
    const whiteSpaceInTheMiddle = /\b\s+\b/g;
    return string = string.replaceAll(whiteSpaceInTheMiddle, "+");
    }
}

/***/ }),

/***/ "./src/weatherDataAPI.js":
/*!*******************************!*\
  !*** ./src/weatherDataAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherDataAPI)
/* harmony export */ });
async function weatherDataAPI(coordinates) {
    // Convert coordinate from number to string
    const coordinateLat = coordinates.lat;
    const coordinateLon = coordinates.lon;
    
    const lang = "en";
    const units = "metric";
    const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
    const apiCall = "https://api.openweathermap.org/data/2.5/weather?lat=" +
    coordinateLat +
    "&lon=" + 
    coordinateLon + 
    "&appid=" + 
    apiKey +
    "&units=" +
    units +
    "&lang=" +
    lang;

    const response = await fetch(apiCall, {mode: "cors"});
    const data = await response.json();

    // Clone the object and assign it to weatherData
    const weatherData = structuredClone(data);
    return weatherData;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stringChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringChecker */ "./src/stringChecker.js");
/* harmony import */ var _geoLocationConvertAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geoLocationConvertAPI */ "./src/geoLocationConvertAPI.js");
/* harmony import */ var _weatherDataAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherDataAPI */ "./src/weatherDataAPI.js");




const searchInput_DOM = document.querySelector("[data-search-input]");
const searchButton_DOM = document.querySelector("[data-search-button]");

searchButton_DOM.addEventListener("click", getWeatherData);

async function getWeatherData() {
    console.log("Search button has been clicked.");
    let cityName = searchInput_DOM.value;
    // Check if the search input is empty, if not then convert space to +
    cityName = (0,_stringChecker__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName);
    // If boolean returns true, search for the city, if false exit the function
    if (cityName) {
        const coordinates = await (0,_geoLocationConvertAPI__WEBPACK_IMPORTED_MODULE_1__["default"])(cityName);
        const weatherData = await (0,_weatherDataAPI__WEBPACK_IMPORTED_MODULE_2__["default"])(coordinates);
        console.log(weatherData);
    } else return
}

// When the page is loaded, set the default weather to a specific city
async function initialWeather() {
    console.log("Initializing the weahter for the default city.")
    const cityName = "Calgary";
    const coordinates = await (0,_geoLocationConvertAPI__WEBPACK_IMPORTED_MODULE_1__["default"])(cityName);
    const weatherData = await (0,_weatherDataAPI__WEBPACK_IMPORTED_MODULE_2__["default"])(coordinates);
    console.log(weatherData);
}

// initialWeather();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map