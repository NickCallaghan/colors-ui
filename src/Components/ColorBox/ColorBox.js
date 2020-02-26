import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.scss";

export default class ColorBox extends Component {
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
    const { name, background } = this.props;
    return (
      <CopyToClipboard
        text={this.props.background}
        onCopy={this.changeCopyState}
      >
        <div className="ColorBox" style={{ background }}>
          <div
            className={`copy-overlay ${this.state.showCopyOverlay && "show"}`}
            style={{ background }}
          ></div>

          <div className={`copy-msg ${this.state.showCopyOverlay && "show"}`}>
            <h1>{this.props.name}</h1>
            <div className="overlay-color-code">{this.props.background}</div>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">more</span>
        </div>
      </CopyToClipboard>
    );
  }
}
