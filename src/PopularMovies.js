import React, { Component } from 'react';
import Api from './Api'

import ItemSection from './components/ItemSection'
import styled from 'styled-components';
import Select from './Select'

import DisplaySection from './components/DisplaySection'
import SelectComponent from './SelectComponent'



class PopularMovies extends Component{
  constructor(){
    super()
    this.api = new Api()
    this.state = {
      popularMovies : [],
      loading: false,
      type: 'peliculas',
    }
  }

componentDidMount() {
  this.setState({
    loading: true
  })
   this.api.getPopularMovies().then( results =>
   //console.log(data)||
   this.setState ({
     popularMovies: results,
     type: 'peliculas',
     loading: false

   })
 )
  }



      render() {

        const popularMovies = this.state.popularMovies

        const type = this.state.type



          return (

<div>

          <div className="row">


            {/* <button type="button" className="btn btn-light mdi mdi-view-grid" onClick={this.chooseDisplay} value='grid' aria-label="Left Align">

            </button>
            <button type="button" className="btn btn-light mdi mdi-view-list" onClick={this.chooseDisplay} value='list' aria-label="Left Align">

            </button> */}
          </div>
                <section className="items-section ">
                <div className="items-section-body">
                <div className="row">
                  <div className="landing-inner-content">

            <ul>
            {popularMovies.map(popularMovie =>
              <li key={popularMovie.id}>
                <ItemSection itemsSection={popularMovie} displayType={'grid'} type={type} key={popularMovie.id}/>
            </li>
          )}
        </ul>
      </div>
      </div>
      </div>

    </section>
    </div>

        )
      }
}
export default PopularMovies;
