import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import projectsList from '../data/projects.json';
import Header from './Header';
import Landing from './Landing';
import About from './About';
import PortfolioList from './PortfolioList';
import Contact from './Contact';
import ContactIcons from './ContactIcons';
import '../stylesheets/App.scss';

const App = () => {
  const [languajeSpanish, setLanguajeSpanish] = useState('true');
  const [projects, setProjects] = useState([]);
  const [filterProjectTech, setfilterProjectTech] = useState('all');
  useEffect(() => {
    setProjects(projectsList);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('languaje'));
    if (data) {
      setLanguajeSpanish(data);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('languaje', JSON.stringify(languajeSpanish));
  });

  const handleSetLanguaje = (lang) => {
    setLanguajeSpanish(lang === 'en' ? false : true);
  };

  const handleSetFilterProjects = (data) => {
    setfilterProjectTech(data.value);
  };

  const renderFilterProjects = () => {
    return projects
      .sort((a, b) => (a.id > b.id ? 1 : -1))
      .sort((a, b) => (a.priority < b.priority ? 1 : -1))
      .filter((project) => (project.visible ? true : false))
      .filter((project) => (filterProjectTech === 'all' ? true : project.tech === filterProjectTech));
  };
  return (
    <React.Fragment>
      <Header languajeSpanish={languajeSpanish} handleSetLanguaje={handleSetLanguaje} />
      <main className="main">
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <Landing languajeSpanish={languajeSpanish} />
            </Route>
            <Route path="/about">
              <About languajeSpanish={languajeSpanish} />
            </Route>
            <Route path="/projects">
              <PortfolioList
                projects={renderFilterProjects()}
                handleSetFilterProjects={handleSetFilterProjects}
                filterProjectTech={filterProjectTech}
                languajeSpanish={languajeSpanish}
              />
            </Route>
            <Route path="/contact">
              <Contact languajeSpanish={languajeSpanish} />
            </Route>
          </Switch>
        </div>
      </main>
      <ContactIcons />
    </React.Fragment>
  );
};

export default App;
