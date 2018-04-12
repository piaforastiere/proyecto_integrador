import React, { Component } from 'react';
import PopularSeries from '../PopularSeries'
import PopularMovies from '../PopularMovies'
import MiLista from '../List'
import SelectComponent from '../SelectComponent'
import Counter from '../components/Counter'



class Home extends Component {
  render(){
    return (
      <div>

        <div className="container">
          <div>
            <Counter/>
          </div>
          <div className="row">
            <h5 class="items-section-title">Mi Lista <a href="">Ver todas</a></h5>

          </div>

        <div>
          <div className="row">
            <h5 className="items-section-title">Peliculas más populares <a href="">Ver todas</a></h5>
          </div>
            <PopularMovies />
          </div>
          <div className="row">
            <h5 className="items-section-title">Series más populares <a href="">Ver todas</a></h5>
            <PopularSeries />
          </div>


        </div>
        </div>
    )
  }
}



export default Home;
