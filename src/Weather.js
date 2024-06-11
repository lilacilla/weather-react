import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: " ",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchEntry();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchEntry() {
    const apiKey = "6403b3086316b6e95e5d25063ad5d480";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header>
          <form onSubmit={handleSubmit} className="search-form">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              id="search-form-input"
              className="search-form-input"
              autoFocus="on"
              onChange={handleCityChange}
            />

            <input type="submit" value="Search" class="search-form-button" />
          </form>
        </header>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    searchEntry();
    return "Loading....";
  }
}
