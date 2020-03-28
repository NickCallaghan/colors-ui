import { useState, useReducer } from "react";
import newPaletteReducer from "../reducers/newPaletterReducer";

const defaultColors = [
  {
    id: 1,
    name: "Hot Pink",
    hex: "#D20AE4"
  },
  {
    id: 2,
    name: "Squashed Frog",
    hex: "#20B91C"
  }
];

export default function useNewPalette() {
  //   const [state, setState] = useState(defaultColors);
  const [state, dispatch] = useReducer(newPaletteReducer, defaultColors);
  return { state, dispatch };
}
