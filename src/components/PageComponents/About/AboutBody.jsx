import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import aboutStyle from './about.module.css'

const AboutBody = () => (
    <section className={aboutStyle.Section}>
        <Container fluid>
            <Row>
                <Col xs={2} 
                className={aboutStyle.Nomobile}
                ></Col>

                <Col className={aboutStyle.AboutBody}>
                    <div className={aboutStyle.Header}>
                     <h2 className={aboutStyle.title}>
                                About Me
                        </h2>
                        <hr />
                        <p>

                        </p>
                    </div>
                    <div>

                    </div>
                    <div className={aboutStyle.Spacer} />

                </Col>

                <Col xs={2}
                className={aboutStyle.Nomobile}
                ></Col>
            </Row>
        </Container>
    </section>

)

export default AboutBody