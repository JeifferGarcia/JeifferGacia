import React, { Fragment } from "react";
import Card from "../components/Card";
import "./styles/Portfolio.css";

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='Portfolio  container'>
          <div className='Portfolio__title'>
            <h2>Portfolio</h2>
          </div>
          <div className='Portfolio__container_card'>
            <Card />
            <Card />
            <Card />
            <footer></footer>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
