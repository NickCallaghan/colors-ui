import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "../MiniPalette/MiniPalette";
import { withStyles } from "@material-ui/styles";
import "./PaletteList.scss";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
    // border: "1px solid white"
  },
  nav: {
    display: "flex",
    width: "100%",
    color: "white"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%"
  },
  links: {
    textDecoration: "none"
  }
};

class PaletteList extends Component {
  render() {
    const { classes } = this.props;
    const palettes = this.props.palettes.map(p => (
      <React.Fragment key={p.paletteName}>
        <Link to={`colors-ui/palette/${p.id}`} className={classes.links}>
          <MiniPalette {...p} />
        </Link>
      </React.Fragment>
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
