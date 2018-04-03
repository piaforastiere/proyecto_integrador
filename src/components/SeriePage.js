import React, { Component } from 'react';
import Api from '../Api'
// import ItemsSection from './ItemsSection.js';
import Button from './Button'
import ItemSection from './ItemSection'

class SeriePage extends Component{
  constructor(){
    super()
    this.api = new Api()
    this.state = {
      serie : null,
      loading: false
    }
  }
  componentDidMount() {
    const {serie_id} = this.props.match.params
    this.setState({
      isLoading: true
    })
    this.api.getSerieDetail(serie_id).then( results =>
      //console.log(data)||
      this.setState ({
        serie: results,
        loading: false
      })
    )
  }

  render() {

    const { serie } = this.state

    return serie &&(

      <div>
        <section className="items-section ">
        <div className="items-section-body">
        <div className="row">
          <div className="landing-inner-content">
        {/* <h1>Serie {serie.name || serie.original_name}</h1> */}
        <ItemSection itemsSection={serie} displayType='list' loading="true"/><br/>
      </div>
      </div>
      </div>

      </section>
      </div>

    )
  }
}
export default SeriePage;
