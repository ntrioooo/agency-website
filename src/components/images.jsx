import React from "react";
import mainImg from "../assets/main-img.png";
import { Container, Row, Col } from "react-bootstrap";
import GridExp from "./gridExp";

function Images() {
  return (
    <div>
        <div className="text-center images-section">
          <img src={mainImg} alt="" className="img-fluid" />
        </div>
      <Container>
        <Row className="text-center grid-exp">
          <Col md={3}>
            <GridExp title="1.2K+" desc="Happy Clients" />
          </Col>
          <Col md={3}>
            <GridExp title="1.1K+" desc="WorldWide Clients"/>
          </Col>
          <Col md={3}>
            <GridExp title="6+" desc="Years of Experience"/>
          </Col>
          <Col md={3}>
            <GridExp title="12+" desc="Award Winners"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Images;
