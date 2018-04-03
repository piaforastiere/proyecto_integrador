import React, { Component } from 'react';
import Select from './Select'
import Api from './Api'
import Button from './components/Button'



class SelectBySort {
  constructor() {
    super()
    this.api = new Api()
    this.state = {
      sort_by: [],
      release_date : [],
      genres : [],
      loading : true
    }
  }

  componentDidMount () {
    this.setState = ({
      loading: true
    })
  
  }





  render() {
    return(

    )
  }
}
