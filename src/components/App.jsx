import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ImageList from './ImageList';

import { searchClicked, fetchAPI, updateSearchText } from '../actions/index';
import { API_URL } from '../constants/';

class App extends Component {
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    e.preventDefault();
    this.props.fetchAPI(this.props.url);
  }

  render() {
    const {url} = this.props;

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
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="radio" name="options" id="option1" defaultChecked></input>
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" ></input>
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option3" ></input>
            </label>
          </div>
        </form>

        <div className='card'>
          <div className='card-body'>
            <ImageList imageResults={this.props.images}/>
          </div>
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