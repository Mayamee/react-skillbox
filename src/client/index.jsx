import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from "../shared/Header";

window.addEventListener("load", () => {
  ReactDOM.render(<Header />, document.getElementById("react_root"));
});
