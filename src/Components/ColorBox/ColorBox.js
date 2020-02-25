import React, { Component } from "react";
import "./ColorBox.scss";

export default class ColorBox extends Component {
  render() {
    const boxStyle = {
      backgroundColor: this.props.color.color
    };
    return (
      <div className="ColorBox" style={boxStyle}>
        <span>{this.props.color.name}</span>
        <span>MORE</span>
      </div>
    );
  }
}
