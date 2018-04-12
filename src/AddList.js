import React, { Component } from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from './components/Button'

const FavList = ({listFavMovies, onClick, onRemoveFav}) =>
<section>
  <h2>
    Mis Peliculas favoritas
  </h2>
  <Button onClick={ e => {
    e.preventDefault()
    onClick(uuid(), count.value, target.value)
  }} title='Agregar'/>
  <ul>
    {listFavMovies.map(movie =>
      <li key={movie.id}>
        {movie.name}
        <button onClick= {e => onRemoveFav(movie.id)}>Eliminar</button>
      </li>

    )}
  </ul>


</section>

FavList.propTypes = {
  onRemoveFav : PropTypes.func.isRequired
}

const mapStateToProps = state =>{
  return{
    listFavMovies: state.listFavMovies
  }
}

const addFav = (id ) => ({
  type:'ADD_FAV',
  id
})

const removeFav = (id ) => ({
  type:'REMOVE_FAV',
  id
})

const mapDispatchToProps = {
  onClick: addFav,
  onRemoveFav : removeFav
}

export default connect(mapDispatchToProps, mapStateToProps)(FavList)
