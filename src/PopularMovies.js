import React, { Component } from 'react';
import Api from './Api'
// import ItemsSection from './ItemsSection.js';
import Button from './components//Button'
import ListItem from './components/ListItem'
import GridItem from './components/GridItem'


class PopularMovies extends Component{
  constructor(){
    super()
    this.api = new Api()
    this.state = {
      popularMovies : [],
      loading: false
    }
  }
componentDidMount() {
  this.setState({
    isLoading: true
  })
   this.api.getPopularMovies().then( data =>
   //console.log(data)||
   this.setState ({
     popularMovies: data.results,
     loading: false
   })
 )
  }

      render() {

        const popularMovies = this.state.popularMovies

          return (

          <div>
            <GridItem moviesGrid={popularMovies}/>

          </div>

        )
      }
}
export default PopularMovies;
