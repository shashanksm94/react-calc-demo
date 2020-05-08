import React, { Component } from "react";
import "./screen.css";

class Screen extends Component {
  render() {
    const unit = this.props.unit;
    let styleScreen = {
      margin: unit,
      marginBottom: 0,
      padding: `0px ${unit}px ${unit}px`,
      // padding: "0px 4px 10px",
      width: 46 * unit,
      height: 10 * unit,
      overflow: "hidden",
      color: "#555555",
      backgroundColor: "#E9EDED",
      textAlign: "right",
      boxShadow: `0px 0px ${unit}px black inset`,
      fontFamily: "monospace",
      fontSize: `${0.6 * unit}em`,
      // outline: `${0.2 * unit} px solid white `,
    };

    return (
      <div
        style={styleScreen}
        className="animateScreen"
        tabIndex="-1"
        onKeyDown={this.props.keyPressHandler}
      >
        {this.props.display}
      </div>
    );
  }
}

export default Screen;
