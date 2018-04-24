import React, { Component } from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from './components/Button'

import GridItem from './components/GridItem'
import List from './components/List'

class AddToFav extends Component{

constructor(){
  super()
  this.state = {
    addToList : [],
    movieGrid: [],
    counter : 0

  }
}

addMovieToList = (e) => {
  const selection_id = e.target.value
  this.setState({
    addToList : selection_id,
    counter : this.state.counter + 1
  })
  console.log(this.state.addToList);
  console.log(this.state.counter);
}


render(){

  const addToList = this.state.addToList
  const counter = this.state.counter

  return(
  <div>
    <Button buttonType='primary iconBtn' icon='far fa-heart' onClick={this.addMovieToList} value={this.state.movieGrid} />
    <List list={addToList} />
    <div>
      {this.state.counter}
    </div>
  </div>

)
}

}






export default AddToFav
