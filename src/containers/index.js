import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Config from './Config/config';
import Home from './Home/home';
import './index.scss';
import Play from './Play/play';

// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

// import Router from 'react-router';
// import Route from 'react-router';

// import { Router, Route } from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/play">Play</Link></li>
              <li><Link to="/config">Config</Link></li>
            </ul>
          </nav>
          <main>
            <Route path='/' exact component={Home} />
            <Route path='/play' component={Play} />
            <Route path='/config' component={Config} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
