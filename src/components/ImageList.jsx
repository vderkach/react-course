import React, { Component } from 'react';
import ImageItem from './ImageItem';

//ImageList Component which will return our images

class ImageList extends Component {
  constructor() {
    super()
  }

  renderImages() {
    return this.props.imageResults.map(images => {
      return <ImageItem key={images.id} imageData={images} />
    })
  }

  render() {
    if (this.props.imageResults.length > 0) {
      return (
        <div>
          {this.renderImages()}
        </div>
      )
    }
    return (<div>Nothing...</div>)
  }
}

export default ImageList;