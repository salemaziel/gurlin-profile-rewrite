import React from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";
import { Link } from "gatsby";
//import { LogoWshadowDarkVertSm } from '../images/index'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Signature2Xs } from "../images/index";
import navmobileStyles from "./navmobile.module.css";
import Nav from "react-bootstrap/Nav";

class NavMobile extends React.Component {
  constructor() {
    super();

    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    };
  }
  render() {
    return (
      <Container
        fluid
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Row className="mobileNavRow">
          <Col
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="mobileNav"
              onClick={() => this.setState({ showNav: true })}
            >
              {" "}
              {/*<div className={navmobileStyles.menu}>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" /> 
          </div>*/}
              {/*<img src={MenuIcon} alt="" className={navmobileStyles.MenuIcon} />*/}
              <MenuIcon className={navmobileStyles.MenuIcon} />
            </div>
          </Col>
          <Col />

          <Col />
        </Row>
        <SideNav
          openFromRight={false}
          title={
            <div>
              <Link>
                <img src={Signature2Xs} width="100%" margin="auto" alt="" />
              </Link>
            </div>
          }
          titleStyle={{
            backgroundColor: "inherit!important",
            background: "inherit",
            padding: "30px",
          }}
          items={[
            <Nav.Item>
              <Link rel="preload" className={navmobileStyles.navLink} to="/">
                Home
              </Link>
            </Nav.Item>,

            <Nav.Item>
              <Link
                rel="preload"
                className={navmobileStyles.navLink}
                to="/about"
              >
                About
              </Link>
            </Nav.Item>,

            <Nav.Item>
              <Link
                rel="preload"
                className={navmobileStyles.navLink}
                to="/contact"
              >
                Contact
              </Link>
            </Nav.Item>,

            <Nav.Item>
              <Link
                rel="preload"
                className={navmobileStyles.navLink}
                to="/gallery/artgallery"
              >
                Art
              </Link>
            </Nav.Item>,

            <Nav.Item>
              <Link
                rel="preload"
                className={navmobileStyles.navLink}
                to="/gallery/photogallery"
              >
                Photography
              </Link>
            </Nav.Item>,

            <Nav.Item>
              <Link
                rel="preload"
                className={navmobileStyles.navLink}
                to="/test"
              >
                Testing
              </Link>
            </Nav.Item>,
          ]}
          itemStyle={{
            background: "inherit",
            color: "#fff",
            fontSize: "inherit",
            padding: "0.5rem 0",
            textAlign: "center",
          }}
          /*navStyle={{ width: "75%" }}*/
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
      </Container>
    );
  }
}

export default NavMobile;
