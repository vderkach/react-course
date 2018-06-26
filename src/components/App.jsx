import React, { Component } from 'react';

import ImageList from '../containers/ImageList';
import ImageDetail from '../containers/ImageDetail';
import { connect } from 'react-redux';

import { fetchAPI } from '../reducers/searchClickedReducer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      type: 'initial state',
      imageList: [],
      searchText: '',
      test: ''
    }
  }

  handleChange(e) {
    this.setState({searchText: e.target.value});
  }

  onButtonClick(e) {
    e.preventDefault();

    const API_URL = 'https://pixabay.com/api/?key=9335051-03222e3f37313e655b505bd68&q=';
    const requestText = encodeURIComponent(this.state.searchText);

    //this.setState({test: })

    fetch(API_URL + requestText)
      .then(result => {
        return result.json()
      }).then(data => {
        this.setState({imageList: data.hits, total: data.total})
      }).catch(error => console.log(error))

  }

  render () {

    return (
      <div className='container app-container'>
        <form>
          <h4>Search images!</h4>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Search: </span>
            </div>
            <input type="text" onChange={ this.handleChange.bind(this) } className="form-control" placeholder="ex. ocean" aria-label="Search" aria-describedby="Search"></input>
            <input type="button" onClick={ this.onButtonClick.bind(this) } value="Search" className = 'btn btn-success'></input>
          </div>
        </form>

        <div className='card'>
          <div className='card-body'>
            <ImageList imageResults={this.state.imageList} imageCount ={this.state.total}/>
          </div>
        </div>
        <div className='card'>
          <ImageDetail />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    searchClicked: state.searchClicked
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAPI: fetchAPI
  }, dispatch)
}

export default connect(mapStateToProps)(App);