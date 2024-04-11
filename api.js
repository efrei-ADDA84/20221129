import fetch from "node-fetch";
import express from "express";

const app = express();

app.get("/", async (req, res) => {
  const { lat, lon } = req.query;
  // const API_KEY = process.env.API_KEY
  const API_KEY = "09edc53de3c70b6efe1e53ff6f7bbba9";
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`;
  try {
    const response = await fetch(weatherURL);
    const weatherData = await response.json();
    console.log("temperature : ", weatherData.main.temp);
    res.json(weatherData.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

const port = 8081;
app.listen(port, () => {
  console.log("Api is running");
});
