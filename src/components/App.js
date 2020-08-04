import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import projectsList from '../data/projects.json';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Curriculum from './Curriculum';
import '../stylesheets/reset.scss';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Work in progress...</h2>
        <img src="https://media.giphy.com/media/ZG719ozZxGuThHBckn/giphy.gif" alt="/" />
        <p>
          Meanwhile, you can check out my work on <a href="https://github.com/Sonia-SV">GitHub</a>
        </p>
        {/* <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>*/}
        <main>
          {/* <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
          </Switch> */}
        </main>
      </div>
    );
  }
}

export default App;
