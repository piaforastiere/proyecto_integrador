import React, { Component } from 'react';
import Api from '../Api'


//capturo lo que ponen en el input y hago un filter

// handleOnChange = e =>{
//   const searchValue = e.target
//   this.setState({
//     data : searchValue,
//     loading: true
//   })
//   if (serie.name || pelicula.name  === data) {
//     //
//   } else {
//     //
//   }
// }

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      multiSearch : [],
      searchLoading:false,
    }
  }

  handleOnChange = (e) => {

    this.setState({
      search: e.target.value,
      searchLoading:true
    })
  }

  //capturo lo que pongo en el input y se lo paso como
  //query... y se lo paso como URI???

  updateSearch = (e) => {
    const enter = e.which || e.keyCode
    const search = e.target.value
    //PASAR SEARCH COMO QUERY
    if (enter === 13) {
      this.api.multiSearch(search).then( data =>
      console.log(data)||
      this.setState ({
        multiSearch: data,
        searchLoading: false
      })
    )
    }
  }



  render() {

    return(
      <div className="row">
        <form  className="form-inline my-2 my-md-0">
          <input onKeyUp={this.updateSearch} onChange={this.handleOnChange} type="text"  placeholder="Buscar Película o Serie" className="form-control" value={this.state.search}/>
          {/* <button type="submit" className="form-control" aria-label="Search">
              <i className="fas fa-search" style={{color:'#757575'}}></i>
          </button> */}
        </form>
      </div>


    )
  }


}



export default SearchBox;
