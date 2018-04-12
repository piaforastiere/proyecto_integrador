import React, { Component } from 'react';
import styled from 'styled-components';
import Select from '../Select'

const DisplaySectionDiv = styled.div`
  margin-top: 20px;
  width: 85%;
  text-align: right;
  margin-left: 4%;

@media (max-width: 500px) {
margin-left: 14%!important;
}
`;

class DisplaySection extends Component {
  constructor() {
    super()
    this.state = {
      display: '',
      loading: false
    }
  }

  chooseDisplay = (e) =>{
    const displayOption = e.target.value
    console.log(displayOption);
    this.setState({
      display: displayOption,
      loading: true
    })

    if (displayOption === 'grid') {
      this.setState({
        display : displayOption,
        loading: false
      })
    } else {
      this.setState({
        display : displayOption,
        loading: false
      })
    }
  }
  render(){

    const { display } = this.state.display

    return(
      <DisplaySectionDiv >
          <div className="row">
            <div className="col-lg-2">
              <h5>Ordenar por:</h5>
            </div>
            <div className="col-lg-2">
              <Select defaultLabel="Año" handleOnChange={this.changeType} value={this.state.inputValue}>
                <option value='pelicula' ></option>
                <option value='serie' >Series</option>
              </Select>
            </div>
            <div className="col-lg-2">
              <Select defaultLabel="Genero" handleOnChange={this.changeType} value={this.state.inputValue}>
                <option value='pelicula' >Genero</option>
                <option value='serie' >Series</option>
              </Select>
            </div>
            <div className="col-lg-6">
              <button type="button" className="btn btn-light mdi mdi-view-grid" onClick={this.chooseDisplay} value='grid' aria-label="Left Align">

              </button>
              <button type="button" className="btn btn-light mdi mdi-view-list" onClick={this.chooseDisplay} value='list' aria-label="Left Align">

              </button>
            </div>
          </div>

        </DisplaySectionDiv>


    )
  }

}

export default DisplaySection;
