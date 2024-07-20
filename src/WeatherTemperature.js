import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function celsiusTemp() {
    const temp = Math.round(props.temp);
    return `${temp}`;
  }

  function fahrenheitTemp() {
    const temp = Math.round(props.temp * (9 / 5) + 32);
    return `${temp}`;
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        {" "}
        <span className="temp">{celsiusTemp()}</span>{" "}
        <span className="units">
          <span>°C</span> |{" "}
          <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        {" "}
        <span className="temp">{fahrenheitTemp()}</span>{" "}
        <span className="units">
          <a href="/" className="text-decoration-none" onClick={showCelcius}>
            °C
          </a>{" "}
          | <span>°F</span>
        </span>
      </div>
    );
  }
}
