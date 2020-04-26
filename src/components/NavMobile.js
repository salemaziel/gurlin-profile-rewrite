import React from "react"
import SideNav from "react-simple-sidenav"
import { Link } from "gatsby"
//import { LogoWshadowDarkVertSm } from '../images/index'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Signature2Xs, MenuIcon } from "../images/index"
import navmobileStyles from "./navmobile.module.css"

class NavMobile extends React.Component {
  constructor() {
    super()

    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    }
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
                <img src={MenuIcon} alt='' className={navmobileStyles.MenuIcon} />
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
          titleStyle={{ backgroundColor: "rgba(255,255,255,0.85)", color: "#black", padding: '30px' }}
          items={[
            <Link rel="preload" className={navmobileStyles.navLink} to="/">
              Home
            </Link>,
            <Link rel="preload" className={navmobileStyles.navLink} to="/about">
              About
            </Link>,
            <Link rel="preload" className={navmobileStyles.navLink} to="/contact">
              Contact
            </Link>,
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
    )
  }
}

export default NavMobile
