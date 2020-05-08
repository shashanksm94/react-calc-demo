import React from "react";
import Screen from "../calculator/screen/screen";
import Key from "../calculator/key/key";
import { Container, Row, Col } from "reactstrap";
import "./making.css";

const Making = () => {
  return (
    <div className="MakingContainer">
      <Container>
        <Row>
          <Col className="Col">
            <h1>The Making</h1>
            <p>
              <b>Now</b>, let's look at the making of our calculator. If you
              didn't already read about the react components we created, don't
              worry. We will cover it here in an easy-to-understand way.
            </p>

            <h4>Components</h4>
            <ul class="ulCalcPage">
              <li>
                <b>Screen</b>
              </li>
              <Screen display={"0"} unit={6.5} />
              <li>
                <b>Key</b>
              </li>
              <Key value={"B"} unit={7.5} />
              <Key value={"9"} unit={7.5} />
              <Key value={"."} unit={7.5} />
            </ul>
            <p>
              Let's assume the calculator was developed using plain
              HTML-CSS-JavaScript. If you had to use it once and at a single
              place, you would be all good. But that's hardly the case nowadays
              when development speed matters and you usually see yourself
              writing repetitive code. If you had to display the screen or the
              keys at more than one place on your webpage, you would have to
              write the code again and again. Can't we avoid this repetition?
              Can't we have an <b>item</b> that can be <b>resuse</b>d?
            </p>
            <blockquote>
              Yes we can! That's where React components come in!{" "}
            </blockquote>
            <p>
              We didn't have to write the HTML and CSS to show these
              (independent) <b>screen</b> and <b>key</b> components here. It was
              a single line of code to reuse them from our calculator app.
            </p>

            <h4>State and Prop</h4>
            <p>
              Moreover, React gives us some things called <b>state</b> and{" "}
              <b>prop</b>. A state is specific to a component and can be
              modified from within that component, while props can be sent by a
              parent component to <b>its</b> child component(s). A prop can be
              used to set a child element's state. A state is used when we want
              to <b>preserve</b> some data related to a component. We made use
              of both.
            </p>
            <p>
              Want to see an example? You already know we reused our screen and
              key components but they aren't the same size, right? Why? We
              scaled them by passing a <b>prop</b> to define a unit of dimension
              (that's the way we referred to physical pixed units while
              designing the Calculator, so it's totally okay to not get it).
            </p>

            <p>This is how we resused the components.</p>
            <b>
              <pre>
                &lt;Screen display={"{"}"0"{"}"} unit={"{"}6.5{"}"}/&gt;
              </pre>
              <pre>
                &lt;Key value={"{"}"B"{"}"} unit={"{"}7.5{"}"} /&gt;{" "}
              </pre>
            </b>
            <p>
              So HTML does not have a <b>Screen</b> tag or a <b>Key</b> tag.
              This XML-like syntax is JSX, i.e. JavaScript XML. It's supposed to
              work with React and is very easy to understand. In fact, JSX makes
              learning React easier. React Components can be used as tags just
              like we did above. For us, the parent component that creates the
              Screen and Key components is the Calculator component. We pass
              these props (display, value, and unit) from our Calculator
              component while creating these child components.
            </p>
            <p>
              So the <b>Calculator</b> is said to be <b>composed</b> of the{" "}
              <b>Screen</b> and the <b>Key</b>s.
            </p>
            <p>
              Wait! Are you curious to know about the <b>state</b>? Okay, I get
              it. See. We have these three components for the calculator app and
              each component has some data that is very-own to that component.
              For the screen component, there's nothing that it needs to{" "}
              <b>preserve</b> to work. It does need to show a value (if you
              related this to the <b>display</b> prop we showed above, you're
              smart), but that value does not have a history in our app
              (Sshhhhh! We would have needed the Screen's state if we had to
              show the calculation history like Google calculator does). The Key
              component was not required to preserve any data. but we decided to
              help it remember if it was pressed. So it has a state that has a
              boolean value for <b>pressed</b>. Coming to the calculator
              component, its state comprises of the two operands, the operator,
              and the value to be shown on the screen. But we mentioned above
              that the Screen component didn't see it as something to be
              preserved. <b>YES</b>! But the calculator component needs to
              preserve it. When you click on a key, you interact with the Key or
              the Screen component, and they both send the input key value to
              the Calculator component (via callback event handlers, but we
              won't cover it here). The calculator component then calculates
              something (if needed) and sends to the Screen component a value
              that it needs to display (that's what we did through the{" "}
              <b>display</b> prop of the Screen). The calculator needs to
              preserve the state (operator, operands, and display value),
              because your next input needs all of these. For instance, if you
              enter '+', we need to know what you did before that (what the
              first operand was).
            </p>
            <blockquote>"Hmmmmm.. we got it! Let's go ahead!"</blockquote>
            <h4>User Interface</h4>
            <p>
              Now let's have a look at the aesthetic part. Wait! Try opening
              this page on some other device having dimensions different from
              your current device (or change your browser window size if you
              can).
            </p>
            <p>..........</p>
            <p>
              Did you notice that this page and all its different sections
              (header, navigation menu, and content) fit properly?
            </p>
            <p>
              Now that's because the page is <b>Responsive</b>. It is easy to
              make your web page responsive using plain CSS. Essentially all you
              do is specify different CSS property values for a particular
              element based on the current screen (view-port) dimensions. It's
              really a task with plain CSS and that's why you have libraries
              like Bootstrap. We made significant use of Bootstrap for the UI
              elements you see here. It makes things easier, but you still need
              to know what to use where and how.
            </p>
            <p>
              Let's look at one of Bootstrap's important elements. It's the{" "}
              <b>Bootstrap grid system</b> that helps with your page layout.
              Bootstrap grid is a grid with any number of rows and 12 columns.
              Grids can be nested too, i.e. one column can have a row (which
              then hosts 12 columns). Your webpage can be laid out using this
              grid system easily.
            </p>
            <p>
              We didn't mention something. Although our calculator app is made
              of just three components, our entire web app includes components
              like the Header, Footer, Sidebar, and Content (and a few more that
              we'll mention later).
            </p>
            {/* <Row className="gridRow">
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
              <Col className="gridCol"></Col>
            </Row> */}

            <h4>React DOM</h4>
            <p>
              Okay.. So that's all fine. Now why is this a{" "}
              <b>Single Page App (SPA)</b> and what does that mean?
            </p>
            <blockquote>
              Let me ask you, how different are a mobile app and a traditional
              website to you?
            </blockquote>
            <p>
              A website genetally needs to load after every user action whereas
              an app does not. That's why we build a Single Page Application. It
              is a website, but does not completely reload on every user action.
              When you navigated to the <b>The Making</b> section, did you see
              the page reload? No. Because this is a Single Page App. A SPA
              loads only the parts of a webpage that have changed. How does it
              know that? That's the working of the <b>React Virtual DOM</b>.
              Wait! Now what is a DOM? DOM is Document Object Model. JavaScript
              deals directly with the DOM where you can edit elements using
              their ID or class. Just think of the DOM as all that there is on
              the web page. React has its own virtual DOM. It does not alter the
              browser DOM directly. Assume for a particular instant that the
              React Virtual DOM is the same as the browser's DOM. And you click
              on a button. Traditional JavaScript can handle such events
              directly and load the relevant DOM elements. But React does not.
              React handles all events generated through the React's components.
              Then based on your event logic, it alters its virtual DOM (, only
              the part that needs to change). It then compares the virtual DOM
              to the browser DOM, identifies what part of the browser DOM needs
              to be changed, and makes the change. This might seem too long, but
              it's not. It's fast and you get an App-like feeling on your
              website (and that feels cool).
            </p>
            <h4>React Router</h4>
            <p>
              Now being a SPA, this web page also needs to handle the browser's
              back button and bookmarks that you can make use of with a
              traditional website. If you don't reload the browser, how would
              the address in the link change? That's what the{" "}
              <b>React Router</b> is for. All it needs to know is{" "}
              <i>what your linked documents are</i>, and{" "}
              <i>where you want to load them</i>. Usually, both these are React
              components. So in our web app, we have the Sidebar component (that
              hosts different links) and a Content Component (the part you see
              changing each time you click on a different link). We just tell
              the React Router about them and it handles it all! Doesn't that
              look simple?
            </p>
            <p>
              It is! But all it means is, each of our links should actually be a
              page created as a React Component. That's why we have more
              components like <b>AboutReact</b>, <b>CalculatorPage</b>,{" "}
              <b>Making</b> (yes this page itself is a component as well),{" "}
              <b>Demo</b>, <b>AboutMe</b>, and above all, the <b>App</b>{" "}
              component that hosts everything. But it's not that difficult to
              create components if they are static. What?? See. If you don't
              need all the features and complexities that a React Component
              (class) give yous, you can make a React component as a function
              instead of a class. That component would then be called a{" "}
              <b>Static Functional Component</b> and it would not have a state
              (it can still receive props).
            </p>
            <blockquote>
              All you need to know is.. it's not difficult!
            </blockquote>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Making;
