'use strict';

console.log("Hello World!");
import geoLocationConvertAPI from "./geoLocationConvertAPI";
import stringChecker from "./stringChecker";
import weatherDataAPI from "./weatherDataAPI";

export let globalVariables = {
    cityName : "hong kong"
}

stringChecker();
// geoLocationConvertAPI();
// weatherDataAPI();

console.log(globalVariables);