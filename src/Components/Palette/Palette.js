import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Slider, { Range } from "rc-slider";

import "rc-slider/assets/index.css";
import "./Palette.scss";

export default class Palette extends Component {
  state = {
    colorValue: 500
  };

  handleSliderChange = colorValue => {
    this.setState({ colorValue });
  };

  render() {
    const colorBoxes = this.props.palette.colors[
      this.state.colorValue
    ].map(color => (
      <ColorBox name={color.name} background={color.hex} key={color.hex} />
    ));
    return (
      <div className="Palette">
        <div className="slider-wrapper">
          <Slider
            step={100}
            min={100}
            max={900}
            onChange={this.handleSliderChange}
            value={this.state.colorValue}
          />
        </div>
        <h2>{this.props.palette.paletteName}</h2>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
