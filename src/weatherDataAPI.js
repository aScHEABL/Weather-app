export default async function weatherDataAPI(coordinateLat, coordinateLon) {
    const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
    const apiCall = "https://api.openweathermap.org/data/2.5/weather?lat="
    coordinateLat +
    "&lon=" + 
    coordinateLon + 
    "&appid=" + 
    apiKey;
    
    // const response = await fetch(apiCall, { mode: "cors"});
    // const weatherData = await response.json();
    // console.log(apiCall);
    console.log(coordinateLat);
}