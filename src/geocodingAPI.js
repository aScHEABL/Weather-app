export async function geoLocationConvert() {}
{
  const cityName = "hong kong";
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
  console.log(apiCall);
}
