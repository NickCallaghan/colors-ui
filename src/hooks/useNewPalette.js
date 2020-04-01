import { useReducer } from "react";
import newPaletteReducer from "../reducers/newPaletterReducer";
import { v4 as uuid } from "uuid";

const defaultColors = [
  {
    color: "#00FF56",
    name: "hot frog"
  },
  {
    color: "#FF0022",
    name: "wild red"
  }
];

export default function useNewPalette() {
  const emptyPalette = {
    paletteName: null,
    emoji: null,
    colors: [...defaultColors],
    id: uuid()
  };

  const [newPalette, dispatch] = useReducer(newPaletteReducer, emptyPalette);
  return { newPalette, dispatch };
}
