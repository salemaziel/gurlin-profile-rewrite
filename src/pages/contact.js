import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import ContactPage from '../components/PageComponents/Contact/ContactPage'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactPage />

  </Layout>
);

export default Contact;
