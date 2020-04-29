import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
