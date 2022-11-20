import stringChecker from "./stringChecker";
import geoLocationConverterAPI from "./geoLocationConvertAPI";
import currentweatherDataAPI from "./currentWeatherDataAPI";
import userInterface from "./userInterface";

const searchInput_DOM = document.querySelector("[data-search-input]");
const searchButton_DOM = document.querySelector("[data-search-button]");

searchButton_DOM.addEventListener("click", getWeatherData);

async function getWeatherData() {
    console.log("Search button has been clicked.");
    let cityName = searchInput_DOM.value;
    // Check if the search input is empty, if not then convert space to +
    cityName = stringChecker(cityName);
    // If cityName.length !== 0 search for the city, if cityName.length === 0 exit the function
    if (cityName) {
        // Get the geoData then retrieve the weatherData from the API
        // If geoData is empty then exit the function
        const geoData = await geoLocationConverterAPI(cityName);
        if (!geoData) return;
        const weatherData = await currentweatherDataAPI(geoData);
        // Render UI from weatherData
        userInterface(weatherData, geoData);
    } else {
        const errorMsg = document.querySelector("[data-error-msg]");
        errorMsg.style.visibility = "visible";
        return;
    }
}

// When the page is loaded, set the default weather to a specific city
async function initialWeather() {
    console.log("Initializing the weahter for the default city.")
    const cityName = "Calgary";
    const coordinates = await geoLocationConverterAPI(cityName);
    const weatherData = await currentweatherDataAPI(coordinates);
    console.log(weatherData);
}

// initialWeather();