
const initialState = {

      count : 0,
      loading: false,
      error: null,
      movies : [
        {movieId: '',
        movieType : '',}
      ]
  }


export default ( state = initialState, action ) => {
  switch (action.type) {
    case 'ADD_FAV':
    return {
      ...state,
      loading:false,
      movies : [
        ...state.movies, {
          movieId:action.movieId,
          movieType:action.movieType
        }
      ]
        }

    case 'REMOVE_FAV':
      const movieIndex = state.movies.findIndex(movie => movie.id === action.id)
      return {
        ...state,
        movies : [
          ...state.movies.slice(0, movieIndex),
          ...state.movies.slice(movieIndex + 1)
        ]
      }
    default:
    return state
  }}
