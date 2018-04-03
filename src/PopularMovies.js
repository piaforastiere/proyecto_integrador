import React, { Component } from 'react';
import Api from './Api'

import ItemSection from './components/ItemSection'
import styled from 'styled-components';
import Select from './Select'

import DisplaySection from './components/DisplaySection'



class PopularMovies extends Component{
  constructor(){
    super()
    this.api = new Api()
    this.state = {
      popularMovies : [],
      loading: false,
      type: 'movie',
       display : '',

    }
  }

componentDidMount() {
  this.setState({
    loading: true
  })
   this.api.getPopularMovies().then( data =>
   //console.log(data)||
   this.setState ({
     popularMovies: data.results,
     loading: false,
     type: 'movie'
   })
 )
  }



      render() {

        const popularMovies = this.state.popularMovies

        const {type} = this.state

        const { display } = this.state
        console.log(display)
          return (

<div>
          <DisplaySection />
                <section className="items-section ">
                <div className="items-section-body">
                <div className="row">
                  <div className="landing-inner-content">
          
            <ul>
            {popularMovies.map(popularMovie =>
              <li key={popularMovie.id}>
                <ItemSection itemsSection={popularMovie} displayType={display} type={type} key={popularMovie.id}/>
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
