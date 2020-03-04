import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/styles";

import styles from "./NavBarStyles";

import "rc-slider/assets/index.css";

class NavBar extends Component {
  static defaultProps = {
    showSlider: true,
    allowChangeFormat: true
  };

  state = {
    format: this.props.format,
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
    const { classes } = this.props;
    const { format } = this.state;
    return (
      <div className={classes.NavBar}>
        <div className={classes.logo}>
          <a href="/colors-ui">React Colors</a>
        </div>

        {/* Render Slider if showSlider is true */}

        {this.props.showSlider && (
          <div className={classes.slider}>
            <InputLabel className="slider-label">{`Level ${this.props.colorValue}`}</InputLabel>
            <Slider
              step={100}
              min={100}
              max={900}
              onChange={this.props.handleSliderChange}
              value={this.props.colorValue}
            />
          </div>
        )}

        {/* Render format picker is allowChangeFormat is true */}

        {this.props.allowChangeFormat && (
          <div className={classes.formatPicker}>
            <Select
              value={this.state.format}
              onChange={this.handleChangeFormat}
            >
              <MenuItem value="hex">HEX #FFFFFF</MenuItem>
              <MenuItem value="rgb">RGB rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA rgba(255,255,255,1)</MenuItem>
            </Select>
          </div>
        )}

        {/* Render snackBar */}

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

        {this.useSnackBar}
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
