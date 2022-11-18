import stringChecker from "./stringChecker";
import geoLocationConverterAPI from "./geoLocationConvertAPI";
import weatherDataAPI from "./weatherDataAPI";

const searchInput_DOM = document.querySelector("[data-search-input]");
const searchButton_DOM = document.querySelector("[data-search-button]");
let cityName = "";

searchButton_DOM.addEventListener("click", getWeatherData);

async function getWeatherData() {
    console.log("Search button has been clicked.");
    cityName = searchInput_DOM.value;
    //check if the search input is empty, if not then convert space to +
    cityName = stringChecker(cityName);
    // if boolean returns true, search for the city, if false exit the function
    if (cityName) {
        const coordinates = await geoLocationConverterAPI(cityName);
        const weatherData = await weatherDataAPI(coordinates.lat, coordinates.lon);
        console.log(weatherData);
    } else return
}