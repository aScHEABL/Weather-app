export default async function geoLocationConverterAPI(cityName) {
  console.log(`Search for ${cityName}`)
  const limitNumber = 1;
  const apiKey = "9b708ac24f65eeeba73e728c5a9e1d80";
  const apiCall = "http://api.openweathermap.org/geo/1.0/direct?q=" +
  cityName +
  "&limit=" +
  limitNumber +
  "&appid=" +
  apiKey;

  const response = await fetch(apiCall, { mode: "cors"});
  const data = await response.json();
  let coordinates = {
    lat: 0,
    lon: 0
  }

  coordinates.lat = data[0].lat;
  coordinates.lon = data[0].lon;

  return coordinates;
}