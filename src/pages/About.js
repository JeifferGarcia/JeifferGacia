import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles/About.css";

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='About container'>
          <section className='About__title'>
            <h2>Sobre mí</h2>
          </section>

          <section className='About__images'>
            <div className='About__images--img'></div>
          </section>

          <section className='About__description'>
            <p>
              Hola, soy Jeiffer Garcia un apasionado por la tecnología frontend,
              Me caracterizo por ser una persona amable, creativa y responsable.
            </p>
            <p>
              soy un persona que esta en constante emprendisaje, soy arriesgado
              y no le tengo miedo a desafios.
            </p>

            <div className='About__btn'>
              <Link className='btn' to='#'>
                Descargar CV
              </Link>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default About;
