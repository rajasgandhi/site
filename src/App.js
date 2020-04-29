import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
