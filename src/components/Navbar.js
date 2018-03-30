import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './Search'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='container'>
      <a className="navbar-brand" href="#">React Movie DB APP</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className='collapse navbar-collapse' id="navbarsExample07">
    <ul className='navbar-nav mr-auto'>
      <li className='nav-item active'>
        <Link className='nav-link' to='/'>Home</Link>
      </li>
      <li  className='nav-item'>
        <Link className='nav-link' to='/peliculas'>Peliculas</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/series'>Series</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/miLista'>Mi Lista</Link>
      </li>
    </ul>
    </div>

      <SearchBox />

    </div>
  </nav>

)


export default Navbar;
