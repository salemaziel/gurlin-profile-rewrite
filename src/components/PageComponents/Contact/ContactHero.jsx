import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBox from '../../NavBox'

import contactStyle from "./contact.module.css";
import { Signature2Sm, RomeCrop } from '../../../images/index'

const ContactHero = () => (
  <section className={contactStyle.HeroSection}>
    <Row>
      <Col className={contactStyle.Nomobile}>
        <NavBox />
 
      </Col>

      <Col>
      <div className={contactStyle.SigBox}>
          <img src={Signature2Sm} alt='' className={contactStyle.Signature}/>
      </div>
      </Col>

      <Col className={contactStyle.Nomobile}>
      <div>

      </div>
      </Col>
    </Row>
    <Container fluid className={contactStyle.HeroContainer}>
      <Row className={contactStyle.BoxRow}>
        {/*<Col xs={2} className={contactStyle.Nomobile}>
        </Col>

        <Col > 
        <div className={contactStyle.Spacer} />
        <div className={contactStyle.BoxPic}>
            <img src={RomeCrop} alt='' className={contactStyle.Pic} />
        </div>
        </Col>
        <Col>
        <div className={contactStyle.PicCaption}>
            <div className={contactStyle.Header}>
            <h1 className={contactStyle.title}>
                Hey, I'm Rachel :)
            </h1>
            <div style={{height: '5px', width: '100%', color: '#F26C58', backgroundColor: '#F26C58', margin: '1rem auto'}} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            </div>
            </div>
        </Col>

        <Col xs={2} className={contactStyle.Nomobile}></Col>*/}
      </Row>
</Container>
  </section>
);

export default ContactHero;
