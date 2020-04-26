import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import ContactPage from '../components/PageComponents/Contact/ContactPage'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactPage />

  </Layout>
);

export default Contact;
