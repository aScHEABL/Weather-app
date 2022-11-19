export default function userInterface(weatherData, geoData) {
    console.log(weatherData);
    console.log(geoData);
    let dom_object = {
        weatherInfoDesc: document.querySelector("[data-weather-info-description]"),
        weatherInfoCity: document.querySelector("[data-weather-info-city]"),
        weatherInfoDate: document.querySelector("[data-weather-info-time]"),
        weatherInfoTemp: document.querySelector("[data-weather-info-temp]")
    }
    dom_object.weatherInfoDesc.textContent = weatherData.weather.description;
    dom_object.weatherInfoCity.textContent = geoData.name;
    dom_object.weatherInfoTemp.textContent = weatherData.main.temp;
}