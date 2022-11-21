
export default async function geoLocationConverterAPI(cityName) {
  const errorMsg = document.querySelector("[data-error-msg]");
  try {
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
    
    // Clone the object and assign to geoData
    const geoData = structuredClone(data);
    // console.log(geoData)

    // (geoData.length === 0) ? errorMsg.style.visibility = "visible" : geoData[0];
    if (geoData.length === 0) {
      errorMsg.style.visibility = "visible";
      console.log("Did not find any result.");
      return false;
    } else return geoData[0];
  } catch (error) {
    console.error(error)
    errorMsg.style.visibility = "visible";
  }
}