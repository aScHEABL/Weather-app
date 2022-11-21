export default async function forecastWeatherDataAPI(geoData) {
    const lang = "en";
    const units = "metric";
    const forecastDays = "7";
    const coordinateLat = geoData.lat;
    const coordinateLon = geoData.lon;
    const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
    const apiCall = "api.openweathermap.org/data/2.5/forecast/daily?lat=" +
    coordinateLat +
    "&lon=" + 
    coordinateLon +
    "&cnt=" + 
    forecastDays + 
    "&units=" + 
    units + 
    "&lang=" + 
    lang +
    "&appid=" + 
    apiKey;

    const response = await fetch(apiCall, {mode: "cors"});
    const data = await response.json();

    // Clone the object and assign it to forecastWeatherData
    const forecastWeatherData = structuredClone(data);
    return forecastWeatherData;
}