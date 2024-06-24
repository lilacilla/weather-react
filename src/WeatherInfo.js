import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import Weather from "./Weather";

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
                size={70}
              />
            </div>
            <div className="temperature-wrapper">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
