import React, { Component } from "react";
import "./sidebar.css";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <p className="heading">React Demo</p>
        <Nav vertical className="Nav">
          <NavLink to="/" className="NavLink">
            <NavItem className="NavItem">
              <h6>React</h6>
            </NavItem>
          </NavLink>
          <NavLink to="/calculator" className="NavLink">
            <NavItem className="NavItem">
              <h6>Calculator</h6>
            </NavItem>
          </NavLink>
          <NavLink to="/making" className="NavLink">
            <NavItem className="NavItem">
              <h6>The Making</h6>
            </NavItem>
          </NavLink>
          <NavLink to="/demo" className="NavLink">
            <NavItem className="NavItem">
              <h6>Demo</h6>
            </NavItem>
          </NavLink>
          <NavLink to="/about" className="NavLink">
            <NavItem className="NavItem">
              <h6>About Me</h6>
            </NavItem>
          </NavLink>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
