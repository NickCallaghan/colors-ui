import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    postion: "relative",
    overflow: "hidden",
    border: "1px solid black",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {},
  title: {},
  emoji: {}
};

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;

  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
