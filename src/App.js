import React, { Component } from 'react';
import Select from './Select.js';
import SelectComponent from './SelectComponent'
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar'
import PopularMovies from './PopularMovies'
import PopularSeries from './PopularSeries'
import MiLista from './List'




class App extends Component {
  render() {
    return (

      <div className="App">

          <div>
        <Navbar />

        {/* <PopularMovies />

        <PopularSeries />
        <SelectComponent/> */}

        </div>


      </div>

    );
  }
}

export default App;
