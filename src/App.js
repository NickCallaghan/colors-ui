import React, { useState } from "react";
import Palette from "./Components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./Components/PaletteList/PaletteList";
import SingleColorPage from "./Components/SingleColorPage/SingleColorPage";
import NewPalettePage from "./Components/NewPalettePage/NewPalettePage";

export default function App() {
  const [palettes, setPalettes] = useState([...seedColors]);
  const [format, setFormat] = useState("hex");

  const findPalette = id => {
    const thisPalette = palettes.find(p => p.id === id);
    return generatePalette(thisPalette);
  };

  const updateFormat = format => {
    setFormat(format);
  };

  const addPalette = newPalette => setPalettes([...palettes, newPalette]);

  const routes = (
    <Switch>
      <Route
        exact
        path={`/`}
        render={routeProps => (
          <PaletteList palettes={palettes} {...routeProps} />
        )}
      />
      <Route
        exact
        path={`/palette/new`}
        render={routeProps => (
          <NewPalettePage
            {...routeProps}
            palettes={palettes}
            addPalette={addPalette}
          />
        )}
      />
      <Route
        exact
        path={`/palette/:id`}
        render={routeProps => (
          <Palette
            palette={findPalette(routeProps.match.params.id)}
            format={format}
            updateFormat={updateFormat}
          />
        )}
      />
      <Route
        exact
        path={`/palette/:paletteId/:colorId`}
        render={routeProps => (
          <SingleColorPage
            {...routeProps}
            palette={findPalette(routeProps.match.params.paletteId)}
            format={format}
            updateFormat={updateFormat}
          />
        )}
      />
      <Route render={() => <h1>Sorry Not Found</h1>} />
    </Switch>
  );

  return <div className="App">{routes}</div>;
}
