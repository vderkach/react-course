//ImageList Component which will return our images
import React, { Component } from 'react';

import ImageSelected from '../containers/ImageSelected';

class ImageList extends Component {

  render() {
    const {imagesResults, openAnImage} = this.props;

    if (imagesResults) {
      if (imagesResults.length > 0) {
        return (
          <div className='card-body'>
            <ImageSelected />

            <div>
              {imagesResults.map(image => (
                <div className='thumbnailWrapper' key={image.id}>
                  <img 
                    src={image.previewURL} 
                    alt={image.tags} 
                    className='img-thumbnail thumbnail'
                    onClick={() => openAnImage(image)} />
                </div>
              ))}
            </div>
          
          </div>
        )
      }
    }
    return (<div>No images loaded...</div>)
  }
}

export default ImageList;