import React from "react";
import { Link } from "react-router-dom";

function Card({
  name,
  actual_temp,
  temp_min,
  temp_max,
  weather_actual_state,
  img,
  onClose,
  id,
}) {
  return (
    <figure className="grid grid-cols-2 rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white p-4 m-5  relative duration-150 ease-out hover:ease-in hover:scale-105 font-Montserrat">
      <img
        src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
        alt=""
        width="170"
        height="100"
        className=""
      />
      <div className="">
        <div>
          <button
            onClick={onClose}
            className=" bg-red-600 hover:bg-red-700 p-1 px-2 absolute top-2 right-4 rounded-lg transition-colors"
          >
            X
          </button>
        </div>

        <div className="">
          <Link
            to={"/" + id}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <h2 className="text-xl text-black font-semibold mt-6 ">{name}</h2>
          </Link>
        </div>

        <div className="">
          <h4 className="text-xl pt-2">Temperatures:</h4>
          <div className="p-2 text-base grid">
            <p>Actual Temperature: {actual_temp}°C</p>
            <p>State: {weather_actual_state}</p>
            <p>Min Temperature: {temp_min}°C</p>
            <p>Max Temperature: {temp_max}°C</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default Card;
