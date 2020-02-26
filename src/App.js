import React, { Component } from "react";
import Palette from "./Components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[0])} />
      </div>
    );
  }
}
