import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather mb-5">
      <div className="row">
        <div className="col-5 left-section">
          <h1 className="city">Paris</h1>

          <p className="date">17 July 2024</p>

          <div className="temperature">
            {" "}
            <span className="temp">27</span>{" "}
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>

          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            className="weatherIcon m-3"
            alt="Sunny"
          />

          <h3>
            <i>Sunny</i>
          </h3>
        </div>

        <div className="col-7 right-section">
          <form className="form mb-3">
            <input
              type="search"
              placeholder="Enter a city.."
              className="input form-control"
              autoFocus="on"
            />

            <button type="submit" className="btn">
              Search
            </button>
          </form>

          <div className="row">
            <div className="col label">Day</div>
            <div className="col">Wednesday</div>
          </div>

          <div className="row">
            <div className="col label"> Precipitation</div>
            <div className="col">10%</div>
          </div>

          <div className="row">
            <div className="col label">Humidity</div>
            <div className="col">80%</div>
          </div>

          <div className="row">
            <div className=" col label">Wind Speed</div>
            <div className="col">2.5km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
