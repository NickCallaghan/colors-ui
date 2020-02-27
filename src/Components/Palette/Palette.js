import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.scss";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default class Palette extends Component {
  state = {
    colorValue: 100
  };

  handleSliderChange = colorValue => {
    this.setState({ colorValue });
  };

  render() {
    const colorBoxes = this.props.palette.colors[500].map(color => (
      <ColorBox name={color.name} background={color.hex} key={color.hex} />
    ));
    return (
      <div className="Palette">
        <Slider
          step={100}
          min={100}
          max={900}
          onChange={this.handleSliderChange}
        />
        <h2>{this.props.palette.paletteName}</h2>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
