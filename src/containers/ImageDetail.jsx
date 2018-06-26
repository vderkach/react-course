import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageDetail extends Component {

  render() {
    console.log("inside details");
    console.log(this);

    if (!this.props.openedDetail) {
      //console.log(openedImageDetail);
      return(
        <div>...</div>
      )
    }

    return(
        <div>loaded {this.props.openedDetail.id}</div>
      )
  }
}

function mapStateToProps(state) {
  return {
    openedDetail : state.openedImage
  }
}

export default connect(mapStateToProps)(ImageDetail)