import React, { useContext, memo } from "react";
import { SortableContainer } from "react-sortable-hoc";

import { NewPaletteContext } from "../../contexts/newPaletteContext";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";

function DraggableGrid() {
  const newPalette = useContext(NewPaletteContext);
  const { colors } = newPalette;

  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "auto",
    margin: 0,
    padding: 0
  };

  return (
    <div style={styles}>
      {colors.map((color, i) => {
        return (
          <DraggableColorBox
            index={i}
            color={color.color}
            name={color.name}
            key={color.color}
          />
        );
      })}
    </div>
  );
}

// export default DraggableGrid;
export default memo(SortableContainer(DraggableGrid));
