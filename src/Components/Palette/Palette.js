import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import NavBar from "../NavBar/NavBar";

import "./Palette.scss";

export default class Palette extends Component {
  state = {
    colorValue: 500
  };

  handleSliderChange = colorValue => {
    this.setState({ colorValue });
  };

  changeFormat = format => {
    this.setState({ format });
  };

  render() {
    const { paletteName, emoji } = this.props.palette;

    //Make a color box for each color in the palette
    const colorBoxes = this.props.palette.colors[
      this.state.colorValue
    ].map(color => (
      <ColorBox
        name={color.name}
        background={color[this.props.format]}
        moreUrl={`/palette/${this.props.palette.id}/${color.id}`}
        key={color.id}
      />
    ));

    return (
      <div className="Palette">
        <NavBar
          handleSliderChange={this.handleSliderChange}
          colorValue={this.state.colorValue}
          changeFormat={this.props.updateFormat}
          format={this.props.format}
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
