export default function stringChecker(string) {
    let cityName = string;
    // regExp rules
    const whiteSpaceInTheMiddle = /\b\s+\b/g;

    whiteSpaceInTheMiddle.test(cityName) ? concatString() : false;
    function concatString() {
        cityName = cityName.replace(whiteSpaceInTheMiddle, "+");
    }
    return cityName;
}
