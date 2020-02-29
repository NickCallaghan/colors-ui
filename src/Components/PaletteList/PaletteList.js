import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "../MiniPalette/MiniPalette";
import "./PaletteList.scss";

export default class PaletteList extends Component {
  render() {
    const palettes = this.props.palettes.map(p => (
      <React.Fragment>
        <Link to={`colors-ui/palette/${p.id}`}>
          <MiniPalette {...p} />
        </Link>
      </React.Fragment>
    ));
    return (
      <div className="PaletteList">
        <h1>React Colors</h1>
        <ul className="palette-list-ul">{palettes}</ul>
      </div>
    );
  }
}
