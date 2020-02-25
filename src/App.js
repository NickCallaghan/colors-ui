import React from "react";
import Palette from "./Components/Palette/Palette";
import "./App.css";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[0]} />
    </div>
  );
}

export default App;
