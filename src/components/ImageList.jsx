//ImageList Component which will return our images
import React, { Component } from 'react';

class ImageList extends Component {

  render() {
    const {imagesResults, openAnImage} = this.props;

    if (imagesResults) {
      if (imagesResults.length > 0) {
        if (this.props.isFetching) {
          return null;
        }
        return (
          <div className='card-body'>
            { 
              imagesResults.map(image => (
                <div className='thumbnailWrapper' key={image.id}>
                  <img 
                    src={image.previewURL} 
                    alt={image.tags} 
                    className='img-thumbnail thumbnail'
                    onClick={() => openAnImage(image)} />
                </div>
              ))
            }
          </div>
        )
      }
    }
    return (<div>No images loaded...</div>)
  }
}

export default ImageList;