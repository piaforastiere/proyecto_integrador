import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom';


const inicialState = {
  count : 0,
  listMov : {
    movies : [
      //aca tengo que ponerle el ID de la pelicula que quiero agregar
      //COMO CAPTURO ESE ID?????
      {movieId : 0}
    ]
  },
  listSer : {
    series: []
  }
}
const counterReducer = (state = inicialState.count, action) => {
  switch (action.type) {
    case 'ADD_TO_COUNT':
    return state + 1
    case 'DELETE_TO_COUNT':
    return state - 1

    default:
      return state

  }
}

// const listMovReducer = (state = inicialState.counter, action) => {
//   switch (action.type) {
//     case 'ADD_TO_FAV':
//     return { ...state,
//       listMov : [
//         ...state.movies, {
//           action.movieId
//         }
//       ]
//     }
//     case 'DELETE_TO_FAV':
//     const listMovIndex = state.todos.findIndex(t => t.movieId === movieId)
//     return { ...state,
//       listMov : [
//         ...state.listMov.slice(0, listMovIndex),
//         ...state.listMov
//       ]
//     }
//
//     default:
//       return state
//
//   }
// }

const store = global.store = createStore(counterReducer)



ReactDOM.render(
<BrowserRouter>
  <Provider store = {store}>
    <App />
</Provider>
</BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
