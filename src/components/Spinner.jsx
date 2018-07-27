//Spinner Component

import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    if (this.props.isFetching) {
      return (
        <React.Fragment>
          <div className="spinnerBackground"></div>
          <div className="loader"></div>
        </React.Fragment>
      );
    }
    else return null
  }
}

export default Spinner;