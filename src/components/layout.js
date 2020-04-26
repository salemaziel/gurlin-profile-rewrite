/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import NavMobile from './NavMobile'

import Header from "./header";
import "./layout.scss";

import '../css/main.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavMobile />
      <Container fluid> 
      <main>
     {children}
      </main>
      </Container> 
      <footer className="footer mt-auto py-3 text-white text-center" style={{backgroundColor: '#F26C58'}}>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://salemaziel.com">Salem Aziel</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
