import React from 'react'
import { connect } from 'react-redux'
import * as actionCreator from './actionCreator'

const Counter = ({ count, increment, decrement}) =>
<div>
  <h1>{count}</h1>
  <button onClick={ increment}>
    Incrementar
  </button>
  <button onClick={decrement}>
    Decrementar
  </button>
</div>

const mapStateToProps = state => ({ count : state})

export default connect(mapStateToProps, actionCreator)(Counter)
