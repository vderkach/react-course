import React, { Component } from 'react';

import ImageList from '../containers/ImageList';
import Pagination from '../containers/Pagination';
import Spinner from '../containers/Spinner';
import ImageSelected from '../containers/ImageSelected';

class App extends Component {
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    e.preventDefault();
    this.props.reset();
    this.props.fetchAPI();
  }

  render() {
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
          <Pagination />
        </form>

        <Spinner />

        <ImageSelected />

        <ImageList />

      </div>
    )
  }
}

export default App;