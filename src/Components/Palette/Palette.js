import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.scss";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors[500].map(color => (
      <ColorBox name={color.name} background={color.hex} key={color.hex} />
    ));
    return (
      <div className="Palette">
        <h2>{this.props.palette.paletteName}</h2>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
