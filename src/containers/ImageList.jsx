import React, { Component } from 'react';
import ImageItem from '../components/ImageItem';
import { connect } from 'react-redux';

//ImageList Component which will return our images

class ImageList extends Component {
  constructor() {
    super()
  }

  renderImages() {
    return this.props.imagesRecieved.map(images => {
      return <ImageItem key={images.id} imageData={images} />
    })
  }

  render() {
    if (this.props.imagesRecieved.length > 0) {
      return (
        <div>
          {this.renderImages()}
        </div>
      )
    }
    return (<div>Nothing...</div>)
  }
}

function mapStateToProps(state){
  return {
    imagesRecieved: state.images
  }
}

export default connect(mapStateToProps)(ImageList);