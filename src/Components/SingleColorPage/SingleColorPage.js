import React, { Component } from "react";

export default class SingleColorPage extends Component {
  findSingleColors = () => {
    const { colorId, paletteId } = this.props.match.params;
    // TODO -  Go throught the paletee and find all the matching colors
  };

  render() {
    const { colorId, paletteId } = this.props.match.params;
    return (
      <div>
        <h2>{paletteId}</h2>
        <h3>{colorId}</h3>
      </div>
    );
  }
}
