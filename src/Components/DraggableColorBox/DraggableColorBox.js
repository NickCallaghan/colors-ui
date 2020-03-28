import React from "react";

export default function DraggableColorBox(props) {
  return <div style={{ backgroundColor: props.color }}>{props.color}</div>;
}
