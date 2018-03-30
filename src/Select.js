import React, { Component } from 'react';



const Select = ({children, inputValue, handleOnChange, defaultLabel}) => (
  <select onChange={handleOnChange} value={inputValue} className="custom-select selectItem">
      {defaultLabel && <option>{defaultLabel}</option>}
      {children}
  </select>
)


export default Select;
