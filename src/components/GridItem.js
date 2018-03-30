import React, { Component } from 'react';
import ItemsSection from './ItemSection.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button'

import MiLista from '../List'

const GridItemTitle = styled.span`
color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;
const GridItemDate = styled.span`
  color: #ffffff;
`;



// viewMovieDetail = (e) => {
//   const selection_id = e.target.value
//   const { type } = this.state
//   this.setState({
//     movieLoading: true,
//     movie: null,
//   })
//   if (type === 'pelicula') {
//     this.api.getMovieDetail(selection_id).then(data => {
//     //  console.log(data) ||
//     this.setState({
//         movie: mapearPelicula(data),
//         movieLoading: false,
//     })
//     })
//   } else{
//     this.api.getSerieDetail(selection_id).then( data => {
//       //console.log(data) ||
//       this.setState({
//         movie: mapearSerie(data),
//         movieLoading: false,
//       })
//     })
//   }
//
// }





const GridItem = ({moviesGrid}) =>(
  <section className="items-section container">
  <div className="items-section-body">
  <div className="row">


      {moviesGrid.map((movie, i) => (

      <div className="col-md-2">
        <div className="grid-item">
          <div>
          <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path}/>
          </div>
          <div className="grid-item-body">
            <GridItemTitle>{movie.title || movie.original_name}</GridItemTitle>
            <GridItemDate>{movie.release_date || movie.first_air_date}</GridItemDate>
            <div className="grid-item-actions">

              <Button buttonType='primary' icon='mdi mdi-delete' onClick={this.addMovieToList} value={movie}/>
              <Button buttonType='primary' icon='mdi mdi-eye-outline' onClick={this.viewMovieDetail} value={movie.id} />

            </div>
          </div>
        </div>
      </div>
      )
    )}



  </div>
  </div>

  </section>
)

export default GridItem;
