import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NewPaletteProvider from "./contexts/newPaletteContext";

ReactDOM.render(
  <BrowserRouter basename={"/colors-ui"}>
    <NewPaletteProvider>
      <App />
    </NewPaletteProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
