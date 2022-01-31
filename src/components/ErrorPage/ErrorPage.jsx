import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>Nothing to see here</h1>
      <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
        <button className="rounded-md bg-cyan-300 p-2 hover:bg-cyan-200 font-semibold m-4">
          Take me back home
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
