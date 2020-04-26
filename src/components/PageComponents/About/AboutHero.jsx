import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBox from '../../NavBox'

import aboutStyle from "./about.module.css";
import { Signature2Sm, RomeCrop } from '../../../images/index'

const AboutHero = () => (
  <section className={aboutStyle.HeroSection}>
    <Row>
      <Col className={aboutStyle.Nomobile}>
        <NavBox />
 
      </Col>

      <Col>
      <div className={aboutStyle.SigBox}>
          <img src={Signature2Sm} alt='' className={aboutStyle.Signature}/>
      </div>
      </Col>

      <Col className={aboutStyle.Nomobile}>
      <div>

      </div>
      </Col>
    </Row>
    <Container fluid className={aboutStyle.HeroContainer}>
      <Row className={aboutStyle.BoxRow}>
        <Col xs={3} className={aboutStyle.Nomobile}>
        </Col>

        <Col > 
        <div className={aboutStyle.Spacer} />
        <div className={aboutStyle.BoxPic}>
            <img src={RomeCrop} alt='' className={aboutStyle.Pic} />
        </div>
        </Col>
       {/* <Col>
        <div className={aboutStyle.PicCaption}>
            <div className={aboutStyle.Header}>
            <h1 className={aboutStyle.title}>
                Hey, I'm Rachel :)
            </h1>
            <div style={{height: '5px', width: '100%', color: '#F26C58', backgroundColor: '#F26C58', margin: '1rem auto'}} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            </div>
</div>
        </Col>*/}

        <Col xs={3} className={aboutStyle.Nomobile}></Col>
      </Row>
    </Container>
  </section>
);

export default AboutHero;
