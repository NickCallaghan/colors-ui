import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import "rc-slider/assets/index.css";
import "./NavBar.scss";

export default class NavBar extends Component {
  state = {
    format: "hex",
    showSnackBar: false
  };

  handleChangeFormat = e => {
    this.setState({ format: e.target.value, showSnackBar: true });
    this.props.changeFormat(e.target.value);
  };

  dismissSnackBar = () => {
    this.setState({ showSnackBar: false });
  };

  render() {
    const { format } = this.state;
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
        <Snackbar
          open={this.state.showSnackBar}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          autoHideDuration={2000}
          onClose={this.dismissSnackBar}
          message={<span id="message-id">Format Changed to {format}!</span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          action={[
            <IconButton color="inherit" key="close" aria-label="close">
              <CloseIcon onClick={this.dismissSnackBar} />
            </IconButton>
          ]}
        ></Snackbar>
      </div>
    );
  }
}
