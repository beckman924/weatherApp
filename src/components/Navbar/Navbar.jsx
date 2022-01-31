import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Navbar({ onSearch }) {
  return (
    <nav className="flex-auto bg-slate-600 pb-4 pt-2">
      <Link
        to={"/about"}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <button className="xl:left-6 xl:top-2 absolute left-0 -top-2.5 rounded-md bg-cyan-300 p-2 hover:bg-cyan-200 font-semibold m-4">
          About me
        </button>
      </Link>
      <h1 className="text-3xl font-bold underline text-blue-400 pb-3 hover:text-black hover:opacity-60 transition-colors inline-block">
        Weather App
      </h1>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Navbar;
