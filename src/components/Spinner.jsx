//Pagination Component which will return our images

import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    if (this.props.isFetching) {
      console.log('started');
      return (
        <div className="loader"></div>
      );
    }
    else return null
  }
}

export default Spinner;