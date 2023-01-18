import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardProject from "./cardProject";
import TextSection from "./textSection";
import Hospital from "../assets/hospital.png";
import Supermarket from "../assets/supermarket.png";
import FnB from "../assets/fnb.png";

function Portofolio() {
  return (
    <div id="projects">
      <Container>
        <div className="services-text">
          <TextSection title="Our Portofolio&rsquo;s" desc="Recent Projects" />
        </div>
        <Container>
          <Row>
            <Col md={4}>
              <CardProject
                image={Hospital}
                title="Website My Hospital"
                text={
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "Create a hospital website with patient, <br> doctor, and drug logistics features that <br> help hospital operations",
                    }}
                  />
                }
              />
            </Col>
            <Col md={4}>
              <CardProject
                image={FnB}
                title="Food & Beverages Corp Logo"
                text={
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "Create a logo for a food & beverage <br> company, with emphasis on aesthetics <br> and user requests",
                    }}
                  />
                }
              />
            </Col>
            <Col md={4}>
              <CardProject
                image={Supermarket}
                title="Supermarket Mobile Apps"
                text={
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "Develop mobile applications for <br> supermarkets with buy, auto-pay, and <br> marketplace features",
                    }}
                  />
                }
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Portofolio;
