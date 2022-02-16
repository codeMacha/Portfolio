import React from "react";
import {FaBars} from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  Navitem,
  NavButton,
  NavButtonlink
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Home</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <Navitem>
              <NavLinks to="about">About</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="experience">Experience</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="Work">Work</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="Contact">Contact</NavLinks>
            </Navitem>
          </NavMenu>
          <NavButton>
            <NavButtonlink to="/resume">Resume</NavButtonlink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
