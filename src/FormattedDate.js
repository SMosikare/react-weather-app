import React from "react";

export default function FormattedDate(props) {
  const currentTime = new Date(props.date * 1000);

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

  const date = currentTime.getDate();
  const year = currentTime.getFullYear();
  let month = currentTime.getMonth();
  month = months[month];

  return (
    <div>
      {date} {month} {year}
    </div>
  );
}
