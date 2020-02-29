import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import "rc-slider/assets/index.css";
import "./NavBar.scss";

export default class NavBar extends Component {
  state = {
    format: "hex"
  };

  handleChangeFormat = e => {
    this.setState({ format: e.target.value });
    this.props.changeFormat(e.target.value);
  };

  render() {
    return (
      <div className="NavBar">
        <div className="logo">
          <a href="/colors-ui">React Color Picker</a>
        </div>
        <div className="slider-wrapper">
          <Slider
            step={100}
            min={100}
            max={900}
            onChange={this.props.handleSliderChange}
            value={this.props.colorValue}
          />
        </div>
        <div className="color-format">
          <Select value={this.state.format} onChange={this.handleChangeFormat}>
            <MenuItem value="hex">HEX #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
}
