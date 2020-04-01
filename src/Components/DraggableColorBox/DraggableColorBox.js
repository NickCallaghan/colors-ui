import React, { useContext, memo } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

import { DispatchContext } from "../../contexts/newPaletteContext";

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
  },
  deleteIcon: {
    position: "absolute",
    bottom: "0.2em",
    right: "0.2em"
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
      <div className={props.classes.wrapper}>
        <p>{props.color}</p>
        <p>{props.name}</p>
        <IconButton onClick={handleDelete} className={props.classes.deleteIcon}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

// export default withStyles(styles)(DraggableColorBox);
export default memo(SortableElement(withStyles(styles)(DraggableColorBox)));
