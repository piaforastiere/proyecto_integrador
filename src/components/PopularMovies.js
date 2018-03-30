import React, { Component } from 'react';
import Api from '../Api'
// import ItemsSection from './ItemsSection.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button'
import GridItem from './GridItem'


const CardI = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 900px) {
  width: 100%;
    margin-bottom: 20px;
    }
  @media (min-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
  }`;
const Card = styled.div`
margin-bottom: 20px;
margin-right: 2%;
float: left;
background-color: #dcd8d7;
padding: 10px;
border-radius: 8px;
display: inline-block;
flex-wrap: wrap;
justify-content: space-between;
width: 48%;
`;
  const CardImage = styled.div`
    width: 30%;
    float: left;
  @media (min-width: 900px) {
  width: 30%;
}
img{
  border-style: none;
  box-shadow: 0 0 8px #333;
  width: 100%;
}
`;
const CardData = styled.div`
  width: 70%;
  float: right;
h3 {
  font-size: 1.8em;
}
p {
  font-size: 1em;
  line-height: 1.4;
}
@media (min-width: 900px) {
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (min-width: 900px){
h3 {
    margin-top: 0;
}
}
`;
class PopularMovies extends Component{
  constructor(){
    super()
    this.api = new Api()
    this.state = {
      popularMovies : [],
      loading: false
    }
  }
componentDidMount() {
  this.setState({
    isLoading: true
  })
   this.api.getPopularMovies().then( data =>
   //console.log(data)||
   this.setState ({
     popularMovies: data.results,

   })
 )
  }

      render() {

        const popularMovies = this.state.popularMovies

          return (

          <div>
            <GridItem moviesGrid={popularMovies}/>

          </div>

        )
      }
}
export default PopularMovies;
