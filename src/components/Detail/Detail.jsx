import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";
import Swal from "sweetalert2";

function Detail() {
  const { id } = useParams();
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    City(id);
  }, []);

  function City(id) {
    setLoading(true);
    axios(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (response.data.main !== undefined) {
          const city = {
            temp_min: Math.round(response.data.main.temp_min),
            temp_max: Math.round(response.data.main.temp_max),
            img: response.data.weather[0].icon,
            id: response.data.id,
            weather_actual_state: response.data.weather[0].main,
            wind: response.data.wind.speed,
            actual_temp: Math.round(response.data.main.temp),
            name: response.data.name,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
          };
          setCities((oldCities) => [...oldCities, city]);
          setLoading(false);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "We didn´t found this city!",
          });
        }
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "We didn´t found this city!",
        })
      );
  }

  return (
    <div className="bg-black xl:h-screen">
      <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
        <button className="rounded-md bg-cyan-300 p-2 hover:bg-cyan-200 font-semibold m-4">
          Take me back home
        </button>
      </Link>
      <div className="grid  xl:justify-center place-content-center">
        {loading ? (
          <div className="grid  xl:grid-cols-2 gap-5 sm:h-screen">
            <h1 className="text-white text-7xl">Loading...</h1>
            <ReactLoading
              type={"spin"}
              color="#ffffff"
              width={100}
              height={100}
            />
          </div>
        ) : cities.length > 0 ? (
          cities.length[0]
        ) : null}
        {cities.map((city) => (
          <figure
            className="rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white  font-Montserrat "
            key={city.id}
          >
            <img
              src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"}
              alt=""
              width="150"
              height="150"
              className=""
            />
            <div className="">
              <div className="pt-2">
                <h2 className="text-7xl text-black font-semibold mt-6  px-4">
                  {city.name}
                </h2>
              </div>

              <div className="">
                <h4 className="text-4xl mt-4">Temperatures:</h4>
                <div className="p-5 text-3xl">
                  <p>Actual Temperature: {city.actual_temp}°C</p>
                  <p>State: {city.weather_actual_state}</p>
                  <p>Min Temperature: {city.temp_min}°C</p>
                  <p>Max Temperature: {city.temp_max}°C</p>
                  <p>Wind: {city.wind} km/h</p>
                  <p className="capitalize">Description: {city.description}</p>
                  <p>Humidity: {city.humidity}</p>
                </div>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Detail;
