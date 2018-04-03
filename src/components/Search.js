import React, { Component } from 'react';
import Api from '../Api'
import { Link } from 'react-router-dom'

class SearchBox extends Component {
  constructor() {
    super();
    this.api = new Api()
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
    // const enter = e.which || e.keyCode
    const search = this.state.search
    //PASAR SEARCH COMO QUERY
    // if (enter === 13) {
      this.api.multiSearch(search).then( data =>
      console.log(data.results)||
      this.setState ({
        multiSearch: data.results,
        searchLoading: false
      })
    )
    // }
  }
  handleSubmit = e => {
    e.preventDefault()
  }



  render() {
    const {multiSearch}  = this.state


    return(
      <div className="row">
        <form  onSubmit={this.handleSubmit} className="form-inline my-2 my-md-0 dropdown">
          <input onKeyUp={this.updateSearch} onChange={this.handleOnChange} type="text"  placeholder="Buscar Película o Serie" className="form-control" value={this.state.search}/>

          {multiSearch.length > 0 && (
            <div className="dropdown-menu show">
              {multiSearch.map(result =>
              <Link to={(result.media_type === 'movie' ? '/peliculas' : '/series')+'/'+result.id} className="dropdown-item">{result.name || result.title || result.original_name || result.original_title}</Link>
            )}
            </div>
          )}
        </form>
      </div>


    )
  }


}



export default SearchBox;
