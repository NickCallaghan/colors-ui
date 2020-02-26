// import React from "react";

// import "./App.css";

// class App extends React.Component {
//   render() {
//     // console.log(generatePalette(seedColors[1]));
//     return (

//     );
//   }
// }

// // export default App;

import React, { Component } from "react";
import Palette from "./Components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";

export default class App extends Component {
  render() {
    console.log(generatePalette(seedColors[0]));
    return (
      <div className="App">
        <Palette {...seedColors[0]} />
      </div>
    );
  }
}
