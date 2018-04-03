import React, { Component } from 'react';
import Select from './Select'
import Api from './Api'
import Button from './components/Button'
import ListItem from './components/ListItem'

const mapearPelicula = (pelicula) => (
  {name: pelicula.title,
  id: pelicula.id,
  image: pelicula.poster_path,
  overview: pelicula.overview,
}
)
 const mapearSerie = (serie) => (
   {name : serie.original_name,
     id: serie.id,
     image: serie.poster_path,
     overview: serie.overview,
   }
)


class SelectComponent extends Component {
  constructor(){
    super()
    this.api = new Api()
    this.state = {
      moviesList: [],
      seriesList : [],
      inputValue: '',
      genreList: [],
      genreSelected: [],
      movie: null,
      type: "",
      genreListLoading: false,
      genreSelectedLoading : false,
      movieLoading: false,
      popularMovies: []
    }
  }

  changeType = (e) => {
    const type = e.target.value

    this.setState({
      genreList: [],
      genreListLoading: true,
    })

   if (type === 'serie') {

    this.api.getSeriesByGenre().then( data =>
    //console.log(data)||
    this.setState ({
      genreList: data.genres,
      type : type,
      genreListLoading: false,
    })
  )
   } else {
     this.api.getMoviesByGenre().then( data =>
       //console.log(data)||
       this.setState ({
         genreList: data.genres,
           type : type,
           genreListLoading: false,
       })
    )
   }
  }



  changeGenre = (e) => {
    // const type = this.state.type
    const { type } = this.state
    const genre_id = e.target.value
    this.setState({
      genreSelectedLoading : true,
      genreSelected: [],
      // genreList: [],

    })
    if (type === 'pelicula') {
      this.api.getMovies(genre_id).then(data =>
        //console.log(data) ||
      this.setState ({
        genreSelected : data.results.map(mapearPelicula),
        genreSelectedLoading : false,
      }))
    } else {
    this.api.getSeries(genre_id).then(data =>
      //console.log(data) ||
    this.setState ({
      genreSelected : data.results.map(mapearSerie),
      genreSelectedLoading : false,
    })
)}

  }

  chooseMovie = (e)=>{
    const selection_id = e.target.value
    const { type } = this.state
    this.setState({
      movieLoading: true,
      movie: null,
    })
    if (type === 'pelicula') {
      this.api.getMovieDetail(selection_id).then(data => {
      //  console.log(data) ||
      this.setState({
          movie: mapearPelicula(data),
          movieLoading: false,
      })
      })
    } else{
      this.api.getSerieDetail(selection_id).then( data => {
        //console.log(data) ||
        this.setState({
          movie: mapearSerie(data),
          movieLoading: false,
        })
      })
    }

  }

  render(){
    const genre = this.state.genreList.map(genre =>
      <option key={genre} value={genre.id}> {genre.name} </option>
    )

    const moviesByGenre = this.state.genreSelected.map(movie =>
      <option key={movie} value={movie.id}>{movie.name}</option>
    )
    const movie = this.state.movie

    const genreListLoading = this.state.genreListLoading

    const genreSelectedLoading = this.state.genreSelectedLoading

    const movieLoading = this.state.movieLoading



    return (
      <div>
        <div className="col-lg-6 col-xs-12" style={{float:'left'}}>

          <Select defaultLabel="Seleccione una opción" handleOnChange={this.changeType} value={this.state.inputValue}>
            <option value='pelicula' >Peliculas</option>
            <option value='serie' >Series</option>
          </Select>
          {genreListLoading &&
          <div>
            Cargando...
          </div>}
          {genre.length  > 0 && (
            <Select defaultLabel="Seleccione un genero" handleOnChange={this.changeGenre} value={this.state.inputValue}>
              {genre}
            </Select>
          )}
          {genreSelectedLoading  ?
          <div>
            Cargando...
          </div>

          : moviesByGenre.length > 0 &&(
            <Select defaultLabel="Seleccione una pelicula" handleOnChange={this.chooseMovie} value={this.state.inputValue}>
              {moviesByGenre}
            </Select>
          )
          }
          {movieLoading ?
            <div>
              Cargando...
            </div>
            : movie && (
              <ListItem listItem={movie}/>

            )
            }
        </div>






      </div>

    );
  }

}

export default SelectComponent
