import { useState } from "react";

export default function useInputState(intialVal = "") {
  //   const [state, setState] = useState(defaultColors);
  const [inputState, setInputState] = useState(intialVal);
  const resetInputState = () => {
    setInputState("");
  };
  return [inputState, setInputState, resetInputState];
}
