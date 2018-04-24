import React, { Component } from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from './Button'

import GridItem from './GridItem'
import ItemSection from './ItemSection'
import AddList from '../AddList'

const List = ({addToList}) => (
  <div>
    {addToList.map(favourite =>
    <ItemSection itemsSection={favourite} displayType={'grid'} key={favourite.id}/>
    
  )}

  </div>

)

export default List
