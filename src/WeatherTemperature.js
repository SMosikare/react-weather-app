import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  const celsiusTemp = Math.round(props.temp);
  const fahrenheitTemp = Math.round(props.temp * (9 / 5) + 32);

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
        <span className="temp">{celsiusTemp}</span>{" "}
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
        <span className="temp">{fahrenheitTemp}</span>{" "}
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
