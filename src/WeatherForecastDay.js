import React from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="forecast-day-wrapper">
      <div className="forecast-date">{day()}</div>

      <WeatherIcon
        code={props.data.weather[0].icon}
        className="forecast-icon"
        size={60}
      />

      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemp()} | </span>
        <span className="forecast-temperature-min">{minTemp()} </span>
      </div>
    </div>
  );
}
