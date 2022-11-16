console.log("Hello World!");
import geoLocationConvertAPI from "./geoLocationConvertAPI";
import stringChecker from "./stringChecker";
import weatherDataAPI from "./weatherDataAPI";

export let globalVariables = {
    cityName : "hong kong",
    coordinateLat : 0,
    coordinateLon : 0
}

stringChecker();
geoLocationConvertAPI();
console.log(globalVariables.cityName);
console.log(`Lat: ${globalVariables.coordinateLat} Lon: ${globalVariables.coordinateLon}`);
console.log(typeof globalVariables.coordinateLat);
// weatherDataAPI();