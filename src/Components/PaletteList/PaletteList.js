import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
  render() {
    const palettes = this.props.palettes.map(p => (
      <React.Fragment>
        <Link to={`colors-ui/palette/${p.id}`}>
          <li>{p.paletteName}</li>
        </Link>
      </React.Fragment>
    ));
    return (
      <div>
        <h1>Palette List</h1>
        <ul>{palettes}</ul>
      </div>
    );
  }
}
