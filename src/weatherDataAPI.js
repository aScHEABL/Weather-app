export default async function weatherDataAPI(coordinateLat, coordinateLon) {
    // Convert coordinate from number to string
    coordinateLat = coordinateLat + "";
    coordinateLon = coordinateLon + "";
    
    const lang = "en";
    const units = "metric";
    const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
    const apiCall = "https://api.openweathermap.org/data/2.5/weather?lat=" +
    coordinateLat +
    "&lon=" + 
    coordinateLon + 
    "&appid=" + 
    apiKey +
    "&units=" +
    units +
    "&lang=" +
    lang;

    const response = await fetch(apiCall, {mode: "cors"});
    const data = await response.json();

    // Clone the object and assign it to weatherData
    const weatherData = structuredClone(data);
    return weatherData;
}