import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import { Link } from "gatsby";

import navboxStyle from "./navbox.module.css";

const NavBox = () => (
  <Nav className={navboxStyle.NavBox}>

    <Row>
      <Col>
        <ul className={navboxStyle.NavList}>
          <Nav.Item>
              <Link rel="preload" to="/">
            <li className={navboxStyle.NavListItem}
            >Home</li>
            </Link>
          </Nav.Item>

          <Nav.Item>
          <Link rel="preload" to="/about">
            <li className={navboxStyle.NavListItem}
            >About</li>
            </Link>
          </Nav.Item>

      <Nav.Item>
          <Link rel="preload" to="/contact">
            <li className={navboxStyle.NavListItem}
            >Contact</li>
            </Link>
      </Nav.Item>

      <Nav.Item>
          <Link rel="preload" to="/gallery/artgallery">
            <li className={navboxStyle.NavListItem}
            >ArtWork</li>
            </Link>
       </Nav.Item>

       <Nav.Item>
          <Link rel="preload" to="/gallery/photogallery">
            <li className={navboxStyle.NavListItem}
            >Photography</li>
            </Link>
       </Nav.Item>

       <Nav.Item>
          <Link rel="preload" to="/test">
            <li className={navboxStyle.NavListItem}
            >Testing</li>
            </Link>
       </Nav.Item>

       {/*   <Nav.Item>
          <Link>
            <li>Contact</li>
            </Link>
          </Nav.Item>
          
          <Nav.Item>
          <Link>
            <li>Gallery</li>
            </Link>
       </Nav.Item>  * /}
        </ul>
      </Col>
       <div className={navboxStyle.Line} />

      <Col>
      <ul className={navboxStyle.NavList}>
     {/*     <Nav.Item>
              <Link>
            <li>Home</li>
            </Link>
          </Nav.Item>

          <Nav.Item>
          <Link>
            <li>About</li>
            </Link>
     </Nav.Item>  * /}

          <Nav.Item>
          <Link rel="preload" to="/contact">
            <li className={navboxStyle.NavListItem}
            >Contact</li>
            </Link>
          </Nav.Item>
          
          <Nav.Item>
          <Link rel="preload" to="/gallery">
            <li className={navboxStyle.NavListItem}
            >Gallery</li>
            </Link>
     </Nav.Item>*/}
        </ul>
      </Col>
    </Row>
  </Nav>
);

export default NavBox;
