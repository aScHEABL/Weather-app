import { globalVariables } from ".";

export default function stringChecker() {
    let cityName = globalVariables.cityName;
    // regExp rules
    const whiteSpaceInTheMiddle = /\b\s+\b/g;

    whiteSpaceInTheMiddle.test(cityName) ? concatString() : false;
    function concatString() {
        cityName = cityName.replaceAll(whiteSpaceInTheMiddle, "+");
    }
    globalVariables.cityName = cityName;
}
