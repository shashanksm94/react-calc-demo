import React, { Component } from "react";
import Screen from "./screen/screen";
import Key from "./key/key";
import "./calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: undefined,
      b: undefined,
      op: undefined,
      valOnScreen: 0,
    };
  }

  // whatToChange = (e) => {
  //   console.log(e.target);
  // };

  handleKeyPress = (e) => {
    let keyVal;
    switch (e.key) {
      case "Backspace":
        keyVal = "B";
        break;
      case "Enter":
        keyVal = "=";
        break;
      case "Escape":
        keyVal = "AC";
        break;
      case "*":
        keyVal = "x";
        break;
      default:
        if (this.keys.includes(e.key)) keyVal = e.key;
    }
    if (keyVal !== undefined) this.handleInput(keyVal);
  };

  handleClick = (e) => {
    this.handleInput(e.target.innerText);
  };

  handleInput = (keyVal) => {
    let { a, b, op, valOnScreen } = this.state;
    let newA = a,
      newB = b,
      newOp = op,
      newValOnScreen = valOnScreen;

    switch (keyVal) {
      case "B":
        newValOnScreen = valOnScreen
          .toString()
          .substring(0, valOnScreen.toString().length - 1);
        if (a !== undefined && op === undefined) newA = newValOnScreen;
        else if (op !== undefined && b !== undefined) newB = newValOnScreen;
        if (newValOnScreen.length === 0) {
          if (op === undefined) {
            newA = undefined;
            newB = undefined;
          } else {
            newB = undefined;
          }
          newValOnScreen = 0;
        }
        break;
      case "/":
      case "x":
      case "+":
      case "-":
        if (a === undefined && op === undefined && keyVal === "-") {
          newValOnScreen = keyVal;
        } else newOp = keyVal;
        if (op === "=") newA = valOnScreen;
        newB = undefined;
        break;
      case "AC":
        newA = undefined;
        newB = undefined;
        newOp = undefined;
        newValOnScreen = 0;
        break;
      case "=":
        if (op !== undefined && b !== undefined) {
          newValOnScreen = this.calculate(Number(a), Number(b), op);
          newA = undefined;
          newB = undefined;
          newOp = keyVal;
        }
        break;
      default:
        if (valOnScreen.toString().length === 10 && op === undefined) break;
        if (keyVal === "." && valOnScreen.toString().indexOf(".") !== -1) break;
        if (
          valOnScreen == 0 ||
          (op !== undefined && b === undefined && op !== "=")
        )
          newValOnScreen = keyVal;
        else if (op === "=") {
          newA = keyVal;
          newOp = undefined;
          newValOnScreen = keyVal;
        } else newValOnScreen = valOnScreen + keyVal;

        // console.log(newValOnScreen);
        if (op === undefined) {
          newA = newValOnScreen;
          newB = undefined;
        } else if (op !== "=") newB = newValOnScreen;
    }

    this.setState({
      a: newA,
      b: newB,
      op: newOp,
      valOnScreen: newValOnScreen,
    });
  };

  calculate = (a, b, op) => {
    let result;
    switch (op) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "/":
        result = a / b;
        break;
      case "x":
        result = a * b;
        break;
      default:
        result = 0;
    }
    if (result % 1 !== 0) result = result.toFixed(4);
    return result;
  };

  keys = [
    "7",
    "8",
    "9",
    "B",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "x",
    "0",
    ".",
    "-",
    "+",
    "AC",
    "=",
  ];

  render() {
    const unit = this.props.dimUnit;
    const launch = this.props.launch;
    const styleKeypad = {
      margin: 0,
      padding: unit,
      width: 50 * unit,
      height: 74 * unit,
      // border: "2px solid grey outset",
      borderRadius: 0.5 * unit,
      backgroundColor: "#BBBBBB",
      boxShadow: `0px ${0.75 * unit}px ${1.5 * unit}px 0px black`,
    };

    const keyElems = this.keys.map((val) => (
      <Key
        key={val}
        value={val}
        clickHandler={this.handleClick}
        unit={unit}
        //changeChild={this.whatToChange}
      />
    ));

    return (
      <div style={styleKeypad} className="animateCalc">
        <Screen
          display={this.state.valOnScreen}
          keyPressHandler={this.handleKeyPress}
          unit={unit}
        />
        {keyElems.slice(0, 4)}
        <br />
        {keyElems.slice(4, 8)}
        <br />
        {keyElems.slice(8, 12)}
        <br />
        {keyElems.slice(12, 16)}
        <br />
        {keyElems.slice(16, 18)}
      </div>
    );
  }
}
export default Calculator;
