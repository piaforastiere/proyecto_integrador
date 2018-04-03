import React, { Component } from 'react';
import Select from './Select.js';
import SelectComponent from './SelectComponent'
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar'
import PopularMovies from './PopularMovies'
import PopularSeries from './PopularSeries'
import MiLista from './List'

import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />
        <Counter />
        {/* <PopularMovies />

        <PopularSeries />
        <SelectComponent/> */}



      </div>
    );
  }
}

export default App;
