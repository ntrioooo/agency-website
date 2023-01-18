import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/Logo.png";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <p className="m-0">
              <img src={logo} alt="Logo" />
              <span>Bubble Bash</span>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navbar-link" href="/#">
                Home
              </Nav.Link>
              <Nav.Link className="navbar-link" href="/#">
                Our Services
              </Nav.Link>
              <Nav.Link className="navbar-link" href="/#">
                Portofolio
              </Nav.Link>
              <Nav.Link className="navbar-link" href="/#">
                Testimonial
              </Nav.Link>
              <Nav.Link className="navbar-link" href="/#">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
