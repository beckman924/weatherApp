import React from "react";
import Card from "../Card/Card";

export default function Cards({ cities, onClose }) {
  return (
    <div className="grid gap-1 grid-cols-responsive">
      {cities.map((city) => (
        <Card
          img={city.img}
          name={city.name}
          actual_temp={city.actual_temp}
          weather_actual_state={city.weather_actual_state}
          temp_min={city.temp_min}
          temp_max={city.temp_max}
          humidity={city.humidity}
          description={city.description}
          onClose={() => onClose(city.id)}
          id={city.id}
          key={city.id}
        />
      ))}
    </div>
  );
}
