import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ImageModal from './ImageModal';
import { openAnImage, closeAnImage } from '../actions/index';

class ImageItem extends Component {
  constructor() {
    super();
    this.onCloseImage = this.onCloseImage.bind(this);
    this.onClickImage = this.onClickImage.bind(this);
    this.state = {
      selectedImage: false
    }
  }



  onClickImage(e) {
    console.log('ImageItem onClickImage');
    console.log(this.props);
    //console.log('this.state.openedImage before');
    //console.log(this.state.openedImage);

    this.setState({
      selectedImage: !this.state.selectedImage
    });

    //console.log('this.state.openedImage after');
    //console.log(this.state.openedImage);

    this.props.openImage();
  }

  onCloseImage () {

    this.setState({
      selectedImage: !this.state.selectedImage
    });

    this.props.closeImage();


  }

  render() {
    console.log('current Image');
    console.log(this);
    if (!this.state.selectedImage) {
      return (
        <React.Fragment>
          <div className='thumbnailWrapper'>
            <img 
              id={this.props.currentImage.id} 
              key={this.props.currentImage.id} 
              src={this.props.currentImage.previewURL} 
              alt={this.props.currentImage.tags} 
              className='img-thumbnail thumbnail'
              onClick={this.onClickImage} />
          </div>
        </React.Fragment>
      )
    }
    else if (this.state.selectedImage) {
      return (
        <React.Fragment>
          <div className='selectedWrapper'>
            <img 
              id={this.props.currentImage.id} 
              key={this.props.currentImage.id} 
              src={this.props.currentImage.webformatURL} 
              alt={this.props.currentImage.tags} 
              className='img-thumbnail'
              onClick={this.onCloseImage} />
          </div>
        </React.Fragment>
      )
    }
    else {
      return (
        <div>Loading</div>
      )
    }
  }
}

function mapStateToProps(state){
  //console.log('state');
  //console.log(state);
  return {
    //openedImage1: state.openedImage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openImage: openAnImage,
    closeImage: closeAnImage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageItem);