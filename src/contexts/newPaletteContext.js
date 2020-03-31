import React, { createContext } from "react";
import useNewPalette from "../hooks/useNewPalette";

export const NewPaletteContext = createContext();
export const DispatchContext = createContext();

export default function NewPaletteProvider(props) {
  const { newPaletteColors, dispatch } = useNewPalette([]);

  return (
    <NewPaletteContext.Provider value={newPaletteColors}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </NewPaletteContext.Provider>
  );
}
