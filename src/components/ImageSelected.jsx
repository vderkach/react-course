//ImageList Component which will return our images

import React, { Component } from 'react';

class ImageSelected extends Component {
  render() {
    const {selectedImage} = this.props;

    return (
      <React.Fragment>
        {selectedImage ? (
            <div className='selectedWrapper'>
              <img 
                src={selectedImage.webformatURL} 
                alt={selectedImage.tags} 
                className='img-thumbnail thumbnail' />
            </div>
        ) : (
          null
        )}
     
      </React.Fragment>
    )
  }
}

export default ImageSelected;