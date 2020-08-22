import React from 'react';
import { Route, Switch } from 'react-router-dom';
import projectsList from '../data/projects.json';
import Header from './Header';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Curriculum from './Curriculum';
import ContactIcons from './ContactIcons';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Landing} />

            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/curriculum" component={Curriculum} />
          </Switch>
        </main>
        <ContactIcons />
      </div>
    );
  }
}

export default App;
