export default function userInterface(weatherData, geoData) { 
    // console.log(weatherData);
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
    dom_object.weatherInfoDesc.textContent = weatherData.weather.description;
    dom_object.weatherInfoCity.textContent = geoData.name;
    dom_object.weatherInfoTemp.textContent = weatherData.main.temp;
    // Top right weather details
    dom_object.weatherDetailsFeelLikeTemp.textContent = weatherData.main.feels_like + " °C";
    dom_object.weatherDetailsHumidity.textContent = weatherData.main.humidity + " %";
    // dom_object.weatherDetailsChanceOfRain.textContent = weatherData
}