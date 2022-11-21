import stringChecker from "./stringChecker";
import geoLocationConverterAPI from "./geoLocationConvertAPI";
import currentweatherDataAPI from "./currentWeatherDataAPI";
import forecastWeatherDataAPI from "./forecastWeatherDataAPI";
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
        // Get the geoData then retrieve the currentWeatherData from the API
        // If geoData is empty then exit the function
        const geoData = await geoLocationConverterAPI(cityName);
        if (!geoData) return;
        const currentWeatherData = await currentweatherDataAPI(geoData);
        // const forecastWeatherData = await forecastWeatherDataAPI(geoData);
        // Render UI from weatherData
        userInterface(currentWeatherData, geoData);
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
    const geoData = await geoLocationConverterAPI(cityName);
    const currentWeatherData = await currentweatherDataAPI(geoData);
    userInterface(currentWeatherData, geoData);
    console.log(currentWeatherData);
}

// defaultWeather();