import { v4 as uuidv4 } from "uuid";

const newPaletteReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), name: action.name, hex: action.hex }];
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export default newPaletteReducer;
