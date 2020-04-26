import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Container, Button, Navbar, Nav, NavItem } from "react-bootstrap";

import headerStyle from './header.module.css'
import NavMobile from './NavMobile'

const Header = ({ siteTitle }) => (
  <>
  <div className={headerStyle.Bar} />
 
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
