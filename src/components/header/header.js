import "./header.css";
import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

import UF from "../../images/UF.png";

const Header = () => {
  return (
    <Navbar className="Navbar">
      <NavbarBrand className="NavbarBrand">
        <img src={UF} alt="UF Logo"></img>
      </NavbarBrand>
      <h3>React App Demo</h3>
      <NavbarText className="NavbarText">
        <h6>Shashank M</h6>
      </NavbarText>
    </Navbar>
  );
};

export default Header;
