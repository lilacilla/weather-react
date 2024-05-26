import React from "react";

export default function Main() {
  return (
    <div className="Main">
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city" id="city">
              London
            </h1>
            <p className="weather-app-details">
              <span id="time">Monday 12:00</span>,
              <span id="description">Sunny</span>
              <br />
              Humidity: <strong id="humidity">64%</strong>, Wind:
              <strong id="wind-speed">12mph</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div id="icon"></div>
            <div className="weather-app-temperature" id="temperature">
              17
            </div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>

        <div className="weather-forecast" id="forecast"></div>
      </main>
    </div>
  );
}
