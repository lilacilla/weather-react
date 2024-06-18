import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{props.data.city}</h1>
            <p className="weather-app-details">
              <span className="time">
                <FormattedDate date={props.data.date} />
              </span>
              ,<span className="description"> {props.data.description}</span>
              <br />
              Humidity:{" "}
              <strong className="humidity">{props.data.humidity}%</strong>,
              Wind:
              <strong className="wind-speed"> {props.data.wind}mph</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div className="weather-app-icon">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <div className="weather-app-temperature">
              {Math.round(props.data.temperature)}
            </div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>

        <div className="weather-forecast"></div>
      </main>
    </div>
  );
}
