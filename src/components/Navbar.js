import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <Fragment>
        <nav className='Navbar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/contact'>Contact</Link>
            </li>

            <li>
              <Link to='/portafolio'>Portafolio</Link>
            </li>

            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
