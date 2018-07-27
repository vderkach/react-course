//Pagination Component which will return our images

import React, { Component } from 'react';

class Pagination extends Component {
  constructor() {
    super();
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  prevPage() {
    this.props.prevPageClick();
    this.props.fetchAPI();
  }

  nextPage() {
    this.props.nextPageClick();
    this.props.fetchAPI();
  }

  render() {
    return (
      <ul className="pagination">
        <li className="page-item"><a className="page-link link-styles" onClick={this.prevPage} href="#">Previous</a></li>
        <li className="page-item"><a className="page-link link-styles" onClick={this.nextPage} href="#">Next</a></li>
      </ul>
    )
  }
}

export default Pagination;