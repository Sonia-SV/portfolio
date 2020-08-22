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
  const [languajeSpanish, setLanguajeSpanish] = useState(true);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectsList);
  });
  console.log(projects);
  return (
    <React.Fragment>
      <Header languajeSpanish={languajeSpanish} />
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
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <ContactIcons />
    </React.Fragment>
  );
};

export default App;
