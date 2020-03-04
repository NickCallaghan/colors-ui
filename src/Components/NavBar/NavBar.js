import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/styles";

import "rc-slider/assets/index.css";

const styles = {
  NavBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh"
  },
  logo: {
    fontFamily: "Roboto",
    fontSize: "1.2em",
    backgroundColor: "#eceff1",
    height: "100%",
    padding: "0 1em",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },
  slider: {
    width: "340px",
    margin: "0 30px",
    display: "flex",
    "& .rc-slider-rail ": {
      height: "8px"
    },
    "& .slider-label": {
      marginRight: 20
    },
    "& .rc-slider": {
      width: "70%"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      height: 15,
      width: 15,
      marginLeft: "-7px",
      marginTop: "-3px"
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
      outline: "none"
    }
  },
  formatPicker: {
    marginLeft: "auto",
    marginRight: "12px"
  }
};

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
