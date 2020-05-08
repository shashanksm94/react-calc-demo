import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./about.css";

const AboutMe = () => {
  return (
    <div className="AboutMeContainer">
      <Container>
        <Row>
          <Col className="Col">
            <h1>In thinking....</h1>
            <p className="justify">
              I'm Shashank Mayekar, a recent Computer Science graduate from UF.
              Before I began my Masters here, I worked for about a year at Tata
              Consultancy Services in India.
            </p>
            <p className="justify">
Perfection of the means of communication has meant instantaneity. Such an instantaneous network of communication is the body-mind unity of each of us. When a city or a society achieves a diversity and equilibrium of awareness analogous to the body-mind network, it has what we tend to regard as a high culture.

But the instantaneity of communication makes free speech and thought difficult if not impossible, and for many reasons. Radio extends the range of the casual speaking voice, but it forbids that many should speak. And when what is said has such range of control, it is forbidden to speak any but the most acceptable words and notions. Power and control are in all cases paid for by loss of freedom and flexibility.

Today the entire globe has a unity in point of mutual interawareness, which exceeds in rapidity the former flow of information in a small city—say Elizabethan London with its eighty or ninety thousand inhabitants. What happens to existing societies when they are brought into such intimate contact by press, picture stories, newsreels, and jet propulsion? What happens when the Neolithic Eskimo is compelled to share the time and space arrangements of technological man? What happens in our minds as we become familiar with the diversity of human cultures which have come into existence under innumerable circumstances, historical and geographical? Is what happens comparable to that social revolution which we call the American melting pot?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
