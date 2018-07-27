//ImageSelected Component which will display selected Image

import React, { Component } from 'react';

class ImageSelected extends Component {
  render() {
    const {selectedImage} = this.props;
    if (!selectedImage) {
      return null;
    }
    return (
      <div className='selectedWrapper'>
        <img 
          src={selectedImage.webformatURL} 
          alt={selectedImage.tags} 
          className='img-thumbnail thumbnail' />
      </div>
    )
  }
}

export default ImageSelected;