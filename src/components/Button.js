import React, { Component } from 'react';




const Button = ({title, icon, type, buttonType, value, onClick}) =>(
  <button onClick={onClick} className={`btn btn-${buttonType}`} type={type} value={value}> <i className={icon}/> {title} </button>
)

Button.defaultProps = {
  icon: null,
};

export default Button;
