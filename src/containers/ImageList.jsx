import React, { Component } from 'react';
import ImageItem from '../components/ImageItem';
import { connect } from 'react-redux';

const API_URL = 'https://pixabay.com/api/?key=9335051-03222e3f37313e655b505bd68&q=';
//ImageList Component which will return our images

class ImageList extends Component {
  constructor() {
    super()
  }

  renderImages() {
    return this.props.imageResults.map(images => {
      return <ImageItem key={images.id} currentImage={images} />
    })
  }

  render() {
    console.log('\n\nImageList rerender');
    console.log(this.props);
    if ((this.props.imageResults)&&(this.props.imageResults!==null)) {
      if (this.props.imageResults.length > 0) {
        return (
          <div>
            {this.renderImages()}
          </div>
        )
      }
    }
    return (<div>Nothing...</div>)
  }
}

function mapStateToProps(state){
  return {
    openedImage: false,
    url: state.url ? state.url : API_URL
  }
}

export default connect(mapStateToProps)(ImageList);