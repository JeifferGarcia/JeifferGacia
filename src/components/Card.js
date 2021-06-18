import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import rickmorty from "../images/rickmorty.png";
import "./styles/Card.css";

class Card extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='Card'>
          <img src={rickmorty} alt='spa' />
          <h3>SPA Vanilla JavaScript</h3>
          <div>
            <p>
              spa creada con la api de Rick and morty, usando vanilla JavaScript
            </p>
          </div>
          <div>
            <Link className='btn' to='#'>
              ver
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
