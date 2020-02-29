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
    const routes = (
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          render={routeProps => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/palette/:id`}
          render={routeProps => (
            <Palette palette={this.findPalette(routeProps.match.params.id)} />
          )}
        />
        <Route render={() => <h1>Sorry, Not Found!</h1>} />
      </Switch>
    );
    return <div className="App">{routes}</div>;
  }
}
