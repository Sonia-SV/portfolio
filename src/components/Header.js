import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../stylesheets/layout/header.scss';

const Header = () => {
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
      <h2>
        <Link to={'/'}> SSV</Link>
      </h2>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          {renderActualRoute('/about', 'About')}
          {renderActualRoute('/portfolio', 'Portfolio')}
          {renderActualRoute('/curriculum', 'Curriculum')}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
