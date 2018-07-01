import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ImageList from '../containers/ImageList';
import ImageDetail from '../containers/ImageDetail';

import { searchClicked, fetchAPI, updateSearchText } from '../actions/index';

const API_URL = 'https://pixabay.com/api/?key=9335051-03222e3f37313e655b505bd68&q=';

class App extends Component {
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    e.preventDefault();
    this.props.fetchAPI(this.props.url);
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
            <input type="text" onChange={ this.props.updateSearchText.bind(this) } className="form-control" placeholder="ex. ocean" aria-label="Search" aria-describedby="Search"></input>
            <input type="button" onClick={ this.onButtonClick } value="Search" className = 'btn btn-success'></input>
          </div>
        </form>

        <div className='card'>
          <div className='card-body'>
            <ImageList imageResults={this.props.images}/>
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
    images: state.images,
    url: state.url ? state.url : API_URL
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAPI: fetchAPI,
    updateSearchText: updateSearchText
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);