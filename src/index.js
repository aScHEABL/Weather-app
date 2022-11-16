import geoLocationConvert from "./geocodingAPI";
import stringChecker from "./stringChecker";

let cityName = "hong kong";

cityName = stringChecker(cityName);
geoLocationConvert(cityName);