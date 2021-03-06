import React, { Component } from "react";
import { gatherShades } from "../../helpers/colorHelpers";
import NavBar from "../NavBar/NavBar";
import ColorBox from "../ColorBox/ColorBox";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./SingleColorPageStyles";

class SingleColorPage extends Component {
  constructor(props) {
    super(props);

    const colorId = this.props.match.params.colorId;
    const palette = this.props.palette;
    this._shades = gatherShades(colorId, palette);
  }

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        tall={true}
        name={color.name}
        background={color[this.props.format]}
        key={color.name}
        showLink={false}
      />
    ));
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    return (
      <div className={classes.Palette}>
        <NavBar
          showSlider={false}
          allowChangeFormat={true}
          changeFormat={this.props.updateFormat}
          format={this.props.format}
        />
        <div className={classes.SinglePaletteColors}>
          {colorBoxes}
          <div className="ColorBox go-back tall">
            <Link to={`/palette/${id}`} className="go-back-button">
              Go Back
            </Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPage);
