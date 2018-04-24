import React, { Component } from 'react';
import Api from './Api'
// import ItemsSection from './ItemsSection.js';
import Button from './components//Button'
import ListItem from './components/ListItem'
import GridItem from './components/GridItem'
import ItemSection from './components/ItemSection'



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

        const {type} = this.state.type

          return (

            <section className="items-section ">
            <div className="items-section-body">
            <div className="row">
              <div className="landing-inner-content">
            <ul>
            {popularSeries.map(popularSerie =>

                <li>
                  {/* <GridItem movieGrid={popularSerie} type={type} key={popularSerie.id}/> */}
                  <ItemSection itemsSection={popularSerie} type={type} displayType={'grid'} key={popularSerie.id}/>
                </li>


            )}


          </ul>
        </div>
        </div>
        </div>

        </section>


        )
      }
}
export default PopularSeries;
