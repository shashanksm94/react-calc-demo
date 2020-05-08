import React from "react";
import Calculator from "../calculator/calculator";
import Screen from "../calculator/screen/screen";
import Key from "../calculator/key/key";
import { Container, Row, Col } from "reactstrap";
import "./calcPage.css";

const CalcPage = () => {
  return (
    <div className="CalcPageContainer">
      <Container>
        <Row>
          <Col xl="4" lg="6" md="12" sm="12" className="Col">
            <h1>Calculator</h1>
            <p>Let's get to know your new calculator app created with React</p>
            <h4>What it's got</h4>
            <ul className="ulCalcPage">
              <li>
                <b>Simple? Yes! Beautiful? Yes!</b>
              </li>
              <p>
                We made it simple for those who get overwhelmed with the many
                functions of a scientific calculator
              </p>
              <li>
                <b>Supports both click & key events</b>
              </li>
              <p>
                You read it right! All you need to do is let the screen know
                before giving a key input
              </p>
              <li>
                <b>We made it look real!</b>
              </li>
              <p>
                Do not mistaken this to be a photograph. Haha. We've designed it
                to look and feel real
              </p>
              <li>
                <b>Backspace key</b>
              </li>
              <p>
                We included a <b>B</b>ackspace key for you
              </p>
            </ul>
          </Col>
          <Col xl="4" lg="6" md="12" sm="12" className="Col">
            <Calculator dimUnit={5.5} launch={"justShow"} />
          </Col>
          <Col xl="4" lg="12" md="12" sm="12" className="Col">
            <h2>Components</h2>
            <p>Let's see what React components we used</p>
            <ul class="ulCalcPage">
              <li>
                <b>Screen</b>
              </li>
              <Screen display={"0"} unit={6.5} />
              <p>
                No we didn't write the HTML and CSS to show this screen up here.
                Well, that's what components are for! Moreover, we have designed
                our components to scale as much as we want them to! See the
                benefit?
              </p>

              <li>
                <b>Key</b>
              </li>
              <Key value={"B"} unit={7.5} />
              <Key value={"9"} unit={7.5} />
              <Key value={"."} unit={7.5} />
              <p>Yes it actually is! Click on it!</p>
              <li>
                <b>Calculator</b>
              </li>
              <p>
                Wait! Did we miss the calculator? Absolutely not! Calculator =
                Screen + Keys
              </p>
              <blockquote>We call it Composition</blockquote>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CalcPage;
