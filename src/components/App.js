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
  useEffect(() => {
    setProjects(projectsList);
  });

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
  return (
    <React.Fragment>
      <Header languajeSpanish={languajeSpanish} handleSetLanguaje={handleSetLanguaje} />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Landing languajeSpanish={languajeSpanish} />
          </Route>
          <Route path="/about">
            <About languajeSpanish={languajeSpanish} />
          </Route>
          <Route path="/portfolio">
            <PortfolioList projects={projects} languajeSpanish={languajeSpanish} />
          </Route>
          <Route path="/contact">
            <Contact languajeSpanish={languajeSpanish} />
          </Route>
        </Switch>
      </main>
      <ContactIcons />
    </React.Fragment>
  );
};

export default App;
