import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBox from '../../NavBox'

import homeStyle from "./home.module.css";
import { Signature2Sm, RomeCrop } from '../../../images/index'

const HomeHero = () => (
  <section className={homeStyle.HeroSection}>
    <Row>
      <Col className={homeStyle.Nomobile}>
        <NavBox />
 
      </Col>

      <Col>
      <div className={homeStyle.SigBox}>
          <img src={Signature2Sm} alt='' className={homeStyle.Signature}/>
      </div>
      </Col>

      <Col className={homeStyle.Nomobile}>
      <div>

      </div>
      </Col>
    </Row>
    <Container fluid className={homeStyle.HeroContainer}>
      <Row className={homeStyle.BoxRow}>
        <Col xs={2} className={homeStyle.Nomobile}>
        </Col>

        <Col > 
        <div className={homeStyle.Spacer} />
        <div className={homeStyle.BoxPic}>
            <img src={RomeCrop} alt='' className={homeStyle.Pic} />
        </div>
        </Col>
        <Col>
        <div className={homeStyle.PicCaption}>
            <div className={homeStyle.Header}>
            <h1 className={homeStyle.title}>
                Hey, I'm Rachel :)
            </h1>
            <div style={{height: '5px', width: '100%', color: '#F26C58', backgroundColor: '#F26C58', margin: '1rem auto'}} />
            <div className={homeStyle.CaptionText}>
            <p style={{textAlign: 'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <br />
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            <br />

            <p style={{textAlign: 'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            </div>
            </div>
            </div>
        </Col>

        <Col xs={2} className={homeStyle.Nomobile}></Col>
      </Row>
    </Container>
  </section>
);

export default HomeHero;
