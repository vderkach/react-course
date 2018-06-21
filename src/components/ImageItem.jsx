import React, {Component} from 'react';
import ImageModal from './ImageModal';

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

   // return <ImageModal key={e.target.id} />
  }

  onCloseImage () {
    this.setState({
      imageSelected: false
    })
  }

  render() {
    console.log(this.state);
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

export default ImageItem;