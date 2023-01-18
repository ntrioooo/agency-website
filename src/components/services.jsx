import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardServices from "./card";
import TextSection from "./textSection";
import FigmaLogo from "../assets/FigmaLogo.png";
import Code from "../assets/Code.png";
import ArticleMedium from "../assets/ArticleMedium.png";
import PenNib from "../assets/PenNib.png";
import PresentationChart from "../assets/PresentationChart.png";
import VideoCamera from "../assets/VideoCamera.png";

function Services() {
  return (
    <div id="services">
      <Container>
        <div className="services-text">
          <TextSection title="Our Services" desc="We Provide What You Need" />
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
              <CardServices
                image={FigmaLogo}
                title="UI/UX Designer"
                text="We are ready to make your website more friendly and efficient in the eyes of users"
              />
            </Col>
            <Col md={4}>
              <CardServices
                image={Code}
                title="Web Development"
                text="Want to create a website that has many features? We have the answer for you"
              />
            </Col>
            <Col md={4}>
              <CardServices
                image={ArticleMedium}
                title="Content Writer"
                text="We provide interesting content and can attract customers for you"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={4}>
              <CardServices
                image={PresentationChart}
                title="Branding"
                text="Create visual branding with amazing result, you just sit back and relax"
              />
            </Col>
            <Col md={4}>
              <CardServices
                image={VideoCamera}
                title="Editing Video"
                text="Want to create a website that has many features? We have the answer for you"
              />
            </Col>
            <Col md={4}>
              <CardServices
                image={PenNib}
                title="Illustration"
                text="Create beauty illustrasion as you need, and make it interesting"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Services;
