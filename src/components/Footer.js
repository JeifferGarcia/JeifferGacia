import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Twitter from "../images/twitter.svg";
import Github from "../images/github.svg";
import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import "./styles/Footer.css";

function Footer() {
  return (
    <Fragment>
      <div className='Footer container'>
        <nav>
          <ul className='Footer__Navbar'>
            <li>
              <Link target='_blank' to='https://github.com/jeiffergarcia'>
                <img src={Github} alt='Github' />
              </Link>
            </li>
            <li>
              <Link
                target='_blank'
                to='https://www.linkedin.com/in/jeiffer-garcias-289032122/'>
                <img src={Linkedin} alt='Linkedin' />
              </Link>
            </li>
            <li>
              <Link
                target='_blank'
                to='https://www.instagram.com/jeifferg/?hl=es-la'>
                <img src={Instagram} alt='Instagram' />
              </Link>
            </li>
            <li>
              <Link target='_blank' to='https://twitter.com/JheifferG'>
                <img src={Twitter} alt='Twitter' />
              </Link>
            </li>
          </ul>
        </nav>
        <section className='Footer__copy'>
          <p>© JeifferGarcia 2021</p>
        </section>
      </div>
    </Fragment>
  );
}

export default Footer;
