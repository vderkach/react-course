import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ImageSelected from '../components/ImageSelected';

function mapStateToProps(state){
  return {
    selectedImage: state.reducer.selectedImage
  }
}

export default connect(mapStateToProps)(ImageSelected);