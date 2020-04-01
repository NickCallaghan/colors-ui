import React, { useContext, memo } from "react";
import { SortableContainer } from "react-sortable-hoc";

import { NewPaletteContext } from "../../contexts/newPaletteContext";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";

function DraggableGrid() {
  const newPalette = useContext(NewPaletteContext);
  console.log(newPalette);
  const { colors } = newPalette;
  console.log(colors);

  return (
    <div style={{ height: "100%" }}>
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
