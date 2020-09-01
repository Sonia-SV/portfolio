import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/landing.scss';

const Landing = (props) => {
  const landingSpanish = (
    <section>
      <p className="landing">
        <span className="landing__small">¡Hola!</span>
        <span>
          Me llamo <span className="landing__name">Sonia Sanz Vivas</span> y soy
        </span>
        <span>
          desarrolladora Front-end <em>rookie</em>.
        </span>
        <span className="landing__small">
          Aquí puedes ver mi{' '}
          <Link className="landing__small__link" to={'/projects'}>
            trabajo
          </Link>
          !
        </span>
      </p>
    </section>
  );
  const landingEnglish = (
    <section>
      <p className="landing">
        <span className="landing__small">Hi there!</span>
        <span>
          My name is <span className="landing__name">Sonia Sanz Vivas</span> and
        </span>
        <span>
          {' '}
          I'm a <em>rookie</em> Front-end developer.
        </span>
        <span className="landing__small">
          Check out my{' '}
          <Link className="landing__small__link" to={'/portfolio'}>
            work
          </Link>
          !
        </span>
      </p>
    </section>
  );

  return props.languajeSpanish ? landingSpanish : landingEnglish;
};

export default Landing;
