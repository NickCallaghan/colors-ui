import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  const { paletteName, emoji } = props;
  return (
    <footer className="palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}
