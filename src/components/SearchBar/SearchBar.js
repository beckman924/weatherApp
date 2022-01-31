import { React, useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        type="text"
        placeholder="Search a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="rounded-xl shadow-xl mr-3 pr-44 py-0.5 transition-transform"
      />
      <input type="submit" value="🔎" className="cursor-pointer" />
    </form>
  );
}

export default SearchBar;
