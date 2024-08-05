import React from "react";

export default function FormattedDate(props) {
  const currentTime = new Date(props.date * 1000);
  const date = currentTime.getDate();
  const year = currentTime.getFullYear();

  function month() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Decemeber",
    ];

    const month = currentTime.getMonth();
    return months[month];
  }

  return (
    <div>
      {date} {month()} {year}
    </div>
  );
}
