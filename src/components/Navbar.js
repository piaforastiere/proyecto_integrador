import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import SearchBox from './Search'
import MiLista from '../List'
import PopularSeries from '../PopularSeries'
import PopularMovies from '../PopularMovies'
import Home from '../views/Home'
import SeriePage from './SeriePage'
import MoviePage from './MoviePage'



const Navbar = () => (
  <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='container'>
      <a className="navbar-brand" href="#">React Movie DB APP</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className='collapse navbar-collapse' id="navbarsExample07">
    <ul className='navbar-nav mr-auto'>
      <li className='nav-item active'>
        <NavLink className='nav-link' to='/'>Home</NavLink>
      </li>
      <li  className='nav-item'>
        <NavLink className='nav-link' to='/peliculas'>Peliculas</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/series'>Series</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/mi_lista'>Mi Lista</NavLink>
      </li>
    </ul>
    </div>


      <SearchBox />

    </div>
  </nav>

  <div>
    <Switch>

      <Route exact path="/series" component={PopularSeries} />
      <Route path="/series/:serie_id" component={SeriePage}/>
      <Route exact path="/peliculas" component={PopularMovies} />
      <Route path="/peliculas/:serie_id" component={MoviePage}/>
      <Route path="/mi_lista" component={MiLista} />
    </Switch>
  </div>

  </div>

)


export default Navbar;
