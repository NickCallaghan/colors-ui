import React, { Component } from "react";
import Palette from "./Components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./Components/PaletteList/PaletteList";

export default class App extends Component {
  state = {
    palettes: [...seedColors]
  };

  findPalette = id => {
    const thisPalette = this.state.palettes.find(p => p.id === id);
    return generatePalette(thisPalette);
  };

  render() {
    console.log(this.findPalette("material-ui-colors"));
    const routes = (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteList palettes={this.state.palettes} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette palette={this.findPalette(routeProps.match.params.id)} />
          )}
        />
      </Switch>
    );
    return <div className="App">{routes}</div>;
  }
}
