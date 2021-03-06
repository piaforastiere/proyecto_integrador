import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styled from 'styled-components';

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
width: 44%;
`;
  const CardImage = styled.img`
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
const CardDataText = styled.p`
  text-align: center;
  font-size: 12px;
`;



const ListItem = ({listItem}) => (



    <Card>
         <CardImage src={'https://image.tmdb.org/t/p/w500'+ listItem.poster_path}/>
      <CardData>
        <h5 className="card-title">{listItem.title || listItem.original_name}</h5>
        <CardDataText>{listItem.overview}</CardDataText>
        <Button title="Agregar a mi lista" type="primary" icon="far fa-heart"/>
      </CardData>
     </Card>





)

ListItem.propTypes = {
  listItem : PropTypes.arrayOf(
    PropTypes.shape({
      name:PropTypes.string.isRequired,
    })
  )
}

export default ListItem;
