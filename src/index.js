import React from "react";
import ReactDOM from "react-dom";

const fName = "Iliyan Ko";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {fName} </p>
    <p> Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
