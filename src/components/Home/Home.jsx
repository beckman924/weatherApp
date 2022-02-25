import { React, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";

function Home() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(city) {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
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
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "We didn´t found that city!",
          });
        }
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "We didn´t found that city!",
        })
      );
  }

  return (
    <div>
      <Navbar onSearch={onSearch} />

      <div>
        <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  );
}

export default Home;
