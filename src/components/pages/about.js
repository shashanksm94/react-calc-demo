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
              The most difficult thing for me is to express. Why? I'll try to
              explain. Here's an article I wrote when I was at London waiting
              for my flight back to USA.
            </p>
            <blockquote>
              <i>
                No matter how fast you run, you won’t escape. No matter how calm
                you show out, only you know what hides inside..
              </i>
            </blockquote>

            <p className="justify">
              The want for happiness grabs you from wherever you hide. You might
              stay away for a day, a week, a year, but then you’d be back to
              being a human and that’s fair; It’s a trait. The ones who conquer
              it are few. If you try to be one, you’d find yourself running away
              and staying isolated from everyone and everything. You’d try to
              stop feeling, and thinking about any memory you earned or any
              emotion you learnt. But you can never wipe them.
            </p>
            <p className="justify">
              And today, where we never stop bothering, it’s almost not possible
              to be a<i>bairagi</i>一free from worldly affairs. But what one can
              possibly become, is someone who’s independent of as much as
              possible of what goes around. Be there an argument, a fight, a
              death, you’d still be able to contain yourself. And considering
              your calm, you’d not happen to be involved in the first two. You’d
              be able to choose what affects you, what makes you happy, and what
              doesn’t. You’d know that we ourselves create the positive and
              negative thoughts within.
            </p>
            <p className="justify">
              But like a stream that meanders its way to eventually meet the
              sea, we sometimes assume the same would happen to us but it
              doesn’t. Being okay with where you are doesn’t make it your
              destiny. There’s this one approach of searching for contentment
              and happiness within you; To stay aloof from what goes around. And
              then there’s another where you do anything, say anything, and get
              anything. This approach also involves those who argue and fight
              for what seems righteous or those who do everything to support
              what’s right (let’s consider the positive). But their time cannot
              be called ‘happy’ though their victories cover it up. Both ways
              take you to happiness somehow but neither of them is easier than
              the other.
            </p>
            <p className="justify">
              Which one you choose would surely make a difference in what you
              become and what would become of those around you. Whether you
              become enlightened with truth or you fight for what you think is
              true. Whether people come to you for their happiness or you
              yourself make a subset happy. Whether you do nothing and stay calm
              or you act to benefit a few.
            </p>
            <p className="justify">
              If there was a switch to turn everyone into the first kind, I’d
              have pressed it. If there was a switch to backtrack everything
              that’s gone wrong with mankind, I’d pressed it.
            </p>
            <blockquote>But it is what it is!</blockquote>
            <p className="justify">
              There’s neither! Each and every one of us is surrounded by some or
              all of the sins and so there can never be a single-minded world.
              There can never be ‘no wrong’ or ‘all right’! Everything stays
              fuzzy and we will watch it.
            </p>
            <blockquote>
              What would happen eventually would be good but unfortunately a new
              beginning is also termed as ‘good’!
            </blockquote>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
