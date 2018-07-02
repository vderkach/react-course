//ImageList Component which will return our images

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openAnImage, closeAnImage } from '../actions/index';

class ImageList extends Component {
  render() {
    console.log('rerender ImageSelected');

    const {selectedImage} = this.props;

    return (
      <React.Fragment>
        {selectedImage ? (
          <div className='card'>
            <React.Fragment key={selectedImage.id} >
              <div className='selectedWrapper' >
                <img 
                  src={selectedImage.webformatURL} 
                  alt={selectedImage.tags} 
                  className='img-thumbnail thumbnail' />
              </div>
            </React.Fragment>
          </div>
        ) : (
          null
        )}
     
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    selectedImage: state.selectedImage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);