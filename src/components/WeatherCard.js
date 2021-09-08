import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = ({ dt, min, max, main, icon }) => {
  const date = new Date(dt);
  return (
    <div >
      <Card >
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <Card.Body>
          <Card.Title>Rain</Card.Title>
          <p>
            {date.getFullYear()} - {date.getMonth() + 1} - {date.getDate()}
          </p>
          <p>Min: {min}</p>
          <p>Max: {max}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherCard;
