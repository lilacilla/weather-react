import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Sunday 12:00",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: " ",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <main>
          <div className="weather-app-data">
            <div>
              <h1 className="weather-app-city">{weatherData.city}</h1>
              <p className="weather-app-details">
                <span className="time">{weatherData.date}</span>,
                <span className="description"> {weatherData.description}</span>
                <br />
                Humidity:{" "}
                <strong className="humidity">{weatherData.humidity}%</strong>,
                Wind:
                <strong className="wind-speed">{weatherData.wind}mph</strong>
              </p>
            </div>
            <div className="weather-app-temperature-container">
              <div className="icon">{weatherData.icon}</div>
              <div className="weather-app-temperature">
                {Math.round(weatherData.temperature)}
              </div>
              <div className="weather-app-unit">°C</div>
            </div>
          </div>

          <div className="weather-forecast"></div>
        </main>
      </div>
    );
  } else {
    const apiKey = "6403b3086316b6e95e5d25063ad5d480";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
