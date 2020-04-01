import React, { useContext, memo } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

import { DispatchContext } from "../../contexts/newPaletteContext";

import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: "20%",
    height: "calc(25vh - (69px/4))",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    margin: 0,
    padding: 0
  },
  deleteIcon: {
    position: "absolute",
    bottom: "0.2em",
    right: "0.2em"
  },
  colorName: {
    position: "absolute",
    top: "0.5em",
    left: "0.4em",
    margin: 0,
    padding: 0,
    textTransform: "uppercase",
    color: "#FFF",
    fontWeight: "bold"
  }
};

function DraggableColorBox(props) {
  const dispatch = useContext(DispatchContext);

  const handleDelete = () => {
    dispatch({ type: "REMOVE", color: props.color });
  };
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      <p className={props.classes.colorName}>{props.name}</p>
      <IconButton onClick={handleDelete} className={props.classes.deleteIcon}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

// export default withStyles(styles)(DraggableColorBox);
export default memo(SortableElement(withStyles(styles)(DraggableColorBox)));
