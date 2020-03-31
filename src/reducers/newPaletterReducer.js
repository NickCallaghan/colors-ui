import { v4 as uuidv4 } from "uuid";

const newPaletteReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: uuidv4(), name: action.name, color: action.color }
      ];
    case "REMOVE":
      const newState = state.filter(color => color.color !== action.color);
      return newState;
    case "SORT":
      return action.newOrder;
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export default newPaletteReducer;
