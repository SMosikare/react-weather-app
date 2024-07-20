import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    const date = new Date(props.data.time * 1000);
    const day = date.getDay();

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function dailyTemp() {
    const temp = Math.round(props.data.temperature.day);
    return `${temp}°C`;
  }

  return (
    <div className="WeatherForecastDay text-center">
      <div className="forecast-day">{day()}</div>

      <WeatherIcon icon={props.data.condition.icon} width={40} height={40} />

      <div className="forecast-temp">{dailyTemp()}</div>
    </div>
  );
}
