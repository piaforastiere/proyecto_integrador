import React, { Component } from 'react';
import ItemsSection from './ItemSection.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button'
import { Link } from 'react-router-dom'

import MiLista from '../List'

const GridItemTitle = styled.span`
color: #ffffff;
  font-size: 19px;
  line-height: 19px;
  font-weight: regular;
  margin-bottom: 20px;
`;
const GridItemDate = styled.span`
  color: #ffffff;
  font-size: 15px;
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





const GridItem = ({movieGrid, type}) =>(



<Link to={(type === 'movie' ? '/peliculas' : '/series')+'/'+movieGrid.id}>
      <div key={movieGrid.id} className="col-md-2 box">
        <div className="grid-item box-content">
          <div>
            {(movieGrid.poster_path === null) ?
            <img className="img-fluid" src='https://www.dirtboundoffroad.com/blank-transmission-bezel-switch-panel-contura-97-01-jeep-cherokee-xj.html'/>
          : <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500'+ movieGrid.poster_path}/>}
          </div>
          <div className="grid-item-body">
            <GridItemTitle>{movieGrid.title || movieGrid.original_name}</GridItemTitle>
            <GridItemDate>{movieGrid.release_date || movieGrid.first_air_date}</GridItemDate>
            <div className="grid-item-actions">

              <Button buttonType='primary iconBtn' icon='far fa-heart' onClick={this.addMovieToList} value={movieGrid}/>
              <Button buttonType='primary iconBtn' icon='fas fa-eye' onClick={this.viewMovieDetail} value={movieGrid.id} />

            </div>
          </div>
        </div>
      </div>
</Link>



)

export default GridItem;
