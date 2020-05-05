import React from "react";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";

//import FlowerCore from '../components/flowercore'
import FlowerComp from "../components/flowerComponent";
//import Flower from '../components/flower'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons"

import { NavPlanet } from "../components/NavPlanet";

const Test = () => (
  <Layout>
    <section style={{ minHeight: "100vh", minWidth: "100%" }}>
      <Container>
        <Row>
          <Col>
 
              <Link to="/"
              style={{
                  textDecoration: 'none!important',
                  color: 'white',
                  fontSize: '2rem',
                  fontVariant: 'small-caps',
              }}
              >           <Button
              style={{
                background:"#e700fc",
                backgroundColor: '#e700fc',
                padding: "1rem 2rem",
                margin: "2rem auto",
                fontSize: '2rem',
                fontVariant: 'small-caps',
              }}
            >
                  <FontAwesomeIcon icon={faArrowLeft} style={{color: 'white', marginRight: '10px'}} />
                  Go Back
                  </Button>
                  </Link>

          </Col>
          <Col />
          <Col />
        </Row>

        <Row>
          <Col />

          <Col>
            {/* <Flower /> */}
            {/* <NavPlanet /> */}

            {/*}    <FlowerCore /> */}
            <FlowerComp />
          </Col>

          <Col />
        </Row>

        <Row>

          <Col>
            <NavPlanet />
          </Col>

        </Row>
      </Container>
    </section>
  </Layout>
);

export default Test;
