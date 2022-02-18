import React, {useState, useEffect} from "react";
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from "react-scroll";
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

const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  const scrollHome =() => {
    scroll.scrollToTop();
  }

  useEffect(() =>{
    window.addEventListener('scroll', changeNav);
  }, []);


  return (
    <>
      <Nav setScrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={scrollHome}>Home</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <Navitem>
              <NavLinks to="about" smooth={true} duration={1000} >About</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="experience" smooth={true} duration={1000} >Projects</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="Work">Work</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="Contact">Contact</NavLinks>
            </Navitem>
          </NavMenu>
          <NavButton>
            <NavButtonlink to="resume">Resume</NavButtonlink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
