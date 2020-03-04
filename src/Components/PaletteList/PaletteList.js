import React, { Component } from "react";
import MiniPalette from "../MiniPalette/MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./PaletteListStyles";

class PaletteList extends Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { classes } = this.props;
    const palettes = this.props.palettes.map(p => (
      <MiniPalette
        {...p}
        key={p.paletteName}
        handleClick={() => this.goToPalette(p.id)}
      />
    ));
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>{palettes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
