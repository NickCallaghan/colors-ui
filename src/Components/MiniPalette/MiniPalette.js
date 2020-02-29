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
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {},
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  emoji: {
    marginLeft: "auto"
  }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;

  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
