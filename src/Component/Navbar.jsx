// Navbar.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'animate.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-dark fixed-top animate__animated animate__fadeInDown" style={{ background: 'linear-gradient(to right, #17153B, #433D8B)' }}>
      <Container>
        
        <Navbar.Brand href="/" className="animate__animated animate__fadeInLeft">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnoB6RJ1PGs_MjsKHStF_AHo9Wxx0HbxBYYw&s"
            alt="Company Logo"
            style={{ width: '50px', height: '50px' }}
          />
        </Navbar.Brand>

       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="text-white px-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white px-3">About Us</Nav.Link>
            <Nav.Link as={Link} to="/signin" className="text-white px-3">Sign In</Nav.Link>
            <Nav.Item className="ms-2">
              <Link to="/contact" className="nav-link px-3">
                <button className="btn btn-outline-light px-2 py-1 animate__animated animate__fadeIn animate__delay-1s" style={{ borderRadius: '15px', background: 'linear-gradient(to right, #6C63FF, #3A3A8C)', color: '#fff', fontWeight: 'bold', transition: 'transform 0.3s' }}>
                  Contact Us
                </button>
              </Link>
            </Nav.Item>
            <Nav.Item className="ms-2">
              <Link to="/getstarted" className="nav-link px-3">
                <button className="btn btn-primary px-4 py-2 animate__animated animate__fadeIn animate__delay-1s" style={{ borderRadius: '15px', background: 'linear-gradient(to right, #CC2B52, #DE7C7D)', fontWeight: 'bold', color: '#fff', transition: 'transform 0.3s' }}>
                  Get Started
                </button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
