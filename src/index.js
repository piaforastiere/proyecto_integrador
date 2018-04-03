import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'



const initialState = {
  listFavMovies : [{
      id: 1,
      favMovie : [],
      count : 0
  }]
}

const reducer = ( state = inicialState, action ) => {
  switch (action.type) {
    case 'ADD_FAV':
    return {
      ...state,
      listFavMovies : [
        ...state.listFavMovies, {
          id: action.id,
          favMovie: action.value,
          count + 1
        }
      ]
    },
    case 'REMOVE_FAV':
    const favIndex = state.listFavMovies.findIndex (
      f => f.id === action.id
    )
    return {
      ...state,
      listFavMovies : [
        ...state.listFavMovies.slice(0,favIndex),
        ...state.listFavMovies.slice(favIndex + 1)
      ]
    }
    default:
    return state
  }
}




const store =  global.store = createStore(reducer)

store.dispatch({
  type: 'FETCH_REQUEST'
})
fetch('http://www.google.com')
.then(res => {
  if (res.status !== 200) {
    throw new Error('Lo sentimos, pero su cambio no se ha podido aplicar')
  } return res.json()
})
.then (json =>{
  store.dispatch({
    type: 'FETCH_SUCCESS'
  })
})
.catch ( err => {
  store.dispatch({
    type: 'FETCH_FAILURE'
  })
})

ReactDOM.render(
  <Provider  store={store}>
  <BrowserRouter>

    <App />
  </BrowserRouter>
</Provider>
  , document.getElementById('root'));
registerServiceWorker();
