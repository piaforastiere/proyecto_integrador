import React, { Component } from 'react';
import PopularSeries from '../PopularSeries'
import PopularMovies from '../PopularMovies'
import MiLista from '../List'
import Navbar from '../components/Navbar'

class Home extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <h5 class="items-section-title">Mi Lista <a href="">Ver todas</a></h5>
            <MiLista />
          </div>
          <div className="row">
            <h5 class="items-section-title">Peliculas más populares <a href="">Ver todas</a></h5>
            <PopularMovies />
          </div>
          <div className="row">
            <h5 class="items-section-title">Series más populares <a href="">Ver todas</a></h5>
            <PopularSeries />
          </div>


        </div>
        </div>
    )
  }
}



export default Home;
