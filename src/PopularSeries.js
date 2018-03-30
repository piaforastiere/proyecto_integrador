import React, { Component } from 'react';
import Api from './Api'
// import ItemsSection from './ItemsSection.js';
import Button from './components//Button'
import ListItem from './components/ListItem'
import GridItem from './components/GridItem'



class PopularSeries extends Component{
  constructor(){
    super()
    this.api = new Api()
    this.state = {
      popularSeries : [],
      loading: false,
      type: 'serie'
    }
  }
componentDidMount() {
  this.setState({
    isLoading: true
  })
   this.api.getPopularSeries().then( results =>
  console.log(results)||

   this.setState ({
     popularSeries: results,
     loading: false,
     type: 'serie'
   })
 )
  }
  

      render() {

        const popularSeries = this.state.popularSeries

        const type = this.state.type

          return (

          <div>
            <GridItem moviesGrid={popularSeries} type={type}/>

          </div>

        )
      }
}
export default PopularSeries;
