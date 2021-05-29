import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='Home'>
          <h1>
            Hola, soy <br /> Jeiffer Garcia
          </h1>
          <h2>Desarrollador web Frontend</h2>
          <Link className='Home_btn btn' to='/about'>
            Sobre mí
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default Home;
