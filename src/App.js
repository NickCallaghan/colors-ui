import React, { Component } from "react";
import Palette from "./Components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./Components/PaletteList/PaletteList";
import SingleColorPage from "./Components/SingleColorPage/SingleColorPage";
import NewPaletteForm from "./Components/NewPaletteForm/NewPaletteForm";

export default class App extends Component {
  state = {
    palettes: [...seedColors],
    format: "hex"
  };

  findPalette = id => {
    const thisPalette = this.state.palettes.find(p => p.id === id);
    return generatePalette(thisPalette);
  };

  updateFormat = format => {
    this.setState({ format });
  };

  render() {
    const routes = (
      <Switch>
        <Route
          exact
          path={`/`}
          render={routeProps => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path={`/palette/new`}
          render={routeProps => <NewPaletteForm {...routeProps} />}
        />
        <Route
          exact
          path={`/palette/:id`}
          render={routeProps => (
            <Palette
              palette={this.findPalette(routeProps.match.params.id)}
              format={this.state.format}
              updateFormat={this.updateFormat}
            />
          )}
        />
        <Route
          exact
          path={`/palette/:paletteId/:colorId`}
          render={routeProps => (
            <SingleColorPage
              {...routeProps}
              palette={this.findPalette(routeProps.match.params.paletteId)}
              format={this.state.format}
              updateFormat={this.updateFormat}
            />
          )}
        />
        <Route render={() => <h1>Sorry Not Found</h1>} />
      </Switch>
    );

    return <div className="App">{routes}</div>;
  }
}
