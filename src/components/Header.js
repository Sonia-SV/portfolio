import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../stylesheets/layout/header.scss';

const Header = (props) => {
  const renderActualRoute = (route, text) => {
    return (
      <Route
        path={route}
        children={({ match }) => {
          const activeClass = !!match && match.isExact ? 'header__nav__ul__li__active' : '';

          return (
            <li className="header__nav__ul__li">
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
        <ul className="header__nav__ul">
          {renderActualRoute('/about', props.languajeSpanish ? 'Sobre mí' : 'About')}
          {renderActualRoute('/portfolio', 'Portfolio')}
          {renderActualRoute('/contact', props.languajeSpanish ? 'Contacto' : 'Contact')}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
