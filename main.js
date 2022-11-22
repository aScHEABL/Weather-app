/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --dark: #191b1f;\r\n  --dandelion: #ffc62d;\r\n  --white: #f5f5f5;\r\n}\r\n\r\n*,\r\n*::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  padding: 3.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background-image: linear-gradient(\r\n      to right,\r\n      rgba(0, 0, 0, 0.4),\r\n      rgba(0, 0, 0, 0.4)\r\n    ),\r\n    url(https://cdn.discordapp.com/attachments/1041626172871684158/1041627277693304933/water_trees_games_forest_nature_drawings_widescreen_3840x2160.jpg);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  color: var(--white);\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.weather-info {\r\n  max-width: 55%;\r\n}\r\n\r\n.weather-info-description {\r\n  margin-bottom: 1rem;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n  line-height: 1;\r\n}\r\n\r\n.weather-info-city {\r\n  margin-bottom: 1rem;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.weather-info-date {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.weather-info-time {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.weather-info-temperature {\r\n  margin-bottom: 0.2rem;\r\n  margin-top: 1rem;\r\n  font-size: 4rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.weather-info-unit-f {\r\n  margin-bottom: 2.5rem;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.weather-info-icon-div {\r\n  width: 5rem;\r\n}\r\n\r\n.weather-info-icon {\r\n  width: 5.6rem;\r\n}\r\n\r\n.search-box {\r\n  margin-top: 1rem;\r\n  height: 30px;\r\n  max-width: 250px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid var(--white);\r\n  padding: 6px 12px;\r\n}\r\n\r\n.search-box-input {\r\n  height: 100%;\r\n  flex-shrink: 2;\r\n  max-width: 150px;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border: none;\r\n  outline: none;\r\n  color: var(--white);\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n::placeholder {\r\n  color: var(--white);\r\n  opacity: 1;\r\n}\r\n\r\n.search-icon {\r\n  height: 18px;\r\n  min-width: 18px;\r\n  background-image: url(https://bscottnz.github.io/weather-app/imgs/search-icon.afa8a864e76e9c624eaedad03c287834.png);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n}\r\n\r\n.error-msg {\r\n  margin-top: 1rem;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n  visibility: hidden;\r\n}\r\n\r\n.weather-details {\r\n  margin-bottom: 3rem;\r\n  display: flex;\r\n}\r\n\r\n.weather-details-icon {\r\n  width: 3rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.weather-details-label {\r\n  margin-bottom: 0.6rem;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.weather-details-data {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.change-forecast {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.daily-button,\r\n.hourly-button {\r\n  margin-right: 2rem;\r\n  font-size: 1.4rem;\r\n  font-weight: 600;\r\n  padding: 0.6rem 1.2rem;\r\n  border: 2px solid rgba(0, 0, 0, 0);\r\n  cursor: pointer;\r\n}\r\n\r\n.forecast-selected {\r\n  border: 2px solid #f5f5f5;\r\n  border-radius: 3px;\r\n}\r\n\r\n.change-hours-div {\r\n  margin-left: 1rem;\r\n  width: 9rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.forecast-daily-div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.forecast-daily-day {\r\n  margin-bottom: 2rem;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.forecast-daily-temperature-high {\r\n  margin-bottom: 0.4rem;\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.forecast-daily-temperature-low {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.forecast-daily-icon {\r\n  margin-top: 2rem;\r\n  width: 4rem;\r\n}\r\n\r\n.forecast-hourly-div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.forecast-hourly {\r\n  width: 8.5rem;\r\n  height: 16.3rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.forecast-hourly-day {\r\n  margin-bottom: 2rem;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.forecast-hourly-current-temperature {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.forecast-hourly-icon {\r\n  margin-top: 2rem;\r\n  width: 4rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;;;EAGE,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B;;;;;yJAKuJ;EACvJ,sBAAsB;EACtB,4BAA4B;EAC5B,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qCAAqC;EACrC,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,mHAAmH;EACnH,wBAAwB;EACxB,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\r\n\r\n:root {\r\n  --dark: #191b1f;\r\n  --dandelion: #ffc62d;\r\n  --white: #f5f5f5;\r\n}\r\n\r\n*,\r\n*::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  padding: 3.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background-image: linear-gradient(\r\n      to right,\r\n      rgba(0, 0, 0, 0.4),\r\n      rgba(0, 0, 0, 0.4)\r\n    ),\r\n    url(https://cdn.discordapp.com/attachments/1041626172871684158/1041627277693304933/water_trees_games_forest_nature_drawings_widescreen_3840x2160.jpg);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  color: var(--white);\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.weather-info {\r\n  max-width: 55%;\r\n}\r\n\r\n.weather-info-description {\r\n  margin-bottom: 1rem;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n  line-height: 1;\r\n}\r\n\r\n.weather-info-city {\r\n  margin-bottom: 1rem;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.weather-info-date {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.weather-info-time {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.weather-info-temperature {\r\n  margin-bottom: 0.2rem;\r\n  margin-top: 1rem;\r\n  font-size: 4rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.weather-info-unit-f {\r\n  margin-bottom: 2.5rem;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.weather-info-icon-div {\r\n  width: 5rem;\r\n}\r\n\r\n.weather-info-icon {\r\n  width: 5.6rem;\r\n}\r\n\r\n.search-box {\r\n  margin-top: 1rem;\r\n  height: 30px;\r\n  max-width: 250px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid var(--white);\r\n  padding: 6px 12px;\r\n}\r\n\r\n.search-box-input {\r\n  height: 100%;\r\n  flex-shrink: 2;\r\n  max-width: 150px;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border: none;\r\n  outline: none;\r\n  color: var(--white);\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n::placeholder {\r\n  color: var(--white);\r\n  opacity: 1;\r\n}\r\n\r\n.search-icon {\r\n  height: 18px;\r\n  min-width: 18px;\r\n  background-image: url(https://bscottnz.github.io/weather-app/imgs/search-icon.afa8a864e76e9c624eaedad03c287834.png);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n}\r\n\r\n.error-msg {\r\n  margin-top: 1rem;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n  visibility: hidden;\r\n}\r\n\r\n.weather-details {\r\n  margin-bottom: 3rem;\r\n  display: flex;\r\n}\r\n\r\n.weather-details-icon {\r\n  width: 3rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.weather-details-label {\r\n  margin-bottom: 0.6rem;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.weather-details-data {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.change-forecast {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.daily-button,\r\n.hourly-button {\r\n  margin-right: 2rem;\r\n  font-size: 1.4rem;\r\n  font-weight: 600;\r\n  padding: 0.6rem 1.2rem;\r\n  border: 2px solid rgba(0, 0, 0, 0);\r\n  cursor: pointer;\r\n}\r\n\r\n.forecast-selected {\r\n  border: 2px solid #f5f5f5;\r\n  border-radius: 3px;\r\n}\r\n\r\n.change-hours-div {\r\n  margin-left: 1rem;\r\n  width: 9rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.forecast-daily-div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.forecast-daily-day {\r\n  margin-bottom: 2rem;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.forecast-daily-temperature-high {\r\n  margin-bottom: 0.4rem;\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.forecast-daily-temperature-low {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.forecast-daily-icon {\r\n  margin-top: 2rem;\r\n  width: 4rem;\r\n}\r\n\r\n.forecast-hourly-div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.forecast-hourly {\r\n  width: 8.5rem;\r\n  height: 16.3rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.forecast-hourly-day {\r\n  margin-bottom: 2rem;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.forecast-hourly-current-temperature {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.forecast-hourly-icon {\r\n  margin-top: 2rem;\r\n  width: 4rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
    "&units=" +
    units +
    "&lang=" +
    lang +
    "&appid=" + 
    apiKey;

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
    const apiCall = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" +
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

    // const response = await fetch(apiCall, {mode: "cors"});
    // const data = await response.json();
    console.log(apiCall);

    // Clone the object and assign it to forecastWeatherData
    // const forecastWeatherData = structuredClone(data);
    // return forecastWeatherData;
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
function userInterface(currentWeatherData, geoData) { 
    // console.log(currentWeatherData);
    // console.log(forecastWeatherData);
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
    dom_object.weatherInfoDesc.textContent = currentWeatherData.weather.description;
    dom_object.weatherInfoCity.textContent = geoData.name;
    dom_object.weatherInfoTemp.textContent = currentWeatherData.main.temp;
    // Top right weather details
    dom_object.weatherDetailsFeelLikeTemp.textContent = currentWeatherData.main.feels_like + " °C";
    dom_object.weatherDetailsHumidity.textContent = currentWeatherData.main.humidity + " %";
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
/******/ 			id: moduleId,
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _stringChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringChecker */ "./src/stringChecker.js");
/* harmony import */ var _geoLocationConvertAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geoLocationConvertAPI */ "./src/geoLocationConvertAPI.js");
/* harmony import */ var _currentWeatherDataAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentWeatherDataAPI */ "./src/currentWeatherDataAPI.js");
/* harmony import */ var _forecastWeatherDataAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forecastWeatherDataAPI */ "./src/forecastWeatherDataAPI.js");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");







const searchInput_DOM = document.querySelector("[data-search-input]");
const searchButton_DOM = document.querySelector("[data-search-button]");

searchButton_DOM.addEventListener("click", getWeatherData);

async function getWeatherData() {
    console.log("Search button has been clicked.");
    let cityName = searchInput_DOM.value;
    // Check if the search input is empty, if not then convert space to +
    cityName = (0,_stringChecker__WEBPACK_IMPORTED_MODULE_1__["default"])(cityName);
    // If cityName.length !== 0 search for the city, if cityName.length === 0 exit the function
    if (cityName) {
        // Get the geoData then retrieve the currentWeatherData from the API
        // If geoData is empty then exit the function
        const geoData = await (0,_geoLocationConvertAPI__WEBPACK_IMPORTED_MODULE_2__["default"])(cityName);
        if (!geoData) return;
        const currentWeatherData = await (0,_currentWeatherDataAPI__WEBPACK_IMPORTED_MODULE_3__["default"])(geoData);
        // const forecastWeatherData = await forecastWeatherDataAPI(geoData);
        // Render UI from weatherData
        (0,_userInterface__WEBPACK_IMPORTED_MODULE_5__["default"])(currentWeatherData, geoData);
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
    const geoData = await (0,_geoLocationConvertAPI__WEBPACK_IMPORTED_MODULE_2__["default"])(cityName);
    const currentWeatherData = await (0,_currentWeatherDataAPI__WEBPACK_IMPORTED_MODULE_3__["default"])(geoData);
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_5__["default"])(currentWeatherData, geoData);
    console.log(currentWeatherData);
}

// defaultWeather();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map