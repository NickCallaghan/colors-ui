import React, { Component } from "react";
import color from "@material-ui/core/colors/amber";
import ColorBox from "../ColorBox/ColorBox";

import "./SingleColorPage.scss";

export default class SingleColorPage extends Component {
  state = {
    colors: []
  };

  findSingleColors = () => {
    const { colorId } = this.props.match.params;
    const { colors } = this.props.palette; //The colors in the palette at each level
    const levels = Object.keys(colors); // The color levels are the keys

    // Each color that matches is pushed onto the singleColors array
    const singleColors = [];
    // TODO -  Match the color at every color level and push on to array
    for (let l of levels) {
      const color = colors[l].find(color => color.id === colorId);
      singleColors.push(color);
    }
    return singleColors;
  };

  componentDidMount() {
    const colors = this.findSingleColors();
    this.setState({ colors });
  }

  render() {
    const { paletteId } = this.props.match.params;
    const colorsBoxes = this.state.colors.map(color => (
      <ColorBox name={color.name} background={color.hex} key={color.id} />
    ));
    return (
      <div className="SingleColorPage">
        <h2>{paletteId}</h2>
        {colorsBoxes}
      </div>
    );
  }
}
