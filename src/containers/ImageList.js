import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openAnImage, closeAnImage } from '../actions/index';
import ImageList from '../components/ImageList';

function mapStateToProps(state){
  return {
    imagesResults: state.reducer.images
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openAnImage,
    closeAnImage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);