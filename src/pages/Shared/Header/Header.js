import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  // Using auth state hook
  const [user, loading] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SPEEDO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="/manageinventories">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addinventory">
                    Add Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myinventories">
                    My Items
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button onClick={handleLogout} className="logoutBtn">
                  Logout
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
