import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "../styles/NavbarStyles.css";
import logo from "../images/momisola.svg";

//Animation
import { motion } from "framer-motion";

//import icons
import { Bars } from "@styled-icons/fa-solid";

const Navbar = ({ toggle }) => {
  const { pathname } = useLocation();
  const [navBg, setNavBg] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  return (
    <Nav className={navBg ? "active" : "non-active"}>
      <Logo>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>

      <NavMenu>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Line
              className={navBg ? "linebg1" : "linebg2"}
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "60%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/about">About</Link>
            <Line
              className={navBg ? "linebg1" : "linebg2"}
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/about" ? "60%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/services">Bookings</Link>
            <Line
              className={navBg ? "linebg1" : "linebg2"}
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/services" ? "60%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
            <Line
              className={navBg ? "linebg1" : "linebg2"}
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/gallery" ? "60%" : "0%" }}
            />
          </li>
        </ul>
      </NavMenu>
      <NavBtn>
        <Link to="/contact">
          <Button primary="true">Contact Us</Button>
        </Link>
      </NavBtn>
      <ToggleBars onClick={toggle} />
    </Nav>
  );
};
const ToggleBars = styled(Bars)`
  color: #fff;
  width: 1.3rem;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 30px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-80%, 50%);
  }
`;

const Logo = styled.div``;
const Line = styled(motion.div)`
  position: absolute;
  height: 0.2rem;
  width: 0%;
  bottom: -80%;
  left: 20%;
`;

const Nav = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  position: fixed;
  width: 100%;

  z-index: 999;
`;

const NavMenu = styled.div`
  margin-right: -48px;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    position: relative;
    list-style: none;
    margin-left: 3rem;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Navbar;
