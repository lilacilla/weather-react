import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <div className="weather-app-temperature">
          {Math.round(props.celsius)}

          <span className="weather-app-unit">
            °C |{" "}
            <a href="/" onClick={displayFahrenheit} className="unit-link">
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="weather-app-temperature">
          {Math.round(fahrenheit())}
          <span className="weather-app-unit">
            <a href="/" onClick={displayCelsius} className="unit-link">
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}
