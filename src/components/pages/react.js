import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./react.css";

const AboutReact = () => {
  return (
    <div className="AboutReactContainer">
      <Container>
        <Row>
          <Col className="Col">
            <h1>What is ReactJS....</h1>
            <h5>Let's get to know React according to the web</h5>
            <p>
              React is a JavaScript library that aims to simplify development of
              visual interfaces. Developed at Facebook and released to the world
              in 2013, it drives some of the most widely used code in the world,
              powering Facebook and Instagram among many, many other software
              companies. Its primary goal is to make it easy to reason about an
              interface and its state in any point in time, by dividing the UI
              into a collection of components. React is used to build
              single-page web applications, among with many other libraries and
              frameworks that were available before React came into life.
            </p>
            <p>There isn’t too much into React than these concepts:</p>
            <ul>
              <li>Components</li>
              <li>JSX</li>
              <li>State</li>
              <li>Props</li>
            </ul>
            <h3>Components</h3>
            <p>
              A component is one isolated piece of interface. For example in a
              typical blog homepage you might find the Sidebar component, and
              the Blog Posts List component. They are in turn composed by
              components themselves, so you could have a list of Blog post
              components, each for every blog post, and each with its own
              peculiar properties.
            </p>
            <h3>JSX</h3>
            <p>
              Besides normal HTML, CSS, and JavaScript, the bulk of your React
              code will be written in something known as JSX. JSX is a language
              that allows you to easily mix JavaScript and HTML-like tags to
              define user interface (UI) elements and their functionality.
            </p>
            <p>
              BUT we need a way to take our JSX and convert it into plain old
              JavaScript that your browser can understand.
            </p>
            <p>
              Fortunately, there are two solutions to this:
              <ul>
                <li>
                  <b>
                    Set up a development environment around Node and a handful
                    of build-tools
                  </b>
                </li>
                <p>
                  In this environment, every time you perform a build, all of
                  your JSX is automatically converted into JS and placed on disk
                  for you to reference like any plain JavaScript file
                </p>
                <li>
                  <b>
                    Let your browser automatically convert JSX to JavaScript at
                    runtime
                  </b>
                </li>
                <p>
                  You specify your JSX directly just like you would any old
                  piece of JavaScript, and your browser takes care of the rest
                </p>
              </ul>
            </p>
            <h3>Props</h3>
            <p>
              Just like with functions, you can pass in arguments that alter
              what your component does. There is a slight terminology update you
              need to be on top of. What we call arguments in the function world
              are going to be known as properties in the component world.
            </p>
            <h3>State</h3>
            <p>
              Your properties are considered immutable once they have been set.
              For many interactive scenarios, you don't want that. You want to
              be able to change aspects of your components as a result of some
              user interaction (or some data getting returned from a server or a
              billion other things!) What we need is another way to store data
              on a component that goes beyond properties. We need a way to store
              data that can be changed. What we need is something known as
              state!
            </p>
            <blockquote>
              <i></i>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutReact;
