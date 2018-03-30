import React, { Component } from 'react';
import ItemsSection from './ItemSection.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const GridItemTitle = styled.span`
color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;
const GridItemDate = styled.span`
  color: #ffffff;
`;


const GridItem = ({moviesGrid}) =>(
  <section className="items-section container">
  <div className="items-section-body">
  <div className="row">

      {moviesGrid.map((movie, i) => (
      <div className="col-md-2">
        <div className="grid-item">
          <div>
          <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path
}/>
          </div>
          <div className="grid-item-body">
            <GridItemTitle>{movie.title}</GridItemTitle>
            <GridItemDate>{movie.release_date}</GridItemDate>
            <div className="grid-item-actions">
              <a href="peliculas-list.html" className="btn btn-primary" aria-label="Profile">
                <i className="mdi mdi-delete" aria-hidden="true"></i>
              </a>
              <a href="peliculas-list.html" className="btn btn-primary" aria-label="Profile">
                <i className="mdi mdi-eye-outline" aria-hidden="true"></i>
              </a>
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
