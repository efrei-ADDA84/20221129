/*// Fonction pour récupérer les arguments avec un préfixe --
function getArguments() {
  const args = {};
  process.argv.slice(2).forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      args[key] = value || true; // Si aucune valeur n'est spécifiée, définir la valeur sur true
    }
  });
  return args;
}

function getWeather(lon, lat) {
  const { OpenWeatherAPI } = require("openweather-api-node");

  const weather = new OpenWeatherAPI({
    key: "09edc53de3c70b6efe1e53ff6f7bbba9",
    lat: lat,
    lon: lon,
    units: "imperial",
  });

  weather.getCurrent().then((data) => {
    return data.weather.temp.cur;
  });
}

console.log(getWeather(process.argv.slice(2)[0], process.argv.slice(2)[1]));
*/
import fetch from "node-fetch";

// Function to fetch weather data
async function getWeatherData(LAT, LONG, API_KEY) {
  //const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}.44&lon=${lon}.04&exclude=hourly,daily&appid=${apiKey}`;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LONG}&units=metric&APPID=${API_KEY}`;
  try {
    const response = await fetch(weatherURL);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error;
  }
}
// Example usage
getWeatherData(process.env.LAT, process.env.LONG, process.env.API_KEY)
  .then((data) => {
    console.log(data.main.temp); // Display the weather data for Mumbai
  })
  .catch((error) => {
    console.error(error);
  });
