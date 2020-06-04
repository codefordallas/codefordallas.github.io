import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';
import logo from "assets/images/Code for Dallas-26.png";

const Navbar = () => (
  <Wrapper as={Container}>
    {/* <img style={{height: "3em"}} src={logo} alt="Code for Dallas Logo" /> */}
    <Link to="/"><span style={{fontWeight: "bold", fontSize: "2em"}}>Code for Dallas</span></Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
