import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
