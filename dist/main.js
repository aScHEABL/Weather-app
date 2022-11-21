/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/currentWeatherDataAPI.js":
/*!**************************************!*\
  !*** ./src/currentWeatherDataAPI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currentweatherDataAPI)
/* harmony export */ });
async function currentweatherDataAPI(geoData) {
    // Convert coordinate from number to string
    const coordinateLat = geoData.lat;
    const coordinateLon = geoData.lon;
    
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

    // Clone the object and assign it to currentWeatherData
    const currentWeatherData = structuredClone(data);
    return currentWeatherData;
}

/***/ }),

/***/ "./src/forecastWeatherDataAPI.js":
/*!***************************************!*\
  !*** ./src/forecastWeatherDataAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ forecastWeatherDataAPI)
/* harmony export */ });
async function forecastWeatherDataAPI(geoData) {
    const lang = "en";
    const units = "metric";
    const forecastDays = "7";
    const coordinateLat = geoData.lat;
    const coordinateLon = geoData.lon;
    const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
    const apiCall = "api.openweathermap.org/data/2.5/forecast/daily?lat=" +
    coordinateLat +
    "&lon=" + 
    coordinateLon +
    "&cnt=" + 
    forecastDays + 
    "&units=" + 
    units + 
    "&lang=" + 
    lang +
    "&appid=" + 
    apiKey;

    const response = await fetch(apiCall, {mode: "cors"});
    const data = await response.json();

    // Clone the object and assign it to forecastWeatherData
    const forecastWeatherData = structuredClone(data);
    return forecastWeatherData;
}

/***/ }),

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
  const errorMsg = document.querySelector("[data-error-msg]");
  try {
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
    
    // Clone the object and assign to geoData
    const geoData = structuredClone(data);
    // console.log(geoData)

    // (geoData.length === 0) ? errorMsg.style.visibility = "visible" : geoData[0];
    if (geoData.length === 0) {
      errorMsg.style.visibility = "visible";
      console.log("Did not find any result.");
      return false;
    } else return geoData[0];
  } catch (error) {
    console.error(error)
    errorMsg.style.visibility = "visible";
  }
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

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ userInterface)
/* harmony export */ });
function userInterface(weatherData, geoData) { 
    // console.log(weatherData);
    // console.log(geoData);
    let dom_object = {
        weatherInfoDesc: document.querySelector("[data-weather-info-description]"),
        weatherInfoCity: document.querySelector("[data-weather-info-city]"),
        weatherInfoDate: document.querySelector("[data-weather-info-time]"),
        weatherInfoTemp: document.querySelector("[data-weather-info-temp]"),
        weatherDetailsFeelLikeTemp: document.querySelector("[data-temperature-feel-like-value]"),
        weatherDetailsHumidity: document.querySelector("[data-weather-humidity-value]"),
        weatherDetailsChanceOfRain: document.querySelector("[data-weather-chance-of-rain]"),
        weatherDetailsWindSpeed: document.querySelector("[data-weather-wind-speed-value]")
    }
    // Top left weather info
    dom_object.weatherInfoDesc.textContent = weatherData.weather.description;
    dom_object.weatherInfoCity.textContent = geoData.name;
    dom_object.weatherInfoTemp.textContent = weatherData.main.temp;
    // Top right weather details
    dom_object.weatherDetailsFeelLikeTemp.textContent = weatherData.main.feels_like + " °C";
    dom_object.weatherDetailsHumidity.textContent = weatherData.main.humidity + " %";
    // dom_object.weatherDetailsChanceOfRain.textContent = weatherData
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
/* harmony import */ var _currentWeatherDataAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentWeatherDataAPI */ "./src/currentWeatherDataAPI.js");
/* harmony import */ var _forecastWeatherDataAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecastWeatherDataAPI */ "./src/forecastWeatherDataAPI.js");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");






const searchInput_DOM = document.querySelector("[data-search-input]");
const searchButton_DOM = document.querySelector("[data-search-button]");

searchButton_DOM.addEventListener("click", getWeatherData);

async function getWeatherData() {
    console.log("Search button has been clicked.");
    let cityName = searchInput_DOM.value;
    // Check if the search input is empty, if not then convert space to +
    cityName = (0,_stringChecker__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName);
    // If cityName.length !== 0 search for the city, if cityName.length === 0 exit the function
    if (cityName) {
        // Get the geoData then retrieve the currentWeatherData from the API
        // If geoData is empty then exit the function
        const geoData = await (0,_geoLocationConvertAPI__WEBPACK_IMPORTED_MODULE_1__["default"])(cityName);
        if (!geoData) return;
        const currentWeatherData = await (0,_currentWeatherDataAPI__WEBPACK_IMPORTED_MODULE_2__["default"])(geoData);
        const forecastWeatherData = await (0,_forecastWeatherDataAPI__WEBPACK_IMPORTED_MODULE_3__["default"])(geoData);
        // Render UI from weatherData
        (0,_userInterface__WEBPACK_IMPORTED_MODULE_4__["default"])(currentWeatherData, geoData);
    } else {
        const errorMsg = document.querySelector("[data-error-msg]");
        errorMsg.style.visibility = "visible";
        return;
    }
}

// When the page is loaded, set the default weather to a specific city
async function defaultWeather() {
    console.log("Initializing the weahter for the default city.")
    const cityName = "Calgary";
    const geoData = await (0,_geoLocationConvertAPI__WEBPACK_IMPORTED_MODULE_1__["default"])(cityName);
    const currentWeatherData = await (0,_currentWeatherDataAPI__WEBPACK_IMPORTED_MODULE_2__["default"])(geoData);
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_4__["default"])(currentWeatherData, geoData);
    console.log(currentWeatherData);
}

// defaultWeather();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map