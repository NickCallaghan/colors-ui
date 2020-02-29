import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
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
    const { name, background, moreUrl } = this.props;
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
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className="see-more">more</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}
