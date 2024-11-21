import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/NavBar.css";

const NavBar = () => {
  const location = useLocation(); // Use useLocation to get the current pathname

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Nav.Link>
            <Nav.Link as={Link} to="/skills" className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/exp" className={`nav-link ${location.pathname === "/exp" ? "active" : ""}`}>Experience</Nav.Link>
            <Nav.Link as={Link} to="/resume" className={`nav-link ${location.pathname === "/resume" ? "active" : ""}`}>Resume</Nav.Link>
            <Nav.Link as={Link} to="/contact-me" className={`nav-link ${location.pathname === "/contact-me" ? "active" : ""}`}>Contact Me</Nav.Link>
            <li>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/preetikushwaha13/"
                target="_blank"
                rel="noopener noreferrer">
                in
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;