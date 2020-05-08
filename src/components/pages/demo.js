import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./demo.css";
import Calculator from "../calculator/calculator";

const Demo = () => {
  return (
    <div className="DemoContainer">
      <Container>
        <Row>
          <Col xs="1" md="2" lg="4"></Col>
          <Col xs="10" md="8" lg="4" className="Col">
            <Calculator dimUnit={6} launch={"demo"}></Calculator>
          </Col>
          <Col xs="1" md="2" lg="4"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Demo;
