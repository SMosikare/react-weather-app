import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [dataFetched, setDataFetched] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  //when the value of props.city is changed, change the state dataFetched back to false so the api call can be made again(this will update the forecast)
  useEffect(() => {
    setDataFetched(false);
  }, [props.city]);

  function handleResponse(response) {
    setDataFetched(true);
    setForecastData(response.data.daily);
  }

  function searchForecast() {
    const apiKey = "4o0269f4b7t3d5f7f0cfc4a0af394b27";
    const unit = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (dataFetched) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map((dailyForecastData, index) => {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecastData} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    searchForecast();
    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="white"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}
