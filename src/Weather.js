import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ fetched: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      fetched: true,
      city: response.data.city,
      date: response.data.time,
      temp: response.data.temperature.current,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      country: response.data.country,
      humidity: response.data.temperature.humidity,
      windSpeed: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "4o0269f4b7t3d5f7f0cfc4a0af394b27";
    const unit = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function updateCityName(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weatherData.fetched) {
    return (
      <div className="Weather mb-5">
        <div className="row">
          <div className="col-5 left-section">
            <h1 className="city">{weatherData.city}</h1>

            <FormattedDate date={weatherData.date} />

            <div className="temperature">
              {" "}
              <span className="temp">{Math.round(weatherData.temp)}</span>{" "}
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>

            <img
              src={weatherData.icon}
              className="weatherIcon m-3"
              alt={weatherData.description}
            />

            <h3 className="text-capitalize">
              <i>{weatherData.description}</i>
            </h3>
          </div>

          <div className="col-7 right-section">
            <form className="form mb-3" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city.."
                className="input form-control"
                autoFocus="on"
                onChange={updateCityName}
              />

              <button type="submit" className="btn">
                Search
              </button>
            </form>

            <div className="row">
              <div className="col label">Country</div>
              <div className="col">{weatherData.country}</div>
            </div>

            <div className="row">
              <div className="col label">Humidity</div>
              <div className="col">{weatherData.humidity}%</div>
            </div>

            <div className="row">
              <div className=" col label">Wind Speed</div>
              <div className="col">{weatherData.windSpeed}km/h</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return <div>Loading..</div>;
  }
}
