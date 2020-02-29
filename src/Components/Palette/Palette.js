import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import NavBar from "../NavBar/NavBar";

import "./Palette.scss";

export default class Palette extends Component {
  state = {
    colorValue: 500,
    format: "hex"
  };

  handleSliderChange = colorValue => {
    this.setState({ colorValue });
  };

  changeFormat = format => {
    this.setState({ format });
  };

  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this.props.palette.colors[
      this.state.colorValue
    ].map(color => (
      <ColorBox
        name={color.name}
        background={color[this.state.format]}
        id={color.id}
        paletteId={id}
        key={color.hex}
      />
    ));
    return (
      <div className="Palette">
        <NavBar
          handleSliderChange={this.handleSliderChange}
          colorValue={this.state.colorValue}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
