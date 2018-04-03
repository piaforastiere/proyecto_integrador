import React, { Component } from 'react';
import Api from './Api'

class MiLista extends Component {
constructor(){
  super();
  this.state = {
    myFav : [],
    loading : false
  }
}
addMovieToList = (e) => {
  const movieToAdd = this.state
  const movie = this.target.value
  console.log(movie);
  if (movieToAdd.indexOf(this.state.movie) === -1){
    this.setState({
      movieToAdd : [...movieToAdd,this.state.movie],
      count: this.state.count + 1
    })
  } else (
    alert('El elemento seleccionado ya se encuentra en tu lista')
  )
}

// viewMovieDetail = (e) => {
//   const selection_id = e.target.value
//   const { type } = this.state
//   this.setState({
//     movieLoading: true,
//     movie: null,
//   })
//   if (type === 'pelicula') {
//     this.api.getMovieDetail(selection_id).then(data => {
//     //  console.log(data) ||
//     this.setState({
//         movie: mapearPelicula(data),
//         movieLoading: false,
//     })
//     })
//   } else{
//     this.api.getSerieDetail(selection_id).then( data => {
//       //console.log(data) ||
//       this.setState({
//         movie: mapearSerie(data),
//         movieLoading: false,
//       })
//     })
//   }
//
// }
}




export default MiLista
