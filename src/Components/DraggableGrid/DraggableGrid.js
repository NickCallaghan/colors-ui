import React, { useContext } from "react";
import { SortableContainer } from "react-sortable-hoc";

import { NewPaletteContext } from "../../contexts/newPaletteContext";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";

function DraggableGrid() {
  const newPaletteColors = useContext(NewPaletteContext);

  return (
    <div style={{ height: "100%" }}>
      {newPaletteColors.map((color, i) => {
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

export default SortableContainer(DraggableGrid);
