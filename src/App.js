import React, { Component } from "react";
import Palette from "./Components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./Components/PaletteList/PaletteList";

export default class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route exact path="/" render={() => <PaletteList />} />
        <Route
          exact
          path="/palette"
          render={() => <Palette palette={generatePalette(seedColors[0])} />}
        />
      </Switch>
    );
    return <div className="App">{routes}</div>;
  }
}
