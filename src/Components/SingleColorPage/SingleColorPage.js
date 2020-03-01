import React, { Component } from "react";
import { gatherShades } from "../../helpers/colorHelpers";
import NavBar from "../NavBar/NavBar";
import ColorBox from "../ColorBox/ColorBox";

import "./SingleColorPage.scss";

export default class SingleColorPage extends Component {
  constructor(props) {
    super(props);

    const colorId = this.props.match.params.colorId;
    const palette = this.props.palette;
    this._shades = gatherShades(colorId, palette);
    console.log(this._shades);
  }

  render() {
    // const { paletteId } = this.props.match.params;
    const colorsBoxes = this._shades.map(color => (
      <ColorBox
        tall={true}
        name={color.name}
        background={color.hex}
        key={color.name}
        showLink={false}
      />
    ));
    const { paletteName, emoji } = this.props.palette;
    return (
      <div className="Palette">
        <NavBar showSlider={false} allowChangeFormat={false} />
        <div className="Palette-colors">{colorsBoxes}</div>
        <footer className="palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
