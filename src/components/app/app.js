import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import Content from "../content/content";
import { Container, Row, Col } from "reactstrap";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    // <div className="container">
    <Container fluid className="Container">
      <Row>
        <Col className="ColHeader">
          <Header />
        </Col>
      </Row>
      <HashRouter>
        <Row className="RowSidebar">
          <Col sm="3" lg="2" className="ColSidebar">
            <Sidebar />
          </Col>
          <Col className="ColContent">
            <Content />
          </Col>
        </Row>
      </HashRouter>

      <Row>
        <Col className="ColFooter">
          <Footer />
        </Col>
      </Row>
    </Container>
    // </div>
  );
};

export default App;
