import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ImageModal from './ImageModal';
import { openAnImage } from '../actions/index';

class ImageItem extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      previewURL: '',
      tags: '',
      webformatURL: '',
      imageSelected: false
    }
  }

  fillImageData() {
    
  }

  onClickImage(e) {
    this.setState({
      id: this.props.imageData.id,
      previewURL:this.props.imageData.src,
      tags: this.props.imageData.alt,
      webformatURL: this.props.imageData.webformatURL,
      imageSelected: true
    });

    console.log('this.props');
    console.log(this.props);

    this.props.openImage(this.props.imageData);

    console.log('you clicked image');


   // return <ImageModal key={e.target.id} />
  }

  onCloseImage () {
    this.setState({
      imageSelected: false
    })
  }

  render() {
    //console.log(this);
    if (!this.state.imageSelected) {
      return (
        <React.Fragment>
          <div className='thumbnailWrapper'>
            <img 
              id={this.props.imageData.id} 
              key={this.props.imageData.id} 
              src={this.props.imageData.previewURL} 
              alt={this.props.imageData.tags} 
              className='img-thumbnail thumbnail'
              onClick={this.onClickImage.bind(this)} />
          </div>
        </React.Fragment>
      )
    }
    else if (this.state.imageSelected) {
      return (
        <React.Fragment>
          <div className='selectedWrapper'>
            <img 
              id={this.state.id} 
              key={this.state.id} 
              src={this.state.webformatURL} 
              alt={this.state.tags} 
              className='img-thumbnail'
              onClick={this.onCloseImage.bind(this)} />
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
  return {
    openedImage: state.openedImage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openImage: openAnImage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageItem);