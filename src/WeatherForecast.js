import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "bf54175800a55e59e6c4d6461deeef12";

    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <span key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </span>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();

    return null;
  }
}
