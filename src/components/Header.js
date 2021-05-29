import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import Navbar from "./Navbar";
import "./styles/Header.css";

function Header() {
  return (
    <Fragment>
      <div className='Header'>
        <div className='Logo'>
          <Link to=''>
            <img src={logo} alt='logo jeiffer garcia' />
          </Link>
        </div>
        <Navbar />
      </div>
    </Fragment>
  );
}

export default Header;
