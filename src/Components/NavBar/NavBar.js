import React, { Component } from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./NavBar.scss";

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="logo">
          <a href="#">React Color Picker</a>
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
      </div>
    );
  }
}
