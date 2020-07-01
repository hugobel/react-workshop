import React from "react";
import Spinner from "../Spinner";
import "./Loading.scss";

function Loading() {
  return (
    <div className="loading">
      <Spinner />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
