import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/websitelogo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { link } from "react-router-dom";
import { links } from "../utils/constants";
import "./navbar.css";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="navbar-links_container">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/journey">
            <p>Journey</p>
          </Link>
          <Link to="/products">
            <p>Store</p>
          </Link>
          <Link to="/team">
            <p>Team</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <div className="navbar-sign">
        <p>GAGAN</p>
        <button type="button">Log out</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#home">Journey</a>
              </p>
              <p>
                <a href="#home">Store</a>
              </p>
              <p>
                <a href="#home">Team</a>
              </p>
              <p>
                <a href="#home">Contact</a>
              </p>
            </div>
            <div className="navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
