import { useReducer } from "react";
import newPaletteReducer from "../reducers/newPaletterReducer";

export default function useNewPalette(defaultColors) {
  const [newPaletteColors, dispatch] = useReducer(
    newPaletteReducer,
    defaultColors
  );
  return { newPaletteColors, dispatch };
}
