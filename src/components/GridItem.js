import React, { Component } from 'react';
import ItemsSection from './ItemSection.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button'
import { Link } from 'react-router-dom'

import MiLista from '../List'
import AddToFav from '../AddList'

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


const GridItem = ({movieGrid, type}) =>(





      <div key={movieGrid.id} className="col-md-2 box">
        <div className="grid-item box-content">
          <Link to={(type === 'serie' ? '/series' : '/peliculas')+'/'+movieGrid.id}>
          <div>
            {(movieGrid.poster_path === null) ?
            <img className="img-fluid" src='https://www.dirtboundoffroad.com/blank-transmission-bezel-switch-panel-contura-97-01-jeep-cherokee-xj.html'/>
          : <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500'+ movieGrid.poster_path}/>}
          </div>
          </Link>
          <div className="grid-item-body">
            <GridItemTitle>{movieGrid.title || movieGrid.original_name}</GridItemTitle>
            <GridItemDate>{movieGrid.release_date || movieGrid.first_air_date}</GridItemDate>
            <div className="grid-item-actions">

              <AddToFav value={movieGrid.id}/>
              <Link to={(type === 'serie' ? '/series' : '/peliculas')+'/'+movieGrid.id}>
              <Button buttonType='primary iconBtn' icon='fas fa-eye' onClick={this.viewMovieDetail} value={movieGrid.id} />
            </Link>
            </div>
          </div>
        </div>
      </div>




)

export default GridItem;
