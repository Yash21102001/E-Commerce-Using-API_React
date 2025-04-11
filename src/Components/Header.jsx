import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" style={{ 
      backgroundColor: '#6c5ce7',
      boxShadow: '0 4px 20px rgba(108, 92, 231, 0.3)',
      padding: '0.75rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ 
          color: 'white',
          fontWeight: '700',
          fontSize: '1.5rem',
          letterSpacing: '0.5px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ 
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '0.25rem 0.5rem',
            borderRadius: '6px',
            marginRight: '0.5rem'
          }}>
            🛍️
          </span>
          ProductHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ 
          border: 'none',
          padding: '0.5rem',
          outline: 'none',
          boxShadow: 'none'
        }}>
          <div style={{
            width: '24px',
            height: '2px',
            backgroundColor: 'white',
            position: 'relative',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              backgroundColor: 'white',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              backgroundColor: 'white',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              backgroundColor: 'white',
              transition: 'all 0.3s ease'
            }}></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ 
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            <Nav.Link as={Link} to="/" style={{
              color: 'white',
              fontWeight: '500',
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              fontSize: '1rem',
              position: 'relative',
              ':hover': {
                backgroundColor: 'rgba(255,255,255,0.15)'
              }
            }}>
              <span style={{
                position: 'relative',
                zIndex: 1
              }}>
                Home
              </span>
            </Nav.Link>
            
            <Nav.Link as={Link} to="/addProduct" style={{
              color: 'white',
              fontWeight: '500',
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              fontSize: '1rem',
              backgroundColor: 'rgba(255,255,255,0.2)',
              ':hover': {
                backgroundColor: 'rgba(255,255,255,0.3)'
              }
            }}>
              Add Product
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;