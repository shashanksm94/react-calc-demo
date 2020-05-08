import React, { Component } from "react";
import "./key.css";

class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
    };
  }

  render() {
    const unit = this.props.unit;

    let color = "rgb(225, 225, 225)";
    if (isNaN(this.props.value)) color = "rgb(223, 119, 0)";

    let shadow = `0px ${0.2 * unit}px ${0.5 * unit}px 0px black`;
    let textShadow = "0px 0px ";
    let bTop = `${0.1 * unit}px inset rgb(220,220,220)`;
    if (this.state.pressed) {
      shadow = `0px 0px ${0.1 * unit}px`;
      color = "white";
      textShadow += `${0.4 * unit}px white`;
      bTop = 0;
      //color = color === "orange" ? "yellow" : "white";
    }

    let w = 10 * unit, //50,
      h = 10 * unit, //50,
      fSize = `${0.5 * unit}em`;
    // if(this.props.orientation == "V")
    //     h = 2 * h + 16;
    if (this.props.value === "AC" || this.props.value === "=") {
      w = 2 * (w + 1 * unit);
      //fSize = "2.5em";
    }

    let styleBtn = {
      margin: unit,
      padding: unit,
      width: w,
      height: h,
      display: "inline-block",
      textAlign: "center",
      verticalAlign: "center",
      color: color,
      fontFamily: "monospace",
      fontSize: fSize,
      backgroundColor: "black",
      borderRadius: unit,
      outline: "none",
      // borderTop: bTop,
      boxShadow: shadow,
      textShadow: textShadow,
    };
    return (
      <div
        style={styleBtn}
        className="animateKey"
        onClick={this.props.clickHandler}
        onFocus={this.focussed}
        onBlur={this.blurred}
        tabIndex="-1"
      >
        {this.props.value}
      </div>
    );
  }

  focussed = () => {
    this.setState({ pressed: true });
  };

  blurred = () => {
    this.setState({ pressed: false });
  };
}

export default Key;
