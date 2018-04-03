import React, { Component } from 'react';
import Api from '../Api'
// import ItemsSection from './ItemsSection.js';
import Button from './Button'
import ItemSection from './ItemSection'


class MoviePage extends Component{
  constructor(){
    super()
    this.api = new Api()
    this.state = {
      movie : null,
      loading: false
    }
  }
  componentDidMount() {
    const {serie_id} = this.props.match.params
    this.setState({
      isLoading: true
    })
    this.api.getMovieDetail(serie_id).then( results =>
      //console.log(data)||
      this.setState ({
        movie: results,
        loading: false
      })
    )
  }

  render() {

    const { movie } = this.state

    return movie &&(

      <div>
        <section className="items-section ">
        <div className="items-section-body">
        <div className="row">
          <div className="landing-inner-content">
        {/* <h1>Movie {movie.title || movie.original_title}</h1> */}
        <ItemSection itemsSection={movie} displayType='list' loading="true"/><br/>
      </div>
      </div>
      </div>

      </section>
      </div>

    )
  }
}
export default MoviePage;
