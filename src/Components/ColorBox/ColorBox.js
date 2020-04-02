import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.scss";

const isDarkColor = props =>
  chroma(props.background).luminance() < 0.37 ? "white" : "black";

const styles = {
  ColorBox: {
    // height: props => (props.tall ? "50%" : "25%")
  },
  dynamicTextColor: {
    color: props => isDarkColor(props)
  }
};

class ColorBox extends Component {
  static defaultProps = {
    showLink: true,
    tall: false
  };

  state = {
    showCopyOverlay: false
  };

  changeCopyState = () => {
    this.setState({ showCopyOverlay: true }, () => {
      setTimeout(() => {
        this.setState({ showCopyOverlay: false });
      }, 1500);
    });
  };

  render() {
    const { name, background, moreUrl, classes } = this.props;

    const linkDiv = (
      <Link to={moreUrl} onClick={e => e.stopPropagation()}>
        <div className={`see-more ${classes.dynamicTextColor}`}>more</div>
      </Link>
    );

    return (
      <CopyToClipboard
        text={this.props.background}
        onCopy={this.changeCopyState}
      >
        <div className={`ColorBox ${classes.ColorBox}`} style={{ background }}>
          <div
            className={`copy-overlay ${this.state.showCopyOverlay && "show"}`}
            style={{ background }}
          ></div>
          <div className={`copy-msg ${this.state.showCopyOverlay && "show"}`}>
            <h1>{this.props.name}</h1>
            <p className={classes.dynamicTextColor}>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <div className={`${classes.dynamicTextColor} colorName`}>
                {name}
              </div>
            </div>
            <button className={`copy-button ${classes.dynamicTextColor}`}>
              Copy
            </button>
          </div>
          {this.props.showLink && linkDiv}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
