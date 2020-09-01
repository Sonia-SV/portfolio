import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../stylesheets/layout/header.scss';

const Header = (props) => {
  const handleLanguaje = (event) => {
    props.handleSetLanguaje(event.target.value);
  };
  const renderActualRoute = (route, text) => {
    return (
      <Route
        path={route}
        children={({ match }) => {
          const activeClass = !!match && match.isExact ? 'header__nav__menu__li__active' : '';

          return (
            <li className="header__nav__menu__li">
              <Link to={route} className={activeClass}>
                {text}
              </Link>
            </li>
          );
        }}
      />
    );
  };
  return (
    <header className="header">
      <h1>
        <Link to={'/'}> SSV</Link>
      </h1>

      <nav className="header__nav">
        <ul className="header__nav__menu">
          {renderActualRoute('/about', props.languajeSpanish ? 'Sobre mí' : 'About')}
          {renderActualRoute('/projects', props.languajeSpanish ? 'Proyectos' : 'Projects')}
          {renderActualRoute('/contact', props.languajeSpanish ? 'Contacto' : 'Contact')}
        </ul>
        <form className="header__nav__lang">
          <input
            className="header__nav__lang__item"
            type="radio"
            id="es"
            name="languaje"
            value="es"
            onChange={handleLanguaje}
            checked={props.languajeSpanish ? true : false}
          />
          <label htmlFor="es">es</label>
          <input
            className="header__nav__lang__item"
            type="radio"
            id="en"
            name="languaje"
            value="en"
            onChange={handleLanguaje}
            checked={props.languajeSpanish ? false : true}
          />
          <label htmlFor="en">en</label>
        </form>
      </nav>
    </header>
  );
};

export default Header;
