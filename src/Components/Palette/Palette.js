import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { withStyles } from "@material-ui/styles";

const styles = {
  Palette: {
    height: "100vh",
    textAlign: "center"
  },
  PaletteColors: {
    height: "90vh",
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "0",
    flexDirection: "row"
  }
};

class Palette extends Component {
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

    const { classes } = this.props;
    return (
      <div className={classes.Palette}>
        <NavBar
          handleSliderChange={this.handleSliderChange}
          colorValue={this.state.colorValue}
          changeFormat={this.props.updateFormat}
          format={this.props.format}
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
