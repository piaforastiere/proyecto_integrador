import React from 'react'
import {connect} from 'react-redux'
import Button from './Button'

const Counter = ({count, onIncrement, onDecrement}) =>
<div>
  <h1>{count}</h1>
  <Button buttonType='primary iconBtn' icon='far fa-heart' onClick={onIncrement}/>
  <Button buttonType='primary iconBtn' icon='fas fa-trash' onClick={onDecrement}/>
</div>

export default connect(
  state => {
    return {
      count: state
    }
  },
  dispatch => {
    return {
      onIncrement :() => dispatch({ type: 'INCREMENT'}),
      onDecrement :() => dispatch({ type: 'DECREMENT'})
    }
  }
)(Counter)
