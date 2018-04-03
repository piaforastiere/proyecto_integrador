import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridItem from './GridItem.js';
import ListItem from './ListItem.js';




const ItemSection =({itemsSection, displayType, loading, type}) => {


  return(
    <div>

    {(displayType === 'list') ? <ListItem listItem={itemsSection} type={type}/>:<GridItem movieGrid={itemsSection} type={type}/>}
  </div>
  )
}

ItemSection.PropTypes ={

  type : PropTypes.oneOf(['list', 'grid']),
}

export default ItemSection;
