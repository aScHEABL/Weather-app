export default async function currentweatherDataAPI(geoData) {
    // Convert coordinate from number to string
    const coordinateLat = geoData.lat;
    const coordinateLon = geoData.lon;
    const lang = "en";
    const units = "metric";
    const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
    const apiCall = "https://api.openweathermap.org/data/2.5/weather?lat=" +
    coordinateLat +
    "&lon=" + 
    coordinateLon + 
    "&units=" +
    units +
    "&lang=" +
    lang +
    "&appid=" + 
    apiKey;

    const response = await fetch(apiCall, {mode: "cors"});
    const data = await response.json();

    // Clone the object and assign it to currentWeatherData
    const currentWeatherData = structuredClone(data);
    return currentWeatherData;
}