import React, { Component } from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from './components/Button'

const FavList = ({listFavMovies, onClick, onRemoveTodo}) =>
<section>
  <h2>
    Mis Peliculas favoritas
  </h2>
  <Button onClick={ e => {
    e.preventDefault()
    onClick(uuid(), target.value)
    target.value = []
  }} title='Agregar'/>
  

</section>
