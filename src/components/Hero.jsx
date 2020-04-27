import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBox from './NavBox'

import heroStyle from "./hero.module.css";
import { Signature2Sm } from '../images/index'

const Hero = () => (
  <section className={heroStyle.HeroSection}>
    <Row>
      <Col className={heroStyle.Nomobile}>
        <NavBox />
 
      </Col>

      <Col>
      <div className={heroStyle.SigBox}>
          <img src={Signature2Sm} alt='' className={heroStyle.Signature}/>
      </div>
      </Col>

      <Col className={heroStyle.Nomobile}>
      <div>

      </div>
      </Col>
    </Row>
    </section>
)

export default Hero