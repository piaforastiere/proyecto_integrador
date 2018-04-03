import React, { Component } from 'react';
import axios from 'axios';


const API_KEY = '53dd3cbadc39f8a2bd32277848dbeee0'



class Api extends Component {
  constructor() {
    super()
    this.axios = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params : {
        api_key : API_KEY,
        language : 'es-AR'
      },
    })
  }

  getPopularMovies = (page = 1) => (
      this.axios.get(`/movie/popular`, {
        params: {page: page}
      }).then(res => res.data)
  )

  getPopularSeries = (page = 1) => (
      this.axios.get(`/tv/popular`, {
        params: {page: page}
      }).then(res => res.data.results)
  )

  getMovies = (genre_id) => (
    this.axios.get('/discover/movie', {
      params: {with_genres: genre_id}
    }).then(res => res.data)
  )

  getSeries = (genre_id) =>(
    this.axios.get(`/discover/tv`, {
      params: {with_genres:genre_id}
    }).then(res => res.data)
  )

  getMoviesByGenre = (page = 1) => (
    this.axios.get(`/genre/movie/list`, {
      params: {page:page}
    }).then(res => res.data)
  )

  getSeriesByGenre = (page = 1) => (
    this.axios.get(`/genre/tv/list`, {
      params: {page:page}
    }).then(res => res.data)
  )

  getMovieDetail = (selection_id) => (
    this.axios.get(`/movie/${selection_id}`, {
      params: {movie_id: selection_id}
    }).then(res => res.data)
  )

  getSerieDetail = (selection_id) => (
    this.axios.get(`/tv/${selection_id}`, {
      params: {tv_id: selection_id}
    }).then(res => res.data)
  )

  multiSearch = (query, page = 1) => (
    this.axios.get(`/search/multi`,{
      params: {page:page, query}
    }).then(res => res.data)
    )

  getList = (list_id) => (
    this.axios.get(`/list/{list_id}`,{
      params: {list_id:list_id}
    }).then(res => res.data)
  )
}





export default Api
