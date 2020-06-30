import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact-me" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
