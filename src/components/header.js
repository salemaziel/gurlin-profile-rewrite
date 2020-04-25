import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Container, Button, Navbar, Nav, NavItem } from "react-bootstrap";

import NavMobile from './NavMobile'

const Header = ({ siteTitle }) => (
  <>
  <Navbar style={{backgroundColor: '#F26C58', width: '100%',}}>
    
    
    {/*<Navbar.Brand as={Link} href="/">
      {siteTitle}
    </Navbar.Brand>*/}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Container 
          style={{
            display: 'block',
            minHeight: '50px'
        }}>
       {/* <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            About
          </Nav.Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto">
        <Button variant="success" onClick={() => alert("Sign Up")}>
          Sign Up
        </Button>*/}
        </Container>
      </Nav>
</Navbar.Collapse>

  </Navbar>
 
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
