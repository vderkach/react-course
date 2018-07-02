//ImageList Component which will return our images

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openAnImage, closeAnImage } from '../actions/index';
import ImageSelected from './ImageSelected';

import { API_URL } from '../constants/'

class ImageList extends Component {
  render() {
    console.log('rerender ImageList');

    const {imageResults} = this.props;

    if (imageResults) {
      if (imageResults.length > 0) {
        return (
          <React.Fragment>
            <ImageSelected />

            <div>
              {imageResults.map(image => (
                <React.Fragment key={image.id} >
                  <div className='thumbnailWrapper' >
                    <img 
                      src={image.previewURL} 
                      alt={image.tags} 
                      className='img-thumbnail thumbnail'
                      onClick={() => this.props.openAnImage(image)} />
                  </div>
                </React.Fragment>
              ))}
            </div>
          
          </React.Fragment>
        )
      }
    }
    return (<div>No images loaded...</div>)
  }
}

function mapStateToProps(state){
  return {
    url: state.url ? state.url : API_URL
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openAnImage: openAnImage,
    closeAnImage: closeAnImage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);