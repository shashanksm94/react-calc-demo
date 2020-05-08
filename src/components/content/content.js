import "./content.css";
import React from "react";
import AboutReact from "../pages/react";
import AboutMe from "../pages/about";
import Demo from "../pages/demo";
import CalcPage from "../pages/calcPage";
import Making from "../pages/making";
import { Route } from "react-router-dom";

const Content = () => {
  return (
    <div className="ContentContainer">
      <Route exact path="/" component={AboutReact}></Route>
      <Route path="/demo" component={Demo}></Route>
      <Route path="/making" component={Making}></Route>
      <Route path="/about" component={AboutMe}></Route>
      <Route path="/calculator" component={CalcPage}></Route>
    </div>
  );
};

export default Content;
