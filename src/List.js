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
}




export default MiLista
