import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBox from '../../NavBox'

import galleryStyle from "./gallery.module.css";
import { Signature2Sm, RomeCrop } from '../../../images/index'

const GalleryHero = () => (
  <section className={galleryStyle.HeroSection}>
    <Row>
      <Col className={galleryStyle.Nomobile}>
        <NavBox />
 
      </Col>

      <Col>
      <div className={galleryStyle.SigBox}>
          <img src={Signature2Sm} alt='' className={galleryStyle.Signature}/>
      </div>
      </Col>

      <Col className={galleryStyle.Nomobile}>
      <div>

      </div>
      </Col>
    </Row>
    {/*
    <Container fluid className={galleryStyle.HeroContainer}>
      <Row className={galleryStyle.BoxRow}>
        <Col xs={2} className={galleryStyle.Nomobile}>
        </Col>

        <Col > 
        <div className={galleryStyle.Spacer} />
        <div className={galleryStyle.BoxPic}>
            <img src={RomeCrop} alt='' className={galleryStyle.Pic} />
        </div>
        </Col>
        <Col>
        <div className={galleryStyle.PicCaption}>
            <div className={galleryStyle.Header}>
            <h1 className={galleryStyle.title}>
                Hey, I'm Rachel :)
            </h1>
            <div style={{height: '5px', width: '100%', color: '#F26C58', backgroundColor: '#F26C58', margin: '1rem auto'}} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            </div>
            </div>
        </Col>

        <Col xs={2} className={galleryStyle.Nomobile}></Col>
      </Row>
    </Container>*/}
  </section>
);

export default GalleryHero;
