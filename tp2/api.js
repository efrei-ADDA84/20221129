import fetch from "node-fetch";
import express from "express";

const app = express();

app.get("/", async (req, res) => {
  const { lat, lon } = req.query;
  const API_KEY = "b498963e6b2e73ceaaaa40a6e510e032";
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`;
  try {
    const response = await fetch(weatherURL);
    const weatherData = await response.json();
    const temperature = weatherData.main.temp;
    console.log("> successful request");
    res.status(200).json({ temperature: temperature });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

const port = 8081;
app.listen(port, () => {
  console.log("API is running on port:", port);
});
