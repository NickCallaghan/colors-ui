import { v4 as uuidv4 } from "uuid";

const newPaletteReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        colors: [
          ...state.colors,
          { id: uuidv4(), name: action.name, color: action.color }
        ]
      };
    case "REMOVE":
      console.log(`Removing ${action.color}`);
      return {
        ...state,
        colors: state.colors.filter(color => color.color !== action.color)
      };
    case "SORT":
      return { ...state, colors: action.newOrder };
    case "SETNAME":
      return { ...state, paletteName: action.paletteName };
    case "SETEMOJI":
      return { ...state, emoji: action.emoji };
    case "CLEAR":
      return {
        ...state,
        colors: []
      };
    default:
      return state;
  }
};

export default newPaletteReducer;
