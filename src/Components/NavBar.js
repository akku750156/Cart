import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar
        variant="light"
        style={{
          position: "sticky",
          top: "10px",
          backgroundColor: "#eaaf00",
          width: "100vw",
        }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "500" }}>
            Apna Store
          </Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
