import { globalVariables } from ".";

export default async function weatherDataAPI() {
    const coordinateLat = globalVariables.coordinateLat;
    const coordinateLon = globalVariables.coordinateLon;
    const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
    // const apiCall = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
    const apiCall = "https://api.openweathermap.org/data/2.5/weather?lat="
    coordinateLat +
    "&lon=" + 
    coordinateLon + 
    "&appid=" + 
    apiKey;

    // console.log(apiCall);
    console.log(`Lat: ${coordinateLat} Lon: ${coordinateLon}`)
}