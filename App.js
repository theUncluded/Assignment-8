import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import Home from './components/Home.js';

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" component={Home}/>
          </Routes>
        </Router>
    );
  }
}

export default App;