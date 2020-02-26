import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.scss";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox name={color.name} background={color.color} key={color.color} />
    ));
    return (
      <div className="Palette">
        <h2>{this.props.paletteName}</h2>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
