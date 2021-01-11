import React from 'react';
import '../stylesheets/layout/filters.scss';

const Filters = (props) => {
  const handleTech = (event) => {
    props.handleSetFilterProjects({
      value: event.currentTarget.value,
    });
  };
  return (
    <div className="wrapper">
      <form className="filter">
        <input
          className="filter__item"
          type="radio"
          id="all"
          name="tech"
          value="all"
          onChange={handleTech}
          checked={props.filterProjectTech === 'all' ? true : false}
        />
        <label htmlFor="all">{props.languajeSpanish ? 'Todos' : 'All'}</label>
        {/* <input
          className="filter__item"
          type="radio"
          id="css"
          name="tech"
          value="css"
          onChange={handleTech}
          checked={props.filterProjectTech === 'css' ? true : false}
        />
        <label htmlFor="css">Css/Sass</label> */}
        <input
          className="filter__item"
          type="radio"
          id="vanillaJs"
          name="tech"
          value="vanillaJs"
          onChange={handleTech}
          checked={props.filterProjectTech === 'vanillaJs' ? true : false}
        />
        <label htmlFor="vanillaJs">Vanilla JS</label>
        <input
          className="filter__item"
          type="radio"
          id="reactJs"
          name="tech"
          value="reactJs"
          onChange={handleTech}
          checked={props.filterProjectTech === 'reactJs' ? true : false}
        />
        <label htmlFor="reactJs">React.js</label>
      </form>
    </div>
  );
};

export default Filters;
