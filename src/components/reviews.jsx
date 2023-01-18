import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextSection from "./textSection";
import CardReview from "./cardReview";
import Avatar1 from '../assets/ava-1.png'

function Reviews() {
  return (
    <div id="reviews">
      <Container>
        <div className="services-text">
          <TextSection
            title="Client Reviews"
            desc="What Our Happy Client Say About Us"
          />
        </div>
        <Container>
          <Row>
            <Col md={4}>
              <CardReview
                title="Website My Hospital"
                text="Very nice to work with Bubble Bash, a reliable and responsive team is very helpful"
                avatar={Avatar1}
                name='Katty Clock'
                job='CEO My Hospital'
              />
            </Col>
            <Col md={4}>
              <CardReview
                title="Logo F&B Corp"
                text="Really the best service we've ever gotten, really looking forward to the next project"
                avatar={Avatar1}
                name='John Robert'
                job='CEO My Hospital'
              />
            </Col>
            <Col md={4}>
              <CardReview
                title="Supermarket Mobile Apps"
                text="The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?"
                avatar={Avatar1}
                name='Katty Clock'
                job='CEO My Hospital'
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Reviews;
