import { globalVariables } from ".";

export default async function geoLocationConvertAPI() {
  let cityName = globalVariables.cityName;
  const limitNumber = "1";
  const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
  const apiCall =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&limit=" +
    limitNumber +
    "&appid=" +
    apiKey;

  const response = await fetch(apiCall, { mode: "cors" });
  const geoData = await response.json();

  // console.log(geoData);
  // console.log(`Lat: ${geoData[0].lat} Lon: ${geoData[0].lon}`);
  
  globalVariables.coordinateLat = geoData[0].lat;
  globalVariables.coordinateLon = geoData[0].lon;
  console.log(`Lat: ${globalVariables.coordinateLat} Lon: ${globalVariables.coordinateLon}`);
  console.log(typeof geoData[0].lat)
  console.log(typeof geoData[0].lon)
}
