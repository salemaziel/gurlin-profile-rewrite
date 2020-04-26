import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import { Link } from "gatsby";

import navboxStyle from "./navbox.module.css";

const NavBox = () => (
  <Nav className={navboxStyle.NavBox}>
    <h1>Nav</h1>

    <Row>
      <Col>
        <ul className={navboxStyle.NavList}>
          <Nav.Item>
              <Link>
            <li>Home</li>
            </Link>
          </Nav.Item>

          <Nav.Item>
          <Link to="/about">
            <li>About</li>
            </Link>
          </Nav.Item>

          <Nav.Item>
          <Link>
            <li>Contact</li>
            </Link>
          </Nav.Item>
          
          <Nav.Item>
          <Link>
            <li>Gallery</li>
            </Link>
          </Nav.Item>
        </ul>
      </Col>
      <Col>
      <ul className={navboxStyle.NavList}>
          <Nav.Item>
              <Link>
            <li>Home</li>
            </Link>
          </Nav.Item>

          <Nav.Item>
          <Link>
            <li>About</li>
            </Link>
          </Nav.Item>

          <Nav.Item>
          <Link>
            <li>Contact</li>
            </Link>
          </Nav.Item>
          
          <Nav.Item>
          <Link>
            <li>Gallery</li>
            </Link>
          </Nav.Item>
        </ul>
      </Col>
    </Row>
  </Nav>
);

export default NavBox;
