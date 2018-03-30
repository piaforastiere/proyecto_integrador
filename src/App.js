import React, { Component } from 'react';
import Select from './Select.js';
import SelectComponent from './SelectComponent'
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar'
import PopularMovies from './components/PopularMovies'



class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />

        <PopularMovies />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SelectComponent/>



      </div>
    );
  }
}

export default App;
