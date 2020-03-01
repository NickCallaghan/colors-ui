import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputLabel from "@material-ui/core/InputLabel";

import "rc-slider/assets/index.css";
import "./NavBar.scss";

export default class NavBar extends Component {
  static defaultProps = {
    showSlider: true,
    allowChangeFormat: true
  };

  state = {
    format: this.props.format,
    showSnackBar: false
  };

  renderSlider = () => {
    return (
      <div className="slider-wrapper">
        <InputLabel className="slider-label">{`Level ${this.props.colorValue}`}</InputLabel>
        <Slider
          step={100}
          min={100}
          max={900}
          onChange={this.props.handleSliderChange}
          value={this.props.colorValue}
        />
      </div>
    );
  };

  renderFormatPicker = () => {
    return (
      <div className="color-format">
        <Select value={this.state.format} onChange={this.handleChangeFormat}>
          <MenuItem value="hex">HEX #FFFFFF</MenuItem>
          <MenuItem value="rgb">RGB rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA rgba(255,255,255,1)</MenuItem>
        </Select>
      </div>
    );
  };

  handleChangeFormat = e => {
    this.setState({ format: e.target.value, showSnackBar: true });
    this.props.changeFormat(e.target.value);
  };

  useSnackBar = () => {
    const { format } = this.state;
    return (
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
      />
    );
  };

  dismissSnackBar = () => {
    this.setState({ showSnackBar: false });
  };

  render() {
    return (
      <div className="NavBar">
        <div className="logo">
          <a href="/colors-ui">React Colors</a>
        </div>
        {this.props.showSlider && this.renderSlider()}
        {this.props.allowChangeFormat && this.renderFormatPicker()}
        {this.useSnackBar}
      </div>
    );
  }
}
