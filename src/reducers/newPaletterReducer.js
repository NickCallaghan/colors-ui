import { v4 as uuid } from "uuid";

const emptyPalette = {
  paletteName: null,
  emoji: null,
  colors: [],
  id: uuid()
};

const newPaletteReducer = (state, action) => {
  switch (action.type) {
    //Add a color to the new palette
    case "ADD":
      return {
        ...state,
        colors: [
          ...state.colors,
          { id: uuid(), name: action.name, color: action.color }
        ]
      };
    // Remove a color from the new platette
    case "REMOVE":
      return {
        ...state,
        colors: state.colors.filter(color => color.color !== action.color)
      };
    // Sort Colors in the platette (drag and drop)
    case "SORT":
      return { ...state, colors: action.newOrder };
    // Set palette paletteName
    case "SETNAME":
      return { ...state, paletteName: action.paletteName };
    // Set palette emoji
    case "SETEMOJI":
      return { ...state, emoji: action.emoji };
    // Clear palette colors
    case "CLEAR":
      return {
        ...state,
        colors: []
      };
    // Reset Palette to empty default values
    case "RESET":
      return emptyPalette;
    default:
      return state;
  }
};

export default newPaletteReducer;
