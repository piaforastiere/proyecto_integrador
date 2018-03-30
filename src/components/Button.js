import React, { Component } from 'react';

const Button = ({title, icon, type}) =>(
  <button className={`btn btn-${type}`}> <i className={icon}/> {title} </button>
)

Button.defaultProps = {
  icon: null,
};

export default Button;
