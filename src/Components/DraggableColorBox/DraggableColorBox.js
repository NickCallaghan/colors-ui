import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: "20%",
    height: "calc(25% - (69px/4))",
    display: "inline-block",
    position: "relative",
    cursor: "pointer"
  },
  wrapper: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

function DraggableColorBox(props) {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      <div className={props.classes.wrapper}>
        <p>{props.color}</p>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
